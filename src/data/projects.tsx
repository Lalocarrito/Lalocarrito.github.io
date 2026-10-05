import { Button } from "@/components/ui/button";
import { TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

// Renders a brand SVG from /public as a monochrome glyph that inherits the
// surrounding text color.
const MaskIcon = ({ src, title }: { src: string; title?: string }) => (
  <span
    role="img"
    aria-label={title}
    className="block bg-current"
    style={{
      width: "1em",
      height: "1em",
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
    }}
  />
);

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visitar sitio
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && repo !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const brand = (title: string, file: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <MaskIcon src={`/assets/logos/${file}`} title={title} />,
});

const text = (title: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <span className="text-xs font-bold">{title}</span>,
});

const PROJECT_SKILLS = {
  next: brand("Next.js", "nextdotjs-mono.svg"),
  react: brand("React.js", "react-mono.svg"),
  ts: brand("TypeScript", "typescript-mono.svg"),
  js: brand("JavaScript", "javascript-mono.svg"),
  tailwind: brand("Tailwind", "tailwind-css-mono.svg"),
  motion: brand("Motion", "motion.svg"),
  supabase: brand("Supabase", "supabase-mono.svg"),
  postgres: brand("PostgreSQL", "postgresql-mono.svg"),
  firebase: brand("Firebase", "firebase-mono.svg"),
  python: brand("Python", "python-mono.svg"),
  docker: brand("Docker", "docker-mono.svg"),
  java: text("Java"),
  php: text("PHP"),
  mysql: text("MySQL"),
  sqlite: text("SQLite"),
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "lasirenahmo",
    category: "Aplicación web",
    title: "La Sirena — Beauty Studio",
    src: "/assets/projects-screenshots/lasirenahmo/landing.png",
    screenshots: [],
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.motion,
      ],
      backend: [PROJECT_SKILLS.supabase, PROJECT_SKILLS.postgres],
    },
    live: "https://lasirenahmo.com",
    github: "https://github.com/Lalocarrito/lasirenahmo",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Plataforma de reservas y gestión para un estudio de pestañas.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyP className="font-mono">
            Next.js 16 + Supabase: sitio público, flujo de reserva de citas, área
            de clientas y panel de administración, con recordatorios por WhatsApp
            y autenticación con Google OAuth.
          </TypographyP>
        </div>
      );
    },
  },
  {
    id: "pollos-tech",
    category: "Sistema punto de venta",
    title: "PollosTech",
    src: "/assets/projects-screenshots/pollos-tech/landing.jpg",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.java],
      backend: [PROJECT_SKILLS.postgres, PROJECT_SKILLS.docker],
    },
    live: "#",
    github: "https://github.com/Lalocarrito/pollos-tech",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Punto de venta de escritorio con inventario, compras y gestión.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyP className="font-mono">
            JavaFX 17 sobre PostgreSQL, con Docker Compose. Venta al cliente,
            compras a proveedores, CRUD de catálogos y dashboard de pedidos.
          </TypographyP>
        </div>
      );
    },
  },
  {
    id: "noticia-app",
    category: "Aplicación web",
    title: "Noticia App",
    src: "/assets/projects-screenshots/noticia-app/landing.png",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.js, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.firebase],
    },
    live: "#",
    github: "https://github.com/Lalocarrito/noticia-app",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Tablero de noticias y comentarios en tiempo real.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyP className="font-mono">
            React 18 + Firebase Firestore con Tailwind CSS. Publica noticias por
            grupo y coméntalas con actualizaciones en vivo (onSnapshot).
          </TypographyP>
        </div>
      );
    },
  },
  {
    id: "sistema-escolar",
    category: "Herramienta web",
    title: "Sistema Escolar",
    src: "/assets/projects-screenshots/sistema-escolar/landing.png",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.tailwind],
      backend: [],
    },
    live: "#",
    github: "https://github.com/Lalocarrito/sistema_escolar",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Generador de registros ficticios de alumnos.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyP className="font-mono">
            Página estática (HTML + JavaScript) que genera datos de prueba en
            SQL, CSV o JSON para bases de datos escolares.
          </TypographyP>
        </div>
      );
    },
  },
  {
    id: "change-extension",
    category: "Script",
    title: "Change Extension",
    src: "/assets/projects-screenshots/change-extension/landing.png",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.python],
      backend: [],
    },
    live: "#",
    github: "https://github.com/Lalocarrito/change-extension",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Renombrador por lote de extensiones de archivo.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyP className="font-mono">
            Script de Python con diálogo gráfico (Tkinter) que renombra la
            extensión de todos los archivos de una carpeta con confirmación.
          </TypographyP>
        </div>
      );
    },
  },
  {
    id: "bin2dec",
    category: "Aplicación de escritorio",
    title: "Bin2Dec",
    src: "/assets/projects-screenshots/bin2dec/landing.png",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.java],
      backend: [],
    },
    live: "#",
    github: "https://github.com/Lalocarrito/bin2dec",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Convertidor binario ↔ decimal.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyP className="font-mono">
            Aplicación JavaFX que convierte entre binario y decimal en tiempo
            real, con validación del formato de entrada.
          </TypographyP>
        </div>
      );
    },
  },
  {
    id: "calculadora-coordenadas",
    category: "Aplicación de escritorio",
    title: "Calculadora de Coordenadas",
    src: "/assets/projects-screenshots/calculadora-coordenadas/landing.png",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.java],
      backend: [],
    },
    live: "#",
    github: "https://github.com/Lalocarrito/calculadora-coordenadas",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Conversión y distancias de puntos en 2D y 3D.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyP className="font-mono">
            Aplicación Java (Swing/JOptionPane) para convertir puntos entre
            sistemas de coordenadas y calcular distancias.
          </TypographyP>
        </div>
      );
    },
  },
  {
    id: "sistema-votacion-unison",
    category: "Aplicación web",
    title: "Sistema de Votación",
    src: "/assets/projects-screenshots/sistema-votacion-unison/landing.png",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.js],
      backend: [PROJECT_SKILLS.php, PROJECT_SKILLS.mysql],
    },
    live: "#",
    github: "https://github.com/Lalocarrito/sistema-votacion-unison",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Votación en línea (simulación) para la rectoría de la UNISON.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyP className="font-mono">
            PHP + MySQL con Bootstrap y Chart.js: emisión de votos, validación de
            expediente y resultados en gráfica de dona.
          </TypographyP>
        </div>
      );
    },
  },
  {
    id: "taskmaster",
    category: "Aplicación web",
    title: "TaskMaster",
    src: "/assets/projects-screenshots/taskmaster/landing.png",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.js],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.sqlite],
    },
    live: "#",
    github: "https://github.com/Lalocarrito/taskmaster",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Gestor de proyectos y tareas con API REST.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyP className="font-mono">
            Flask + SQLite con frontend en HTML/CSS/JS. CRUD de proyectos y
            tareas con estados y relación 1:N.
          </TypographyP>
        </div>
      );
    },
  },
];

export default projects;
