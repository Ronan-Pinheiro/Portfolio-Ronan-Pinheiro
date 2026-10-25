import * as Dialog from '@radix-ui/react-dialog';
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Maximize2,
  X,
} from 'lucide-react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import type { ProjetoModalProps } from '../types';

export default function ProjetoModal({ projeto, onClose }: ProjetoModalProps) {
  const exibido = projeto;
  const [atual, setAtual] = useState(0);
  const [aberto, setAberto] = useState(projeto);
  const [ampliada, setAmpliada] = useState(false);
  // Outro projeto aberto: volta para a primeira imagem.
  if (aberto !== projeto) {
    setAberto(projeto);
    setAtual(0);
    setAmpliada(false);
  }

  const total = exibido?.imagens.length ?? 0;
  const passar = (passo: number) =>
    setAtual((i) => (i + passo + total) % total);

  // Setas e contador, usados na imagem do modal e na imagem ampliada.
  const setas = (grande: boolean) =>
    total > 1 && (
      <>
        {[
          {
            lado: grande ? 'left-4' : 'left-2',
            passo: -1,
            Icone: ChevronLeft,
            rotulo: 'Imagem anterior',
          },
          {
            lado: grande ? 'right-4' : 'right-2',
            passo: 1,
            Icone: ChevronRight,
            rotulo: 'Próxima imagem',
          },
        ].map(({ lado, passo, Icone, rotulo }) => (
          <button
            key={rotulo}
            type="button"
            aria-label={rotulo}
            onClick={() => passar(passo)}
            className={`absolute top-1/2 ${lado} flex ${grande ? 'h-12 w-12' : 'h-9 w-9'} -translate-y-1/2 cursor-pointer items-center justify-center rounded-md bg-black/60 text-white transition-[background-color,scale] hover:bg-black/80 active:scale-95`}
          >
            <Icone size={grande ? 26 : 20} aria-hidden="true" />
          </button>
        ))}
        <span className="absolute right-2 bottom-2 rounded bg-black/60 px-2 py-0.5 font-mono text-xs text-white">
          {atual + 1}/{total}
        </span>
      </>
    );

  return (
    <Dialog.Root
      open={exibido !== null}
      onOpenChange={(open) => !open && onClose()}
    >
      {/* AnimatePresence mantém o conteúdo na tela durante a animação de saída. */}
      <AnimatePresence>
        {exibido && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                className="fixed inset-0 z-1000 bg-black/70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            </Dialog.Overlay>

            <Dialog.Content
              asChild
              forceMount
              aria-describedby="modal-descricao"
            >
              <motion.div
                className="fixed inset-0 z-1001 m-auto flex h-fit max-h-[90vh] w-[90%] max-w-[1000px] flex-row overflow-y-auto rounded-lg bg-portfolio-primary p-[15px] focus:outline-none max-[900px]:flex-col max-[900px]:items-center max-[900px]:pt-12 light:ring-1 light:ring-claro-line light:ring-inset light:bg-claro-card"
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.98 }}
                transition={{ duration: 0.25, ease: [0.45, 0, 0.25, 1] }}
              >
                <Dialog.Close
                  className="absolute top-3 right-3 flex h-10 w-10 cursor-pointer items-center justify-center rounded-md text-portfolio-accent transition-colors hover:bg-portfolio-bg light:text-claro-accent light:hover:bg-claro-surface"
                  aria-label="Fechar"
                >
                  <X size={24} />
                </Dialog.Close>

                <div className="flex flex-1 items-center justify-center p-4 max-[900px]:w-full max-[900px]:p-0">
                  {exibido.video ? (
                    <video
                      controls
                      preload="metadata"
                      poster={exibido.imagens[0]}
                      className="mx-auto block w-full max-w-[450px] rounded-lg object-cover"
                    >
                      <source src={exibido.video} type="video/mp4" />
                      Seu navegador não suporta vídeo.
                    </video>
                  ) : (
                    <div className="relative mx-auto w-full max-w-[450px] max-[900px]:max-w-[90%]">
                      <button
                        type="button"
                        onClick={() => setAmpliada(true)}
                        aria-label="Ampliar imagem"
                        className="group/zoom relative block w-full cursor-zoom-in"
                      >
                        <img
                          src={exibido.imagens[atual]}
                          alt={`${exibido.titulo} – imagem ${atual + 1} de ${total}`}
                          className="mx-auto block max-h-[375px] w-full rounded-lg object-cover max-[900px]:max-h-[250px]"
                        />
                        <span className="absolute top-2 right-2 flex h-8 w-8 items-center justify-center rounded-md bg-black/60 text-white opacity-0 transition-opacity group-hover/zoom:opacity-100 max-[900px]:opacity-100">
                          <Maximize2 size={16} aria-hidden="true" />
                        </span>
                      </button>
                      {setas(false)}

                      <Dialog.Root open={ampliada} onOpenChange={setAmpliada}>
                        <Dialog.Portal>
                          <Dialog.Overlay className="fixed inset-0 z-1100 bg-black/90" />
                          <Dialog.Content
                            aria-describedby={undefined}
                            className="fixed inset-0 z-1100 flex items-center justify-center p-4"
                            onClick={(e) => {
                              if (e.target === e.currentTarget)
                                setAmpliada(false);
                            }}
                          >
                            <Dialog.Title className="sr-only">
                              {exibido.titulo} – imagem ampliada
                            </Dialog.Title>
                            <div className="relative">
                              <img
                                src={exibido.imagens[atual]}
                                alt={`${exibido.titulo} – imagem ${atual + 1} de ${total}`}
                                className="block max-h-[90vh] max-w-[95vw] rounded-lg object-contain"
                              />
                              {setas(true)}
                            </div>
                            <Dialog.Close
                              aria-label="Fechar imagem"
                              className="absolute top-4 right-4 flex h-11 w-11 cursor-pointer items-center justify-center rounded-md bg-black/60 text-white transition-colors hover:bg-black/80"
                            >
                              <X size={24} />
                            </Dialog.Close>
                          </Dialog.Content>
                        </Dialog.Portal>
                      </Dialog.Root>
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col justify-between p-6 max-[900px]:p-5">
                  <Dialog.Title className="mb-3 pr-10 text-2xl font-bold text-portfolio-accent light:text-claro-accent max-[390px]:text-xl">
                    {exibido.titulo}
                  </Dialog.Title>
                  <p
                    id="modal-descricao"
                    className="mb-4 grow text-left text-base leading-snug whitespace-pre-line text-portfolio-muted light:text-claro-text max-[900px]:leading-relaxed max-[390px]:text-[15px]"
                  >
                    {exibido.descricao}
                  </p>

                  <ul className="flex flex-wrap gap-2" aria-label="Tecnologias">
                    {exibido.tecnologias.map((tec) => (
                      <li
                        key={tec}
                        className="rounded-md bg-portfolio-bg px-2 py-1 text-xs text-portfolio-muted light:ring-1 light:ring-claro-line light:ring-inset light:bg-claro-bg light:text-claro-text"
                      >
                        {tec}
                      </li>
                    ))}
                  </ul>

                  {exibido.link ? (
                    <a
                      href={exibido.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 flex items-center justify-center gap-3 rounded-md border-2 border-portfolio-accent shadow-[4px_4px_0_0_rgba(230,230,238,0.3)] light:border-claro-espresso light:shadow-[4px_4px_0_0_var(--color-claro-espresso)] bg-portfolio-accent px-3 py-3 font-bold text-portfolio-bg transition-[background-color,scale] duration-300 hover:bg-portfolio-accent-hover active:scale-[0.97] light:bg-claro-accent light:text-claro-cream light:hover:bg-claro-accent-hover"
                    >
                      Ver Projeto
                      <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-black/15">
                        <ExternalLink size={15} aria-hidden="true" />
                      </span>
                    </a>
                  ) : (
                    <p className="mt-4 rounded-md border-2 border-dashed border-portfolio-accent px-3 py-3 text-center font-bold text-portfolio-accent light:border-claro-accent light:text-claro-accent">
                      Em desenvolvimento · demonstração em breve
                    </p>
                  )}
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
