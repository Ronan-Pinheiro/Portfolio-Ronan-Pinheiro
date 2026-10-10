import { experienciaData } from '../data/experiencia';

export default function Experiencia() {
  return (
    <section className="relative px-5 py-[50px] text-center text-portfolio-muted transition-colors duration-300 light:text-claro-text">
      <div className="portfolio-accent-line top-[102%]" aria-hidden="true" />

      <div className="mb-10 ml-20 flex max-[1000px]:ml-5 max-[1000px]:flex-wrap">
        <p className="flex items-center text-[40px] font-bold">
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

      <ul className="flex flex-col gap-10 text-portfolio-muted max-[1000px]:items-center">
        {experienciaData.map((item) => (
          <li
            key={`${item.empresa}-${item.periodo}`}
            className="flex w-full max-w-[1550px] justify-start text-left max-[1000px]:block max-[1000px]:max-w-full"
          >
            <div className="mt-[46px] ml-[200px] text-[15px] text-portfolio-muted light:text-claro-text max-[1000px]:mt-0 max-[1000px]:ml-0 max-[1000px]:text-center max-[1000px]:text-lg">
              {item.periodo}
            </div>

            <div className="ml-[13px] flex-1 rounded-l-[20px] bg-portfolio-primary text-[15px] light:bg-claro-surface max-[1000px]:mx-0 max-[1000px]:w-full max-[1000px]:rounded-t-[20px] max-[1000px]:rounded-br-none max-[1000px]:rounded-bl-none">
              <h1 className="ml-[60px] pt-5 pb-5 text-left text-xl text-portfolio-muted light:text-claro-text max-[1000px]:mx-0 max-[1000px]:text-center max-[540px]:ml-0">
                {item.empresa}
              </h1>
              <ul>
                {item.responsabilidades.map((resp) => (
                  <li
                    key={resp}
                    className="ml-[46px] flex text-[15px] text-portfolio-muted light:text-claro-text max-[1000px]:flex max-[1000px]:text-center max-[1000px]:text-sm max-[540px]:ml-[15px]"
                  >
                    <span className="text-[15px] font-bold text-portfolio-accent light:text-claro-accent">
                      ●
                    </span>{' '}
                    {resp}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-1 rounded-r-[20px] bg-portfolio-primary text-[10px] light:bg-claro-surface max-[1000px]:w-full max-[1000px]:rounded-t-none max-[1000px]:rounded-b-[20px]">
              <h1 className="pt-5 pb-5 text-left text-xl text-portfolio-muted light:text-claro-text max-[1000px]:pt-[15px] max-[1000px]:pb-[15px] max-[1000px]:text-center max-[1000px]:text-lg">
                {item.cargo}
              </h1>
              <ul className="flex flex-wrap justify-center max-[1000px]:items-center">
                {item.skills.map((skill) => (
                  <li
                    key={skill}
                    className="m-2.5 bg-portfolio-yellow px-2 py-1 text-[15px] font-bold text-portfolio-bg light:bg-claro-surface-2 light:text-claro-text"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
