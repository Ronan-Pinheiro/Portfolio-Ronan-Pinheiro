import React from 'react';
import '../styles/FormaçãoAcademica.css'; // Importando o arquivo CSS

const FormaçãoAcademica = () => {
  return (
    <section className="FormaçãoAcademica">
      <div className="FormaçãoAcademicaContainer">
        <p className="FormaçãoAcademicaTitle">
          <span className="linha"></span> Formação Acadêmica{' '}
        </p>
      </div>
      <div className="CaixaDasFormçoes">
        {/* Universidade Cruzeiro do Sul Ciencia da Computação */}
        <div className="FormaçãoAcademicaDescricao">
          <div className="LinhaContainer">
            <div className="LinhaVertical"></div>
            <div className="LinhaHorizontal"></div>
          </div>
          <div className="FormaçãoAcademicaTexto">
            <h3>Ciência da Computação - Universidade Cruzeiro do Sul</h3>
            <p className="FormaçãoAcademicaData">08/2025 – 06/2029</p>
            <p className="FormaçãoAcademicaConhecimento">
              Possuo conhecimentos em: Java, JavaScript, HTML5, CSS, React
              Native, React.js, Next.js.
            </p>
          </div>
        </div>

        {/* Universidade Cruzeiro do Sul */}
        <div className="FormaçãoAcademicaDescricao">
          <div className="LinhaContainer">
            <div className="LinhaVertical"></div>
            <div className="LinhaHorizontal"></div>
          </div>
          <div className="FormaçãoAcademicaTexto">
            <h3>
              Analise de Desenvolvimento de Sistemas - Universidade Cruzeiro do
              Sul
            </h3>
            <p className="FormaçãoAcademicaData">08/2023 – 06/2025</p>
            <p className="FormaçãoAcademicaConhecimento">
              Possuo conhecimentos em: Java, JavaScript, HTML5, CSS, React
              Native, React.js, Next.js.
            </p>
          </div>
        </div>

        {/* Técnico em Eletrotécnica - IF Goiano */}
        <div className="FormaçãoAcademicaDescricao ">
          <div className="LinhaContainer2">
            <div className="LinhaVertical"></div>
            <div className="LinhaHorizontal"></div>
          </div>
          <div className="FormaçãoAcademicaTexto">
            <h3>Técnico em Eletrotécnica - IF Goiano</h3>
            <p className="FormaçãoAcademicaData">01/2020 – 12/2022</p>
            <p className="FormaçãoAcademicaConhecimento">
              Possuo conhecimentos em: Circuitos elétricos, automação
              industrial, eletrônica, sistemas de controle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormaçãoAcademica;
