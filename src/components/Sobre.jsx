import React from 'react';
import '../styles/Sobre.css';
import FotoRonan from '../Imagens/ImagensFotoRonan.png';

const Sobre = () => {
  return (
    <section className="sobre">
      <div className="container">
        <div className="text">
          <h1>
            <span className="orange">Olá, eu sou o</span> <br />
            <span className="blue">Ronan Pinheiro</span>
          </h1>
          <p className="descricao">
            <span className="linha"></span> Desenvolvedor Web{' '}
            <span className="orange"> e </span> QA Júnior
          </p>
        </div>

        <a
          href="https://github.com/Ronan-Pinheiro"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={FotoRonan} alt="Ronan Pinheiro" className="foto" />
        </a>
      </div>

      {/* Linha Vertical movida para cá para atravessar os componentes */}
      <div className="LinhaVerticalMundSobre"></div>

      <div className="sobre-mim">
        <h2>
          <span className="orange">—</span>{' '}
          <span className="white">Sobre Mim</span>
        </h2>
        <p>
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
};

export default Sobre;
