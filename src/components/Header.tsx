import { useEffect, useState } from 'react';
import { Menu as MenuIcon, Moon, Sun, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
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

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  const iconButtonClass =
    'flex h-10 w-10 cursor-pointer items-center justify-center rounded-md text-white transition-colors duration-300 hover:text-portfolio-accent light:text-claro-text light:hover:text-claro-accent';

  return (
    <>
      <header className="fixed top-0 left-0 z-1000 flex h-[60px] w-full items-center justify-between bg-portfolio-primary px-3 shadow-[0_2px_5px_rgba(0,0,0,0.1)] transition-colors duration-300 light:bg-claro-surface">
        <button
          type="button"
          className={iconButtonClass}
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="menu-navegacao"
        >
          {menuOpen ? <X size={26} /> : <MenuIcon size={26} />}
        </button>

        <button
          type="button"
          className="cursor-pointer text-2xl font-bold text-portfolio-blue-light transition-colors hover:text-white light:text-claro-accent light:hover:text-claro-text"
          onClick={scrollToTop}
        >
          Portfólio
        </button>

        <button
          type="button"
          className={iconButtonClass}
          onClick={toggleTheme}
          aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isDark ? 'lua' : 'sol'}
              initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
              transition={{ duration: 0.2 }}
              className="flex"
            >
              {isDark ? <Moon size={24} /> : <Sun size={24} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-199 bg-black/40"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>

      <Menu menuOpen={menuOpen} toggleMenu={toggleMenu} sections={sections} />
    </>
  );
}
