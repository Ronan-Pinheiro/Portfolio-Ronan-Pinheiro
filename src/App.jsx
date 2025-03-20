import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Sobre from './components/Sobre';
import Habilidades from './components/Habilidades';
import Header from './components/Header';
import Menu from './components/Menu';
import './styles/App.css';
import Projetos from './components/Projetos';
import Experiencia from './components/Experiencia';
import FormaçãoAcademica from './components/FormaçãoAcademica';
import Contatos from './components/Contatos';

const App = () => {
  console.log('App carregado'); // Para verificar se o App está sendo chamado
  // Criando referências para cada seção
  const sectionRefs = {
    sobre: useRef(null),
    habilidades: useRef(null),
    projetos: useRef(null),
    experiencia: useRef(null),
    formacao: useRef(null),
    contato: useRef(null),
  };

  // Estado para controlar o menu
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <React.StrictMode>
      {/*  Garantia de que sections está definido antes do Menu */}
      <Menu
        menuOpen={menuOpen}
        toggleMenu={toggleMenu}
        sections={sectionRefs}
      />
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
          <FormaçãoAcademica />
        </section>
        <section ref={sectionRefs.contato} id="contato">
          <Contatos />
        </section>
      </main>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
