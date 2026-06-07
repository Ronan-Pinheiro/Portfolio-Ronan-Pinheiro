import type { RefObject } from 'react';
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
    <nav
      className={`fixed top-0 z-200 flex h-full w-[300px] flex-col bg-portfolio-primary p-5 shadow-[2px_0_10px_rgba(0,0,0,0.2)] transition-[left] duration-300 ease-in-out ${
        menuOpen ? 'left-0' : 'left-[-300px]'
      }`}
      aria-label="Menu de navegação"
    >
      <div className="mt-[100px] mb-5 flex flex-col items-center">
        <img
          src={FotoRonan}
          alt="Ronan Pinheiro Otávio"
          className="h-[200px] w-[200px] rounded-full border-[3px] border-portfolio-muted"
        />
        <h2 className="mt-2.5 flex items-center text-xl text-portfolio-blue">
          <span className="portfolio-linha" />
          Ronan Pinheiro Otávio{' '}
        </h2>
      </div>

      <ul className="[&_li]:cursor-pointer [&_li]:rounded-[5px] [&_li]:p-2.5 [&_li]:text-portfolio-muted [&_li]:transition [&_li:hover]:bg-portfolio-bg">
        {menuItems.map(({ label, ref }) => (
          <li key={label} onClick={() => scrollToSection(ref)}>
            {label}
          </li>
        ))}
      </ul>

      <a
        className="mt-auto flex cursor-pointer justify-center rounded-[5px] bg-portfolio-accent p-2.5 text-lg text-portfolio-primary transition-colors hover:bg-portfolio-muted"
        href="/RonanCurriculo.pdf"
        download="RonanCurriculo.pdf"
      >
        <button type="button">Download currículo .PDF</button>
      </a>
    </nav>
  );
}
