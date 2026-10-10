import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projetosData } from '../data/projetos';
import type { Projeto } from '../types';
import ProjetoModal from './ProjetoModal';

export default function Projetos() {
  const [projetoSelecionado, setProjetoSelecionado] = useState<Projeto | null>(
    null,
  );

  return (
    <section className="relative bg-portfolio-primary px-5 py-[50px] text-center text-portfolio-muted transition-colors duration-300 light:bg-claro-surface light:text-claro-text">
      <div className="portfolio-accent-line top-[97%]" aria-hidden="true" />

      <div className="ml-20 flex max-[1000px]:ml-5 max-[1000px]:flex-wrap">
        <p className="flex items-center text-[40px] font-bold">
          <span className="portfolio-linha" /> Projetos
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

      <ul className="flex flex-wrap justify-center pt-[30px]">
        {projetosData.map((proj) => (
          <li key={proj.titulo} className="m-2.5 pb-[66px] text-center">
            <button
              type="button"
              onClick={() => setProjetoSelecionado(proj)}
              aria-label={`Ver detalhes do projeto ${proj.titulo}`}
              className="group relative isolate block w-[373px] max-w-[85vw] cursor-pointer overflow-visible rounded-[18px] text-left transition-transform duration-300 ease-(--ease-portfolio) hover:scale-105"
            >
              <img
                src={proj.imagens[0]}
                alt=""
                loading="lazy"
                className="block h-[200px] w-full rounded-t-[18px] object-cover"
              />
              <div className="absolute top-[75%] right-0 left-0 z-[-1] grid w-full grid-cols-[1fr_auto] items-center gap-2 rounded-b-[18px] bg-portfolio-bg p-2.5 text-center text-portfolio-muted opacity-0 transition-[top,opacity] duration-300 group-hover:top-[calc(100%+1px)] group-hover:opacity-100 group-focus-visible:top-[calc(100%+1px)] group-focus-visible:opacity-100 [@media(hover:none)]:top-[calc(100%+1px)] [@media(hover:none)]:opacity-100 light:bg-claro-surface light:text-claro-text">
                <span className="text-base">{proj.titulo}</span>
                <span className="flex items-center gap-1 rounded-[5px] bg-portfolio-accent px-2.5 py-[5px] text-sm text-black light:bg-claro-accent light:text-claro-bg">
                  Ver Projeto <ArrowUpRight size={16} aria-hidden="true" />
                </span>
              </div>
              <div className="h-0.5 bg-portfolio-accent light:bg-claro-accent" />
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
