import { habilidadesData } from '../data/habilidades';

export default function Habilidades() {
  return (
    <section className="relative bg-portfolio-primary px-5 py-[50px] text-center text-portfolio-muted transition-colors duration-300 light:bg-portfolio-surface-alt light:text-portfolio-bg">
      <div className="portfolio-accent-line top-[93%]" aria-hidden="true" />

      <div className="ml-20 flex max-[1000px]:ml-5 max-[1000px]:flex-wrap">
        <p className="flex items-center text-[40px] font-bold">
          <span className="portfolio-linha" /> Habilidades{' '}
        </p>
        <p className="max-w-[1150px] pt-[15px] pl-[35px] text-left text-lg max-[1000px]:pl-0">
          Atualmente aprofundando meus conhecimentos em{' '}
          <span className="portfolio-destaque">Node.js</span> e{' '}
          <span className="portfolio-destaque">TypeScript</span>, com foco no
          desenvolvimento de aplicações web modernas e bem estruturadas. Possuo
          experiência com <span className="portfolio-destaque">JavaScript</span>,{' '}
          <span className="portfolio-destaque">React</span>,{' '}
          <span className="portfolio-destaque">HTML</span> e{' '}
          <span className="portfolio-destaque">CSS</span>, aplicando boas práticas de
          organização e componentização. Também desenvolvo e automatizo testes
          utilizando <span className="portfolio-destaque">Cypress</span>, buscando maior
          confiabilidade e estabilidade nas aplicações.
        </p>
      </div>

      <ul className="flex flex-wrap justify-center pt-[30px]">
        {habilidadesData.map(({ nome, icon, alt }) => (
          <li key={nome} className="m-2.5 cursor-pointer text-center">
            <div className="flex h-40 w-[140px] flex-col items-center justify-between rounded-[18px] bg-portfolio-bg p-5 font-bold transition-transform duration-300 hover:scale-110 light:bg-portfolio-primary">
              <img src={icon} alt={alt} />
              <span className="mt-2.5 text-base text-portfolio-blue-light light:text-portfolio-muted">
                {nome}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
