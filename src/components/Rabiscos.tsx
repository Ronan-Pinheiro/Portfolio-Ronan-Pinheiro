import { motion } from 'motion/react';

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

const CAMINHO_SUBLINHADO = 'M3 9 C 25 3, 45 12, 70 7 S 115 3, 157 8';

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
          viewport={{ once: true, margin: '0px 0px -15% 0px' }}
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

export function GradePontos({ className }: RabiscoProps) {
  const pontos = [];
  for (let linha = 0; linha < 4; linha += 1) {
    for (let coluna = 0; coluna < 6; coluna += 1) {
      pontos.push(
        <circle
          key={`${linha}-${coluna}`}
          cx={4 + coluna * 12}
          cy={4 + linha * 12}
          r="2"
        />,
      );
    }
  }
  return (
    <svg viewBox="0 0 68 44" className={className} aria-hidden="true">
      <g fill="currentColor">{pontos}</g>
    </svg>
  );
}
