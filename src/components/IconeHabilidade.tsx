import { caminhosIcones } from '../data/iconesHabilidades';

interface IconeHabilidadeProps {
  nome: string;
  className?: string;
}

// Desenha o ícone da habilidade com a cor do texto (currentColor),
// para combinar com o tema claro e o escuro.
export default function IconeHabilidade({
  nome,
  className,
}: IconeHabilidadeProps) {
  if (nome === 'C#') {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
          d="M12 1.5 21.1 6.75v10.5L12 22.5 2.9 17.25V6.75Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <text
          x="12"
          y="15.6"
          textAnchor="middle"
          fontSize="9.5"
          fontWeight="800"
          fill="currentColor"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
        >
          C#
        </text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d={caminhosIcones[nome]} fill="currentColor" />
    </svg>
  );
}
