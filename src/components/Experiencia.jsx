import React from 'react';
import '../styles/Experiencia.css'; // Importando o arquivo CSS

const Experiencia = () => {
  const handleClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section className="Experiencia">
      <div className="LinhaVerticalExperiencia"></div>
      <div className="ExperienciaContainer">
        <p className="ExperienciaTitle">
          <span className="linha"></span> Experiência{' '}
        </p>

        <p className="ExperienciaDescricao">
          Atuei no desenvolvimento de{' '}
          <span className="destaqueOrange">jogos em VR</span> para treinamentos
          de <span className="destaqueOrange">NR</span>, criando{' '}
          <span className="destaqueOrange">simulações imersivas</span> com{' '}
          <span className="destaqueOrange">C#</span> e{' '}
          <span className="destaqueOrange">Unity</span> para capacitação
          profissional. Também trabalhei com{' '}
          <span className="destaqueOrange">WebAR</span>, desenvolvendo um{' '}
          <span className="destaqueOrange">mini game interativo</span> com{' '}
          <span className="destaqueOrange">8th Wall</span> e{' '}
          <span className="destaqueOrange">JavaScript</span>. Participei de{' '}
          <span className="destaqueOrange">projetos inovadores</span> aplicando{' '}
          <span className="destaqueOrange">tecnologias imersivas</span>, criando{' '}
          <span className="destaqueOrange">experiências envolventes</span> e{' '}
          <span className="destaqueOrange">interativas</span>.
        </p>
      </div>

      <div className="ExperienciaExperiencia">
        <ul>
          <li>
            <div className="ExperienciaData">08/2025- Atualmente</div>
            <div className="ExperienciaDados">
              <h1>Poli Digital</h1>
              <ul>
                <li>
                  <span className="destaqueOrangeBoll">●</span> Prestação de
                  suporte Nível 1 para clientes e colaboradores internos,
                  solucionando dúvidas e problemas relacionados à plataforma.
                </li>
                <li>
                  <span className="destaqueOrangeBoll">●</span> Identificação e
                  análise de bugs, com escalonamento para a equipe de Nível 2
                  quando necessário.
                </li>
              </ul>
            </div>
            <div className="ExperienciaSkills">
              <h1>Analista de Suporte N1</h1>
              <ul>
                {/* Sugestão de skills para a vaga de Suporte N1 */}
                <li>Atendimento ao Cliente</li>
                <li>Suporte Técnico</li>
                <li>Análise de Bugs</li>
                <li>Jira / Ferramenta de Tickets</li>
                <li>Comunicação</li>
              </ul>
            </div>
          </li>

          <li>
            <div className="ExperienciaData"> 05/2024 – 01/2025</div>
            <div className="ExperienciaDados">
              <h1>Faculdade SENAI Fatesg</h1>
              <ul>
                <li>
                  <span className="destaqueOrangeBoll">●</span> Desenvolvi jogos
                  VR para treinamentos de NR com C# e Unity.
                </li>
                <li>
                  <span className="destaqueOrangeBoll">●</span>Criei um mini
                  game em WebAR com 8th Wall, JavaScript, HTML e CSS.
                </li>
                <li>
                  <span className="destaqueOrangeBoll">●</span>Participei de
                  projetos inovadores usando tecnologias imersivas.
                </li>
              </ul>
            </div>
            <div className="ExperienciaSkills">
              <h1>Desenvolvedor de Jogos | Estagiário Voluntário</h1>
              <ul>
                <li>WebAR </li>
                <li>JavaScript</li>
                <li>C#</li>
                <li>Experiência do usuário (UX)</li>
                <li>Unity 3D</li>
                <li>Realidade Virtual (VR)</li>
              </ul>
            </div>
          </li>

          <li>
            <div className="ExperienciaData CorData"> 08/2023 – 08/2025</div>
            <div className="ExperienciaDados">
              <h1>TIMAC Agro Brasil</h1>
              <ul>
                <li>
                  <span className="destaqueOrangeBoll">●</span> Elaboração e
                  gerenciamento de relatórios no Excel, otimizando a organização
                  de dados para diferentes setores.
                </li>
                <li>
                  <span className="destaqueOrangeBoll">●</span>Atendimento a
                  colaboradores novos e antigos, auxiliando na resolução de
                  dúvidas operacionais e suporte técnico a aplicativos internos.
                </li>
              </ul>
            </div>
            <div className="ExperienciaSkills">
              <h1>Assistente de Escritório Administrativo</h1>
              <ul>
                <li>Análise de dados</li>
                <li>Excel</li>
                <li>Suporte técnico</li>
                <li>Salesforce.com</li>
                <li>Gestão de Relatórios</li>
                <li>Microsoft Outlook</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experiencia;
