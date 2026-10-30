/*
 * Fundo "poço": placas translúcidas presas nas 4 paredes de um poço visto de cima.
 * O centro da tela é o fundo do poço e, ao rolar a página, a câmera desce.
 *
 * Cada seção tem a sua janela para a mesma cena (um canvas fixo recortado pela
 * seção), então o poço continua de uma seção para a outra. Um único laço de
 * animação atende todas as janelas e só desenha as que estão na tela.
 */

export type Rgb = [number, number, number];
type Vec3 = [number, number, number];

export interface Janela {
  canvas: HTMLCanvasElement;
  tinta: Rgb;
  destaque: Rgb;
  /** Multiplica a opacidade de tudo (1 = topo; menor = mais discreto). */
  forca: number;
  visivel: boolean;
}

// Tudo repete a cada FUNDO de profundidade: um poço sem fim.
const PASSO = 1.6;
const FUNDO = PASSO * 6;
const PERTO = 0.35;
// 1 tela de rolagem = descer um andar e meio.
const DESCIDA = PASSO * 1.5;

// 32 placas, cada uma na sua própria profundidade (espaço igual entre todas),
// girando de parede (esquerda, direita, cima, baixo) e de posição na parede.
const QTD = 32;
const POSICOES = [-0.58, 0.58, 0];
const placas = Array.from({ length: QTD }, (_, i) => {
  const parede = i % 4;
  const volta = Math.floor(i / 4);
  const centro = POSICOES[(volta + parede) % 3];
  return {
    parede,
    u1: centro - 0.29,
    u2: centro + 0.29,
    z: (i * FUNDO) / QTD,
    // umas encostadas na parede, outras um pouco soltas
    recuo: (volta + parede) % 2 ? 0.97 : 0.9,
  };
});
const COMPRIMENTO = PASSO * 0.3;

// Algumas placas a mais só no começo da página, para preencher as margens que o
// poço não alcança na primeira tela. São posicionadas pela tela (fração da largura e
// da altura), só nas faixas laterais onde não há texto, e ao rolar passam e não voltam.
// fx, fy: centro na primeira tela · fh: altura (fração da tela) · lado: -1 esquerda, 1 direita
type Extra = { fx: number; fy: number; fh: number; lado: number; z: number };
const EXTRAS_LARGA: Extra[] = [
  { fx: 0.06, fy: 0.22, fh: 0.2, lado: -1, z: 0.9 },
  { fx: 0.09, fy: 0.62, fh: 0.16, lado: -1, z: 1.4 },
  { fx: 0.04, fy: 0.88, fh: 0.18, lado: -1, z: 0.8 },
];
const EXTRAS_CELULAR: Extra[] = [
  { fx: 0.05, fy: 0.42, fh: 0.12, lado: -1, z: 0.8 },
  { fx: 0.95, fy: 0.5, fh: 0.12, lado: 1, z: 1.1 },
  { fx: 0.06, fy: 0.62, fh: 0.08, lado: -1, z: 1.5 },
];

// Névoa: forte perto, some no fundo; as que passam rente à câmera também somem.
const nitidez = (d: number) =>
  Math.max(0, Math.min(1, (FUNDO - d) / (FUNDO * 0.75))) *
  Math.max(0, Math.min(1, (d - 0.5) / 1.4));

const janelas = new Set<Janela>();
let camZ = 0;
let alvoZ = 0;
let mx = 0;
let alvoMx = 0;
let pedido = 0;
let ligado = false;

const reduzir = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function centro(w: number, h: number): [number, number] {
  return [w * (w < 700 ? 0.5 : 0.62) + mx, h * 0.5];
}

