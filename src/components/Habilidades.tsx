import { habilidadesData } from '../data/habilidades';
import IconeHabilidade from './IconeHabilidade';
import FundoSecao from './FundoSecao';

export default function Habilidades() {
  return (
    <section className="isolate overflow-hidden relative bg-portfolio-bg px-5 py-[50px] text-center text-portfolio-muted transition-colors duration-300 light:bg-claro-bg light:text-claro-text">
      <FundoSecao lado="direita" />

      <div className="ml-20 flex max-[1000px]:ml-5 max-[1000px]:flex-wrap">
        <p className="titulo-secao flex items-center text-[40px] font-bold max-[499px]:text-[30px]">
          <span className="portfolio-linha" /> Habilidades{' '}
        </p>
        <p className="max-w-[1150px] pt-[15px] pl-[35px] text-left text-lg max-[1000px]:pl-0">
          No dia a dia uso <span className="portfolio-destaque">SQL</span> e{' '}
          <span className="portfolio-destaque">Python</span> para tratar e
          analisar dados e gerar indicadores, e{' '}
          <span className="portfolio-destaque">JavaScript</span> com{' '}
          <span className="portfolio-destaque">Google Apps Script</span> para
          automatizar processos e integrar sistemas via APIs REST. No front-end,
          trabalho com <span className="portfolio-destaque">React</span>,{' '}
          <span className="portfolio-destaque">TypeScript</span>,{' '}
          <span className="portfolio-destaque">Tailwind CSS</span>,{' '}
          <span className="portfolio-destaque">HTML</span> e{' '}
          <span className="portfolio-destaque">CSS</span>, com foco em
          componentização e organização. Também automatizo testes com{' '}
          <span className="portfolio-destaque">Cypress</span> e desenvolvi
          simulações em <span className="portfolio-destaque">Unity</span> com{' '}
          <span className="portfolio-destaque">C#</span>.
        </p>
      </div>

      <ul className="flex flex-wrap justify-center pt-[30px]">
        {habilidadesData.map(({ nome }) => (
          <li key={nome} className="m-2.5 text-center">
            <div className="group flex h-40 w-[140px] flex-col items-center justify-between rounded-lg bg-portfolio-bg p-5 font-bold transition-transform duration-300 hover:scale-110 active:scale-95 light:bg-claro-card light:ring-1 light:ring-claro-line light:ring-inset">
              <span className="flex h-[84px] w-[84px] items-center justify-center rounded-lg bg-portfolio-muted/5 ring-1 ring-portfolio-muted/20 transition-colors duration-300 ring-inset group-hover:bg-portfolio-accent/15 group-hover:ring-portfolio-accent/50 light:bg-claro-sand/35 light:ring-claro-sand light:group-hover:bg-claro-accent/10 light:group-hover:ring-claro-accent/40">
                <IconeHabilidade
                  nome={nome}
                  className="h-[50px] w-[50px] text-portfolio-muted transition-colors duration-300 group-hover:text-portfolio-accent group-active:text-portfolio-accent light:text-claro-text light:group-hover:text-claro-accent light:group-active:text-claro-accent"
                />
              </span>
              <span className="mt-2.5 text-base text-portfolio-muted transition-colors duration-300 group-hover:text-portfolio-accent group-active:text-portfolio-accent light:text-claro-text light:group-hover:text-claro-accent light:group-active:text-claro-accent">
                {nome}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
