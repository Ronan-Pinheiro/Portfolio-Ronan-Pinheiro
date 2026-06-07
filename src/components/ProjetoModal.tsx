import type { ProjetoModalProps } from '../types';

export default function ProjetoModal({ projeto, onClose }: ProjetoModalProps) {
  return (
    <div
      className="fixed inset-0 z-1000 flex items-center justify-center bg-black/70"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative mx-auto my-5 flex w-[90%] max-w-[1000px] flex-row overflow-hidden rounded-xl bg-portfolio-primary p-[15px] max-[900px]:mt-[70px] max-[900px]:flex-col max-[900px]:items-center max-[900px]:pt-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="absolute top-4 right-4 cursor-pointer border-none bg-transparent text-2xl text-portfolio-accent"
          onClick={onClose}
          aria-label="Fechar modal"
        >
          ×
        </button>

        <div className="flex flex-1 items-center justify-center p-4 max-[900px]:w-full max-[900px]:p-0">
          {projeto.video ? (
            <video
              controls
              className="mx-auto block w-4/5 max-w-[400px] rounded-lg object-cover"
              style={{ width: '100%', maxWidth: '450px', borderRadius: '8px' }}
            >
              <source src={projeto.video} type="video/mp4" />
              Seu navegador não suporta vídeo.
            </video>
          ) : (
            projeto.imagens.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`${projeto.titulo} – slide ${i + 1}`}
                className="mx-auto block max-h-[375px] w-full max-w-[450px] rounded-lg object-cover max-[900px]:max-h-[250px] max-[900px]:max-w-[90%] max-[390px]:max-h-[250px]"
              />
            ))
          )}
        </div>

        <div className="flex flex-1 flex-col justify-between p-6 max-[900px]:p-5 max-[900px]:text-center">
          <h2
            id="modal-title"
            className="mb-3 text-2xl text-portfolio-accent max-[390px]:text-xl"
          >
            {projeto.titulo}
          </h2>
          <p className="mb-4 grow text-left text-base leading-snug whitespace-pre-line text-portfolio-muted max-[900px]:text-justify max-[900px]:leading-relaxed max-[390px]:text-[15px]">
            {projeto.descricao}
          </p>

          <div className="flex flex-wrap gap-2">
            {projeto.tecnologias.map((tec) => (
              <span
                key={tec}
                className="rounded bg-portfolio-bg px-2 py-1 text-xs text-portfolio-muted"
              >
                {tec}
              </span>
            ))}
          </div>

          <a
            href={projeto.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded-md bg-portfolio-accent px-3 py-3 text-center font-bold text-portfolio-muted transition-colors duration-300 hover:bg-portfolio-muted hover:text-portfolio-primary"
          >
            Ver Projeto
          </a>
        </div>
      </div>
    </div>
  );
}
