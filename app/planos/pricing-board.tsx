"use client";

import {
  BadgeCheck,
  ChevronDown,
  CreditCard,
  Dumbbell,
  Flame,
  ShieldCheck,
  Wallet,
} from "lucide-react";
import { useState } from "react";
import { CtaButton } from "../components/cta-button";

type BillingCycle = "mensal" | "semestral" | "anual";

type Plan = {
  name: string;
  badge: string;
  highlight?: boolean;
  description: string;
  prices: Record<BillingCycle, { label: string; note: string }>;
  features: string[];
};

const plans: Plan[] = [
  {
    name: "Academia",
    badge: "Musculação",
    highlight: true,
    description: "Acesso à musculação com estrutura de 500m² e 40 equipamentos.",
    prices: {
      mensal: { label: "R$ 89,90", note: "mensal" },
      semestral: { label: "6x R$ 79,90", note: "ou R$ 479,90 à vista" },
      anual: { label: "12x R$ 69,90", note: "ou R$ 839,90 à vista" },
    },
    features: [
      "Musculação de segunda a sexta, 06h às 22h",
      "Sábado, 09h às 12h",
      "40 equipamentos",
      "Equipe presente no piso",
    ],
  },
  {
    name: "Kickboxing",
    badge: "Luta",
    description: "Treino técnico de golpes, deslocamento, defesa e condicionamento.",
    prices: {
      mensal: { label: "R$ 69,90", note: "mensal" },
      semestral: { label: "6x R$ 66,91", note: "ou R$ 401,46 à vista" },
      anual: { label: "12x R$ 63,92", note: "ou R$ 767,04 à vista" },
    },
    features: [
      "Segunda e quarta",
      "21h às 22h",
      "Aula em tatame",
      "Condicionamento intenso",
    ],
  },
  {
    name: "Jiu-jitsu",
    badge: "Adulto",
    description: "Aula para base, defesa, posicionamento e evolução no tatame.",
    prices: {
      mensal: { label: "R$ 69,90", note: "mensal" },
      semestral: { label: "6x R$ 66,91", note: "ou R$ 401,46 à vista" },
      anual: { label: "12x R$ 63,92", note: "ou R$ 767,04 à vista" },
    },
    features: [
      "Terça e quinta",
      "20h às 22h",
      "Turma adulta",
      "Técnica e resistência",
    ],
  },
  {
    name: "Jiu-jitsu Kids",
    badge: "Kids",
    description: "Turmas infantis organizadas por horário e evolução técnica.",
    prices: {
      mensal: { label: "R$ 59,90", note: "mensal" },
      semestral: { label: "6x R$ 57,41", note: "ou R$ 344,46 à vista" },
      anual: { label: "12x R$ 54,92", note: "ou R$ 659,04 à vista" },
    },
    features: [
      "Kids 1, Kids 2 e Kids 3",
      "Horários fixos durante a semana",
      "Aula em tatame",
      "Disciplina, coordenação e técnica",
    ],
  },
];

const comparisonRows = [
  ["Academia", "R$ 89,90", "6x R$ 79,90", "12x R$ 69,90"],
  ["Kickboxing", "R$ 69,90", "6x R$ 66,91", "12x R$ 63,92"],
  ["Jiu-jitsu", "R$ 69,90", "6x R$ 66,91", "12x R$ 63,92"],
  ["Jiu-jitsu Kids", "R$ 59,90", "6x R$ 57,41", "12x R$ 54,92"],
] as const;

const faqs = [
  {
    question: "Quais formas de pagamento são aceitas?",
    answer:
      "Aceitamos débito, crédito, Pix ou dinheiro. O pagamento recorrente fica disponível pelo app.",
  },
  {
    question: "O semestral e o anual podem ser pagos à vista?",
    answer:
      "Sim. Cada plano tem opção parcelada e opção à vista. Os valores à vista aparecem abaixo do preço principal.",
  },
  {
    question: "O plano de academia inclui lutas?",
    answer:
      "Não. Academia, Kickboxing, Jiu-jitsu e Jiu-jitsu Kids são planos separados nesta tabela.",
  },
  {
    question: "Posso confirmar o melhor plano antes de fechar?",
    answer:
      "Sim. O atendimento pode confirmar modalidade, turma, horário e forma de pagamento antes da matrícula.",
  },
];

