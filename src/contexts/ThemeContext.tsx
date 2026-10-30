import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { flushSync } from 'react-dom';
import type { Theme, ThemeContextValue } from '../types';

const ThemeContext = createContext<ThemeContextValue | null>(null);

function getInitialTheme(): Theme {
  try {
    return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
  } catch {
    return 'light';
  }
}

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useLayoutEffect(() => {
    const { body } = document;

    if (theme === 'light') {
      body.classList.add('light-mode');
      body.classList.remove('dark-mode');
    } else {
      body.classList.add('dark-mode');
      body.classList.remove('light-mode');
    }

    try {
      localStorage.setItem('theme', theme);
    } catch {
      /* armazenamento bloqueado */
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    const trocar = () =>
      flushSync(() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark')));
    // Onde o navegador permite, o site inteiro (fundo incluído) dissolve de um tema
    // para o outro em vez de trocar de uma vez. Quem pediu menos movimento não vê.
    const reduzir = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (!document.startViewTransition || reduzir) {
      trocar();
      return;
    }
    document.startViewTransition(trocar);
  }, []);

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      isDark: theme === 'dark',
      toggleTheme,
    }),
    [theme, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme deve ser usado dentro de ThemeProvider');
  }
  return context;
}
