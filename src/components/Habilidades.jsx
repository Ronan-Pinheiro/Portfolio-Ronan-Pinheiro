import React from 'react';
import '../styles/Habilidades.css';

import IconeCSS from '../Imagens/Icone - CSS.png';
import IconeFigma from '../Imagens/Icone - Figma.png';
import IconeHTML from '../Imagens/Icone - HTML.png';
import IconeJS from '../Imagens/Icone - JS.png';
import IconeTS from '../Imagens/Icone - TS.png';
import IconeC from '../Imagens/Icone - C.png';
import IconeSQlite from '../Imagens/Icone - SQLite.png';
import IconeReact from '../Imagens/Icone - React.png';
import IconeUnity from '../Imagens/Icone - unity.png';
import IconeTailwindCSS from '../Imagens/Icone - Tailwind CSS.png';
import IconeGit from '../Imagens/Icone - Git.svg';
import IconeGithub from '../Imagens/Icone - Github.svg';

const Habilidades = () => {
  return (
    <section className="Habilidades">
      <div className="LinhaVerticalMundHabilidade"></div>
      <div className="HabilidadesContainer">
        <p className="HabilidadesTitle">
          <span className="linha"></span> Habilidades{' '}
        </p>
        <p className="HabilidadesDescricao">
          Atualmente aprofundando meus conhecimentos em{' '}
          <span className="destaque">Node.js</span> e{' '}
          <span className="destaque">TypeScript</span>, com foco no
          desenvolvimento de aplicações web modernas e bem estruturadas. Possuo
          experiência com <span className="destaque">JavaScript</span>,{' '}
          <span className="destaque">React</span>,{' '}
          <span className="destaque">HTML</span> e{' '}
          <span className="destaque">CSS</span>, aplicando boas práticas de
          organização e componentização. Também desenvolvo e automatizo testes
          utilizando <span className="destaque">Cypress</span>, buscando maior
          confiabilidade e estabilidade nas aplicações.
        </p>
      </div>
      <div className="HabilidadesHabilidades">
        <ul>
          <li>
            <div className="habilidadeImg">
              <img src={IconeCSS} alt="CSS" />
              <span className="habilidadeNome">CSS</span>
            </div>
          </li>

          <li>
            <div className="habilidadeImg">
              <img src={IconeHTML} alt="HTML" />
              <span className="habilidadeNome">HTML</span>
            </div>
          </li>
          <li>
            <div className="habilidadeImg">
              <img src={IconeJS} alt="JavaScript" />
              <span className="habilidadeNome">JavaScript</span>
            </div>
          </li>
          <li>
            <div className="habilidadeImg">
              <img src={IconeTS} alt="JavaScript" />
              <span className="habilidadeNome">TypeScript</span>
            </div>
          </li>

          <li>
            <div className="habilidadeImg">
              <img src={IconeReact} alt="React" />
              <span className="habilidadeNome">React</span>
            </div>
          </li>
          <li>
            <div className="habilidadeImg">
              <img src={IconeTailwindCSS} alt="Tailwind CSS" />
              <span className="habilidadeNome">TailwindCSS</span>
            </div>
          </li>
          <li>
            <div className="habilidadeImg">
              <img src={IconeFigma} alt="Figma" />
              <span className="habilidadeNome">Figma</span>
            </div>
          </li>
          <li>
            <div className="habilidadeImg">
              <img src={IconeC} alt="C#" />
              <span className="habilidadeNome">C#</span>
            </div>
          </li>
          <li>
            <div className="habilidadeImg">
              <img src={IconeSQlite} alt="SQlite" />
              <span className="habilidadeNome">SQlite</span>
            </div>
          </li>
          <li>
            <div className="habilidadeImg">
              <img src={IconeUnity} alt="unity" />
              <span className="habilidadeNome">Unity</span>
            </div>
          </li>
          <li>
            <div className="habilidadeImg">
              <img src={IconeGit} alt="unity" />
              <span className="habilidadeNome">Git</span>
            </div>
          </li>
          <li>
            <div className="habilidadeImg">
              <img src={IconeGithub} alt="unity" />
              <span className="habilidadeNome">GitHub</span>
            </div>
          </li>

          {/* Adicione mais habilidades conforme necessário */}
        </ul>
      </div>
    </section>
  );
};

export default Habilidades;
