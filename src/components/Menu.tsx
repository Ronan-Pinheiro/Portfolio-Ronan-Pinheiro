import type { RefObject } from 'react';
import { Download } from 'lucide-react';
import { motion } from 'motion/react';
import FotoRonan from '../Imagens/ImagensFotoRonan.png';
import type { MenuProps, SectionRefs } from '../types';

interface MenuItem {
  label: string;
  ref: SectionRefs[keyof SectionRefs];
}

export default function Menu({ menuOpen, toggleMenu, sections }: MenuProps) {
  const scrollToSection = (ref: RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    toggleMenu();
  };

  const menuItems: MenuItem[] = [
    { label: 'Sobre', ref: sections.sobre },
    { label: 'Habilidades', ref: sections.habilidades },
    { label: 'Projetos', ref: sections.projetos },
    { label: 'Experiência', ref: sections.experiencia },
    { label: 'Formação Acadêmica', ref: sections.formacao },
    { label: 'Feiras', ref: sections.feiras },
    { label: 'Contato', ref: sections.contato },
  ];

  return (
    <motion.nav
      id="menu-navegacao"
      className="fixed top-0 left-0 z-200 flex h-full w-[300px] flex-col overflow-y-auto bg-portfolio-primary p-5 shadow-[2px_0_10px_rgba(0,0,0,0.2)] light:bg-claro-surface"
      aria-label="Menu de navegação"
      aria-hidden={!menuOpen}
      inert={!menuOpen}
      initial={false}
      animate={{ x: menuOpen ? 0 : -320 }}
      transition={{ duration: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
    >
      <div className="mt-[80px] mb-5 flex flex-col items-center">
        <img
          src={FotoRonan}
          alt="Ronan Pinheiro Otávio"
          className="h-[200px] w-[200px] rounded-full border-[3px] border-portfolio-muted object-cover light:border-claro-accent"
        />
        <h2 className="mt-2.5 flex items-center text-xl text-portfolio-blue light:text-claro-text">
          <span className="portfolio-linha" />
          Ronan Pinheiro Otávio
        </h2>
      </div>

      <ul>
        {menuItems.map(({ label, ref }, i) => (
          <motion.li
            key={label}
            initial={false}
            animate={menuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
            transition={{
              duration: 0.25,
              delay: menuOpen ? 0.1 + i * 0.03 : 0,
            }}
          >
            <button
              type="button"
              onClick={() => scrollToSection(ref)}
              className="w-full cursor-pointer rounded-[5px] p-2.5 text-left text-portfolio-muted transition-colors hover:bg-portfolio-bg light:text-claro-text light:hover:bg-claro-surface-2"
            >
              {label}
            </button>
          </motion.li>
        ))}
      </ul>

      <a
        className="mt-auto flex items-center justify-center gap-2 rounded-[5px] bg-portfolio-accent p-2.5 text-lg text-portfolio-primary transition-colors hover:bg-portfolio-muted active:scale-[0.97] light:bg-claro-accent light:text-claro-bg light:hover:bg-claro-accent-hover"
        href="/RonanCurriculo.pdf"
        download="RonanCurriculo.pdf"
      >
        <Download size={20} aria-hidden="true" />
        Download currículo .PDF
      </a>
    </motion.nav>
  );
}
