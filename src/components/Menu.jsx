import React from 'react';
import '../styles/Menu.css';
import FotoRonan from '../Imagens/ImagensFotoRonan.png';

const Menu = ({ menuOpen, toggleMenu, sections }) => {
  if (!sections) {
    console.error('Erro: sections está undefined no Menu');
    return null;
  }

  // Função para rolar suavemente até a seção
  const scrollToSection = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      toggleMenu(); // Fecha o menu ao clicar
    }
  };

  const menuItems = [
    { label: 'Sobre', ref: sections.sobre },
    { label: 'Habilidades', ref: sections.habilidades },
    { label: 'Projetos', ref: sections.projetos },
    { label: 'Experiência', ref: sections.experiencia },
    { label: 'Formação Acadêmica', ref: sections.formacao },
    { label: 'Feiras', ref: sections.feiras },
    { label: 'Contato', ref: sections.contato },
  ];

  return (
    <nav className={`sidebar ${menuOpen ? 'open' : ''}`}>
      <div className="profile">
        <img
          src={FotoRonan}
          alt="Ronan Pinheiro Otávio"
          className="profile-pic"
        />
        <h2 className="HabilidadesTitle">
          <span className="linha"></span> Ronan Pinheiro Otávio{' '}
        </h2>
      </div>
      <ul>
        {menuItems.map(({ label, ref }) => (
          <li key={label} onClick={() => scrollToSection(ref)}>
            {label}
          </li>
        ))}
      </ul>
      <a
        className="download-btn"
        href="/RonanCurriculo.pdf"
        download="RonanCurriculo.pdf"
      >
        <button>Download currículo .PDF</button>
      </a>
    </nav>
  );
};

export default Menu;
