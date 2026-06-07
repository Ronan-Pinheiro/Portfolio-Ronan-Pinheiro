import { useState } from 'react';
import SolIcon from '../Imagens/sol.svg';
import LuaIcon from '../Imagens/lua.svg';
import { useTheme } from '../contexts/ThemeContext';
import type { HeaderProps } from '../types';
import Menu from './Menu';

export default function Header({ sections }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="fixed top-0 left-0 z-1000 flex w-full items-center justify-between bg-portfolio-primary px-5 py-2.5 shadow-[0_2px_5px_rgba(0,0,0,0.1)]">
        <div
          className={`group flex cursor-pointer flex-col transition-transform duration-300 ease-in-out hover:[&>div]:bg-portfolio-accent ${
            menuOpen ? '-rotate-90 [&>div]:bg-portfolio-accent' : ''
          }`}
          onClick={toggleMenu}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && toggleMenu()}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          <div className="my-1 h-[3px] w-[25px] bg-white transition-colors duration-300" />
          <div className="my-1 h-[3px] w-[25px] bg-white transition-colors duration-300" />
          <div className="my-1 h-[3px] w-[25px] bg-white transition-colors duration-300" />
        </div>

        <h1
          className="grow cursor-pointer pr-[25px] text-center text-2xl font-bold text-portfolio-blue-light hover:text-white"
          onClick={scrollToTop}
        >
          Portfólio
        </h1>

        <img
          className={`absolute top-2.5 right-5 h-[30px] w-[30px] cursor-pointer transition-opacity duration-300 ${
            isDark ? 'pointer-events-none opacity-0' : 'pointer-events-auto opacity-100'
          }`}
          src={SolIcon}
          alt="Sol"
          onClick={toggleTheme}
        />
        <img
          className={`absolute top-2.5 right-5 h-[30px] w-[30px] cursor-pointer transition-opacity duration-300 ${
            isDark ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
          }`}
          src={LuaIcon}
          alt="Lua"
          onClick={toggleTheme}
        />
      </header>

      {menuOpen && (
        <div
          className="fixed inset-0 z-19 bg-transparent"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <Menu menuOpen={menuOpen} toggleMenu={toggleMenu} sections={sections} />
    </>
  );
}
