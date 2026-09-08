import Image from "next/image";
import Link from "next/link";
import { AtSign, Clock3, MapPinned, Phone } from "lucide-react";
import { CtaButton } from "./cta-button";

const footerLinks = [
  { href: "/aulas", label: "Grade de treino semanal" },
  { href: "/planos", label: "Planos e valores" },
  { href: "/sobre", label: "Equipamentos e equipe" },
  { href: "/contato", label: "Agendar visita" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-[#080808]">
      <div className="site-shell grid gap-10 py-10 lg:grid-cols-[1.1fr_0.9fr_0.8fr] lg:divide-x lg:divide-line">
        <div className="lg:pr-10">
          <div className="relative h-20 w-44">
            <Image
              src="/images/spartan-fit-logo.png"
              alt="Spartan Fit"
              fill
              sizes="176px"
              className="object-contain object-left"
            />
          </div>
          <h2 className="display-cut mt-4 max-w-xl text-6xl leading-none text-foreground">
            Musculação, lutas e condicionamento sem enrolação.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-6 text-muted">
            3000m² climatizados, treino acompanhado e avaliação física no primeiro
            acesso.
          </p>
          <CtaButton href="/contato" className="mt-7">
            Marcar visita
          </CtaButton>
        </div>

        <div className="grid gap-4 lg:px-10">
          <p className="micro-label text-muted">Navegação</p>
          <nav className="grid gap-3" aria-label="Links do rodapé">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-b border-line pb-3 text-sm font-bold uppercase tracking-[0.1em] text-foreground transition duration-150 hover:border-accent hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="grid content-start gap-5 lg:pl-10">
          <p className="micro-label text-muted">Unidade</p>
          <div className="grid gap-4 text-sm leading-6 text-muted">
            <p className="flex gap-3">
              <MapPinned aria-hidden="true" className="mt-1 size-4 shrink-0 text-accent" />
              Rua Domingos de Morais, 2187 - Vila Mariana, São Paulo
            </p>
            <p className="flex gap-3">
              <Clock3 aria-hidden="true" className="mt-1 size-4 shrink-0 text-accent" />
              Segunda a sexta, 05h às 23h. Sábado, 07h às 18h.
            </p>
            <p className="flex gap-3">
              <Phone aria-hidden="true" className="mt-1 size-4 shrink-0 text-accent" />
              WhatsApp: (11) 94002-1188
            </p>
            <Link
              href="https://www.instagram.com/"
              className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.12em] text-foreground transition duration-150 hover:text-accent"
              target="_blank"
              rel="noreferrer"
            >
              <AtSign aria-hidden="true" className="size-4" />
              Instagram
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="site-shell flex flex-col gap-3 py-5 text-xs font-semibold uppercase tracking-[0.16em] text-subtle sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Spartan Fit Academia</span>
          <span>Sem taxa de cancelamento no plano mensal</span>
        </div>
      </div>
    </footer>
  );
}
