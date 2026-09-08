import type { Metadata } from "next";
import { ClassBoard } from "./class-board";

export const metadata: Metadata = {
  title: "Aulas e Grade Horária",
  description:
    "Confira modalidades, instrutores, intensidade e horários fixos da Spartan Fit.",
};

export default function AulasPage() {
  return <ClassBoard />;
}
