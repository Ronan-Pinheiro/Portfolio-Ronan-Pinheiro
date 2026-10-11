import { useEffect, useState } from 'react';
import { useReducedMotion } from 'motion/react';

/**
 * Conta quantos caracteres já foram "digitados" de um texto de tamanho `total`.
 * Quem prefere menos movimento recebe o texto completo de uma vez.
 */
export function useDigitacao(total: number, velocidadeMs = 70, atrasoMs = 400) {
  const reduzirMovimento = useReducedMotion();
  const [digitados, setDigitados] = useState(0);

  useEffect(() => {
    if (reduzirMovimento) return;
    let atual = 0;
    let timer = window.setTimeout(function passo() {
      atual += 1;
      setDigitados(atual);
      if (atual < total) timer = window.setTimeout(passo, velocidadeMs);
    }, atrasoMs);
    return () => window.clearTimeout(timer);
  }, [total, velocidadeMs, atrasoMs, reduzirMovimento]);

  return reduzirMovimento ? total : digitados;
}
