import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  MessageSquare,
  Lightbulb,
  RefreshCw,
  BookOpen,
  Clock,
} from "lucide-react";

const SOFT_SKILLS = [
  {
    icon: Users,
    title: "Trabajo en equipo",
    desc: "Colaboro en proyectos con Git/GitHub y dinámicas de equipo.",
  },
  {
    icon: MessageSquare,
    title: "Comunicación",
    desc: "Explico ideas técnicas de forma clara, oral y escrita.",
  },
  {
    icon: Lightbulb,
    title: "Resolución de problemas",
    desc: "Analizo y divido los problemas para resolverlos paso a paso.",
  },
  {
    icon: RefreshCw,
    title: "Adaptabilidad",
    desc: "Me adapto rápido a nuevas herramientas y tecnologías.",
  },
  {
    icon: BookOpen,
    title: "Aprendizaje continuo",
    desc: "Siempre explorando nuevas tecnologías y buenas prácticas.",
  },
  {
    icon: Clock,
    title: "Gestión del tiempo",
    desc: "Organizo mis tareas y cumplo con las entregas.",
  },
];

const SoftSkillsSection = () => {
  return (
    <SectionWrapper id="soft-skills" className="relative max-w-5xl mx-auto px-4 pt-24 pb-16">
      <SectionHeader
        id="soft-skills"
        title="Habilidades blandas"
        desc="Lo que aporto más allá del código."
        className="static mb-14"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {SOFT_SKILLS.map((s) => {
          const Icon = s.icon;
          return (
            <Card
              key={s.title}
              className="bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-xl hover:border-primary/20 transition-colors"
            >
              <CardContent className="flex items-start gap-4 p-6">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary/40">
                  <Icon className="size-5 text-foreground/80" />
                </span>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default SoftSkillsSection;
