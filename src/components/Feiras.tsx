import { feirasData } from '../data/feiras';
import FundoSecao from './FundoSecao';

export default function Feiras() {
  return (
    <section className="relative isolate overflow-hidden mt-[50px] bg-portfolio-bg px-5 py-[50px] text-center text-portfolio-muted transition-colors duration-300 light:bg-claro-bg light:text-claro-text">
      <FundoSecao lado="direita" />
      <p className="titulo-secao mb-2 text-[2rem] font-bold max-[499px]:text-[26px]">
        Participação em Feiras
      </p>

      <div className="p-2.5">
        <p className="mx-auto max-w-[1150px] text-lg leading-relaxed wrap-break-word text-justify [text-align-last:center] max-[750px]:text-left max-[750px]:[text-align-last:auto]">
          Essas são imagens da feira em que participei na HUB Goiás, em um
          evento de exposição de tecnologia. Tive a oportunidade de apresentar
          projetos de{' '}
          <span className="portfolio-destaque-orange">treinamentos em VR</span>{' '}
          para <span className="portfolio-destaque-orange">NRs</span>, onde
          mostrei como as{' '}
          <span className="portfolio-destaque-orange">
            simulações imersivas
          </span>{' '}
          em realidade virtual podem ser aplicadas para capacitação profissional
          e segurança no trabalho.{' '}
          <span className="portfolio-destaque-orange">
            Não pude compartilhar imagens dos projetos VR
          </span>{' '}
          devido a limitações contratuais, mas a experiência foi uma excelente
          oportunidade para demonstrar as inovações tecnológicas em treinamento.
        </p>
      </div>

      <div className="mx-auto my-8 max-w-[1200px] px-6">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
          {feirasData.map((feira) => (
            <article
              key={feira.titulo}
              className="overflow-hidden rounded-lg bg-portfolio-primary shadow-md transition-transform duration-300 hover:translate-y-[-5px] light:ring-1 light:ring-claro-line light:ring-inset light:bg-claro-card light:shadow-none"
            >
              <div className="relative aspect-video overflow-hidden">
                {feira.tipo === 'video' ? (
                  <video
                    className="h-full w-full scale-105 object-cover transition-transform duration-300 hover:scale-110"
                    controls
                    muted
                    preload="metadata"
                  >
                    <source src={feira.src} type="video/mp4" />
                    Seu navegador não suporta o elemento de vídeo.
                  </video>
                ) : (
                  <img
                    src={feira.src}
                    alt={feira.titulo}
                    className="h-full w-full scale-105 object-cover transition-transform duration-300 hover:scale-110"
                    loading="lazy"
                  />
                )}
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-portfolio-muted light:text-claro-text">
                  {feira.titulo}
                </h3>
                <p className="m-0 text-[0.95rem] leading-normal text-[#b4b6c8] light:text-claro-muted">
                  {feira.descricao}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
