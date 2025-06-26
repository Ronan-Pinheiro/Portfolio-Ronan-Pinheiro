import React, { useState } from 'react';
import ProjetoModal from './ProjetoModal.jsx';
import '../styles/Projetos.css';
import AnimaisFantasticos from '../Imagens/Projeto_Animais Fantasticos.png';
import Projeto_PinguimRun from '../Imagens/Projeto_PinguimRun.png';
import Projeto_bebidafiufiu from '../Imagens/Projeto_bebidafiufiu.png';
import Projeto_bebidafiufiuT from '../Imagens/Projeto_bebidafiufiuT.png';
import Projeto_Projeto_15_minutos from '../Imagens/Projeto_Projeto_15_minutos.png';
import Projeto_Florest from '../Imagens/Projeto_Florest.png';
import Projeto_Dogs from '../Imagens/Projeto_Dogs.png';
import Projeto_cargaIndivisivel from '../Imagens/Projeto_CargaIndivisível.png';
// import Projeto_video_cargaIndivisivel from '../Imagens/VideoCenário2CargaIndivisível001.mp4';

const projetosData = [
  {
    titulo: 'Dogs Social',

    descricao: `Aplicação desenvolvida durante o curso de React da Origamid. 
O projeto simula uma rede social para amantes de cachorros, onde é possível:

• Criar conta  
• Fazer login  
• Postar fotos dos pets  
• Comentar e visualizar o feed da comunidade.

Construído com React, utilizando rotas, autenticação, consumo de API e boas práticas de código.`,
    tecnologias: ['React', 'JavaScript', 'CSS', 'HTML', 'API'],
    imagens: [Projeto_Dogs],
    link: 'https://dogs-kohl-one.vercel.app',
  },
  {
    titulo: 'Forest Retreat',
    descricao: `Projeto desenvolvido durante o curso de Tailwind CSS da Origamid.

A proposta é apresentar uma experiência imersiva de hospedagem ecológica, com um layout moderno, responsivo e acessível.

Construído com:
- HTML semântico
- Tailwind CSS
- Componentização e responsividade.`,
    tecnologias: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
    imagens: [Projeto_Florest],
    link: 'https://ronan-pinheiro.github.io/Forest-Retreat---Eco-Experience/',
  },
  {
    titulo: 'Animais Fantásticos',
    descricao: `Projeto criado como parte dos estudos com JavaScript, HTML e CSS, durante o curso da Origamid.

O site apresenta informações curiosas sobre animais fantásticos, aplicando:
- Manipulação do DOM
- Interatividade com JS puro
- Estilização com CSS moderno

Tecnologias:
- HTML
- CSS
- JavaScript`,
    tecnologias: ['JavaScript', 'HTML', 'CSS'],
    imagens: [AnimaisFantasticos],
    link: 'https://animais-fantasticos-tau.vercel.app/',
  },
  {
    titulo: 'Mini Game - Pinguim Run',
    descricao: `O Pinguim Run nasceu como um projeto pessoal para trazer diversão ao meu portfólio.
A ideia de um pinguim fugindo de um Yeti em um cenário congelante tornou esse mini game único e envolvente. 
Construído com:
- React
- Hook personalizado de game loop
- Controle de colisão e score
- Animações com CSS`,
    tecnologias: ['React', 'JavaScript', 'HTML', 'CSS'],
    imagens: [Projeto_PinguimRun],
    link: 'https://mini-game-pinguim-run.vercel.app/',
  },
  {
    titulo: 'Bebida Fiu Fiu - Machado de Assis',
    descricao: `Projeto em AR criado no estágio na Fábrica de Software do SENAI Fatesg.
Ao escanear o QR Code na garrafa, o usuário acessa um mini game com Machado de Assis, respondendo perguntas sobre literatura.
Ao acertar, recebia um código que, durante a festa de lançamento, era trocado por um drink inspirado no autor.
`,
    tecnologias: ['8th Wall', 'A-Frame', 'JavaScript', 'WebAR'],
    imagens: [Projeto_bebidafiufiu],
    link: 'https://bebidafiufiu.8thwall.app/shotsma1/',
  },
  {
    titulo: 'Bebida Fiu Fiu - Tiradentes',
    descricao: `Projeto em AR criado no estágio na Fábrica de Software do SENAI Fatesg.
Ao escanear o QR Code na garrafa, o usuário acessa um mini game com Tiradentes, respondendo perguntas sobre literatura.
Ao acertar, recebia um código que, durante a festa de lançamento, era trocado por um drink inspirado no autor.
`,
    tecnologias: ['8th Wall', 'A-Frame', 'JavaScript', 'WebAR'],
    imagens: [Projeto_bebidafiufiuT],
    link: 'https://bebidafiufiu.8thwall.app/shotsti2/',
  },
  {
    titulo: 'Carga Indivisível-VR',
    descricao: `Projeto acadêmico em Realidade Virtual (VR), focado em treinamentos de Normas Regulamentadoras (NR). 
    O jogador atua como caminhoneiro, seguindo um checklist de segurança antes de transportar uma carga indivisível. 
    As decisões influenciam o desfecho:
    • Ao ignorar etapas ou escolher o caminho errado (como a ponte), o caminhão colide.
    • Ao cumprir os procedimentos e seguir a rota correta, há uma animação de final bem-sucedido.`,
    tecnologias: ['Unity', 'C#', 'VR'],
    imagens: [Projeto_cargaIndivisivel],
    // video: Projeto_video_cargaIndivisivel,
    link: 'https://youtu.be/7iExPA784BE',
  },
  {
    titulo: '15 MINUTOS SALVAM VIDAS!',
    descricao: `Projeto acadêmico desenvolvido durante a faculdade, com foco em campanhas de conscientização sobre o combate ao mosquito da dengue.

Simples, direto e funcional, com:
- HTML
- CSS
- JavaScript

Aplicação interativa e informativa com layout adaptado para múltiplos dispositivos.`,
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    imagens: [Projeto_Projeto_15_minutos],
    link: 'https://ronan-pinheiro.github.io/Combata-o-Mosquito.github.io/',
  },
];

const Projetos = () => {
  const [projetoSelecionado, setProjetoSelecionado] = useState(null);

  return (
    <section className="Projetos">
      <div className="LinhaVerticalMundProjetos" />
      <div className="ProjetosContainer">
        <p className="ProjetosTitle">
          <span className="linha"></span> Projetos
        </p>
        <p className="ProjetosDescricao">
          Atualmente, estou desenvolvendo projetos web utilizando{' '}
          <span className="destaque">React</span> e outras tecnologias para
          criar experiências dinâmicas e interativas. Além disso, exploro{' '}
          <span className="destaque">VR</span> e{' '}
          <span className="destaque">AR</span> para experiências imersivas.
        </p>
      </div>

      <div className="ProjetosProjetos">
        <ul>
          {projetosData.map((proj, index) => (
            <li key={index} onClick={() => setProjetoSelecionado(proj)}>
              <div className="ProjetosItem">
                <img
                  src={proj.imagens[0]}
                  alt={proj.titulo}
                  className="ProjetosImagem"
                />
                <div className="ProjetosOverlay">
                  <span className="ProjetosNome">{proj.titulo}</span>
                  <button className="ProjetosBotao">Ver Projeto</button>
                </div>
                <div className="ProjetosDivisor" />
              </div>
            </li>
          ))}
        </ul>
      </div>

      {projetoSelecionado && (
        <ProjetoModal
          projeto={projetoSelecionado}
          onClose={() => setProjetoSelecionado(null)}
        />
      )}
    </section>
  );
};

export default Projetos;
