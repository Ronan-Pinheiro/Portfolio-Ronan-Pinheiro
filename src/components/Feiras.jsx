import React from 'react';
import '../styles/Feiras.css';
import IMG001 from '../Imagens/IMG001Feira.jpg';
import IMG002 from '../Imagens/IMG002Feira.jpg';
import VideoFeira from '../Imagens/VideoFeira.mp4';

const Feiras = () => {
  return (
    <section className="feiras">
      <div>
        <p className="feirasTitle">Participação em Feiras</p>
      </div>
      <div className="feirasDescricao">
        <p className="ExperienciaDescricao">
          Essas são imagens da feira em que participei na HUG Goiás, em um
          evento de exposição de tecnologia. Tive a oportunidade de apresentar
          projetos de <span className="destaqueOrange">treinamentos em VR</span>{' '}
          para <span className="destaqueOrange">NRs</span>, onde mostrei como as{' '}
          <span className="destaqueOrange">simulações imersivas</span> em
          realidade virtual podem ser aplicadas para capacitação profissional e
          segurança no trabalho.{' '}
          <span className="destaqueOrange">
            Não pude compartilhar imagens dos projetos VR
          </span>{' '}
          devido a limitações contratuais, mas a experiência foi uma excelente
          oportunidade para demonstrar as inovações tecnológicas em treinamento.
        </p>
      </div>

      <div className="feirasContainer">
        <div className="feirasGrid">
          {/* Card 1 */}
          <article className="feiraCard">
            <div className="mediaWrapper">
              <img
                src={IMG001}
                alt="Stand na feira tecnológica"
                className="feiraMedia"
                loading="lazy"
              />
            </div>
            <div className="cardContent">
              <h3 className="feiraNome">Processo de Criação</h3>
              <p className="feiraDescricao">
                Apresentamos as etapas-chave para criar simulações realistas:
                modelagem de ambientes, programação de interações e integração
                das normas de segurança.
              </p>
            </div>
          </article>

          {/* Card 2 Vídeo */}
          <article className="feiraCard feiraCardVideo ">
            <div className="mediaWrapper">
              <video className="feiraMedia" controls muted preload="metadata">
                <source src={VideoFeira} type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>
            <div className="cardContent">
              <h3 className="feiraNome">Entrevista Sobre a Experiência</h3>
              <p className="feiraDescricao">
                Reação de um participante depois de experienciar um treinamento
                de multiplas escolhas.
              </p>
            </div>
          </article>

          {/* Card 3 */}
          <article className="feiraCard">
            <div className="mediaWrapper">
              <img
                src={IMG002}
                alt="Participantes interagindo com a tecnologia"
                className="feiraMedia"
                loading="lazy"
              />
            </div>
            <div className="cardContent">
              <h3 className="feiraNome">Ambiente da HUB Goiás</h3>
              <p className="feiraDescricao">
                Implementamos uma área dedicada com 6 estações VR independentes,
                permitindo que grupos interagissem com diferentes simulações.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Feiras;
