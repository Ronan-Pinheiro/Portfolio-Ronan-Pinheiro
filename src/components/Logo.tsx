// Logo "</>" redesenhado em SVG para seguir as cores do tema.
export default function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect
        x="1"
        y="1"
        width="30"
        height="30"
        rx="7"
        className="fill-portfolio-accent light:fill-claro-sand"
      />
      <g
        fill="none"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-portfolio-bg light:stroke-claro-espresso"
      >
        <path d="M11 10.5 6.5 16 11 21.5" />
        <path d="M21 10.5 25.5 16 21 21.5" />
        <path d="M18.2 8.5 13.8 23.5" />
      </g>
    </svg>
  );
}
