import { useEffect, useState, type RefObject } from 'react';
import { Download, Moon, Sun } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useTheme } from '../contexts/ThemeContext';
import type { HeaderProps } from '../types';
import Logo from './Logo';
import Menu from './Menu';
import { RabiscoSublinhado } from './Rabiscos';

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

  const irPara = (ref: RefObject<HTMLElement | null>) =>
    ref.current?.scrollIntoView({ behavior: 'smooth' });

  const links = [
    { label: 'Sobre', ref: sections.sobre },
    { label: 'Habilidades', ref: sections.habilidades },
    { label: 'Projetos', ref: sections.projetos },
    { label: 'Experiência', ref: sections.experiencia },
    { label: 'Formação', ref: sections.formacao },
    { label: 'Contato', ref: sections.contato },
  ];

  const iconButtonClass =
    'flex h-10 w-10 cursor-pointer items-center justify-center rounded-md text-white transition-[color,scale] duration-300 active:scale-90 hover:text-portfolio-accent light:text-claro-cream light:hover:text-claro-sand';

  return (
    <>
      <header className="fixed top-0 left-0 z-1000 flex h-[60px] w-full items-center gap-3 border-b border-portfolio-muted/10 bg-portfolio-primary px-3 min-[1050px]:px-8 shadow-[0_2px_5px_rgba(0,0,0,0.1)] transition-colors duration-300 light:bg-claro-espresso light:shadow-none">
        <button
          type="button"
          className={`${iconButtonClass} min-[1050px]:hidden`}
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="menu-navegacao"
        >
          {/* Três traços que viram um X ao abrir o menu */}
          <span className="relative block h-[18px] w-[24px]" aria-hidden="true">
            <motion.span
              className="absolute top-0 left-0 h-[2.5px] w-full rounded-sm bg-current"
              animate={menuOpen ? { y: 8, rotate: 45 } : { y: 0, rotate: 0 }}
              transition={{ duration: 0.25, ease: [0.45, 0, 0.25, 1] }}
            />
            <motion.span
              className="absolute top-[8px] left-0 h-[2.5px] w-full rounded-sm bg-current"
              animate={
                menuOpen
                  ? { opacity: 0, scaleX: 0.3 }
                  : { opacity: 1, scaleX: 1 }
              }
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="absolute top-[16px] left-0 h-[2.5px] w-full rounded-sm bg-current"
              animate={menuOpen ? { y: -8, rotate: -45 } : { y: 0, rotate: 0 }}
              transition={{ duration: 0.25, ease: [0.45, 0, 0.25, 1] }}
            />
          </span>
        </button>

        <button
          type="button"
          className="cursor-pointer font-display text-2xl font-black tracking-tight text-portfolio-muted transition-colors hover:text-white light:text-claro-cream light:hover:text-white"
          onClick={scrollToTop}
          aria-label="Portfólio, voltar ao início"
        >
          <Logo className="mr-2 inline-block h-7 w-7 align-[-6px]" />
          portfólio
          <span className="text-portfolio-accent light:text-claro-sand">.</span>
        </button>

        {/* Links das seções: só no computador; no celular ficam no menu lateral */}
        <nav
          aria-label="Seções"
          className="ml-auto hidden items-center gap-7 min-[1050px]:flex"
        >
          {links.map(({ label, ref }) => (
            <button
              key={label}
              type="button"
              onClick={() => irPara(ref)}
              className="group relative cursor-pointer py-1 text-sm font-semibold text-portfolio-muted transition-colors hover:text-white light:text-claro-cream light:hover:text-white"
            >
              {label}
              <RabiscoSublinhado className="absolute -bottom-1.5 left-0 w-full text-portfolio-accent light:text-claro-sand" />
            </button>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3 min-[1050px]:ml-4">
          <a
            href="/RonanCurriculo.pdf"
            download="RonanCurriculo.pdf"
            className="hidden items-center gap-2 rounded-md bg-portfolio-accent px-4 py-2 text-sm font-bold text-portfolio-bg shadow-[3px_3px_0_0_rgba(230,230,238,0.3)] transition-[translate,background-color,box-shadow] hover:bg-portfolio-accent-hover active:translate-x-[2px] active:translate-y-[2px] min-[1050px]:flex light:bg-claro-accent light:text-claro-cream light:shadow-[3px_3px_0_0_var(--color-claro-sand)] light:hover:bg-claro-accent-hover"
          >
            Currículo
            <Download size={16} aria-hidden="true" />
          </a>

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
                {isDark ? <Moon size={22} /> : <Sun size={22} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
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
