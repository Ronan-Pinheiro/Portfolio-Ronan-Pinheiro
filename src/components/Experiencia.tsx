import { useState } from 'react';
import { Plus } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { experienciaData } from '../data/experiencia';
import FundoSecao from './FundoSecao';

export default function Experiencia() {
  // O cargo atual começa aberto; os outros abrem ao clicar na bolinha.
  const [abertos, setAbertos] = useState(
    () =>
      new Set(
        experienciaData
          .slice(0, 1)
          .map((item) => `${item.empresa}-${item.periodo}`),
      ),
  );
  const alternar = (chave: string) =>
    setAbertos((atual) => {
      const novo = new Set(atual);
      if (novo.has(chave)) novo.delete(chave);
      else novo.add(chave);
      return novo;
    });

  return (
    <section className="isolate overflow-hidden secao-escura relative bg-portfolio-primary px-5 py-[50px] text-center text-portfolio-muted transition-colors duration-300 light:bg-claro-espresso light:text-claro-cream">
      <FundoSecao lado="direita" fundoEscuro />

      <div className="mb-10 ml-20 flex max-[1000px]:ml-5 max-[1000px]:flex-wrap">
        <p className="titulo-secao flex items-center text-[40px] font-bold max-[499px]:text-[30px]">
          <span className="portfolio-linha" /> Experiência{' '}
        </p>
        <p className="max-w-[1150px] pt-[15px] pl-[35px] text-left text-lg max-[1000px]:pl-0">
          Minha trajetória passa por{' '}
          <span className="portfolio-destaque-orange">dados</span>,{' '}
          <span className="portfolio-destaque-orange">desenvolvimento</span> e{' '}
          <span className="portfolio-destaque-orange">suporte</span>. Hoje
          trabalho com{' '}
          <span className="portfolio-destaque-orange">
            tratamento e análise de dados
          </span>
          , <span className="portfolio-destaque-orange">indicadores</span>,{' '}
          <span className="portfolio-destaque-orange">
            automação de processos
          </span>{' '}
          e{' '}
          <span className="portfolio-destaque-orange">
            aplicações web internas
          </span>
          . No suporte N1, aprendi a investigar, documentar e priorizar
          problemas. No SENAI Fatesg, desenvolvi{' '}
          <span className="portfolio-destaque-orange">simulações em VR</span>{' '}
          para treinamentos de NR com{' '}
          <span className="portfolio-destaque-orange">C#</span> e{' '}
          <span className="portfolio-destaque-orange">Unity</span>, além de um{' '}
          <span className="portfolio-destaque-orange">mini game em WebAR</span>{' '}
          com <span className="portfolio-destaque-orange">8th Wall</span> e{' '}
          <span className="portfolio-destaque-orange">JavaScript</span>.
        </p>
      </div>

      {/* Linha do tempo: clicar na bolinha (ou no cargo) mostra ou esconde os detalhes */}
      <ol className="mx-auto max-w-[1100px] border-l border-portfolio-muted/25 text-left light:border-claro-sand/40 max-[1000px]:ml-2">
        {experienciaData.map((item, i) => {
          const chave = `${item.empresa}-${item.periodo}`;
          const aberto = abertos.has(chave);
          const idDetalhes = `exp-detalhes-${i}`;
          return (
            <li
              key={chave}
              className="relative grid grid-cols-[260px_1fr] gap-x-10 gap-y-3 pb-10 pl-8 max-[1000px]:grid-cols-1 max-[1000px]:pl-6"
            >
              <button
                type="button"
                onClick={() => alternar(chave)}
                aria-expanded={aberto}
                aria-controls={idDetalhes}
                className="group cursor-pointer text-left"
              >
                <span
                  aria-hidden="true"
                  className={`absolute top-0.5 -left-[11px] flex h-5 w-5 items-center justify-center rounded-full border-2 border-portfolio-accent ring-4 ring-portfolio-primary transition-[background-color,scale] duration-300 group-hover:scale-110 group-active:scale-90 light:border-claro-sand light:ring-claro-espresso ${
                    aberto
                      ? 'bg-portfolio-accent light:bg-claro-sand'
                      : 'bg-portfolio-primary light:bg-claro-espresso'
                  }`}
                >
                  <motion.span
                    animate={{ rotate: aberto ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: [0.45, 0, 0.25, 1] }}
                    className={`flex ${aberto ? 'text-portfolio-primary light:text-claro-espresso' : 'text-portfolio-accent light:text-claro-sand'}`}
                  >
                    <Plus size={12} strokeWidth={3} />
                  </motion.span>
                </span>
                <span className="block text-sm font-semibold tracking-wider text-portfolio-accent uppercase light:text-claro-sand">
                  {item.periodo}
                </span>
                <span className="mt-1 block text-lg leading-snug font-bold text-portfolio-blue-light uppercase transition-colors group-hover:text-portfolio-accent light:text-claro-sand">
                  {item.cargo}
                </span>
                <span className="mt-1 block text-base text-portfolio-muted light:text-claro-cream">
                  {item.empresa}
                </span>
              </button>

              <div
                id={idDetalhes}
                className="border-b border-portfolio-muted/15 pb-10 light:border-claro-cream/15"
              >
                <AnimatePresence initial={false} mode="wait">
                  {aberto ? (
                    <motion.div
                      key="aberto"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.45, 0, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <ul className="flex flex-col gap-1.5">
                        {item.responsabilidades.map((resp) => (
                          <li
                            key={resp}
                            className="flex gap-2 text-[15px] leading-relaxed text-portfolio-muted light:text-claro-cream"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-portfolio-accent light:bg-claro-sand"
                            />
                            {resp}
                          </li>
                        ))}
                      </ul>
                      <ul
                        className="mt-4 flex flex-wrap gap-2"
                        aria-label="Tecnologias"
                      >
                        {item.skills.map((skill) => (
                          <li
                            key={skill}
                            className="rounded-md bg-portfolio-yellow px-2.5 py-1 text-sm font-bold text-portfolio-bg light:bg-transparent light:text-claro-sand light:ring-1 light:ring-claro-sand/60 light:ring-inset"
                          >
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ) : (
                    <motion.button
                      key="fechado"
                      type="button"
                      onClick={() => alternar(chave)}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="cursor-pointer text-[15px] text-portfolio-muted/80 transition-colors hover:text-portfolio-accent light:text-claro-cream/80 light:hover:text-claro-sand"
                    >
                      {item.responsabilidades.length} atividades ·{' '}
                      {item.skills.length} tecnologias —{' '}
                      <span className="font-semibold underline decoration-2 underline-offset-4">
                        ver detalhes
                      </span>
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
