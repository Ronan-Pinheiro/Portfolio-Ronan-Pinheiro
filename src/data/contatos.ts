import { Mail, Phone } from 'lucide-react';
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from '../components/BrandIcons';
import type { Contato } from '../types';

export const contatosData: Contato[] = [
  {
    icon: Mail,
    title: 'E-mail',
    value: 'ronanpinheiro001@gmail.com',
    link: 'mailto:ronanpinheiro001@gmail.com',
  },
  {
    icon: Phone,
    title: 'Telefone',
    value: '(62) 9 9341-1237',
    link: 'tel:+5562993411237',
  },
  {
    icon: LinkedinIcon,
    title: 'LinkedIn',
    value: 'Ronan Pinheiro Otávio',
    link: 'https://www.linkedin.com/in/ronan-pinheiro-ot%C3%A1vio-37173425b/',
  },
  {
    icon: GithubIcon,
    title: 'GitHub',
    value: 'Ronan_Pinheiro',
    link: 'https://github.com/Ronan-Pinheiro',
  },
  {
    icon: InstagramIcon,
    title: 'Instagram',
    value: 'Ronan._.Pinheiro',
    link: 'https://www.instagram.com/Ronan._.Pinheiro',
  },
];
