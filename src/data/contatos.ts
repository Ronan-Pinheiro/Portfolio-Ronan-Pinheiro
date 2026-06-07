import emailIcon from '../Imagens/email.svg';
import phoneIcon from '../Imagens/phone.svg';
import linkedinIcon from '../Imagens/linkedin.svg';
import githubIcon from '../Imagens/github.svg';
import instaIcon from '../Imagens/Icone - Insta.svg';
import type { Contato } from '../types';

export const contatosData: Contato[] = [
  {
    icon: emailIcon,
    title: 'E-mail',
    value: 'ronanpinheiro001@gmail.com',
    link: 'mailto:ronanpinheiro001@gmail.com',
  },
  {
    icon: phoneIcon,
    title: 'Telefone',
    value: '(62) 9 9341-1237',
    link: 'tel:+5562993411237',
  },
  {
    icon: linkedinIcon,
    title: 'LinkedIn',
    value: 'Ronan Pinheiro Otávio',
    link: 'https://www.linkedin.com/in/ronan-pinheiro-ot%C3%A1vio-37173425b/',
  },
  {
    icon: githubIcon,
    title: 'GitHub',
    value: 'Ronan_Pinheiro',
    link: 'https://github.com/Ronan-Pinheiro',
  },
  {
    icon: instaIcon,
    title: 'Instagram',
    value: 'Ronan._.Pinheiro',
    link: 'https://www.instagram.com/Ronan._.Pinheiro',
  },
];
