import {
  ChevronDown,
  BriefcaseBusiness,
  GraduationCap,
  MapPin,
  Sparkle,
} from "lucide-react";
import { useState } from "react";
import { motion, type Variants } from "motion/react";
import FotoRonan from "../Imagens/ImagensFotoRonan.png";
import { useDigitacao } from "../hooks/useDigitacao";
import FundoTopo from "./FundoTopo";
import { RabiscoSublinhado } from "./Rabiscos";

const destaques = [
  { icon: MapPin, texto: "Goiânia, GO" },
  { icon: BriefcaseBusiness, texto: "Ecossistema Provenda" },
  { icon: GraduationCap, texto: "Graduado em ADS" },
];

// Começam escondidas atrás da foto e deslizam para fora ao abrir a página.
const folhaDeTras: Variants = {
  escondida: { x: 0, y: 0, rotate: 0 },
  aberta: { x: -12, y: 8, rotate: -6 },
  destacada: { x: -20, y: 10, rotate: -9 },
};

const folhaDoMeio: Variants = {
  escondida: { x: 0, y: 0, rotate: 0 },
  aberta: { x: 8, y: -4, rotate: 3 },
  destacada: { x: 16, y: -6, rotate: 5 },
};

const SAUDACAO = "Olá, eu sou o";
const NOME = "Ronan Pinheiro";

// Mostra o trecho já digitado e reserva o espaço do restante,
// para o título não mudar de tamanho durante a animação.
function Digitando({
  texto,
  quantos,
  comCursor,
}: {
  texto: string;
  quantos: number;
  comCursor: boolean;
}) {
  return (
    <>
      {texto.slice(0, quantos)}
      {comCursor && (
        <span className="relative inline-block w-0" aria-hidden="true">
          <span className="cursor-digitacao absolute bottom-[0.05em] left-[0.04em] h-[0.85em] w-[0.08em] bg-current" />
        </span>
      )}
      <span className="invisible">{texto.slice(quantos)}</span>
    </>
  );
}

