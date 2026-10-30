import JanelaPoco from './JanelaPoco';

interface FundoSecaoProps {
  /** Fundo da seção é escuro também no tema claro (ex.: Experiência). */
  fundoEscuro?: boolean;
}

/* Fundo das seções: o mesmo poço do topo, bem mais discreto para não atrapalhar a leitura. */
export default function FundoSecao({ fundoEscuro = false }: FundoSecaoProps) {
  return <JanelaPoco forca={0.45} fundoEscuro={fundoEscuro} />;
}
