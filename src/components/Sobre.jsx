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
            <span className="orange"> e </span> Games VR/AR
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
          Desenvolvedor Front-end e Games VR com experiência em HTML, CSS,
          JavaScript, React, C# e desenvolvimento de aplicações web e jogos
          imersivos. Desenvolvi um mini game em AR para a empresa de bebidas
          Fiufiu, combinando tecnologia e interatividade. Atualmente, estou
          aprimorando minhas habilidades em React para criar interfaces mais
          dinâmicas e eficientes. Apaixonado por tecnologia, interfaces
          interativas e experiências imersivas. Cursando em Análise e
          Desenvolvimento de Sistemas.
        </p>
      </div>
    </section>
  );
};

export default Sobre;
