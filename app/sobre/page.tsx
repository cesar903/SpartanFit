import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowUpRight,
  AtSign,
  ClipboardCheck,
  Dumbbell,
  Medal,
  Ruler,
  ShieldCheck,
  TimerReset,
} from "lucide-react";
import { CtaButton } from "../components/cta-button";

export const metadata: Metadata = {
  title: "Sobre Nós e Estrutura",
  description:
    "Conheça a metodologia, estrutura e equipe técnica da Spartan Fit em Jardim Tupã.",
};

const method = [
  {
    icon: ClipboardCheck,
    label: "Avaliação antes da ficha",
    text: "Objetivo, histórico de lesão, rotina e nível de treino entram antes da primeira carga.",
  },
  {
    icon: Ruler,
    label: "Execução medida",
    text: "Professor corrige amplitude, postura e cadência. Série bonita no papel não basta.",
  },
  {
    icon: TimerReset,
    label: "Progressão por ciclo",
    text: "Treinos revisados em blocos de 30 a 45 dias, com ajuste de volume e descanso.",
  },
  {
    icon: ShieldCheck,
    label: "Sala sem abandono",
    text: "Equipe circulando no piso, limite real em aulas coletivas e reserva nos horários fortes.",
  },
];

const gallery = [
  {
    title: "Peso livre",
    text: "Racks, plataformas, barras olímpicas e anilhas bumper.",
    image: "/images/spartan-fit-7.jpeg",
    imagePosition: "object-center",
    className: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Máquinas",
    text: "Linha convergente, cabos duplos e ajustes rápidos.",
    image: "/images/spartan-fit-6.jpeg",
    imagePosition: "object-center",
    className: "",
  },
  {
    title: "Tatame",
    text: "Lutas com saco, manopla e contato controlado.",
    image: "/images/spartan-fit-3.jpeg",
    imagePosition: "object-center",
    className: "",
  },
  {
    title: "Recovery",
    text: "Mobilidade, soltura e retorno progressivo.",
    image: "/images/spartan-fit-4.jpeg",
    imagePosition: "object-center",
    className: "lg:col-span-2",
  },
];

const trainers = [
  {
    name: "Caio Torres",
    role: "Força e Cross Training",
    credential: "CREF 142931-G/SP",
    focus: "Agachamento, levantamento terra, condicionamento metabólico.",
    image: "/images/spartan-fit-5.jpeg",
    imagePosition: "object-center",
  },
  {
    name: "Dani Rocha",
    role: "Muay Thai e Boxe Fit",
    credential: "Faixa preta / competição amadora",
    focus: "Base, defesa, rounds técnicos e preparo de iniciantes.",
    image: "/images/spartan-fit-6.jpeg",
    imagePosition: "object-center",
  },
  {
    name: "Rafa Nunes",
    role: "Mobilidade e Reabilitação",
    credential: "Fisiologia do exercício",
    focus: "Quadril, ombro, coluna e retorno à carga sem improviso.",
    image: "/images/spartan-fit-2.jpeg",
    imagePosition: "object-center",
  },
];

