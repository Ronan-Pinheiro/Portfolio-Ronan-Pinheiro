import type { ReactNode } from 'react';
import { motion } from 'motion/react';

interface RevelarProps {
  children: ReactNode;
}

// Faz o conteúdo surgir com um leve fade ao entrar na tela (uma vez só).
export default function Revelar({ children }: RevelarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