export function PricingBoard() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("mensal");
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main>
      <section className="border-b border-line bg-[#080808] py-10 sm:py-16">
        <div className="site-shell grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
          <div>
            <p className="micro-label text-accent">Planos & valores</p>
            <h1 className="display-cut mt-4 text-[86px] leading-[0.84] text-foreground sm:text-[132px] lg:text-[158px]">
              Preço claro. Treino certo.
            </h1>
          </div>
          <div className="border border-line bg-surface p-5">
            <p className="text-sm leading-6 text-muted">
              Escolha a modalidade e veja mensal, semestral ou anual. Débito,
              crédito, Pix e dinheiro disponíveis; recorrência pelo app.
            </p>
            <div className="mt-6 grid grid-cols-3 border border-line p-1">
              {(["mensal", "semestral", "anual"] as BillingCycle[]).map((cycle) => (
                <button
                  key={cycle}
                  type="button"
                  onClick={() => setBillingCycle(cycle)}
                  className={`h-11 text-[11px] font-black uppercase tracking-[0.14em] transition duration-150 sm:text-xs ${
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
        <div className="site-shell grid gap-5 lg:grid-cols-4">
          {plans.map((plan) => {
            const price = plan.prices[billingCycle];

            return (
              <article
                key={plan.name}
                className={`relative min-w-0 flex min-h-[610px] flex-col border p-5 transition duration-150 hover:-translate-y-0.5 sm:p-6 ${
                  plan.highlight
                    ? "border-accent bg-[#120b0b]"
                    : "border-line bg-surface hover:border-line-strong"
                }`}
              >
                {plan.highlight ? (
                  <span className="absolute right-5 top-5 micro-label bg-accent px-3 py-2 text-white">
                    Academia
                  </span>
                ) : null}

                <div>
                  <p className="micro-label text-accent">{plan.badge}</p>
                  <h2 className="display-cut mt-4 text-6xl leading-none text-foreground">
                    {plan.name}
                  </h2>
                  <p className="mt-4 min-h-18 text-sm leading-6 text-muted">
                    {plan.description}
                  </p>
                </div>

                <div className="mt-8 border-y border-line py-6">
                  <p className="display-cut text-5xl leading-none text-foreground sm:text-6xl">
                    {price.label}
                  </p>
                  <p className="mt-2 min-h-8 text-xs font-black uppercase tracking-[0.14em] text-subtle">
                    {price.note}
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
                </div>

                <CtaButton href="/contato" className="mt-8 w-full">
                  Quero esse plano
                </CtaButton>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-line bg-surface py-12 sm:py-16">
        <div className="site-shell">
          <div className="mb-8 grid gap-5 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="micro-label text-accent">Comparativo</p>
              <h2 className="display-cut mt-4 text-7xl leading-none text-foreground sm:text-8xl">
                Valores por modalidade.
              </h2>
            </div>
            <div className="grid gap-3 text-sm text-muted sm:grid-cols-3">
              <p className="flex items-center gap-2 border border-line bg-background p-3">
                <Dumbbell aria-hidden="true" className="size-4 text-accent" />
                Academia
              </p>
              <p className="flex items-center gap-2 border border-line bg-background p-3">
                <Flame aria-hidden="true" className="size-4 text-accent" />
                Lutas
              </p>
              <p className="flex items-center gap-2 border border-line bg-background p-3">
                <ShieldCheck aria-hidden="true" className="size-4 text-accent" />
                Plano claro
              </p>
            </div>
          </div>

          <div className="grid gap-3 md:hidden">
            {comparisonRows.map(([label, mensal, semestral, anual]) => (
              <article key={label} className="border border-line bg-background p-4">
                <h3 className="text-sm font-black uppercase tracking-[0.12em] text-foreground">
                  {label}
                </h3>
                <div className="mt-4 grid gap-2">
                  {[
                    ["Mensal", mensal],
                    ["Semestral", semestral],
                    ["Anual", anual],
                  ].map(([cycle, value]) => (
                    <p
                      key={`${label}-${cycle}`}
                      className="flex items-center justify-between gap-4 border-t border-line pt-2 text-sm"
                    >
                      <span className="font-semibold text-muted">{cycle}</span>
                      <span className="font-black uppercase tracking-[0.08em] text-foreground">
                        {value}
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
                  <th className="p-4 micro-label text-muted">Plano</th>
                  <th className="p-4 micro-label text-foreground">Mensal</th>
                  <th className="p-4 micro-label text-foreground">Semestral</th>
                  <th className="p-4 micro-label text-foreground">Anual</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {comparisonRows.map(([label, mensal, semestral, anual]) => (
                  <tr key={label}>
                    <th className="p-4 text-sm font-semibold text-foreground">{label}</th>
                    {[mensal, semestral, anual].map((value, index) => (
                      <td key={`${label}-${index}`} className="p-4 text-sm text-muted">
                        <span className="font-black uppercase tracking-[0.08em] text-foreground">
                          {value}
                        </span>
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
              Pagamento direto.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-6 text-muted">
              Débito, crédito, Pix, dinheiro e recorrência disponível pelo app.
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
            <p className="micro-label text-muted">Formas de pagamento</p>
            <h2 className="display-cut mt-3 text-5xl leading-none text-foreground">
              Débito, crédito, Pix ou dinheiro.
            </h2>
          </div>
          <p className="flex items-center gap-3 text-sm font-semibold text-muted">
            <CreditCard aria-hidden="true" className="size-5 text-accent" />
            Recorrência disponível no app.
          </p>
          <p className="flex items-center gap-3 text-sm font-semibold text-muted">
            <Wallet aria-hidden="true" className="size-5 text-accent" />
            Planos à vista com Pix ou dinheiro.
          </p>
        </div>
      </section>
    </main>
  );
}