function desenhar(j: Janela) {
  const { canvas } = j;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const w = window.innerWidth;
  const h = window.innerHeight;
  const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
  if (
    canvas.width !== Math.round(w * dpr) ||
    canvas.height !== Math.round(h * dpr)
  ) {
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
  }
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, w, h);

  const [cx, cy] = centro(w, h);
  const escala = Math.min(w, h) * 0.55;
  // No celular o texto ocupa a largura toda: a cena fica mais apagada.
  const forca = j.forca * (w < 700 ? 0.55 : 1);
  const cor = (c: Rgb, a: number) =>
    `rgba(${c[0]},${c[1]},${c[2]},${a * forca})`;
  const projetar = ([x, y, d]: Vec3): [number, number] => [
    cx + (x * escala) / d,
    cy + (y * escala) / d,
  ];
  const naParede = (parede: number, v: number, u: number, d: number): Vec3 => {
    const [x, y] = [
      [-v, u],
      [v, u],
      [u, -v],
      [u, v],
    ][parede];
    return [x, y, d];
  };

  // Brilho suave no fundo do poço.
  const brilho = ctx.createRadialGradient(
    cx,
    cy,
    0,
    cx,
    cy,
    Math.min(w, h) * 0.32,
  );
  brilho.addColorStop(0, cor(j.destaque, 0.1));
  brilho.addColorStop(1, cor(j.destaque, 0));
  ctx.fillStyle = brilho;
  ctx.fillRect(0, 0, w, h);

  // Placas do fundo para a frente, para as de perto ficarem por cima.
  // Extras: a posição na tela vira posição na parede, calculada para a primeira tela.
  const extras = (w < 700 ? EXTRAS_CELULAR : EXTRAS_LARGA)
    .map((e) => {
      const d0 = e.z + PERTO;
      const v = (Math.abs(e.fx * w - cx + mx) * d0) / escala;
      const u = ((e.fy * h - cy) * d0) / escala;
      const meia = ((e.fh * h) / 2) * (d0 / escala);
      return {
        parede: e.lado < 0 ? 0 : 1,
        recuo: v,
        u1: u - meia,
        u2: u + meia,
        // mais curtas que as do poço: ficam estreitas e não avançam para o meio da tela
        comp: COMPRIMENTO * 0.35,
        d: e.z - camZ + PERTO,
      };
    })
    .filter((p) => p.d > PERTO);
  const lista = placas
    .map(({ parede, recuo, u1, u2, z }) => ({
      parede,
      recuo,
      u1,
      u2,
      comp: COMPRIMENTO,
      d: ((((z - camZ) % FUNDO) + FUNDO) % FUNDO) + PERTO,
    }))
    .concat(extras)
    .sort((a, b) => b.d - a.d);
  for (const p of lista) {
    const n = nitidez(p.d);
    if (n <= 0.01) continue;
    const cantos = [
      naParede(p.parede, p.recuo, p.u1, p.d),
      naParede(p.parede, p.recuo, p.u2, p.d),
      naParede(p.parede, p.recuo, p.u2, p.d + p.comp),
      naParede(p.parede, p.recuo, p.u1, p.d + p.comp),
    ].map(projetar);
    ctx.beginPath();
    cantos.forEach(([x, y], k) => (k ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
    ctx.closePath();
    ctx.fillStyle = cor(j.tinta, 0.07 * n);
    ctx.fill();
    ctx.lineWidth = 0.5 + 1.4 * n;
    ctx.strokeStyle = cor(j.tinta, 0.4 * n);
    ctx.stroke();
  }
}

function quadro() {
  pedido = 0;
  const parado = reduzir();
  camZ += (alvoZ - camZ) * (parado ? 1 : 0.14);
  mx += (alvoMx - mx) * (parado ? 1 : 0.1);
  janelas.forEach((j) => j.visivel && desenhar(j));
  // Continua só até a câmera chegar onde a rolagem mandou; depois para de desenhar.
  if (Math.abs(alvoZ - camZ) > 0.001 || Math.abs(alvoMx - mx) > 0.2) pedir();
}

function pedir() {
  if (!pedido) pedido = requestAnimationFrame(quadro);
}

const aoRolar = () => {
  alvoZ = (window.scrollY / window.innerHeight) * DESCIDA;
  pedir();
};
const aoMover = (e: PointerEvent) => {
  if (reduzir() || window.innerWidth < 700) return;
  alvoMx = (e.clientX / window.innerWidth - 0.5) * -30;
  pedir();
};

function ligar() {
  if (ligado) return;
  ligado = true;
  camZ = alvoZ = (window.scrollY / window.innerHeight) * DESCIDA;
  window.addEventListener('scroll', aoRolar, { passive: true });
  window.addEventListener('pointermove', aoMover, { passive: true });
  window.addEventListener('resize', pedir);
}

function desligar() {
  ligado = false;
  window.removeEventListener('scroll', aoRolar);
  window.removeEventListener('pointermove', aoMover);
  window.removeEventListener('resize', pedir);
  cancelAnimationFrame(pedido);
  pedido = 0;
}

/** Registra uma janela para a cena; devolve a função que a remove. */
export function registrarJanela(j: Janela) {
  janelas.add(j);
  ligar();
  pedir();
  return () => {
    janelas.delete(j);
    // canvas fora de uso não guarda memória
    j.canvas.width = j.canvas.height = 0;
    if (janelas.size === 0) desligar();
  };
}

/** Pede um novo desenho (ex.: a janela entrou na tela ou o tema mudou). */
export const redesenhar = pedir;
