import * as Dialog from '@radix-ui/react-dialog';
import { ExternalLink, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import type { ProjetoModalProps } from '../types';

export default function ProjetoModal({ projeto, onClose }: ProjetoModalProps) {
  const exibido = projeto;

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
                className="fixed inset-0 z-1001 m-auto flex h-fit max-h-[90vh] w-[90%] max-w-[1000px] flex-row overflow-y-auto rounded-xl bg-portfolio-primary p-[15px] focus:outline-none max-[900px]:flex-col max-[900px]:items-center max-[900px]:pt-12 light:bg-claro-bg"
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.98 }}
                transition={{ duration: 0.25, ease: [0.2, 0.7, 0.2, 1] }}
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
                    exibido.imagens.map((src, i) => (
                      <img
                        key={src}
                        src={src}
                        alt={`${exibido.titulo} – imagem ${i + 1}`}
                        className="mx-auto block max-h-[375px] w-full max-w-[450px] rounded-lg object-cover max-[900px]:max-h-[250px] max-[900px]:max-w-[90%]"
                      />
                    ))
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
                        className="rounded bg-portfolio-bg px-2 py-1 text-xs text-portfolio-muted light:bg-claro-surface light:text-claro-text"
                      >
                        {tec}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={exibido.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center justify-center gap-2 rounded-md bg-portfolio-accent px-3 py-3 font-bold text-portfolio-muted transition-colors duration-300 hover:bg-portfolio-muted hover:text-portfolio-primary active:scale-[0.97] light:bg-claro-accent light:text-claro-bg light:hover:bg-claro-accent-hover"
                  >
                    Ver Projeto <ExternalLink size={18} aria-hidden="true" />
                  </a>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
