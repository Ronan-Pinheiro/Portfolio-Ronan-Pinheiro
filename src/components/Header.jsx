import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import '../styles/Header.css';
import SolIcon from '../Imagens/sol.svg';
import LuaIcon from '../Imagens/lua.svg';

const Header = ({ sections }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDay, setIsDay] = useState(localStorage.getItem('theme') === 'light'); // O padrão agora é "dark", ou seja, o modo escuro

  const toggleTheme = () => {
    setIsDay((prev) => {
      const newTheme = !prev ? 'light' : 'dark'; // Alterando para alternar entre claro e escuro
      localStorage.setItem('theme', newTheme); // Salva o tema no localStorage
      return !prev;
    });
  };

  useEffect(() => {
    // Apenas muda a classe do body para aplicar o tema
    if (isDay) {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    } else {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    }
  }, [isDay]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <header className="header">
        <div
          className={`menu-icon ${menuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h1 className="h1header" onClick={scrollToTop}>
          Portfólio
        </h1>

        {/* Renderiza os ícones de forma condicional */}
        <img
          className={`icon sol-icon ${isDay ? 'visible' : 'hidden'}`}
          src={SolIcon}
          alt="Sol"
          onClick={toggleTheme}
        />
        <img
          className={`icon lua-icon ${isDay ? 'hidden' : 'visible'}`}
          src={LuaIcon}
          alt="Lua"
          onClick={toggleTheme}
        />
      </header>

      {/* Overlay para capturar cliques fora do menu e fechar quando aberto */}
      {menuOpen && (
        <div
          className="overlay"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <Menu menuOpen={menuOpen} toggleMenu={toggleMenu} sections={sections} />
    </>
  );
};

export default Header;
