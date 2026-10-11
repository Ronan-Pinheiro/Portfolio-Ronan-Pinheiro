import type { ReactNode } from 'react';
import { motion } from 'motion/react';

interface RevelarProps {
  children: ReactNode;
}

// Faz o conteúdo surgir com um leve fade ao entrar na tela (uma vez só).
export default function Revelar({ children }: RevelarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.75, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
