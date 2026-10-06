import SlideShow from "@/components/slide-show";
import { TypographyP } from "@/components/ui/typography";
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
  flask: text("Flask"),
};

const BASE = "/assets/projects-screenshots";

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
    src: `${BASE}/lasirenahmo/landing.png`,
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
    content: (
      <div>
        <TypographyP className="font-mono text-2xl text-center">
          Plataforma de reservas y gestión para un estudio de pestañas.
        </TypographyP>
        <TypographyP className="font-mono">
          Next.js 16 + Supabase. Incluye sitio público (equipo y reseñas), un
          flujo de reserva de citas en varios pasos, área de clientas (citas,
          puntos y reseñas) y un panel de administración con catálogo, personal,
          citas y disponibilidad. Autenticación con correo y Google, y
          recordatorios por WhatsApp.
        </TypographyP>
        <SlideShow
          images={[
            `${BASE}/lasirenahmo/public-equipo.png`,
            `${BASE}/lasirenahmo/landing.png`,
            `${BASE}/lasirenahmo/admin-overview.png`,
            `${BASE}/lasirenahmo/reserva-confirmada.png`,
          ]}
        />
      </div>
    ),
  },
  {
    id: "pollos-tech",
    category: "Sistema punto de venta",
    title: "PollosTech",
    src: `${BASE}/pollos-tech/landing.jpg`,
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.java],
      backend: [PROJECT_SKILLS.postgres, PROJECT_SKILLS.docker],
    },
    live: "#",
    github: "https://github.com/Lalocarrito/pollos-tech",
    content: (
      <div>
        <TypographyP className="font-mono text-2xl text-center">
          Punto de venta de escritorio con inventario, compras y gestión.
        </TypographyP>
        <TypographyP className="font-mono">
          JavaFX 17 sobre PostgreSQL (con Docker Compose). Cubre el ciclo del
          negocio: venta al cliente, compras y reabastecimiento a proveedores,
          CRUD de productos, clientes, proveedores y personal, y un dashboard con
          los pedidos pendientes y entregados.
        </TypographyP>
        <SlideShow
          images={[
            `${BASE}/pollos-tech/landing.jpg`,
            `${BASE}/pollos-tech/compras.jpg`,
            `${BASE}/pollos-tech/proveedores.jpg`,
            `${BASE}/pollos-tech/venta-completada.jpg`,
          ]}
        />
      </div>
    ),
  },
  {
    id: "noticia-app",
    category: "Aplicación web",
    title: "Noticia App",
    src: `${BASE}/noticia-app/landing.png`,
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.js, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.firebase],
    },
    live: "#",
    github: "https://github.com/Lalocarrito/noticia-app",
    content: (
      <div>
        <TypographyP className="font-mono text-2xl text-center">
          Tablero de noticias y comentarios en tiempo real.
        </TypographyP>
        <TypographyP className="font-mono">
          React 18 + Firebase Firestore con Tailwind CSS. Publica noticias por
          grupo y coméntalas con actualizaciones en vivo (onSnapshot), con tema
          claro/oscuro y despliegue en Firebase Hosting.
        </TypographyP>
      </div>
    ),
  },
  {
    id: "sistema-escolar",
    category: "Herramienta web",
    title: "Sistema Escolar",
    src: `${BASE}/sistema-escolar/landing.png`,
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.tailwind],
      backend: [],
    },
    live: "#",
    github: "https://github.com/Lalocarrito/sistema_escolar",
    content: (
      <div>
        <TypographyP className="font-mono text-2xl text-center">
          Generador de registros ficticios de alumnos.
        </TypographyP>
        <TypographyP className="font-mono">
          Página estática (HTML + JavaScript) que genera hasta 50,000 registros
          de prueba en SQL (MySQL/PostgreSQL), CSV o JSON para bases de datos
          escolares, con descarga directa del archivo.
        </TypographyP>
      </div>
    ),
  },
  {
    id: "change-extension",
    category: "Script",
    title: "Change Extension",
    src: `${BASE}/change-extension/landing.png`,
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.python],
      backend: [],
    },
    live: "#",
    github: "https://github.com/Lalocarrito/change-extension",
    content: (
      <div>
        <TypographyP className="font-mono text-2xl text-center">
          Renombrador por lote de extensiones de archivo.
        </TypographyP>
        <TypographyP className="font-mono">
          Script de Python con diálogo gráfico (Tkinter) que renombra la
          extensión de todos los archivos de una carpeta, mostrando cuántos
          encontró y pidiendo confirmación antes de aplicar los cambios.
        </TypographyP>
      </div>
    ),
  },
  {
    id: "bin2dec",
    category: "Aplicación de escritorio",
    title: "Bin2Dec",
    src: `${BASE}/bin2dec/landing.png`,
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.java],
      backend: [],
    },
    live: "#",
    github: "https://github.com/Lalocarrito/bin2dec",
    content: (
      <div>
        <TypographyP className="font-mono text-2xl text-center">
          Convertidor binario ↔ decimal.
        </TypographyP>
        <TypographyP className="font-mono">
          Aplicación JavaFX que convierte entre binario y decimal en tiempo real
          mientras escribes o cambias de modo, con validación del formato de
          entrada.
        </TypographyP>
        <SlideShow
          images={[
            `${BASE}/bin2dec/landing.png`,
            `${BASE}/bin2dec/binario-a-decimal.png`,
          ]}
        />
      </div>
    ),
  },
  {
    id: "calculadora-coordenadas",
    category: "Aplicación de escritorio",
    title: "Calculadora de Coordenadas",
    src: `${BASE}/calculadora-coordenadas/landing.png`,
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.java],
      backend: [],
    },
    live: "#",
    github: "https://github.com/Lalocarrito/calculadora-coordenadas",
    content: (
      <div>
        <TypographyP className="font-mono text-2xl text-center">
          Conversión y distancias de puntos en 2D y 3D.
        </TypographyP>
        <TypographyP className="font-mono">
          Aplicación Java (Swing / JOptionPane) para convertir puntos entre
          sistemas de coordenadas (cartesiano, polar, cilíndrico y esférico) y
          calcular distancias en 2D y 3D, con validación de entradas.
        </TypographyP>
        <SlideShow
          images={[
            `${BASE}/calculadora-coordenadas/landing.png`,
            `${BASE}/calculadora-coordenadas/menu-conversion.png`,
            `${BASE}/calculadora-coordenadas/entrada.png`,
            `${BASE}/calculadora-coordenadas/resultado.png`,
          ]}
        />
      </div>
    ),
  },
  {
    id: "sistema-votacion-unison",
    category: "Aplicación web",
    title: "Sistema de Votación",
    src: `${BASE}/sistema-votacion-unison/landing.png`,
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.js],
      backend: [PROJECT_SKILLS.php, PROJECT_SKILLS.mysql],
    },
    live: "#",
    github: "https://github.com/Lalocarrito/sistema-votacion-unison",
    content: (
      <div>
        <TypographyP className="font-mono text-2xl text-center">
          Votación en línea (simulación) para la rectoría de la UNISON.
        </TypographyP>
        <TypographyP className="font-mono">
          PHP + MySQL con Bootstrap y Chart.js. Emisión de votos con validación
          de expediente (un voto por alumno), mensajes en modal y resultados en
          una gráfica de dona que se actualiza sola.
        </TypographyP>
        <SlideShow
          images={[
            `${BASE}/sistema-votacion-unison/landing.png`,
            `${BASE}/sistema-votacion-unison/seleccion.png`,
            `${BASE}/sistema-votacion-unison/mensaje.png`,
            `${BASE}/sistema-votacion-unison/resultados.png`,
          ]}
        />
      </div>
    ),
  },
  {
    id: "taskmaster",
    category: "Aplicación web",
    title: "TaskMaster",
    src: `${BASE}/taskmaster/landing.png`,
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.js],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.flask],
    },
    live: "#",
    github: "https://github.com/Lalocarrito/taskmaster",
    content: (
      <div>
        <TypographyP className="font-mono text-2xl text-center">
          Gestor de proyectos y tareas con API REST.
        </TypographyP>
        <TypographyP className="font-mono">
          Flask + SQLite con frontend en HTML/CSS/JS. CRUD completo de proyectos
          y tareas con estados (Pendiente, En progreso, Completada) y relación
          1:N con llave foránea.
        </TypographyP>
      </div>
    ),
  },
];

export default projects;
