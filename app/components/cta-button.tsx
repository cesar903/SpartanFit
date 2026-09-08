import Link from "next/link";
import type { ComponentProps } from "react";
import { ArrowUpRight } from "lucide-react";

type CtaButtonProps = ComponentProps<typeof Link> & {
  children: React.ReactNode;
  intent?: "primary" | "ghost";
};

export function CtaButton({
  children,
  className = "",
  intent = "primary",
  ...props
}: CtaButtonProps) {
  const baseClasses =
    "group inline-flex h-12 items-center justify-center gap-2 border px-5 text-sm font-black uppercase tracking-[0.14em] transition duration-150 hover:-translate-y-0.5";
  const intentClasses =
    intent === "primary"
      ? "border-accent bg-accent text-white hover:border-accent-deep hover:bg-accent-deep"
      : "border-line bg-transparent text-foreground hover:border-accent hover:text-accent";

  return (
    <Link className={`${baseClasses} ${intentClasses} ${className}`} {...props}>
      <span>{children}</span>
      <ArrowUpRight
        aria-hidden="true"
        className="size-4 transition duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        strokeWidth={2.5}
      />
    </Link>
  );
}
