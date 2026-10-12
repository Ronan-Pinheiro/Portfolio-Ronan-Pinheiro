import { useLayoutEffect, useRef } from "react";

// Distância fixa entre o fim da barra e o traço do título logo abaixo.
const FOLGA = 20;

/*
 * Barra laranja da lateral, que atravessa a divisa entre duas seções.
 * A altura do título muda de seção para seção (ele fica centralizado com
 * o texto ao lado), então a barra mede onde o traço do título está e
 * termina sempre à mesma distância dele.
 */
export default function BarraSecao() {
  const barraRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const barra = barraRef.current;
    const secao = barra?.parentElement;
    if (!barra || !secao) return;

    const posicionar = () => {
      const traco = secao.querySelector<HTMLElement>(".portfolio-linha");
      if (!traco) return;
      // Soma os offsetTop até a seção: ignora o deslocamento da animação de entrada.
      let topo = 0;
      for (
        let el: HTMLElement | null = traco;
        el && el !== secao;
        el = el.offsetParent as HTMLElement | null
      ) {
        topo += el.offsetTop;
      }
      barra.style.top = `${topo - FOLGA - barra.offsetHeight}px`;
    };

    posicionar();
    const tamanho = new ResizeObserver(posicionar);
    tamanho.observe(secao);
    return () => tamanho.disconnect();
  }, []);

  return (
    <div ref={barraRef} className="portfolio-accent-line" aria-hidden="true" />
  );
}
