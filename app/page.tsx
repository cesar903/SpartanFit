import Image from "next/image";
import {
  Activity,
  ArrowRight,
  Clock3,
  MapPin,
  ShieldCheck,
  Users,
} from "lucide-react";
import { CtaButton } from "./components/cta-button";

const quickStats = [
  { label: "Área de treino", value: "500m²" },
  { label: "Equipamentos", value: "40" },
  { label: "Funcionários", value: "12" },
  { label: "Seg-sex", value: "06h-22h" },
];

const highlights = [
  {
    icon: MapPin,
    label: "Unidade central",
    text: "Jardim Tupã, a 1 min do ponto de ônibus.",
  },
  {
    icon: Clock3,
    label: "Horário amplo",
    text: "Musculação de segunda a sexta, das 06h às 22h.",
  },
  {
    icon: ShieldCheck,
    label: "Sem multa mensal",
    text: "Cancele o plano mensal sem taxa escondida.",
  },
];

const popularClasses = [
  {
    name: "Zumba / Fit Dance",
    schedule: "Seg e qua - 19h",
    intensity: "Cardio ritmado",
    detail: "Aula coletiva para condicionamento, coordenação e gasto calórico.",
    image: "/images/spartan-fit-6.jpeg",
    imagePosition: "object-center",
    size: "lg:col-span-2 lg:row-span-2",
  },
  {
    name: "Musculação",
    schedule: "Seg a sex 06h-22h / sáb 09h-12h",
    intensity: "40 equipamentos",
    detail: "Estrutura de 500m² para treinar força, saúde e condicionamento.",
    image: "/images/spartan-fit-fundo.jpeg",
    imagePosition: "object-center",
    size: "",
  },
  {
    name: "Jiu-jitsu",
    schedule: "Adulto ter e qui - 20h",
    intensity: "Tatame ativo",
    detail: "Turmas adulto e kids com horários fixos durante a semana.",
    image: "/images/spartan-fit-3.jpeg",
    imagePosition: "object-center",
    size: "",
  },
  {
    name: "Boxe e Kickboxing",
    schedule: "Boxe ter/qui 08h; Kick seg/qua 21h",
    intensity: "Luta e cardio",
    detail: "Golpes, deslocamento, defesa e condicionamento em treino técnico.",
    image: "/images/spartan-fit-4.jpeg",
    imagePosition: "object-center",
    size: "",
  },
];

