import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { projetosData } from '../data/projetos';
import type { Projeto } from '../types';
import ProjetoModal from './ProjetoModal';
import { GradePontos, RabiscoEstrela, RabiscoSublinhado } from './Rabiscos';
import FundoSecao from './FundoSecao';

export default function Projetos() {
  const [projetoSelecionado, setProjetoSelecionado] = useState<Projeto | null>(
    null,
  );

  return (
    <section className="isolate relative overflow-hidden bg-portfolio-primary px-5 pt-[50px] pb-20 text-center text-portfolio-muted transition-colors duration-300 light:bg-claro-surface light:text-claro-text">
      <FundoSecao lado="esquerda" circuito />
      <div className="portfolio-accent-line top-[97%]" aria-hidden="true" />

      <div className="ml-20 flex max-[1000px]:ml-5 max-[1000px]:flex-wrap">
        <p className="titulo-secao relative flex items-center self-start text-[40px] font-bold max-[499px]:text-[30px]">
          <span className="portfolio-linha" /> Projetos
          <RabiscoSublinhado className="absolute -bottom-3 left-9 w-[150px] text-portfolio-accent light:text-claro-accent" />
          <RabiscoEstrela className="absolute -top-3 -right-9 w-7 text-portfolio-accent light:text-claro-accent" />
        </p>
        <p className="max-w-[1250px] pt-[15px] pl-[100px] text-left text-lg max-[1000px]:pl-0">
          Projetos de estudo e de trabalho: aplicações web com{' '}
          <span className="portfolio-destaque">React</span> e{' '}
          <span className="portfolio-destaque">JavaScript</span>, automação de
          testes com <span className="portfolio-destaque">Cypress</span> e
          experiências imersivas em{' '}
          <span className="portfolio-destaque">VR</span> e{' '}
          <span className="portfolio-destaque">AR</span> desenvolvidas na
          Fábrica de Software do SENAI Fatesg.
        </p>
      </div>

      <GradePontos className="absolute bottom-16 left-6 w-24 text-portfolio-muted/30 light:text-claro-muted/30 max-[1000px]:hidden" />

      <ul className="mx-auto grid max-w-[1150px] grid-cols-3 gap-x-8 gap-y-10 pt-12 text-left max-[1000px]:grid-cols-2 max-[640px]:grid-cols-1">
        {projetosData
          .filter((proj) => !proj.oculto)
          .map((proj, i) => (
            <li key={proj.titulo}>
              <button
                type="button"
                onClick={() => setProjetoSelecionado(proj)}
                aria-label={`Ver detalhes do projeto ${proj.titulo}`}
                className={`group flex h-full w-full cursor-pointer flex-col rounded-lg border-2 border-portfolio-accent bg-portfolio-bg p-3 text-left shadow-[6px_6px_0_0_rgba(230,230,238,0.3)] transition-[transform,box-shadow] duration-300 ease-(--ease-portfolio) hover:-translate-y-1 hover:rotate-0 active:translate-x-[4px] active:translate-y-[4px] active:rotate-0 active:shadow-none light:active:shadow-none hover:shadow-[9px_9px_0_0_rgba(230,230,238,0.3)] light:border-claro-espresso light:bg-claro-card light:shadow-[6px_6px_0_0_var(--color-claro-espresso)] light:hover:shadow-[9px_9px_0_0_var(--color-claro-espresso)] ${
                  i % 2 === 0 ? '-rotate-1' : 'rotate-1'
                }`}
              >
                <img
                  src={proj.imagens[0]}
                  alt=""
                  loading="lazy"
                  className="block aspect-[16/10] w-full rounded-md border-2 border-portfolio-muted/70 object-cover light:border-claro-espresso"
                />
                <div className="flex grow flex-col px-1 pt-4 pb-1">
                  <span className="font-mono text-sm font-bold text-portfolio-accent light:text-claro-accent">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="mt-1 text-lg leading-tight font-extrabold text-portfolio-muted uppercase light:text-claro-text">
                    {proj.titulo}
                  </span>
                  <span className="mt-2 text-[15px] leading-snug text-portfolio-muted light:text-claro-muted">
                    {proj.resumo}
                  </span>
                  <span className="mt-3 flex flex-wrap gap-1.5">
                    {proj.tecnologias.slice(0, 3).map((tec) => (
                      <span
                        key={tec}
                        className="rounded px-2 py-0.5 text-xs font-semibold text-portfolio-blue-light ring-1 ring-portfolio-blue-light/40 ring-inset light:text-claro-olive light:ring-claro-olive/50"
                      >
                        {tec}
                      </span>
                    ))}
                  </span>
                  <span className="mt-auto pt-4">
                    <span className="inline-flex items-center gap-2 rounded-md border-2 border-portfolio-muted/70 px-3 py-1.5 text-xs font-bold tracking-wider text-portfolio-muted uppercase transition-colors duration-300 group-hover:border-portfolio-accent group-hover:bg-portfolio-accent group-hover:text-portfolio-bg light:border-claro-espresso light:text-claro-text light:group-hover:border-claro-espresso light:group-hover:bg-claro-espresso light:group-hover:text-claro-cream">
                      Ver projeto
                      <ArrowRight
                        size={15}
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  </span>
                </div>
              </button>
            </li>
          ))}
      </ul>

      <ProjetoModal
        projeto={projetoSelecionado}
        onClose={() => setProjetoSelecionado(null)}
      />
    </section>
  );
}
