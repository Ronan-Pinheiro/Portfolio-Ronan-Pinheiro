import { useState } from 'react';
import { projetosData } from '../data/projetos';
import type { Projeto } from '../types';
import ProjetoModal from './ProjetoModal';

export default function Projetos() {
  const [projetoSelecionado, setProjetoSelecionado] = useState<Projeto | null>(
    null,
  );

  return (
    <section className="relative bg-portfolio-primary px-5 py-[50px] text-center text-portfolio-muted transition-colors duration-300 light:bg-portfolio-surface-alt light:text-portfolio-bg">
      <div className="portfolio-accent-line top-[97%]" aria-hidden="true" />

      <div className="ml-20 flex max-[1000px]:ml-5 max-[1000px]:flex-wrap">
        <p className="flex items-center text-[40px] font-bold">
          <span className="portfolio-linha" /> Projetos
        </p>
        <p className="max-w-[1250px] pt-[15px] pl-[100px] text-left text-lg max-[1000px]:pl-0">
          Atualmente, estou desenvolvendo projetos web utilizando{' '}
          <span className="portfolio-destaque">React</span> e outras tecnologias para
          criar experiências dinâmicas e interativas. Além disso, exploro{' '}
          <span className="portfolio-destaque">VR</span> e{' '}
          <span className="portfolio-destaque">AR</span> para experiências imersivas.
        </p>
      </div>

      <ul className="flex flex-wrap justify-center pt-[30px]">
        {projetosData.map((proj) => (
          <li
            key={proj.titulo}
            className="m-2.5 cursor-pointer pb-[66px] text-center"
            onClick={() => setProjetoSelecionado(proj)}
          >
            <div className="group relative w-[373px] overflow-visible rounded-[18px] transition-transform duration-300 hover:scale-110 max-[1000px]:hover:scale-105">
              <img
                src={proj.imagens[0]}
                alt={proj.titulo}
                className="block max-h-[200px] w-full object-cover"
              />
              <div className="absolute top-[75%] right-0 left-0 z-[-1] grid w-full grid-cols-[1fr_auto] items-center rounded-b-[18px] bg-portfolio-bg p-2.5 text-center text-portfolio-muted transition-[top] duration-300 group-hover:top-[calc(100%+1px)]">
                <span className="text-base">{proj.titulo}</span>
                <button
                  type="button"
                  className="cursor-pointer rounded-[5px] bg-portfolio-accent px-2.5 py-[5px] text-sm text-black hover:bg-portfolio-muted"
                >
                  Ver Projeto
                </button>
              </div>
              <div className="h-0.5 bg-portfolio-accent" />
            </div>
          </li>
        ))}
      </ul>

      {projetoSelecionado && (
        <ProjetoModal
          projeto={projetoSelecionado}
          onClose={() => setProjetoSelecionado(null)}
        />
      )}
    </section>
  );
}