export default function SobrePage() {
  return (
    <main>
      <section className="border-b border-line bg-[#080808] py-10 sm:py-16">
        <div className="site-shell grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="micro-label text-accent">Sobre a Spartan Fit</p>
            <h1 className="display-cut mt-4 text-[84px] leading-[0.84] text-foreground sm:text-[132px] lg:text-[160px]">
              Estrutura grande. Método simples.
            </h1>
          </div>
          <div className="border border-line bg-surface p-5">
            <p className="text-sm leading-6 text-muted">
              A Spartan Fit foi desenhada para reduzir atrito: equipamento certo,
              professor no piso, grade fixa e plano claro. O aluno entra, treina e
              sabe o que precisa repetir na próxima semana.
            </p>
            <div className="mt-6 grid grid-cols-3 divide-x divide-line border border-line">
              {[
                ["3000m²", "área"],
                ["42", "estações"],
                ["12", "profissionais"],
              ].map(([value, label]) => (
                <div key={label} className="p-4">
                  <p className="display-cut text-5xl leading-none text-foreground">
                    {value}
                  </p>
                  <p className="micro-label mt-2 text-subtle">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="site-shell grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
          <div className="relative min-h-[520px] overflow-hidden border border-line bg-surface">
            <Image
              src="/images/spartan-fit-7.jpeg"
              alt="Estrutura interna da Spartan Fit com espelhos, máquinas e área de peso livre"
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_42%,rgba(8,8,8,0.9)_100%)]" />
            <div className="absolute bottom-0 left-0 right-0 border-t border-line bg-background/72 p-5 backdrop-blur">
              <p className="micro-label text-accent">Estrutura real</p>
              <h2 className="display-cut mt-3 text-6xl leading-none text-foreground">
                Piso feito para treino pesado.
              </h2>
            </div>
          </div>

          <div className="grid gap-4">
            {method.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.label}
                  className="group border border-line bg-surface p-5 transition duration-150 hover:-translate-y-0.5 hover:border-accent/70"
                >
                  <div className="flex gap-5">
                    <span className="grid size-12 shrink-0 place-items-center border border-line text-accent transition duration-150 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                      <Icon aria-hidden="true" className="size-5" strokeWidth={2.3} />
                    </span>
                    <div>
                      <h3 className="text-sm font-black uppercase tracking-[0.12em] text-foreground">
                        {item.label}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-surface py-12 sm:py-16">
        <div className="site-shell">
          <div className="mb-8 grid gap-5 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="micro-label text-accent">Galeria técnica</p>
              <h2 className="display-cut mt-4 text-7xl leading-none text-foreground sm:text-8xl">
                Cada zona tem função.
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-muted lg:justify-self-end">
              A estrutura não é decoração. Ela separa fluxo de musculação, arena de
              condicionamento, tatame e área de mobilidade para a rotina não travar.
            </p>
          </div>

          <div className="grid auto-rows-[230px] gap-5 lg:grid-cols-4">
            {gallery.map((item, index) => (
              <article
                key={item.title}
                className={`group relative overflow-hidden border border-line bg-background p-5 transition duration-150 hover:-translate-y-0.5 hover:border-accent/70 ${item.className}`}
              >
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 25vw, 100vw"
                  className={`object-cover opacity-64 transition duration-150 group-hover:scale-[1.02] group-hover:opacity-80 ${
                    item.imagePosition
                  }`}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,8,0.1),rgba(8,8,8,0.92))]" />
                <div className="relative flex h-full flex-col justify-end">
                  <p className="micro-label text-accent">0{index + 1}</p>
                  <h3 className="display-cut mt-3 text-5xl leading-none text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-muted">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="site-shell">
          <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="micro-label text-accent">Equipe</p>
              <h2 className="display-cut mt-4 text-7xl leading-none text-foreground sm:text-8xl">
                Professor que corrige.
              </h2>
            </div>
            <CtaButton href="/contato" intent="ghost">
              Falar com a equipe
            </CtaButton>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {trainers.map((trainer) => (
              <article
                key={trainer.name}
                className="group border border-line bg-surface transition duration-150 hover:-translate-y-0.5 hover:border-accent/70"
              >
                <div className="relative h-72 overflow-hidden border-b border-line bg-[#080808]">
                  <Image
                    src={trainer.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className={`object-cover opacity-58 grayscale transition duration-150 group-hover:opacity-78 ${trainer.imagePosition}`}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,8,0.15),#080808)]" />
                  <div className="absolute bottom-5 left-5 grid size-16 place-items-center border border-accent bg-accent text-white">
                    <Medal aria-hidden="true" className="size-7" strokeWidth={2.3} />
                  </div>
                </div>
                <div className="p-5">
                  <p className="micro-label text-subtle">{trainer.credential}</p>
                  <h3 className="display-cut mt-3 text-6xl leading-none text-foreground">
                    {trainer.name}
                  </h3>
                  <p className="mt-2 text-sm font-black uppercase tracking-[0.12em] text-accent">
                    {trainer.role}
                  </p>
                  <p className="mt-5 min-h-18 text-sm leading-6 text-muted">
                    {trainer.focus}
                  </p>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 border-t border-line pt-4 text-xs font-black uppercase tracking-[0.14em] text-foreground transition duration-150 hover:text-accent"
                  >
                    <AtSign aria-hidden="true" className="size-4" />
                    Perfil técnico
                    <ArrowUpRight aria-hidden="true" className="size-4 text-accent" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-[#080808] py-10">
        <div className="site-shell flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="micro-label text-muted">Primeiro acesso acompanhado</p>
            <h2 className="display-cut mt-3 text-5xl leading-none text-foreground">
              Avaliação e treino base no mesmo dia.
            </h2>
          </div>
          <p className="flex items-center gap-3 text-sm font-semibold text-muted">
            <Dumbbell aria-hidden="true" className="size-5 text-accent" />
            Sem circuito genérico para aluno novo.
          </p>
        </div>
      </section>
    </main>
  );
}
