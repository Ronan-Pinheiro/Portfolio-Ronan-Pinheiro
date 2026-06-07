import FotoRonan from '../Imagens/ImagensFotoRonan.png';

export default function Sobre() {
  return (
    <section className="relative bg-portfolio-bg px-5 py-[50px] text-center text-portfolio-muted transition-colors duration-300 light:bg-portfolio-surface light:text-portfolio-bg">
      <div className="mx-auto flex max-w-[75%] items-center justify-between gap-[50px] max-[1050px]:max-w-none max-[1050px]:flex-col max-[1050px]:items-center max-[1050px]:gap-[25px] max-[499px]:flex-col max-[499px]:gap-5 max-[499px]:items-center">
        <div className="grow text-left max-[1050px]:text-center max-[499px]:pr-[15px]">
          <h1 className="ml-[30px] text-[60px] leading-none font-bold max-[1050px]:ml-0 max-[1050px]:flex max-[1050px]:justify-center max-[1050px]:text-[32px] max-[750px]:block max-[750px]:text-center max-[499px]:text-center max-[499px]:text-[28px]">
            <span className="text-portfolio-accent">Olá, eu sou o</span> <br />
            <span className="text-portfolio-blue">Ronan Pinheiro</span>
          </h1>
          <p className="flex items-center text-[25px] font-bold max-[750px]:block max-[750px]:p-2.5 max-[750px]:text-center max-[750px]:text-[22px] max-[499px]:flex-col max-[499px]:text-lg">
            <span className="portfolio-linha max-[499px]:ml-5" />
            Desenvolvedor Web{' '}
            <span className="mx-[5px] text-portfolio-accent"> e </span> QA Júnior
          </p>
        </div>

        <a
          href="https://github.com/Ronan-Pinheiro"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={FotoRonan}
            alt="Ronan Pinheiro"
            className="mt-[60px] ml-auto h-[350px] w-[350px] cursor-pointer rounded-[10px] object-cover transition-transform duration-300 hover:scale-105 max-[1050px]:mx-auto max-[1050px]:mt-5 max-[1050px]:h-auto max-[1050px]:w-[300px] max-[499px]:mx-auto max-[499px]:mt-5 max-[499px]:h-[250px] max-[499px]:w-[250px]"
          />
        </a>
      </div>

      <div className="portfolio-accent-line top-[97%]" aria-hidden="true" />

      <div className="mx-auto mt-[70px] max-w-[1000px] pt-20 text-center wrap-break-word max-[1050px]:mt-[30px] max-[1050px]:max-w-[85%] max-[1050px]:pt-0 max-[499px]:mt-[50px] max-[499px]:max-w-[90%] max-[499px]:pt-0">
        <h2 className="text-[30px] font-bold text-portfolio-muted light:text-portfolio-blue-light">
          <span className="text-portfolio-accent">—</span> Sobre Mim
        </h2>
        <p className="pt-[15px] text-lg">
          Desenvolvedor Web com experiência em HTML, CSS, JavaScript, React, C#,
          automação de testes E2E com Cypress e desenvolvimento de aplicações
          web e experiências imersivas. Desenvolvo interfaces modernas,
          organizadas e bem estruturadas, aplicando boas práticas e validações
          para garantir maior confiabilidade nas aplicações. Atualmente, estou
          focando no aprofundamento em Node.js e na evolução das minhas
          habilidades em testes e qualidade. Apaixonado por tecnologia,
          interfaces interativas e soluções eficientes. Graduado em Análise e
          Desenvolvimento de Sistemas.
        </p>
      </div>
    </section>
  );
}
