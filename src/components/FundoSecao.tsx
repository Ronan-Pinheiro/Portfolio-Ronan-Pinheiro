import { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { criarPlacas, desenhar, type Rgb } from '../lib/cena3d';

interface FundoSecaoProps {
  /** Lado em que a cena aparece. */
  lado: 'esquerda' | 'direita';
  /** Fundo da seção é escuro também no tema claro (ex.: Experiência). */
  fundoEscuro?: boolean;
  /** Desenha as trilhas de circuito no canto de baixo. */
  circuito?: boolean;
}

/*
 * Versão discreta e parada da cena do topo, para o fundo das seções.
 * Não tem animação: desenha uma vez quando a seção aparece na tela
 * e de novo só se o tamanho mudar, então não pesa no FPS.
 */
export default function FundoSecao({
  lado,
  fundoEscuro = false,
  circuito = false,
}: FundoSecaoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isDark } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const escuro = isDark || fundoEscuro;
    const tinta: Rgb = escuro ? [230, 230, 238] : [29, 22, 17];
    const destaque: Rgb = isDark
      ? [245, 185, 66]
      : fundoEscuro
        ? [230, 194, 122]
        : [156, 64, 25];
    const placas = criarPlacas();
    let desenhado = false;

    const redesenhar = () => {
      const celular = canvas.clientWidth < 700;
      desenhar(canvas, placas, tinta, destaque, {
        centroX:
          lado === 'direita' ? (celular ? 0.95 : 0.88) : celular ? 0.05 : 0.12,
        tamanho: celular ? 0.3 : 0.34,
        forca: celular ? 0.3 : 0.42,
        ladoDoTexto: lado === 'direita' ? 'esquerda' : 'direita',
        circuito: circuito ? lado : null,
      });
      desenhado = true;
    };

    const tela = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting && !desenhado) redesenhar();
      },
      { rootMargin: '200px' },
    );
    let ultimaLargura = 0;
    const tamanho = new ResizeObserver(() => {
      if (!desenhado || canvas.clientWidth === ultimaLargura) return;
      ultimaLargura = canvas.clientWidth;
      redesenhar();
    });
    tela.observe(canvas);
    tamanho.observe(canvas);
    return () => {
      tela.disconnect();
      tamanho.disconnect();
    };
  }, [isDark, fundoEscuro, lado, circuito]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
    />
  );
}
