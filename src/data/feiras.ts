import IMG001 from '../Imagens/IMG001Feira.jpg';
import IMG002 from '../Imagens/IMG002Feira.jpg';
import VideoFeira from '../Imagens/VideoFeira.mp4';
import type { FeiraItem } from '../types';

export const feirasData: FeiraItem[] = [
  {
    titulo: 'Processo de Criação',
    descricao:
      'Apresentamos as etapas-chave para criar simulações realistas: modelagem de ambientes, programação de interações e integração das normas de segurança.',
    tipo: 'imagem',
    src: IMG001,
  },
  {
    titulo: 'Entrevista Sobre a Experiência',
    descricao:
      'Reação de um participante depois de experienciar um treinamento de multiplas escolhas.',
    tipo: 'video',
    src: VideoFeira,
  },
  {
    titulo: 'Ambiente da HUB Goiás',
    descricao:
      'Implementamos uma área dedicada com 6 estações VR independentes, permitindo que grupos interagissem com diferentes simulações.',
    tipo: 'imagem',
    src: IMG002,
  },
];
