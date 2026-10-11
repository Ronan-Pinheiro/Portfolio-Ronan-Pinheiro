import { useEffect, useState } from 'react';

/**
 * Conta quantos caracteres já foram "digitados" de um texto de tamanho `total`.
 */
export function useDigitacao(total: number, velocidadeMs = 70, atrasoMs = 400) {
  const [digitados, setDigitados] = useState(0);

  useEffect(() => {
    let atual = 0;
    let timer = window.setTimeout(function passo() {
      atual += 1;
      setDigitados(atual);
      if (atual < total) timer = window.setTimeout(passo, velocidadeMs);
    }, atrasoMs);
    return () => window.clearTimeout(timer);
  }, [total, velocidadeMs, atrasoMs]);

  return digitados;
}
