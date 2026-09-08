"use client";

import {
  BadgeCheck,
  ChevronDown,
  CircleSlash2,
  CreditCard,
  Dumbbell,
  Flame,
  ShieldCheck,
} from "lucide-react";
import { useMemo, useState } from "react";
import { CtaButton } from "../components/cta-button";

type BillingCycle = "mensal" | "semestral";

type Plan = {
  name: string;
  badge: string;
  monthly: number;
  semester: number;
  enrollment: string;
  highlight?: boolean;
  description: string;
  features: string[];
  limits: string[];
};

const plans: Plan[] = [
  {
    name: "Mensal",
    badge: "Flexível",
    monthly: 159,
    semester: 139,
    enrollment: "R$ 49",
    description: "Para quem quer treinar sem contrato longo.",
    features: [
      "Musculação todos os dias",
      "Avaliação física inicial",
      "Troca de treino a cada 45 dias",
      "Sem taxa de cancelamento",
    ],
    limits: ["Aulas coletivas avulsas", "Sem acesso à área VIP"],
  },
  {
    name: "Performance",
    badge: "Mais escolhido",
    monthly: 229,
    semester: 199,
    enrollment: "Isenta",
    highlight: true,
    description: "Musculação, aulas e acompanhamento com agenda semanal.",
    features: [
      "Musculação ilimitada",
      "Cross, spinning e mobilidade",
      "Bioimpedância mensal",
      "App de treino com carga registrada",
      "1 convidado por mês",
    ],
    limits: ["Lutas com reserva obrigatória"],
  },
  {
    name: "Black",
    badge: "Completo",
    monthly: 319,
    semester: 279,
    enrollment: "Isenta",
    description: "Para rotina intensa, lutas e uso livre da estrutura premium.",
    features: [
      "Todas as modalidades",
      "Área VIP e recovery",
      "Lutas ilimitadas",
      "2 avaliações mensais",
      "2 convidados por mês",
      "Armário fixo incluso",
    ],
    limits: ["Personal trainer não incluso"],
  },
];

const comparisonRows = [
  ["Musculação ilimitada", true, true, true],
  ["Aulas coletivas inclusas", false, true, true],
  ["Lutas inclusas", false, "reserva", true],
  ["Bioimpedância recorrente", false, true, true],
  ["Área VIP e recovery", false, false, true],
  ["Sem taxa de cancelamento", true, true, true],
] as const;

const faqs = [
  {
    question: "Tem taxa de cancelamento?",
    answer:
      "No plano mensal, não. Nos planos semestrais, o cancelamento segue o saldo proporcional das mensalidades com desconto já utilizado.",
  },
  {
    question: "A matrícula é cobrada em todos os planos?",
    answer:
      "A taxa de matrícula é cobrada apenas no plano Mensal. Performance e Black entram com matrícula isenta.",
  },
  {
    question: "Preciso reservar aula coletiva?",
    answer:
      "Cross Training, Muay Thai e Boxe Fit exigem reserva por limite de turma. Spinning e mobilidade também usam reserva em horário de pico.",
  },
  {
    question: "Posso testar antes de fechar?",
    answer:
      "Sim. A aula experimental inclui tour pela unidade, conversa de objetivo e indicação do melhor plano para sua rotina.",
  },
];

function formatPrice(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  })
    .format(value)
    .replace(/\u00a0/g, " ");
}

