import { useRef } from 'react';
import { MotionConfig } from 'motion/react';
import Contatos from './components/Contatos';
import Experiencia from './components/Experiencia';
import Feiras from './components/Feiras';
import FormacaoAcademica from './components/FormacaoAcademica';
import Habilidades from './components/Habilidades';
import Header from './components/Header';
import Projetos from './components/Projetos';
import Revelar from './components/Revelar';
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
      <MotionConfig reducedMotion="never">
        <Header sections={sectionRefs} />

        <main>
          <section
            ref={sectionRefs.sobre}
            id="sobre"
            className="bg-portfolio-bg light:bg-claro-bg"
          >
            <Sobre />
          </section>
          <section
            ref={sectionRefs.habilidades}
            id="habilidades"
            className="bg-portfolio-bg light:bg-claro-bg"
          >
            <Revelar>
              <Habilidades />
            </Revelar>
          </section>
          <section
            ref={sectionRefs.projetos}
            id="projetos"
            className="bg-portfolio-mid light:bg-claro-surface"
          >
            <Revelar>
              <Projetos />
            </Revelar>
          </section>
          <section
            ref={sectionRefs.experiencia}
            id="experiencia"
            className="bg-portfolio-primary light:bg-claro-espresso"
          >
            <Revelar>
              <Experiencia />
            </Revelar>
          </section>
          <section
            ref={sectionRefs.formacao}
            id="formacao"
            className="bg-portfolio-bg light:bg-claro-bg"
          >
            <Revelar>
              <FormacaoAcademica />
            </Revelar>
          </section>
          <section
            ref={sectionRefs.feiras}
            id="feiras"
            className="bg-portfolio-bg light:bg-claro-bg"
          >
            <Revelar>
              <Feiras />
            </Revelar>
          </section>
          <section
            ref={sectionRefs.contato}
            id="contato"
            className="bg-portfolio-primary light:bg-claro-espresso"
          >
            <Revelar>
              <Contatos />
            </Revelar>
          </section>
        </main>
      </MotionConfig>
    </ThemeProvider>
  );
}
