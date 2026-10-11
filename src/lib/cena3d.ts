/*
 * Cena 3D desenhada em canvas: placas translúcidas com perspectiva,
 * uma rede de pontos e trilhas de circuito. Usada no topo e, bem discreta, nas seções.
 */

export type Vec3 = [number, number, number];
export type Rgb = [number, number, number];

interface Placa {
  centro: Vec3;
  largura: number;
  altura: number;
  rot: Vec3;
}

// Gerador com semente fixa: a cena é sempre a mesma.
function criarAleatorio(semente: number) {
  let s = semente;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function girar([x, y, z]: Vec3, [rx, ry, rz]: Vec3): Vec3 {
  let y1 = y * Math.cos(rx) - z * Math.sin(rx);
  let z1 = y * Math.sin(rx) + z * Math.cos(rx);
  const x2 = x * Math.cos(ry) + z1 * Math.sin(ry);
  z1 = -x * Math.sin(ry) + z1 * Math.cos(ry);
  const x3 = x2 * Math.cos(rz) - y1 * Math.sin(rz);
  y1 = x2 * Math.sin(rz) + y1 * Math.cos(rz);
  return [x3, y1, z1];
}

function suave(a: number, b: number, x: number) {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
}

// Placas em fileiras que se afastam em profundidade (como um corredor),
// com pequenas variações para não ficar mecânico.
export function criarPlacas(): Placa[] {
  const rnd = criarAleatorio(7);
  const placas: Placa[] = [];
  for (let fileira = 0; fileira < 5; fileira += 1) {
    const z = 1.1 - fileira * 0.55;
    for (let coluna = 0; coluna < 5; coluna += 1) {
      placas.push({
        centro: [
          -0.95 + coluna * 0.6 + (rnd() - 0.5) * 0.18,
          (fileira % 2 === 0 ? -0.45 : 0.4) + (rnd() - 0.5) * 0.5,
          z + (rnd() - 0.5) * 0.2,
        ],
        largura: 0.22 + rnd() * 0.3,
        altura: 0.18 + rnd() * 0.28,
        rot: [
          0.3 + (rnd() - 0.5) * 1.1,
          -0.5 + (rnd() - 0.5) * 1.1,
          (rnd() - 0.5) * 0.7,
        ],
      });
    }
  }
  return placas;
}

// Rede: pontos numa grade levemente deslocada, cada um ligado aos 2 vizinhos mais próximos.
function criarRede() {
  const rnd = criarAleatorio(11);
  const nos: Vec3[] = [];
  for (let i = 0; i < 7; i += 1) {
    for (let j = 0; j < 5; j += 1) {
      nos.push([
        -1.15 + i * 0.4 + (rnd() - 0.5) * 0.22,
        -0.95 + j * 0.48 + (rnd() - 0.5) * 0.22,
        (rnd() - 0.5) * 1.4,
      ]);
    }
  }
  const ligacoes = new Set<string>();
  nos.forEach((n, a) => {
    nos
      .map((m, b) => ({
        b,
        d: Math.hypot(n[0] - m[0], n[1] - m[1], n[2] - m[2]),
      }))
      .filter(({ b }) => b !== a)
      .sort((x, y) => x.d - y.d)
      .slice(0, 2)
      .forEach(({ b }) => ligacoes.add(a < b ? `${a}-${b}` : `${b}-${a}`));
  });
  return {
    nos,
    ligacoes: [...ligacoes].map(
      (k) => k.split('-').map(Number) as [number, number],
    ),
  };
}

export interface OpcoesCena {
  /** Centro horizontal da cena, de 0 (esquerda) a 1 (direita). */
  centroX?: number;
  /** Tamanho da cena em relação à área. */
  tamanho?: number;
  /** Multiplica a opacidade de tudo (1 = topo; menor = mais discreto). */
  forca?: number;
  /** Lado em que a cena some (o lado do texto). */
  ladoDoTexto?: 'esquerda' | 'direita';
  /** Onde ficam as trilhas de circuito; null para não desenhar. */
  circuito?: 'esquerda' | 'direita' | null;
}

export function desenhar(
  canvas: HTMLCanvasElement,
  placas: Placa[],
  tinta: Rgb,
  destaque: Rgb,
  {
    centroX = 0.62,
    tamanho = 0.55,
    forca = 1,
    ladoDoTexto = 'esquerda',
    circuito = 'esquerda',
  }: OpcoesCena = {},
) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const largura = canvas.clientWidth;
  const altura = canvas.clientHeight;
  canvas.width = Math.round(largura * dpr);
  canvas.height = Math.round(altura * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, largura, altura);

  const cor = (a: number) =>
    `rgba(${tinta[0]},${tinta[1]},${tinta[2]},${a * forca})`;
  const giroCena: Vec3 = [0.2, -0.38, 0];
  const escala = Math.min(largura, altura * 1.7) * tamanho;
  const projetar = (p: Vec3): [number, number, number] => {
    const [x, y, z] = girar(p, giroCena);
    const f = 3.2 / (3.2 + z);
    return [
      largura * centroX + x * escala * f,
      altura * 0.5 + y * escala * f,
      f,
    ];
  };
  // Mais forte do lado da foto, quase some do lado do texto.
  const mascara = (sx: number) => {
    const pos = ladoDoTexto === 'esquerda' ? sx : largura - sx;
    return 0.22 + 0.78 * suave(largura * 0.22, largura * 0.62, pos);
  };

  const projetadas = placas
    .map((pl) => {
      const cantos: Vec3[] = [
        [-pl.largura / 2, -pl.altura / 2, 0],
        [pl.largura / 2, -pl.altura / 2, 0],
        [pl.largura / 2, pl.altura / 2, 0],
        [-pl.largura / 2, pl.altura / 2, 0],
      ];
      const proj = cantos.map((c) => {
        const r = girar(c, pl.rot);
        return projetar([
          r[0] + pl.centro[0],
          r[1] + pl.centro[1],
          r[2] + pl.centro[2],
        ]);
      });
      return { proj, prof: proj.reduce((s, p) => s + p[2], 0) / 4 };
    })
    .sort((a, b) => a.prof - b.prof);

  for (const { proj, prof } of projetadas) {
    const perto = suave(0.72, 1.3, prof);
    const m = mascara(proj.reduce((s, p) => s + p[0], 0) / 4);
    ctx.beginPath();
    proj.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
    ctx.closePath();
    ctx.fillStyle = cor((0.035 + perto * 0.09) * m);
    ctx.fill();
    ctx.lineWidth = 0.5 + perto * 1.6;
    ctx.strokeStyle = cor((0.16 + perto * 0.45) * m);
    ctx.stroke();
  }

  // Rede de pontos.
  const { nos, ligacoes } = criarRede();
  const pontos = nos.map(projetar);
  ctx.lineWidth = 1;
  for (const [a, b] of ligacoes) {
    const [ax, ay, af] = pontos[a];
    const [bx, by, bf] = pontos[b];
    const perto = suave(0.72, 1.3, (af + bf) / 2);
    ctx.strokeStyle = cor((0.2 + perto * 0.32) * mascara((ax + bx) / 2));
    ctx.beginPath();
    ctx.moveTo(ax, ay);
    ctx.lineTo(bx, by);
    ctx.stroke();
  }
  pontos.forEach(([px, py, f], i) => {
    const perto = suave(0.72, 1.3, f);
    const [r, g, b] = i % 6 === 0 ? destaque : tinta;
    ctx.fillStyle = `rgba(${r},${g},${b},${(0.5 + perto * 0.5) * mascara(px) * forca})`;
    ctx.beginPath();
    ctx.arc(px, py, 2.2 + perto * 2.8, 0, Math.PI * 2);
    ctx.fill();
  });

  // Circuito: trilhas paralelas, espaçamento igual, dobra de 45° no mesmo ritmo.
  if (!circuito) return;
  const espelho = circuito === 'direita' ? -1 : 1;
  const passo = 22 * espelho;
  const baseX = circuito === 'direita' ? largura * 0.96 : largura * 0.04;
  ctx.lineWidth = 1.2;
  for (let i = 0; i < 8; i += 1) {
    const x0 = baseX + i * passo;
    const subida = 70 + (i % 3) * 30;
    const desvio = 26 * espelho;
    const pts: [number, number][] = [
      [x0, altura + 2],
      [x0, altura - subida],
      [x0 + desvio, altura - subida - desvio],
      [x0 + desvio, altura - subida - desvio - 40 - (i % 2) * 30],
    ];
    ctx.strokeStyle = cor(0.14);
    ctx.beginPath();
    pts.forEach(([px, py], k) => (k ? ctx.lineTo(px, py) : ctx.moveTo(px, py)));
    ctx.stroke();
    const [ex, ey] = pts[pts.length - 1];
    ctx.fillStyle = cor(0.22);
    ctx.beginPath();
    ctx.arc(ex, ey, 2.6, 0, Math.PI * 2);
    ctx.fill();
  }
}
