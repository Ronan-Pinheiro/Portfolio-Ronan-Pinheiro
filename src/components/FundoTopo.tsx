import { useEffect, useRef } from 'react';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'motion/react';
import { useTheme } from '../contexts/ThemeContext';
import { criarPlacas, desenhar, type Rgb } from '../lib/cena3d';

/*
 * Fundo do topo: placas translúcidas soltas em 3D, com perspectiva.
 * A cena é desenhada uma vez (e de novo só ao mudar tamanho ou tema);
 * o movimento vem de transform na camada inteira, que roda liso na GPU.
 */

export default function FundoTopo({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isDark } = useTheme();
  const reduzirMovimento = useReducedMotion();

  // Paralaxe com mola: acompanha o mouse de leve, sem tranco.
  const alvoX = useMotionValue(0);
  const alvoY = useMotionValue(0);
  const x = useSpring(alvoX, { stiffness: 40, damping: 20 });
  const y = useSpring(alvoY, { stiffness: 40, damping: 20 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const placas = criarPlacas();
    const tinta: Rgb = isDark ? [230, 230, 238] : [29, 22, 17];
    const destaque: Rgb = isDark ? [245, 185, 66] : [156, 64, 25];
    const redesenhar = () => desenhar(canvas, placas, tinta, destaque);
    const observar = new ResizeObserver(redesenhar);
    observar.observe(canvas);
    redesenhar();
    return () => observar.disconnect();
  }, [isDark]);

  useEffect(() => {
    if (reduzirMovimento) return;
    const aoMover = (e: PointerEvent) => {
      alvoX.set((e.clientX / window.innerWidth - 0.5) * -24);
      alvoY.set((e.clientY / window.innerHeight - 0.5) * -16);
    };
    window.addEventListener('pointermove', aoMover);
    return () => window.removeEventListener('pointermove', aoMover);
  }, [reduzirMovimento, alvoX, alvoY]);

  return (
    <motion.div className={className} aria-hidden="true" style={{ x, y }}>
      <motion.canvas
        ref={canvasRef}
        className="h-full w-full will-change-transform"
        animate={
          reduzirMovimento
            ? undefined
            : { rotate: [0, 1.2, 0], scale: [1.04, 1.07, 1.04] }
        }
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.div>
  );
}
