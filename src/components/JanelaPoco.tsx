import { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import {
  redesenhar,
  registrarJanela,
  type Janela,
  type Rgb,
} from '../lib/poco';

interface JanelaPocoProps {
  /** Opacidade geral da cena (1 = topo; menor = mais discreto). */
  forca: number;
  /** Fundo da seção é escuro também no tema claro (ex.: Experiência). */
  fundoEscuro?: boolean;
  /**
   * Elemento da seção (seletor CSS) a partir do qual a cena fica apagada,
   * para não atrapalhar a leitura do texto que vem dali para baixo.
   */
  apagarDesde?: string;
}

/*
 * Janela da seção para o poço: um canvas fixo do tamanho da tela, recortado
 * pela própria seção (clip-path). Assim todas as seções mostram a mesma cena,
 * que continua de uma para a outra enquanto a página rola.
 */
export default function JanelaPoco({
  forca,
  fundoEscuro = false,
  apagarDesde,
}: JanelaPocoProps) {
  const molduraRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isDark } = useTheme();

  useEffect(() => {
    const moldura = molduraRef.current;
    const canvas = canvasRef.current;
    if (!moldura || !canvas) return;
    const escuro = isDark || fundoEscuro;
    const janela: Janela = {
      canvas,
      tinta: escuro ? [230, 230, 238] : [29, 22, 17],
      destaque: (isDark
        ? [245, 185, 66]
        : fundoEscuro
          ? [230, 194, 122]
          : [156, 64, 25]) as Rgb,
      forca,
      visivel: false,
    };
    const remover = registrarJanela(janela);
    // Só desenha enquanto a seção aparece na tela.
    const tela = new IntersectionObserver(([entrada]) => {
      janela.visivel = entrada.isIntersecting;
      if (janela.visivel) redesenhar();
      else canvas.width = canvas.height = 0;
    });
    tela.observe(moldura);
    return () => {
      tela.disconnect();
      remover();
    };
  }, [isDark, fundoEscuro, forca]);

  // Esmaece a cena a partir do elemento indicado (recalcula se o tamanho mudar).
  useEffect(() => {
    const moldura = molduraRef.current;
    const alvo = apagarDesde
      ? moldura?.parentElement?.querySelector<HTMLElement>(apagarDesde)
      : null;
    if (!moldura || !alvo) return;
    const ajustar = () => {
      const topo =
        alvo.getBoundingClientRect().top - moldura.getBoundingClientRect().top;
      const mascara = `linear-gradient(to bottom, #000 ${topo - 160}px, rgba(0,0,0,.3) ${topo}px)`;
      moldura.style.maskImage = mascara;
      moldura.style.webkitMaskImage = mascara;
    };
    const tamanho = new ResizeObserver(ajustar);
    tamanho.observe(moldura);
    ajustar();
    return () => tamanho.disconnect();
  }, [apagarDesde]);

  return (
    <div
      ref={molduraRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10"
      style={{ clipPath: 'inset(0)' }}
    >
      <canvas ref={canvasRef} className="fixed inset-0 h-full w-full" />
    </div>
  );
}