export function PricingBoard() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("mensal");
  const [openFaq, setOpenFaq] = useState(0);

  const activePlans = useMemo(
    () =>
      plans.map((plan) => ({
        ...plan,
        price: billingCycle === "mensal" ? plan.monthly : plan.semester,
      })),
    [billingCycle],
  );

  return (
    <main>
      <section className="border-b border-line bg-[#080808] py-10 sm:py-16">
        <div className="site-shell grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
          <div>
            <p className="micro-label text-accent">Planos & valores</p>
            <h1 className="display-cut mt-4 text-[86px] leading-[0.84] text-foreground sm:text-[132px] lg:text-[158px]">
              Pague pelo treino que usa.
            </h1>
          </div>
          <div className="border border-line bg-surface p-5">
            <p className="text-sm leading-6 text-muted">
              Valores claros, sem frase pequena escondida. Escolha mensal para
              flexibilidade ou semestral para reduzir o valor recorrente.
            </p>
            <div className="mt-6 grid grid-cols-2 border border-line p-1">
              {(["mensal", "semestral"] as BillingCycle[]).map((cycle) => (
                <button
                  key={cycle}
                  type="button"
                  onClick={() => setBillingCycle(cycle)}
                  className={`h-11 text-xs font-black uppercase tracking-[0.16em] transition duration-150 ${
                    billingCycle === cycle
                      ? "bg-accent text-white"
                      : "text-muted hover:bg-background hover:text-accent"
                  }`}
                >
                  {cycle}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="site-shell grid gap-5 lg:grid-cols-3">
          {activePlans.map((plan) => (
            <article
              key={plan.name}
              className={`relative min-w-0 flex min-h-[620px] flex-col border p-5 transition duration-150 hover:-translate-y-0.5 sm:p-6 ${
                plan.highlight
                  ? "border-accent bg-[#120b0b]"
                  : "border-line bg-surface hover:border-line-strong"
              }`}
            >
              {plan.highlight ? (
                <span className="absolute right-5 top-5 micro-label bg-accent px-3 py-2 text-white">
                  Recomendado
                </span>
              ) : null}

              <div>
                <p className="micro-label text-accent">{plan.badge}</p>
                <h2 className="display-cut mt-4 text-7xl leading-none text-foreground">
                  {plan.name}
                </h2>
                <p className="mt-4 min-h-12 text-sm leading-6 text-muted">
                  {plan.description}
                </p>
              </div>

              <div className="mt-8 border-y border-line py-6">
                <p className="display-cut text-6xl leading-none text-foreground sm:text-7xl">
                  {formatPrice(plan.price)}
                </p>
                <p className="mt-2 text-xs font-black uppercase tracking-[0.16em] text-subtle">
                  por mês / matrícula {plan.enrollment}
                </p>
              </div>

              <div className="mt-6 grid flex-1 content-start gap-3">
                {plan.features.map((feature) => (
                  <p key={feature} className="flex gap-3 text-sm leading-6 text-foreground">
                    <BadgeCheck
                      aria-hidden="true"
                      className="mt-1 size-4 shrink-0 text-accent"
                    />
                    {feature}
                  </p>
                ))}
                {plan.limits.map((limit) => (
                  <p key={limit} className="flex gap-3 text-sm leading-6 text-muted">
                    <CircleSlash2
                      aria-hidden="true"
                      className="mt-1 size-4 shrink-0 text-subtle"
                    />
                    {limit}
                  </p>
                ))}
              </div>

              <CtaButton href="/contato" className="mt-8 w-full">
                Quero esse plano
              </CtaButton>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-surface py-12 sm:py-16">
        <div className="site-shell">
          <div className="mb-8 grid gap-5 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="micro-label text-accent">Comparativo</p>
              <h2 className="display-cut mt-4 text-7xl leading-none text-foreground sm:text-8xl">
                Sem pacote confuso.
              </h2>
            </div>
            <div className="grid gap-3 text-sm text-muted sm:grid-cols-3">
              <p className="flex items-center gap-2 border border-line bg-background p-3">
                <Dumbbell aria-hidden="true" className="size-4 text-accent" />
                Treino livre
              </p>
              <p className="flex items-center gap-2 border border-line bg-background p-3">
                <Flame aria-hidden="true" className="size-4 text-accent" />
                Aulas fortes
              </p>
              <p className="flex items-center gap-2 border border-line bg-background p-3">
                <ShieldCheck aria-hidden="true" className="size-4 text-accent" />
                Contrato claro
              </p>
            </div>
          </div>

          <div className="grid gap-3 md:hidden">
            {comparisonRows.map(([label, mensal, performance, black]) => (
              <article key={label} className="border border-line bg-background p-4">
                <h3 className="text-sm font-black uppercase tracking-[0.12em] text-foreground">
                  {label}
                </h3>
                <div className="mt-4 grid gap-2">
                  {[
                    ["Mensal", mensal],
                    ["Performance", performance],
                    ["Black", black],
                  ].map(([planName, value]) => (
                    <p
                      key={`${label}-${planName}`}
                      className="flex items-center justify-between gap-4 border-t border-line pt-2 text-sm"
                    >
                      <span className="font-semibold text-muted">{planName}</span>
                      <span className="font-black uppercase tracking-[0.1em] text-foreground">
                        {value === true
                          ? "Sim"
                          : value === false
                            ? "Não incluso"
                            : "Com reserva"}
                      </span>
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="hidden max-w-full min-w-0 overflow-x-auto border border-line bg-background md:block">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="border-b border-line">
                  <th className="p-4 micro-label text-muted">Item</th>
                  {plans.map((plan) => (
                    <th key={plan.name} className="p-4 micro-label text-foreground">
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {comparisonRows.map(([label, mensal, performance, black]) => (
                  <tr key={label}>
                    <th className="p-4 text-sm font-semibold text-foreground">{label}</th>
                    {[mensal, performance, black].map((value, index) => (
                      <td key={`${label}-${index}`} className="p-4 text-sm text-muted">
                        {value === true ? (
                          <span className="inline-flex items-center gap-2 font-black uppercase tracking-[0.1em] text-accent">
                            <BadgeCheck aria-hidden="true" className="size-4" />
                            Sim
                          </span>
                        ) : value === false ? (
                          <span className="text-subtle">Não incluso</span>
                        ) : (
                          <span className="font-black uppercase tracking-[0.1em] text-foreground">
                            Com reserva
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="site-shell grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="micro-label text-accent">FAQ</p>
            <h2 className="display-cut mt-4 text-7xl leading-none text-foreground">
              Pergunta direta. Resposta direta.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-6 text-muted">
              Cancelamento, matrícula, reserva de aula e teste antes de fechar.
            </p>
          </div>

          <div className="grid gap-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <article key={faq.question} className="border border-line bg-surface">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-5 p-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-black uppercase tracking-[0.12em] text-foreground">
                      {faq.question}
                    </span>
                    <ChevronDown
                      aria-hidden="true"
                      className={`size-5 shrink-0 text-accent transition duration-150 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen ? (
                    <p className="border-t border-line px-5 pb-5 pt-4 text-sm leading-6 text-muted">
                      {faq.answer}
                    </p>
                  ) : null}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-[#080808] py-10">
        <div className="site-shell flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="micro-label text-muted">Fechamento presencial ou online</p>
            <h2 className="display-cut mt-3 text-5xl leading-none text-foreground">
              Matrícula em até 8 minutos.
            </h2>
          </div>
          <p className="flex items-center gap-3 text-sm font-semibold text-muted">
            <CreditCard aria-hidden="true" className="size-5 text-accent" />
            Pix, crédito ou débito recorrente.
          </p>
        </div>
      </section>
    </main>
  );
}
