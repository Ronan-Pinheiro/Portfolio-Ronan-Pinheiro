import { formacaoData } from '../data/formacao';
import FundoSecao from './FundoSecao';

export default function FormacaoAcademica() {
  return (
    <section className="relative isolate overflow-hidden mt-[50px] bg-portfolio-bg px-5 py-[50px] text-center text-portfolio-muted transition-colors duration-300 light:bg-claro-bg light:text-claro-text">
      <FundoSecao lado="esquerda" circuito />
      <div className="ml-20 flex max-[1050px]:ml-5">
        <p className="titulo-secao flex items-center text-left text-[34px] font-bold max-[499px]:text-[28px]">
          <span className="portfolio-linha" /> Formação Acadêmica{' '}
        </p>
      </div>

      <ul className="mx-auto mt-10 grid max-w-[1000px] grid-cols-2 gap-8 text-left max-[800px]:grid-cols-1">
        {formacaoData.map((item) => (
          <li
            key={`${item.curso}-${item.periodo}`}
            className={`flex flex-col rounded-lg border-2 border-portfolio-accent bg-portfolio-primary p-5 shadow-[6px_6px_0_0_rgba(230,230,238,0.3)] light:border-claro-espresso light:bg-claro-card light:shadow-[6px_6px_0_0_var(--color-claro-espresso)] `}
          >
            <span className="self-start rounded-md border-2 border-portfolio-muted/70 px-2 py-0.5 font-mono text-xs font-bold text-portfolio-accent light:border-claro-espresso light:text-claro-accent">
              {item.periodo}
            </span>
            <h3 className="mt-3 text-lg leading-snug font-extrabold text-portfolio-muted uppercase light:text-claro-text">
              {item.curso}
            </h3>
            <p className="font-semibold text-portfolio-muted light:text-claro-muted">
              {item.instituicao}
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-portfolio-muted light:text-claro-text">
              {item.conhecimentos}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
