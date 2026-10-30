import JanelaPoco from './JanelaPoco';

/*
 * Fundo do topo: o poço com força total (as placas mais visíveis) atrás do nome e
 * da foto, e apagado a partir do "Sobre Mim" para não atrapalhar a leitura.
 */
export default function FundoTopo() {
  return <JanelaPoco forca={1} apagarDesde="h2" />;
}
