import AnimaisFantasticos from '../Imagens/Projeto_Animais Fantasticos.png';
import Projeto_PinguimRun from '../Imagens/Projeto_PinguimRun.png';
import Projeto_bebidafiufiuT from '../Imagens/Projeto_bebidafiufiuT.png';
import Projeto_Florest from '../Imagens/Projeto_Florest.png';
import Projeto_Dogs from '../Imagens/Projeto_Dogs.png';
import Projeto_cargaIndivisivel from '../Imagens/Projeto_CargaIndivisível.png';
import Projeto_AutomacaoE2E from '../Imagens/Projeto_AutomacaoE2E.mp4';
import Projeto_cypress_Kabum from '../Imagens/Projeto_cypress_Kabum.png';
import type { Projeto } from '../types';

export const projetosData: Projeto[] = [
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
    titulo: 'Automação E2E - E-commerce (Cypress)',
    descricao: `Projeto de automação de testes End-to-End simulando o fluxo real de compra em um e-commerce.

  O teste executa:
  • Busca de produto
  • Seleção aleatória de item
  • Aplicação de filtros
  • Adição ao carrinho
  • Validações de URL e elementos da página

  O objetivo foi aplicar boas práticas de automação, criando testes independentes, com asserts robustos e organização de funções auxiliares.`,
    tecnologias: ['Cypress', 'JavaScript', 'Node.js', 'E2E Testing'],
    imagens: [Projeto_cypress_Kabum],
    video: Projeto_AutomacaoE2E,
    link: 'https://github.com/Ronan-Pinheiro/cypress-e2e-kabum',
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
    titulo: 'Bebida Fiu Fiu - Tiradentes',
    descricao: `Projeto em AR criado no estágio na Fábrica de Software do SENAI Fatesg.
  Ao escanear o QR Code na garrafa, o usuário acessa um mini game com Tiradentes, respondendo perguntas sobre literatura.
  Ao acertar, recebia um código que, durante a festa de lançamento, era trocado por um drink inspirado no autor.
  `,
    tecnologias: ['8th Wall', 'A-Frame', 'JavaScript', 'WebAR'],
    imagens: [Projeto_bebidafiufiuT],
    link: 'https://webarhub.8thwall.app/shotsti2/',
  },
  {
    titulo: 'Carga Indivisível-VR',
    descricao: `Projeto desenvolvido em Realidade Virtual (VR), focado em treinamentos de Normas Regulamentadoras (NR). 
    O jogador atua como caminhoneiro, seguindo um checklist de segurança antes de transportar uma carga indivisível. 
    As decisões influenciam o desfecho:
    • Ao ignorar etapas ou escolher o caminho errado (como a ponte), o caminhão colide.
    • Ao cumprir os procedimentos e seguir a rota correta, há uma animação de final bem-sucedido.`,
    tecnologias: ['Unity', 'C#', 'VR'],
    imagens: [Projeto_cargaIndivisivel],
    link: 'https://youtu.be/7iExPA784BE',
  },
];
