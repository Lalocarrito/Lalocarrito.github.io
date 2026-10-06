import { config } from "@/data/config";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const FOCUS = [
  {
    title: "Bases de datos",
    desc: "SQL, PostgreSQL, modelado relacional y diseño de datos.",
  },
  {
    title: "Desarrollo web",
    desc: "React, Next.js y Flask para aplicaciones completas.",
  },
  {
    title: "Escritorio",
    desc: "Java, C# y VB para aplicaciones de escritorio.",
  },
];

const AboutSection = () => {
  return (
    <SectionWrapper id="about" className="relative max-w-5xl mx-auto px-4 pt-28 pb-24 md:pt-36 md:pb-32">
      <SectionHeader
        id="about"
        title="Sobre mí"
        desc="Quién soy y qué me apasiona."
        className="static mb-16"
      />
      <Card className="bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-xl">
        <CardHeader>
          <CardTitle className="text-2xl">Desarrollador de Software</CardTitle>
          <CardDescription>
            Especial interés en bases de datos
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            Soy {config.author}, desarrollador de software con especial interés en
            las bases de datos: el modelado, el diseño y el manejo de datos con
            SQL y PostgreSQL es el área que más me apasiona. Actualmente estudio
            Ingeniería en Sistemas de Información en la Universidad de Sonora y
            he realizado trabajo freelance, como la plataforma de reservas La
            Sirena.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Trabajo con VB, C#, SQL, PostgreSQL, Java y Python, y sigo
            aprendiendo React. Disfruto resolver problemas de datos y construir
            software completo, del frontend a la base de datos.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {FOCUS.map((f) => (
              <div
                key={f.title}
                className="rounded-lg border border-border bg-background/50 p-4"
              >
                <h3 className="font-semibold text-foreground mb-1">
                  {f.title}
                </h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
};

export default AboutSection;
