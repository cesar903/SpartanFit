"use client";

import {
  CalendarClock,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Send,
  UserRound,
} from "lucide-react";
import { useState } from "react";

const hours = [
  ["Seg-Sex", "06h às 22h"],
  ["Sábado", "09h às 12h"],
];

const visitOptions = [
  "Musculação",
  "Zumba / Fit Dance",
  "Pilates",
  "Boxe",
  "Jiu-jitsu Adulto",
  "Kickboxing",
  "Jiu-jitsu Kids",
];

const contactPoints = [
  {
    icon: MapPin,
    label: "Endereço",
    value: "Estr. Henrique Rosa, 555 - Jardim Tupã, São Bernardo do Campo - SP",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "(11) 94002-1188",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "atendimento@spartanfit.com.br",
  },
];

export function ContactBoard() {
  const [sent, setSent] = useState(false);

  return (
    <main>
      <section className="border-b border-line bg-[#080808] py-10 sm:py-16">
        <div className="site-shell grid gap-8 lg:grid-cols-[0.84fr_1.16fr] lg:items-end">
          <div>
            <p className="micro-label text-accent">Contato & unidades</p>
            <h1 className="display-cut mt-4 text-[84px] leading-[0.84] text-foreground sm:text-[132px] lg:text-[158px]">
              Agende. Chegue. Treine.
            </h1>
          </div>
          <div className="border border-line bg-surface p-5">
            <p className="text-sm leading-6 text-muted">
              A visita leva 30 minutos: tour pela unidade, conversa de objetivo,
              indicação de modalidade e orientação sobre horários disponíveis.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {hours.map(([day, time]) => (
                <div key={day} className="border border-line bg-background p-4">
                  <p className="micro-label text-subtle">{day}</p>
                  <p className="mt-2 text-sm font-black uppercase tracking-[0.1em] text-foreground">
                    {time}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="site-shell grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="grid gap-5">
            {contactPoints.map((item) => {
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
                      <p className="micro-label text-subtle">{item.label}</p>
                      <p className="mt-3 text-sm font-semibold leading-6 text-foreground">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}

            <div className="relative min-h-[360px] overflow-hidden border border-line bg-[#080808]">
              <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:34px_34px]" />
              <div className="absolute left-[18%] top-[22%] h-px w-[54%] rotate-[-18deg] bg-accent" />
              <div className="absolute left-[32%] top-[16%] h-[64%] w-px rotate-[23deg] bg-line-strong" />
              <div className="absolute bottom-[26%] right-[15%] h-px w-[42%] rotate-[8deg] bg-line-strong" />
              <div className="absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center border border-accent bg-accent text-white shadow-hard">
                <Navigation aria-hidden="true" className="size-7" strokeWidth={2.4} />
              </div>
              <div className="absolute bottom-5 left-5 right-5 border border-line bg-background/78 p-5 backdrop-blur">
                <p className="micro-label text-accent">Mapa mockup</p>
                <h2 className="display-cut mt-3 text-5xl leading-none text-foreground">
                  Jardim Tupã, São Bernardo do Campo - SP
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted">
                  Estr. Henrique Rosa, 555. Unidade com 500m² e 40 equipamentos.
                </p>
              </div>
            </div>
          </div>

          <section className="border border-line bg-surface p-5 sm:p-6" aria-labelledby="visit-title">
            <p className="micro-label text-accent">Aula experimental</p>
            <h2 id="visit-title" className="display-cut mt-4 text-7xl leading-none text-foreground">
              Reserve seu primeiro treino.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">
              Preencha os dados e indique a modalidade. O retorno acontece por
              WhatsApp para confirmar o melhor horário.
            </p>

            {sent ? (
              <div className="mt-8 border border-accent bg-accent-soft p-5" role="status" aria-live="polite">
                <div className="flex gap-4">
                  <CheckCircle2 aria-hidden="true" className="size-6 shrink-0 text-accent" />
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.12em] text-foreground">
                      Solicitação registrada
                    </p>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      Mensagem local exibida para o protótipo. Na integração final,
                      esse formulário pode enviar para CRM, e-mail ou WhatsApp.
                    </p>
                  </div>
                </div>
              </div>
            ) : null}

            <form
              className="mt-8 grid gap-5"
              onSubmit={(event) => {
                event.preventDefault();
                setSent(true);
              }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2">
                  <span className="micro-label text-subtle">Nome</span>
                  <span className="flex h-12 items-center gap-3 border border-line bg-background px-4 focus-within:border-accent">
                    <UserRound aria-hidden="true" className="size-4 shrink-0 text-accent" />
                    <input
                      required
                      name="name"
                      autoComplete="name"
                      placeholder="Seu nome"
                      className="min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-subtle"
                    />
                  </span>
                </label>

                <label className="grid gap-2">
                  <span className="micro-label text-subtle">WhatsApp</span>
                  <span className="flex h-12 items-center gap-3 border border-line bg-background px-4 focus-within:border-accent">
                    <Phone aria-hidden="true" className="size-4 shrink-0 text-accent" />
                    <input
                      required
                      name="phone"
                      autoComplete="tel"
                      inputMode="tel"
                      placeholder="(11) 99999-9999"
                      className="min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-subtle"
                    />
                  </span>
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2">
                  <span className="micro-label text-subtle">Modalidade</span>
                  <select
                    required
                    name="classType"
                    className="h-12 border border-line bg-background px-4 text-sm font-semibold text-foreground outline-none transition duration-150 focus:border-accent"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Escolha uma aula
                    </option>
                    {visitOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="grid gap-2">
                  <span className="micro-label text-subtle">Melhor horário</span>
                  <span className="flex h-12 items-center gap-3 border border-line bg-background px-4 focus-within:border-accent">
                    <CalendarClock aria-hidden="true" className="size-4 shrink-0 text-accent" />
                    <input
                      required
                      name="preferredTime"
                      placeholder="Ex: terça, 20h"
                      className="min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-subtle"
                    />
                  </span>
                </label>
              </div>

              <label className="grid gap-2">
                <span className="micro-label text-subtle">Objetivo</span>
                <textarea
                  name="goal"
                  rows={5}
                  placeholder="Hipertrofia, emagrecimento, retorno ao treino, luta, condicionamento..."
                  className="resize-none border border-line bg-background p-4 text-sm leading-6 text-foreground outline-none transition duration-150 placeholder:text-subtle focus:border-accent"
                />
              </label>

              <button
                type="submit"
                className="group inline-flex h-12 items-center justify-center gap-2 border border-accent bg-accent px-5 text-sm font-black uppercase tracking-[0.14em] text-white transition duration-150 hover:-translate-y-0.5 hover:bg-accent-deep"
              >
                Enviar solicitação
                <Send
                  aria-hidden="true"
                  className="size-4 transition duration-150 group-hover:translate-x-0.5"
                  strokeWidth={2.4}
                />
              </button>
            </form>
          </section>
        </div>
      </section>

      <a
        href="https://wa.me/5511940021188?text=Quero%20agendar%20uma%20aula%20experimental%20na%20Spartan%20Fit"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 inline-flex size-14 items-center justify-center border border-accent bg-accent text-white shadow-hard transition duration-150 hover:-translate-y-1 hover:bg-accent-deep"
        aria-label="Abrir conversa no WhatsApp"
      >
        <MessageCircle aria-hidden="true" className="size-6" strokeWidth={2.5} />
      </a>

      <section className="border-t border-line bg-[#080808] py-10">
        <div className="site-shell flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="micro-label text-muted">Chegue com 15 minutos de folga</p>
            <h2 className="display-cut mt-3 text-5xl leading-none text-foreground">
              Avaliação, tour e treino sem pressa.
            </h2>
          </div>
          <p className="flex items-center gap-3 text-sm font-semibold text-muted">
            <Clock3 aria-hidden="true" className="size-5 text-accent" />
            Documento e roupa de treino resolvem o primeiro acesso.
          </p>
        </div>
      </section>
    </main>
  );
}
