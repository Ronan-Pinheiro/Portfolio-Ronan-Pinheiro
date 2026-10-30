import { contatosData } from '../data/contatos';
import FundoSecao from './FundoSecao';

const contatoItemClass =
  'flex max-w-[300px] min-w-0 flex-col items-center text-center transition-transform duration-300 hover:scale-110 hover:text-portfolio-accent active:scale-95 active:text-portfolio-accent light:hover:text-claro-sand light:active:text-claro-sand';

export default function Contatos() {
  return (
    <section className="relative isolate overflow-hidden bg-portfolio-primary px-5 py-10 text-center text-portfolio-muted transition-colors duration-300 light:bg-claro-espresso light:text-claro-cream">
      <FundoSecao fundoEscuro />
      <div>
        <h1 className="titulo-secao mb-5 light:text-claro-sand text-[40px] max-[500px]:text-center max-[499px]:text-[30px]">
          CONTATOS
        </h1>
      </div>

      <div className="mt-[60px] flex w-full flex-wrap items-start justify-evenly gap-x-12 gap-y-10 max-[500px]:gap-x-6">
        {contatosData.map(({ icon: Icon, ...contato }) => {
          const isExternal = contato.link.startsWith('http');

          return (
            <a
              key={contato.title}
              href={contato.link}
              className={contatoItemClass}
              {...(isExternal
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
            >
              <Icon
                size={40}
                strokeWidth={1.75}
                aria-hidden="true"
                className="mb-[15px] text-portfolio-blue-light light:text-claro-sand"
              />
              <h2>{contato.title}</h2>
              <p className="my-[5px] text-lg font-bold [overflow-wrap:anywhere] max-[500px]:text-base">
                {contato.value}
              </p>
            </a>
          );
        })}
      </div>
    </section>
  );
}