export default function Sobre() {
  const total = SAUDACAO.length + NOME.length;
  const digitados = useDigitacao(total);
  const naSaudacao = digitados < SAUDACAO.length;
  const terminou = digitados >= total;
  const [aberto, setAberto] = useState(false);

  return (
    <section className="relative isolate overflow-hidden bg-portfolio-bg px-5 py-[50px] text-center text-portfolio-muted transition-colors duration-300 light:bg-claro-bg light:text-claro-text">
      <FundoTopo className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px] w-full [mask-image:linear-gradient(to_bottom,black_75%,transparent)] max-[1050px]:h-[860px]" />

      <div className="mx-auto flex max-w-[75%] items-center justify-between gap-[50px] max-[1050px]:max-w-none max-[1050px]:flex-col max-[1050px]:items-center max-[1050px]:gap-[25px] max-[499px]:flex-col max-[499px]:gap-5 max-[499px]:items-center">
        <div className="grow text-left max-[1050px]:text-center max-[499px]:pr-[15px]">
          <p className="mb-5 ml-[30px] inline-flex items-center gap-2 rounded-md px-4 py-1.5 text-sm whitespace-nowrap max-[400px]:gap-1.5 max-[400px]:px-2.5 max-[400px]:text-[11px] font-semibold tracking-wider uppercase ring-1 ring-portfolio-muted/40 ring-inset light:ring-claro-line max-[1050px]:ml-0">
            {/* A estrela dá uma brilhadinha quando o nome termina de ser digitado */}
            <span className="relative flex" aria-hidden="true">
              <motion.span
                className="absolute -inset-1.5 rounded-full bg-portfolio-accent/50 blur-[5px] light:bg-claro-accent/40"
                initial={{ opacity: 0, scale: 0.4 }}
                animate={
                  terminou
                    ? { opacity: [0, 0.9, 0], scale: [0.4, 1.3, 1.5] }
                    : {}
                }
                transition={{ duration: 0.9, ease: "easeOut" }}
              />
              <motion.span
                className="relative flex"
                animate={
                  terminou ? { scale: [1, 1.45, 1], rotate: [0, 35, 0] } : {}
                }
                transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
              >
                <Sparkle
                  size={14}
                  className="text-portfolio-accent light:text-claro-accent"
                />
              </motion.span>
            </span>
            Analista de Dados
            <span className="text-portfolio-accent light:text-claro-accent">
              ·
            </span>
            Dev Web
          </p>
          <h1
            aria-label={`${SAUDACAO} ${NOME}`}
            className="ml-[30px] text-[60px] leading-none font-bold max-[1050px]:ml-0 max-[1050px]:text-center max-[1050px]:text-[32px] max-[750px]:block max-[750px]:text-center max-[499px]:text-center max-[499px]:text-[28px]"
          >
            <span
              aria-hidden="true"
              className="text-portfolio-accent light:text-claro-accent"
            >
              <Digitando
                texto={SAUDACAO}
                quantos={Math.min(digitados, SAUDACAO.length)}
                comCursor={naSaudacao}
              />
            </span>{" "}
            <br />
            <span
              aria-hidden="true"
              className="text-portfolio-blue font-display tracking-tight uppercase light:text-claro-text"
            >
              <Digitando
                texto={NOME}
                quantos={Math.max(0, digitados - SAUDACAO.length)}
                comCursor={!naSaudacao}
              />
            </span>
          </h1>
        </div>

        <motion.a
          href="https://github.com/Ronan-Pinheiro"
          target="_blank"
          rel="noopener noreferrer"
          className="relative isolate mt-[60px] ml-auto block max-[1050px]:mx-auto max-[1050px]:mt-8 max-[499px]:mt-8"
          initial="escondida"
          animate="aberta"
          whileHover="destacada"
        >
          {/* Folhas de papel que saem de trás da foto */}
          <motion.span
            aria-hidden="true"
            variants={folhaDeTras}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
            className="absolute inset-0 -z-20 rounded-lg bg-portfolio-accent light:bg-claro-olive"
          />
          <motion.span
            aria-hidden="true"
            variants={folhaDoMeio}
            transition={{
              duration: 0.8,
              delay: 0.35,
              ease: [0.2, 0.7, 0.2, 1],
            }}
            className="absolute inset-0 -z-10 rounded-lg bg-portfolio-primary ring-1 ring-portfolio-blue-light/40 ring-inset light:bg-claro-sand light:ring-0"
          />
          <motion.img
            src={FotoRonan}
            alt="Ronan Pinheiro"
            variants={{
              escondida: { scale: 1 },
              aberta: { scale: 1 },
              destacada: { scale: 1.02 },
            }}
            className="block h-[350px] w-[350px] cursor-pointer rounded-lg object-cover max-[1050px]:h-[300px] max-[1050px]:w-[300px] max-[499px]:h-[250px] max-[499px]:w-[250px]"
          />
        </motion.a>
      </div>

      <div className="mx-auto mt-[70px] max-w-[1000px] pt-10 text-center rounded-lg px-10 pb-10 light:bg-claro-olive light:text-claro-cream max-[499px]:px-5 wrap-break-word max-[1050px]:mt-[30px] max-[1050px]:max-w-[85%] max-[1050px]:pt-8 max-[750px]:max-w-none max-[499px]:mt-[50px] max-[499px]:pt-8">
        <h2 className="text-[30px] font-bold text-portfolio-muted light:text-claro-sand">
          <span className="text-portfolio-accent light:text-claro-sand">—</span>{" "}
          Sobre Mim
        </h2>
        <div className="flex flex-col gap-4 pt-[15px] text-lg max-[750px]:text-left max-[750px]:text-base max-[750px]:leading-relaxed">
          <p>
            Trabalho com dados, automação e desenvolvimento web. Hoje atuo no
            Ecossistema Provenda, onde comecei como Analista de Dados e sigo
            como Analista de Desenvolvimento Jr.
          </p>
          {/* Recolhido: o resto do texto aparece cortado, sumindo num degradê */}
          <motion.div
            id="sobre-mais"
            initial={false}
            animate={{ height: aberto ? "auto" : 76 }}
            transition={{ duration: 0.45, ease: [0.2, 0.7, 0.2, 1] }}
            className="relative overflow-hidden"
            style={{
              maskImage: aberto
                ? "none"
                : "linear-gradient(to bottom, black 10%, transparent 95%)",
              WebkitMaskImage: aberto
                ? "none"
                : "linear-gradient(to bottom, black 10%, transparent 95%)",
            }}
          >
            <div className="flex flex-col gap-4">
              <p>
                No dia a dia, desenvolvo aplicações web internas e interfaces
                para os clientes com React, TypeScript e Tailwind CSS, e integro
                sistemas via APIs REST, incluindo o ERP UAU. Trato e analiso
                dados com SQL e Python para gerar indicadores operacionais e
                construir dashboards e ferramentas para as equipes. Automatizo
                processos com Python, JavaScript e Google Apps Script,
                eliminando tarefas manuais e repetitivas, e aplico IA generativa
                para automatizar consultas e análises.
              </p>
              <p>
                Meu objetivo é atuar com inteligência de dados, transformando
                dados de ERPs, APIs e bancos de dados em indicadores claros que
                apoiem a tomada de decisão. Sou graduado em Análise e
                Desenvolvimento de Sistemas e já desenvolvi projetos de
                realidade virtual e aumentada no SENAI Fatesg.
              </p>
            </div>
          </motion.div>

          <button
            type="button"
            onClick={() => setAberto((v) => !v)}
            aria-expanded={aberto}
            aria-controls="sobre-mais"
            className="group relative mx-auto -mt-1 inline-flex cursor-pointer items-center gap-1.5 py-1 text-base font-bold text-portfolio-accent transition-transform active:scale-95 light:text-claro-sand max-[750px]:mx-0 max-[750px]:self-start"
          >
            {aberto ? "Mostrar menos" : "Continuar lendo"}
            <motion.span
              animate={{ rotate: aberto ? 180 : 0, y: aberto ? 0 : [0, 3, 0] }}
              transition={{
                rotate: { duration: 0.3 },
                y: { duration: 1.4, repeat: aberto ? 0 : Infinity },
              }}
              className="flex"
            >
              <ChevronDown size={18} aria-hidden="true" />
            </motion.span>
            <RabiscoSublinhado className="absolute -bottom-1 left-0 w-[calc(100%-22px)]" />
          </button>
        </div>

        <ul className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-3 border-t border-portfolio-muted/20 pt-6 text-sm font-semibold tracking-wider uppercase light:border-claro-cream/25">
          {destaques.map(({ icon: Icon, texto }) => (
            <li key={texto} className="flex items-center gap-2">
              <Icon
                size={18}
                aria-hidden="true"
                className="text-portfolio-accent light:text-claro-sand"
              />
              {texto}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
