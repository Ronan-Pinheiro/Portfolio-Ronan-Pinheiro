import { motion } from 'motion/react';

// No celular não existe "passar o mouse": a cada toque num elemento com
// sublinhado, reinicia a animação de desenhar e apagar.
if (typeof window !== 'undefined') {
  window.addEventListener(
    'pointerdown',
    (e) => {
      if (e.pointerType === 'mouse') return;
      const alvo = (e.target as Element | null)?.closest?.('.group');
      if (!alvo || !alvo.querySelector('.rabisco-desenhar')) return;
      alvo.removeAttribute('data-tocado');
      void (alvo as HTMLElement).offsetWidth; // força reiniciar a animação
      alvo.setAttribute('data-tocado', '');
      window.setTimeout(() => alvo.removeAttribute('data-tocado'), 1400);
    },
    { passive: true },
  );
}

// Traços desenhados à mão para dar um ar de caderno/papel às seções.
// Usam currentColor, então seguem a cor do tema.

interface RabiscoProps {
  className?: string;
}

interface SublinhadoProps extends RabiscoProps {
  /**
   * hover: se desenha ao passar o mouse (ou tocar) no elemento pai com a
   * classe "group" e se apaga ao sair. entrar: se desenha uma vez quando
   * aparece na tela.
   */
  modo?: 'hover' | 'entrar';
}

// Traço único, levemente ondulado, como um sublinhado feito à mão.
const CAMINHO_SUBLINHADO = 'M3 9 C 25 4, 45 11, 70 7 S 118 4, 157 8';

export function RabiscoSublinhado({
  className,
  modo = 'hover',
}: SublinhadoProps) {
  if (modo === 'entrar') {
    return (
      <svg viewBox="0 0 160 14" className={className} aria-hidden="true">
        <motion.path
          d={CAMINHO_SUBLINHADO}
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: false, margin: '0px 0px -15% 0px' }}
          transition={{ duration: 0.9, delay: 0.3, ease: 'easeInOut' }}
        />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 160 14"
      className={`rabisco-desenhar ${className ?? ''}`}
      aria-hidden="true"
    >
      <path
        d={CAMINHO_SUBLINHADO}
        pathLength={1}
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function RabiscoEstrela({ className }: RabiscoProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        <path d="M20 4 L20.6 36" />
        <path d="M4.5 19 L35.5 21" />
        <path d="M8.5 8.5 L31 31.5" />
        <path d="M31.5 8 L8 32" />
      </g>
    </svg>
  );
}
