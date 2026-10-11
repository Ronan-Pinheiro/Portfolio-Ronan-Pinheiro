import { experienciaData } from '../data/experiencia';
import FundoSecao from './FundoSecao';

export default function Experiencia() {
  return (
    <section className="isolate overflow-hidden secao-escura relative bg-portfolio-primary px-5 py-[50px] text-center text-portfolio-muted transition-colors duration-300 light:bg-claro-espresso light:text-claro-cream">
      <FundoSecao lado="direita" fundoEscuro />
      <div className="portfolio-accent-line top-[102%]" aria-hidden="true" />

      <div className="mb-10 ml-20 flex max-[1000px]:ml-5 max-[1000px]:flex-wrap">
        <p className="titulo-secao flex items-center text-[40px] font-bold max-[499px]:text-[30px]">
          <span className="portfolio-linha" /> Experiência{' '}
        </p>
        <p className="max-w-[1150px] pt-[15px] pl-[35px] text-left text-lg max-[1000px]:pl-0">
          Minha trajetória passa por{' '}
          <span className="portfolio-destaque-orange">dados</span>,{' '}
          <span className="portfolio-destaque-orange">desenvolvimento</span> e{' '}
          <span className="portfolio-destaque-orange">suporte</span>. Hoje
          trabalho com{' '}
          <span className="portfolio-destaque-orange">
            tratamento e análise de dados
          </span>
          , <span className="portfolio-destaque-orange">indicadores</span>,{' '}
          <span className="portfolio-destaque-orange">
            automação de processos
          </span>{' '}
          e{' '}
          <span className="portfolio-destaque-orange">
            aplicações web internas
          </span>
          . No suporte N1, aprendi a investigar, documentar e priorizar
          problemas. No SENAI Fatesg, desenvolvi{' '}
          <span className="portfolio-destaque-orange">simulações em VR</span>{' '}
          para treinamentos de NR com{' '}
          <span className="portfolio-destaque-orange">C#</span> e{' '}
          <span className="portfolio-destaque-orange">Unity</span>, além de um{' '}
          <span className="portfolio-destaque-orange">mini game em WebAR</span>{' '}
          com <span className="portfolio-destaque-orange">8th Wall</span> e{' '}
          <span className="portfolio-destaque-orange">JavaScript</span>.
        </p>
      </div>

      {/* Linha do tempo: data, cargo e empresa à esquerda; atividades e tecnologias à direita */}
      <ol className="mx-auto max-w-[1100px] border-l border-portfolio-muted/25 text-left light:border-claro-sand/40 max-[1000px]:ml-2">
        {experienciaData.map((item) => (
          <li
            key={`${item.empresa}-${item.periodo}`}
            className="relative grid grid-cols-[260px_1fr] gap-x-10 gap-y-4 pb-10 pl-8 max-[1000px]:grid-cols-1 max-[1000px]:pl-6"
          >
            <span
              aria-hidden="true"
              className="absolute top-1.5 -left-[7px] h-3 w-3 rounded-full bg-portfolio-accent ring-4 ring-portfolio-bg light:bg-claro-sand light:ring-claro-espresso"
            />

            <div>
              <p className="text-sm font-semibold tracking-wider text-portfolio-accent uppercase light:text-claro-sand">
                {item.periodo}
              </p>
              <h3 className="mt-1 text-lg leading-snug font-bold text-portfolio-blue-light uppercase light:text-claro-sand">
                {item.cargo}
              </h3>
              <p className="mt-1 text-base text-portfolio-muted light:text-claro-cream">
                {item.empresa}
              </p>
            </div>

            <div className="border-b border-portfolio-muted/15 pb-10 light:border-claro-cream/15">
              <ul className="flex flex-col gap-1.5">
                {item.responsabilidades.map((resp) => (
                  <li
                    key={resp}
                    className="flex gap-2 text-[15px] leading-relaxed text-portfolio-muted light:text-claro-cream"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-portfolio-accent light:bg-claro-sand"
                    />
                    {resp}
                  </li>
                ))}
              </ul>
              <ul
                className="mt-4 flex flex-wrap gap-2"
                aria-label="Tecnologias"
              >
                {item.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md bg-portfolio-yellow px-2.5 py-1 text-sm font-bold text-portfolio-bg light:bg-transparent light:text-claro-sand light:ring-1 light:ring-claro-sand/60 light:ring-inset"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
