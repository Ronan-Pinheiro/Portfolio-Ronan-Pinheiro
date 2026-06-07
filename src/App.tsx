import { useRef } from 'react';
import Contatos from './components/Contatos';
import Experiencia from './components/Experiencia';
import Feiras from './components/Feiras';
import FormacaoAcademica from './components/FormacaoAcademica';
import Habilidades from './components/Habilidades';
import Header from './components/Header';
import Projetos from './components/Projetos';
import Sobre from './components/Sobre';
import { ThemeProvider } from './contexts/ThemeContext';
import type { SectionRefs } from './types';

export default function App() {
  const sectionRefs: SectionRefs = {
    sobre: useRef<HTMLElement>(null),
    habilidades: useRef<HTMLElement>(null),
    projetos: useRef<HTMLElement>(null),
    experiencia: useRef<HTMLElement>(null),
    formacao: useRef<HTMLElement>(null),
    feiras: useRef<HTMLElement>(null),
    contato: useRef<HTMLElement>(null),
  };

  return (
    <ThemeProvider>
      <Header sections={sectionRefs} />

      <main>
        <section ref={sectionRefs.sobre} id="sobre">
          <Sobre />
        </section>
        <section ref={sectionRefs.habilidades} id="habilidades">
          <Habilidades />
        </section>
        <section ref={sectionRefs.projetos} id="projetos">
          <Projetos />
        </section>
        <section ref={sectionRefs.experiencia} id="experiencia">
          <Experiencia />
        </section>
        <section ref={sectionRefs.formacao} id="formacao">
          <FormacaoAcademica />
        </section>
        <section ref={sectionRefs.feiras} id="feiras">
          <Feiras />
        </section>
        <section ref={sectionRefs.contato} id="contato">
          <Contatos />
        </section>
      </main>
    </ThemeProvider>
  );
}
