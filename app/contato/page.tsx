import type { Metadata } from "next";
import { ContactBoard } from "./contact-board";

export const metadata: Metadata = {
  title: "Contato e Aula Experimental",
  description:
    "Agende visita, confira endereço, horários e fale com a unidade Spartan Fit Jardim Tupã.",
};

export default function ContatoPage() {
  return <ContactBoard />;
}
