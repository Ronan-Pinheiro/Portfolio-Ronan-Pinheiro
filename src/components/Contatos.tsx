import { contatosData } from '../data/contatos';

const contatoItemClass =
  'flex max-w-[200px] flex-col items-center text-center transition-transform duration-300 hover:scale-110';

export default function Contatos() {
  return (
    <section className="mt-[30px] bg-portfolio-primary px-5 py-10 text-center text-portfolio-muted transition-colors duration-300 light:bg-portfolio-surface-alt light:text-portfolio-primary">
      <div>
        <h1 className="mb-5 text-[40px] max-[500px]:text-center">CONTATOS</h1>
      </div>

      <div className="mt-[60px] flex w-full flex-wrap items-center justify-evenly gap-20 max-[500px]:pl-[18px]">
        {contatosData.map((contato) => {
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
              <div className="mb-[15px] h-10 w-10 transition-[fill] duration-300">
                <img src={contato.icon} alt={contato.title} />
              </div>
              <h2>{contato.title}</h2>
              <p className="my-[5px] text-lg font-bold">{contato.value}</p>
            </a>
          );
        })}
      </div>
    </section>
  );
}
