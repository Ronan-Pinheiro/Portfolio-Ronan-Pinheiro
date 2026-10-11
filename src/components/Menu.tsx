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
      className="fixed top-0 left-0 z-200 flex h-full w-[300px] flex-col overflow-y-auto bg-portfolio-primary p-5 shadow-[2px_0_10px_rgba(0,0,0,0.2)] light:bg-claro-espresso"
      aria-label="Menu de navegação"
      aria-hidden={!menuOpen}
      inert={!menuOpen}
      initial={false}
      animate={{ x: menuOpen ? 0 : -320 }}
      transition={{ duration: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
    >
      <div className="mt-[76px] mb-6 flex flex-col items-center text-center">
        <img
          src={FotoRonan}
          alt="Ronan Pinheiro Otávio"
          className="h-[180px] w-[180px] rounded-lg object-cover"
        />
        <h2 className="mt-4 text-xl font-bold text-portfolio-muted light:text-claro-cream">
          Ronan Pinheiro Otávio
        </h2>
        <p className="mt-1 text-xs font-semibold tracking-wider text-portfolio-accent uppercase light:text-claro-sand">
          Analista de Dados · Dev Web
        </p>
      </div>

      <ul className="border-t border-portfolio-muted/15 light:border-claro-cream/15">
        {menuItems.map(({ label, ref }, i) => (
          <motion.li
            key={label}
            initial={false}
            animate={menuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
            transition={{
              duration: 0.25,
              delay: menuOpen ? 0.1 + i * 0.03 : 0,
            }}
            className="border-b border-portfolio-muted/15 light:border-claro-cream/15"
          >
            <button
              type="button"
              onClick={() => scrollToSection(ref)}
              className="group flex w-full cursor-pointer items-center gap-3 px-2 py-3 text-left text-portfolio-muted transition-colors hover:text-portfolio-accent light:text-claro-cream light:hover:text-claro-sand"
            >
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-[2px] bg-portfolio-muted/30 transition-colors group-hover:bg-portfolio-accent light:bg-claro-cream/30 light:group-hover:bg-claro-sand"
              />
              {label}
            </button>
          </motion.li>
        ))}
      </ul>

      <a
        className="mt-auto mb-1 flex items-center justify-center gap-3 rounded-md bg-portfolio-accent p-2.5 text-lg font-semibold text-portfolio-bg shadow-[4px_4px_0_0_rgba(230,230,238,0.3)] transition-[transform,background-color] hover:bg-portfolio-muted active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_0_rgba(230,230,238,0.3)] light:bg-claro-accent light:text-claro-cream light:shadow-[4px_4px_0_0_var(--color-claro-sand)] light:hover:bg-claro-accent-hover light:active:shadow-[2px_2px_0_0_var(--color-claro-sand)]"
        href="/RonanCurriculo.pdf"
        download="RonanCurriculo.pdf"
      >
        Baixar currículo
        <Download size={18} aria-hidden="true" />
      </a>
    </motion.nav>
  );
}