const testimonials = [
  {
    quote: "Sai de treino solto para planilha com carga, pausa e meta por semana.",
    author: "Marcos A.",
    meta: "Aluno desde 2024",
  },
  {
    quote: "As aulas têm correção real. Ninguém fica perdido no canto.",
    author: "Renata P.",
    meta: "Lutas",
  },
  {
    quote: "Equipamento novo, horário cedo e professor circulando o tempo todo.",
    author: "Felipe R.",
    meta: "Musculação 6h",
  },
];

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-line bg-[#080808]">
        <Image
          src="/images/spartan-fit-banner-logo.jpeg"
          alt="Logo da Spartan Fit em fundo preto"
          fill
          priority
          sizes="100vw"
          className="object-contain object-right opacity-74"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#080808_0%,rgba(8,8,8,0.94)_35%,rgba(8,8,8,0.66)_68%,rgba(8,8,8,0.28)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,8,0.2),#080808_96%)]" />

        <div className="site-shell relative grid min-h-[calc(100svh-80px)] content-start sm:min-h-[82svh] sm:content-end">
          <div className="max-w-5xl pb-12 pt-0 sm:pb-16 sm:pt-10">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="micro-label border border-accent bg-accent-soft px-3 py-2 text-accent">
                Matrícula aberta
              </span>
              <span className="micro-label border border-line bg-background/60 px-3 py-2 text-muted">
                Aula experimental sem custo
              </span>
            </div>

            <h1 className="display-cut max-w-5xl text-[82px] leading-[0.82] text-foreground sm:text-[132px] lg:text-[172px]">
              Treino sério para gente constante.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-muted sm:text-lg">
              Musculação, Zumba, Pilates, Boxe, Jiu-jitsu e Kickboxing em uma
              estrutura de 500m² com 40 equipamentos e equipe presente.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <CtaButton href="/contato" className="w-full sm:w-auto">
                Agendar aula
              </CtaButton>
              <CtaButton href="/planos" intent="ghost" className="w-full sm:w-auto">
                Ver planos
              </CtaButton>
            </div>
          </div>

          <dl className="grid border-x border-t border-line bg-background/72 backdrop-blur md:grid-cols-4">
            {quickStats.map((stat) => (
              <div
                key={stat.label}
                className="border-b border-line p-5 md:border-b-0 md:border-r md:last:border-r-0"
              >
                <dt className="micro-label text-subtle">{stat.label}</dt>
                <dd className="display-cut mt-3 text-4xl leading-none text-foreground">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-b border-line py-12 sm:py-16">
        <div className="site-shell grid gap-6 lg:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.label}
                className="group border border-line bg-surface p-6 transition duration-150 hover:-translate-y-0.5 hover:border-accent/70"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="micro-label text-muted">{item.label}</p>
                    <p className="mt-5 max-w-sm text-sm leading-6 text-foreground">
                      {item.text}
                    </p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center border border-line text-accent transition duration-150 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                    <Icon aria-hidden="true" className="size-5" strokeWidth={2.4} />
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="site-shell">
          <div className="mb-8 grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="micro-label text-accent">Aulas populares</p>
              <h2 className="display-cut mt-4 text-7xl leading-none text-foreground sm:text-8xl">
                Grade que segura rotina.
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-muted lg:justify-self-end">
              Modalidades com horário fixo, limite de vagas e instrutores em sala.
              O foco é treinar saúde, condicionamento e evolução diária.
            </p>
          </div>

          <div className="grid auto-rows-[minmax(220px,auto)] gap-5 lg:grid-cols-4">
            {popularClasses.map((classItem, index) => (
              <article
                key={classItem.name}
                className={`group flex flex-col justify-between overflow-hidden border border-line bg-surface transition duration-150 hover:-translate-y-0.5 hover:border-accent/70 ${classItem.size}`}
              >
                <div className="relative min-h-44 border-b border-line">
                  <Image
                    src={classItem.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 25vw, 100vw"
                    className={`object-cover opacity-72 grayscale transition duration-150 group-hover:scale-[1.02] group-hover:opacity-90 group-hover:grayscale-0 ${classItem.imagePosition}`}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,8,0.12),rgba(8,8,8,0.88))]" />
                  <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4">
                    <span className="micro-label text-subtle">0{index + 1}</span>
                    <Activity
                      aria-hidden="true"
                      className="size-5 text-accent"
                      strokeWidth={2.4}
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="display-cut text-5xl leading-none text-foreground lg:text-6xl">
                    {classItem.name}
                  </h3>
                  <p className="mt-4 text-sm font-black uppercase tracking-[0.12em] text-accent">
                    {classItem.intensity}
                  </p>
                </div>
                <div className="mt-auto border-t border-line p-6">
                  <p className="text-sm leading-6 text-muted">{classItem.detail}</p>
                  <p className="mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-foreground">
                    {classItem.schedule}
                    <ArrowRight aria-hidden="true" className="size-4 text-accent" />
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-surface py-14 sm:py-18">
        <div className="site-shell grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-stretch">
          <div className="border border-line bg-background p-6">
            <p className="micro-label text-muted">Prova social</p>
            <h2 className="display-cut mt-5 text-6xl leading-none text-foreground sm:text-7xl">
              Aluno percebe processo.
            </h2>
            <div className="mt-8 flex items-center gap-4 border-t border-line pt-6">
              <Users aria-hidden="true" className="size-9 text-accent" strokeWidth={2.2} />
              <p className="text-sm leading-6 text-muted">
                Musculação, dança, Pilates e lutas em uma rotina de treinos para
                evoluir todos os dias.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <figure
                key={item.author}
                className="flex min-h-[260px] flex-col justify-between border border-line bg-[#0d0d0d] p-6 transition duration-150 hover:-translate-y-0.5 hover:border-line-strong"
              >
                <blockquote className="text-base font-semibold leading-7 text-foreground">
                  &quot;{item.quote}&quot;
                </blockquote>
                <figcaption className="mt-8 border-t border-line pt-5">
                  <p className="text-sm font-black uppercase tracking-[0.12em] text-accent">
                    {item.author}
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-subtle">
                    {item.meta}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
