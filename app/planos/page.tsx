import type { Metadata } from "next";
import { PricingBoard } from "./pricing-board";

export const metadata: Metadata = {
  title: "Planos e Valores",
  description:
    "Compare planos mensais e semestrais da Spartan Fit com valores, benefícios e FAQ.",
};

export default function PlanosPage() {
  return <PricingBoard />;
}
