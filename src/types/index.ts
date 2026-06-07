import type { RefObject } from 'react';

export interface SectionRefs {
  sobre: RefObject<HTMLElement | null>;
  habilidades: RefObject<HTMLElement | null>;
  projetos: RefObject<HTMLElement | null>;
  experiencia: RefObject<HTMLElement | null>;
  formacao: RefObject<HTMLElement | null>;
  feiras: RefObject<HTMLElement | null>;
  contato: RefObject<HTMLElement | null>;
}

export interface MenuProps {
  menuOpen: boolean;
  toggleMenu: () => void;
  sections: SectionRefs;
}

export interface HeaderProps {
  sections: SectionRefs;
}

export interface Projeto {
  titulo: string;
  descricao: string;
  tecnologias: string[];
  imagens: string[];
  link: string;
  video?: string;
}

export interface ProjetoModalProps {
  projeto: Projeto;
  onClose: () => void;
}

export interface Contato {
  icon: string;
  title: string;
  value: string;
  link: string;
}

export interface Habilidade {
  nome: string;
  icon: string;
  alt: string;
}

export interface ExperienciaItem {
  periodo: string;
  empresa: string;
  cargo: string;
  responsabilidades: string[];
  skills: string[];
}

export interface FormacaoItem {
  curso: string;
  instituicao: string;
  periodo: string;
  conhecimentos: string;
}

export interface FeiraItem {
  titulo: string;
  descricao: string;
  tipo: 'imagem' | 'video';
  src: string;
}

export type Theme = 'light' | 'dark';

export interface ThemeContextValue {
  theme: Theme;
  isDark: boolean;
  toggleTheme: () => void;
}
