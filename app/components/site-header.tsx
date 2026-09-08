"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MapPin, Menu, X } from "lucide-react";
import { useState } from "react";
import { CtaButton } from "./cta-button";

const navItems = [
  { href: "/", label: "Início" },
  { href: "/aulas", label: "Aulas" },
  { href: "/planos", label: "Planos" },
  { href: "/sobre", label: "Estrutura" },
  { href: "/contato", label: "Contato" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/88 backdrop-blur-xl">
      <div className="site-shell flex h-20 items-center justify-between gap-5">
        <Link
          href="/"
          className="group flex items-center gap-3"
          onClick={() => setIsOpen(false)}
          aria-label="Spartan Fit - Início"
        >
          <span className="relative block h-14 w-32 transition duration-150 group-hover:-translate-y-0.5 sm:w-36">
            <Image
              src="/images/spartan-fit-logo.png"
              alt="Spartan Fit"
              fill
              priority
              sizes="144px"
              className="object-contain object-left"
            />
          </span>
        </Link>

        <nav className="hidden items-center border-x border-line lg:flex" aria-label="Menu principal">
          {navItems.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`micro-label border-r border-line px-5 py-8 transition duration-150 last:border-r-0 hover:bg-surface hover:text-accent ${
                  isActive ? "bg-accent-soft text-accent" : "text-muted"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <div className="flex items-center gap-2 border border-line px-3 py-2 text-xs font-semibold text-muted">
            <MapPin aria-hidden="true" className="size-4 text-accent" />
            <span>Jardim Tupã, São Bernardo do Campo - SP</span>
          </div>
          <CtaButton href="/contato">Aula experimental</CtaButton>
        </div>

        <button
          type="button"
          className="grid size-11 place-items-center border border-line bg-surface text-foreground transition duration-150 hover:-translate-y-0.5 hover:border-accent hover:text-accent lg:hidden"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          aria-controls="menu-mobile"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-line bg-background lg:hidden">
          <nav id="menu-mobile" className="site-shell grid py-4" aria-label="Menu mobile">
            {navItems.map((item) => {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex items-center justify-between border-b border-line py-4 text-sm font-black uppercase tracking-[0.16em] transition duration-150 last:border-b-0 hover:text-accent ${
                    isActive ? "text-accent" : "text-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                  <span className="text-xs text-subtle">0{navItems.indexOf(item) + 1}</span>
                </Link>
              );
            })}
            <CtaButton href="/contato" className="mt-5 w-full" onClick={() => setIsOpen(false)}>
              Aula experimental
            </CtaButton>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
