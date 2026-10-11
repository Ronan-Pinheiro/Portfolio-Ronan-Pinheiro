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
          <section ref={sectionRefs.sobre} id="sobre">
            <Sobre />
          </section>
          <section ref={sectionRefs.habilidades} id="habilidades">
            <Revelar>
              <Habilidades />
            </Revelar>
          </section>
          <section ref={sectionRefs.projetos} id="projetos">
            <Revelar>
              <Projetos />
            </Revelar>
          </section>
          <section ref={sectionRefs.experiencia} id="experiencia">
            <Revelar>
              <Experiencia />
            </Revelar>
          </section>
          <section ref={sectionRefs.formacao} id="formacao">
            <Revelar>
              <FormacaoAcademica />
            </Revelar>
          </section>
          <section ref={sectionRefs.feiras} id="feiras">
            <Revelar>
              <Feiras />
            </Revelar>
          </section>
          <section ref={sectionRefs.contato} id="contato">
            <Revelar>
              <Contatos />
            </Revelar>
          </section>
        </main>
      </MotionConfig>
    </ThemeProvider>
  );
}
