import type { ComponentType, RefObject } from 'react';
import type { LucideProps } from 'lucide-react';

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
  /** Frase curta mostrada no card; a descrição completa fica no modal. */
  resumo: string;
  descricao: string;
  tecnologias: string[];
  imagens: string[];
  /** Sem link, o modal mostra o projeto como em desenvolvimento. */
  link?: string;
  video?: string;
  /** Quando true, o projeto fica guardado mas não aparece no site. */
  oculto?: boolean;
}

export interface ProjetoModalProps {
  projeto: Projeto | null;
  onClose: () => void;
}

export interface Contato {
  icon: ComponentType<LucideProps>;
  title: string;
  value: string;
  link: string;
}

export interface Habilidade {
  nome: string;
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
