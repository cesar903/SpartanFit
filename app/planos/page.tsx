import type { Metadata } from "next";
import { PricingBoard } from "./pricing-board";

export const metadata: Metadata = {
  title: "Planos e Valores",
  description:
    "Compare valores mensais, semestrais e anuais da Spartan Fit para academia, Kickboxing, Jiu-jitsu e Jiu-jitsu Kids.",
};

export default function PlanosPage() {
  return <PricingBoard />;
}
