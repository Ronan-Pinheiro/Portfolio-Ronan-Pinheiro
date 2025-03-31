import React from 'react';
import '../styles/Projetos.css'; // Importando o arquivo CSS
import AnimaisFantasticos from '../Imagens/Projeto_Animais Fantasticos.png';
import Projeto_PinguimRun from '../Imagens/Projeto_PinguimRun.png';
import Projeto_bebidafiufiu from '../Imagens/Projeto_bebidafiufiu.png';
import Projeto_Projeto_15_minutos from '../Imagens/Projeto_Projeto_15_minutos.png';
import Projeto_Florest from '../Imagens/Projeto_Florest.png';

const Projetos = () => {
  const handleClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section className="Projetos">
      <div className="LinhaVerticalMundProjetos"></div>
      <div className="ProjetosContainer">
        <p className="ProjetosTitle">
          <span className="linha"></span> Projetos{' '}
        </p>

        <p className="ProjetosDescricao">
          Atualmente, estou desenvolvendo projetos web utilizando{' '}
          <span className="destaque">React</span> e outras tecnologias para
          criar experiências dinâmicas e interativas. Além disso, estou
          explorando também o uso de <span className="destaque">VR</span> e{' '}
          <span className="destaque">AR</span> para criar experiências
          imersivas.
        </p>
      </div>

      <div className="ProjetosProjetos">
        <ul>
          <li
            onClick={() =>
              handleClick(
                'https://ronan-pinheiro.github.io/Forest-Retreat---Eco-Experience/',
              )
            }
          >
            <div className="ProjetosItem">
              <img
                src={Projeto_Florest}
                alt="Animais Fantasticos"
                className="ProjetosImagem"
              />
              <div className="ProjetosOverlay">
                <span className="ProjetosNome">Forest Retreat</span>
                <button className="ProjetosBotao">Ver Projeto</button>
              </div>
              <div className="ProjetosDivisor"></div>
            </div>
          </li>

          <li
            onClick={() =>
              handleClick('https://exemplo.com/animais-fantasticos')
            }
          >
            <div className="ProjetosItem">
              <img
                src={AnimaisFantasticos}
                alt="Animais Fantasticos"
                className="ProjetosImagem"
              />
              <div className="ProjetosOverlay">
                <span className="ProjetosNome">Animais Fantasticos</span>
                <button className="ProjetosBotao">Ver Projeto</button>
              </div>
              <div className="ProjetosDivisor"></div>
            </div>
          </li>

          <li
            onClick={() =>
              handleClick('https://mini-game-pinguim-run.vercel.app/')
            }
          >
            <div className="ProjetosItem">
              <img
                src={Projeto_PinguimRun}
                alt="HTML"
                className="ProjetosImagem"
              />
              <div className="ProjetosOverlay">
                <span className="ProjetosNome">Mini Game - Pinguim Run</span>
                <button className="ProjetosBotao">Ver Projeto</button>
              </div>
              <div className="ProjetosDivisor"></div>
            </div>
          </li>

          <li
            onClick={() =>
              handleClick('https://bebidafiufiu.8thwall.app/shotsma1/')
            }
          >
            <div className="ProjetosItem">
              <img
                src={Projeto_bebidafiufiu}
                alt="JavaScript"
                className="ProjetosImagem"
              />
              <div className="ProjetosOverlay">
                <span className="ProjetosNome">
                  Bebida Fiu Fiu - Machado de Assis
                </span>
                <button className="ProjetosBotao">Ver Projeto</button>
              </div>
              <div className="ProjetosDivisor"></div>
            </div>
          </li>

          <li
            onClick={() =>
              handleClick('https://bebidafiufiu.8thwall.app/shotsti2/')
            }
          >
            <div className="ProjetosItem">
              <img
                src={Projeto_bebidafiufiu}
                alt="JavaScript"
                className="ProjetosImagem"
              />
              <div className="ProjetosOverlay">
                <span className="ProjetosNome">
                  Bebida Fiu Fiu - Tiradentes
                </span>
                <button className="ProjetosBotao">Ver Projeto</button>
              </div>
              <div className="ProjetosDivisor"></div>
            </div>
          </li>

          <li
            onClick={() =>
              handleClick(
                'https://ronan-pinheiro.github.io/Combata-o-Mosquito.github.io/',
              )
            }
          >
            <div className="ProjetosItem">
              <img
                src={Projeto_Projeto_15_minutos}
                alt="JavaScript"
                className="ProjetosImagem"
              />
              <div className="ProjetosOverlay">
                <span className="ProjetosNome">15 MINUTOS SALVAM VIDAS!</span>
                <button className="ProjetosBotao">Ver Projeto</button>
              </div>
              <div className="ProjetosDivisor"></div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Projetos;
