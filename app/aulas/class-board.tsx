"use client";

import {
  CalendarDays,
  Clock3,
  Flame,
  Search,
  SlidersHorizontal,
  UserRound,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type Category = "Todas" | "Musculação" | "Dança" | "Pilates" | "Lutas" | "Kids";

type ClassItem = {
  id: string;
  name: string;
  category: Exclude<Category, "Todas">;
  intensity: "Baixa" | "Média" | "Alta" | "Máxima";
  duration: string;
  instructor: string;
  capacity: number;
  summary: string;
  details: string;
};

type ScheduleSlot = {
  day: string;
  slots: Array<{
    time: string;
    classId: string;
    room: string;
  }>;
};

const categories: Category[] = [
  "Todas",
  "Musculação",
  "Dança",
  "Pilates",
  "Lutas",
  "Kids",
];

const classes: ClassItem[] = [
  {
    id: "musculacao",
    name: "Musculação",
    category: "Musculação",
    intensity: "Média",
    duration: "Livre",
    instructor: "Equipe técnica",
    capacity: 40,
    summary: "Sala com 40 equipamentos para força, condicionamento e evolução diária.",
    details:
      "Musculação de segunda a sexta, das 06h às 22h, e aos sábados, das 09h às 12h. Estrutura de 500m² com acompanhamento no piso e equipamentos para treinar com consistência.",
  },
  {
    id: "zumba-fit-dance",
    name: "Zumba / Fit Dance",
    category: "Dança",
    intensity: "Alta",
    duration: "60 min",
    instructor: "Rogério Escudeiro",
    capacity: 24,
    summary: "Aula ritmada para gasto calórico, coordenação e condicionamento.",
    details:
      "Zumba e Fit Dance acontecem segunda e quarta, das 19h às 20h. A aula combina música, sequência guiada e intensidade progressiva.",
  },
  {
    id: "pilates",
    name: "Pilates",
    category: "Pilates",
    intensity: "Baixa",
    duration: "60 min",
    instructor: "Rogério Escudeiro",
    capacity: 14,
    summary: "Controle corporal, mobilidade e fortalecimento com técnica.",
    details:
      "Pilates acontece terça e quinta, das 07h às 08h. Indicado para postura, consciência corporal, estabilidade e retorno gradual ao treino.",
  },
  {
    id: "boxe",
    name: "Boxe",
    category: "Lutas",
    intensity: "Alta",
    duration: "60 min",
    instructor: "Mestre Jaime",
    capacity: 20,
    summary: "Base, golpes, esquiva, saco e condicionamento.",
    details:
      "Boxe acontece terça e quinta, das 08h às 09h. Treino técnico com foco em coordenação, defesa, potência e condicionamento.",
  },
  {
    id: "jiu-jitsu-adulto",
    name: "Jiu-jitsu Adulto",
    category: "Lutas",
    intensity: "Alta",
    duration: "120 min",
    instructor: "Mestre Thiago Coyote",
    capacity: 24,
    summary: "Técnica, rola controlado, defesa e evolução no tatame.",
    details:
      "Jiu-jitsu adulto acontece terça e quinta, das 20h às 22h. Aula para desenvolver base, posicionamento, defesa e resistência.",
  },
  {
    id: "kickboxing",
    name: "Kickboxing",
    category: "Lutas",
    intensity: "Alta",
    duration: "60 min",
    instructor: "Mestre Jaime",
    capacity: 18,
    summary: "Chutes, golpes, deslocamento e condicionamento intenso.",
    details:
      "Kickboxing acontece segunda e quarta, das 21h às 22h. Aula dinâmica para técnica de luta, cardio e potência.",
  },
  {
    id: "jiu-jitsu-kids",
    name: "Jiu-jitsu Kids",
    category: "Kids",
    intensity: "Média",
    duration: "60 min",
    instructor: "Mestre Anselmo e Mestre Caio",
    capacity: 18,
    summary: "Turmas Kids 1, 2 e 3 com horários por idade e evolução técnica.",
    details:
      "Kids 1: segunda, das 20h às 21h, e quinta, das 18h às 19h. Kids 2: terça e sexta, das 18h30 às 19h30. Kids 3: terça e sexta, das 19h30 às 20h30.",
  },
];

const schedule: ScheduleSlot[] = [
  {
    day: "Seg",
    slots: [
      { time: "06h-22h", classId: "musculacao", room: "Peso livre" },
      { time: "19h-20h", classId: "zumba-fit-dance", room: "Sala coletiva" },
      { time: "20h-21h", classId: "jiu-jitsu-kids", room: "Tatame / Kids 1" },
      { time: "21h-22h", classId: "kickboxing", room: "Tatame" },
    ],
  },
  {
    day: "Ter",
    slots: [
      { time: "06h-22h", classId: "musculacao", room: "Peso livre" },
      { time: "07h-08h", classId: "pilates", room: "Sala coletiva" },
      { time: "08h-09h", classId: "boxe", room: "Tatame" },
      { time: "18h30-19h30", classId: "jiu-jitsu-kids", room: "Tatame / Kids 2" },
      { time: "19h30-20h30", classId: "jiu-jitsu-kids", room: "Tatame / Kids 3" },
      { time: "20h-22h", classId: "jiu-jitsu-adulto", room: "Tatame" },
    ],
  },
  {
    day: "Qua",
    slots: [
      { time: "06h-22h", classId: "musculacao", room: "Peso livre" },
      { time: "19h-20h", classId: "zumba-fit-dance", room: "Sala coletiva" },
      { time: "21h-22h", classId: "kickboxing", room: "Tatame" },
    ],
  },
  {
    day: "Qui",
    slots: [
      { time: "06h-22h", classId: "musculacao", room: "Peso livre" },
      { time: "07h-08h", classId: "pilates", room: "Sala coletiva" },
      { time: "08h-09h", classId: "boxe", room: "Tatame" },
      { time: "18h-19h", classId: "jiu-jitsu-kids", room: "Tatame / Kids 1" },
      { time: "20h-22h", classId: "jiu-jitsu-adulto", room: "Tatame" },
    ],
  },
  {
    day: "Sex",
    slots: [
      { time: "06h-22h", classId: "musculacao", room: "Peso livre" },
      { time: "18h30-19h30", classId: "jiu-jitsu-kids", room: "Tatame / Kids 2" },
      { time: "19h30-20h30", classId: "jiu-jitsu-kids", room: "Tatame / Kids 3" },
    ],
  },
  {
    day: "Sab",
    slots: [
      { time: "09h-12h", classId: "musculacao", room: "Peso livre" },
    ],
  },
];

const intensityStyles = {
  Baixa: "text-muted",
  Média: "text-foreground",
  Alta: "text-accent",
  Máxima: "bg-accent px-2 py-1 text-white",
};

export function ClassBoard() {
  const [activeCategory, setActiveCategory] = useState<Category>("Todas");
  const [query, setQuery] = useState("");
  const [selectedClass, setSelectedClass] = useState<ClassItem | null>(null);

  const filteredClasses = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return classes.filter((classItem) => {
      const matchesCategory =
        activeCategory === "Todas" || classItem.category === activeCategory;
      const searchable = [
        classItem.name,
        classItem.category,
        classItem.instructor,
        classItem.summary,
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && searchable.includes(normalizedQuery);
    });
  }, [activeCategory, query]);

  const classesById = useMemo(
    () => new Map(classes.map((classItem) => [classItem.id, classItem])),
    [],
  );

  useEffect(() => {
    if (!selectedClass) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedClass(null);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedClass]);

  return (
    <>
      <section className="border-b border-line bg-[#080808] py-10 sm:py-14">
        <div className="site-shell grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <p className="micro-label text-accent">Aulas & grade horária</p>
            <h1 className="display-cut mt-4 text-[82px] leading-[0.84] text-foreground sm:text-[126px] lg:text-[152px]">
              Treino marcado. Sala pronta.
            </h1>
          </div>
          <div className="border border-line bg-surface p-5">
            <p className="text-sm leading-6 text-muted">
              Filtre por modalidade, intensidade e professor. A grade abaixo mostra
              horários fixos da semana, sala e capacidade de turma.
            </p>
            <div className="mt-6 grid grid-cols-3 divide-x divide-line border border-line">
              {[
                ["06", "dias"],
                ["08", "modalidades"],
                ["40", "equipamentos"],
              ].map(([value, label]) => (
                <div key={label} className="p-4">
                  <p className="display-cut text-5xl leading-none text-foreground">
                    {value}
                  </p>
                  <p className="micro-label mt-2 text-subtle">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line py-8">
        <div className="site-shell grid gap-5 lg:grid-cols-[1fr_360px]">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
                className={`border px-4 py-3 text-xs font-black uppercase tracking-[0.14em] transition duration-150 hover:-translate-y-0.5 hover:border-accent hover:text-accent ${
                  activeCategory === category
                    ? "border-accent bg-accent text-white hover:text-white"
                    : "border-line bg-surface text-muted"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <label className="flex h-12 items-center gap-3 border border-line bg-surface px-4 text-muted focus-within:border-accent">
            <Search aria-hidden="true" className="size-4 shrink-0 text-accent" />
            <span className="sr-only">Buscar aula</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              aria-label="Buscar aula por nome, categoria ou instrutor"
              placeholder="Buscar por aula ou instrutor"
              className="h-full min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-subtle"
            />
          </label>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="site-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="micro-label text-muted">Modalidades</p>
                <h2 className="display-cut mt-3 text-6xl leading-none text-foreground">
                  {filteredClasses.length === 1
                    ? "1 aula encontrada"
                    : `${filteredClasses.length} aulas encontradas`}
                </h2>
              </div>
              <SlidersHorizontal aria-hidden="true" className="hidden size-6 text-accent sm:block" />
            </div>

            <div className="grid gap-4">
              {filteredClasses.map((classItem, index) => (
                <article
                  key={classItem.id}
                  className="group border border-line bg-surface p-5 transition duration-150 hover:-translate-y-0.5 hover:border-accent/70"
                >
                  <button
                    type="button"
                    aria-label={`Ver detalhes da aula ${classItem.name}`}
                    onClick={() => setSelectedClass(classItem)}
                    className="grid w-full gap-5 text-left md:grid-cols-[72px_1fr_auto]"
                  >
                    <span className="display-cut text-5xl leading-none text-subtle">
                      0{index + 1}
                    </span>
                    <span>
                      <span className="micro-label text-accent">{classItem.category}</span>
                      <span className="display-cut mt-3 block text-5xl leading-none text-foreground">
                        {classItem.name}
                      </span>
                      <span className="mt-4 block max-w-2xl text-sm leading-6 text-muted">
                        {classItem.summary}
                      </span>
                    </span>
                    <span className="grid gap-3 text-sm text-muted md:min-w-44">
                      <span className="flex items-center gap-2">
                        <Flame aria-hidden="true" className="size-4 text-accent" />
                        <span className={intensityStyles[classItem.intensity]}>
                          {classItem.intensity}
                        </span>
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock3 aria-hidden="true" className="size-4 text-accent" />
                        {classItem.duration}
                      </span>
                      <span className="flex items-center gap-2">
                        <UserRound aria-hidden="true" className="size-4 text-accent" />
                        {classItem.instructor}
                      </span>
                    </span>
                  </button>
                </article>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="border border-line bg-[#080808]">
              <div className="flex items-center justify-between border-b border-line p-5">
                <div>
                  <p className="micro-label text-accent">Grade semanal</p>
                  <h2 className="display-cut mt-2 text-5xl leading-none text-foreground">
                    Horários fixos
                  </h2>
                </div>
                <CalendarDays aria-hidden="true" className="size-6 text-accent" />
              </div>

              <div className="grid divide-y divide-line">
                {schedule.map((day) => (
                  <div key={day.day} className="grid grid-cols-[56px_1fr]">
                    <div className="border-r border-line p-4">
                      <p className="display-cut text-4xl leading-none text-foreground">
                        {day.day}
                      </p>
                    </div>
                    <div className="grid gap-3 p-4">
                      {day.slots.map((slot) => {
                        const classItem = classesById.get(slot.classId);

                        if (!classItem) {
                          return null;
                        }

                        return (
                          <button
                            key={`${day.day}-${slot.time}-${slot.classId}`}
                            type="button"
                            aria-label={`Ver detalhes de ${classItem.name} na ${day.day} às ${slot.time}`}
                            onClick={() => setSelectedClass(classItem)}
                            className="grid grid-cols-[58px_1fr] gap-3 border border-line bg-surface p-3 text-left transition duration-150 hover:-translate-y-0.5 hover:border-accent/70"
                          >
                            <span className="text-sm font-black text-accent">
                              {slot.time}
                            </span>
                            <span>
                              <span className="block text-sm font-black uppercase tracking-[0.08em] text-foreground">
                                {classItem.name}
                              </span>
                              <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.12em] text-subtle">
                                {slot.room} / {classItem.duration}
                              </span>
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedClass ? (
        <div
          className="fixed inset-0 z-[80] grid place-items-end bg-black/72 p-4 backdrop-blur-sm sm:place-items-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="class-modal-title"
          aria-describedby="class-modal-description"
          onClick={() => setSelectedClass(null)}
        >
          <div
            className="w-full max-w-2xl border border-line-strong bg-background shadow-hard"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-5 border-b border-line p-5">
              <div>
                <p className="micro-label text-accent">{selectedClass.category}</p>
                <h2
                  id="class-modal-title"
                  className="display-cut mt-3 text-6xl leading-none text-foreground"
                >
                  {selectedClass.name}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setSelectedClass(null)}
                className="grid size-11 shrink-0 place-items-center border border-line bg-surface text-foreground transition duration-150 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                aria-label="Fechar detalhes da aula"
              >
                <X aria-hidden="true" className="size-5" />
              </button>
            </div>

            <div className="grid gap-6 p-5 sm:grid-cols-[1fr_0.75fr]">
              <p id="class-modal-description" className="text-base leading-7 text-muted">
                {selectedClass.details}
              </p>
              <dl className="grid gap-3 text-sm">
                {[
                  ["Intensidade", selectedClass.intensity],
                  ["Duração", selectedClass.duration],
                  ["Instrutor", selectedClass.instructor],
                  [
                    selectedClass.id === "musculacao" ? "Estrutura" : "Capacidade",
                    selectedClass.id === "musculacao"
                      ? `${selectedClass.capacity} equipamentos`
                      : `${selectedClass.capacity} alunos`,
                  ],
                ].map(([label, value]) => (
                  <div key={label} className="border border-line bg-surface p-4">
                    <dt className="micro-label text-subtle">{label}</dt>
                    <dd className="mt-2 font-black uppercase tracking-[0.08em] text-foreground">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
