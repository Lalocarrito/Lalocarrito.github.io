// thoda zada ts ho gya idhar
export enum SkillNames {
  JS = "js",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  TAILWIND = "tailwind",
  SUPABASE = "supabase",
  POSTGRES = "postgres",
  MYSQL = "mysql",
  PYTHON = "python",
  JAVA = "java",
  CSHARP = "csharp",
  PHP = "php",
  GIT = "git",
  GITHUB = "github",
  NPM = "npm",
  FIREBASE = "firebase",
  WORDPRESS = "wordpress",
  LINUX = "linux",
  DOCKER = "docker",
  VERCEL = "vercel",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};
export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription: "El lenguaje que da vida a la web desde 1995. 💯🚀",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML",
    shortDescription: "La base de toda la web, el abuelo del internet. 💀🔥",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS",
    shortDescription: "Dando estilo y diseño a la web. 💁‍♂️🔥",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React",
    shortDescription:
      "Componentes, estado y hooks: la biblioteca que lo compone todo. ⚛️🔥",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.TAILWIND]: {
    id: 8,
    name: "tailwind",
    label: "Tailwind",
    shortDescription: "Clases utilitarias para estilizar a toda velocidad. 🌪️🔥",
    color: "#38bdf8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  [SkillNames.SUPABASE]: {
    id: 26,
    name: "supabase",
    label: "Supabase",
    shortDescription: "Backend open source con Postgres por dentro. 🟢⚡",
    color: "#3ecf8e",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
  },
  [SkillNames.POSTGRES]: {
    id: 11,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "SQL pero elegante y potente. 💅🐘",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.MYSQL]: {
    id: 32,
    name: "mysql",
    label: "MySQL",
    shortDescription: "La base de datos relacional más popular. 🐬",
    color: "#4479A1",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  [SkillNames.PYTHON]: {
    id: 27,
    name: "python",
    label: "Python",
    shortDescription: "El lenguaje versátil para scripts, datos y backend. 🐍",
    color: "#3776AB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.JAVA]: {
    id: 28,
    name: "java",
    label: "Java",
    shortDescription: "Lenguaje robusto y multiplataforma. ☕",
    color: "#ED8B00",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  [SkillNames.CSHARP]: {
    id: 29,
    name: "csharp",
    label: "C#",
    shortDescription: "El lenguaje de Microsoft para aplicaciones y backend. 🟣",
    color: "#68217A",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  },
  [SkillNames.PHP]: {
    id: 31,
    name: "php",
    label: "PHP",
    shortDescription: "El lenguaje clásico del backend web. 🐘",
    color: "#777BB4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  [SkillNames.GIT]: {
    id: 13,
    name: "git",
    label: "Git",
    shortDescription: "El guardaespaldas de tu código. 🕵️‍♂️🔄",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 14,
    name: "github",
    label: "GitHub",
    shortDescription: "Colaboración y control de versiones. 🐙",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.NPM]: {
    id: 16,
    name: "npm",
    label: "NPM",
    shortDescription: "El gestor de paquetes de Node. 📦💯",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  },
  [SkillNames.FIREBASE]: {
    id: 17,
    name: "firebase",
    label: "Firebase",
    shortDescription: "Backend como servicio de Google. 🔥👌",
    color: "#ffca28",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  [SkillNames.WORDPRESS]: {
    id: 18,
    name: "wordpress",
    label: "WordPress",
    shortDescription: "El CMS más usado del mundo. 🧓👴",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  },
  [SkillNames.LINUX]: {
    id: 19,
    name: "linux",
    label: "Linux",
    shortDescription: "El sistema operativo de los servidores. 🔓🙌",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 20,
    name: "docker",
    label: "Docker",
    shortDescription: "Contenedores para desplegar en cualquier lado. 🐳🔥",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.VERCEL]: {
    id: 24,
    name: "vercel",
    label: "Vercel",
    shortDescription: "Deploy rápido de frontends. 🚀🌿",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  url?: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 3,
    startDate: "2022",
    endDate: "Actual",
    title: "Desarrollador Full Stack",
    company: "Sescolar",
    url: "https://sescolar.com/",
    description: [
      "Desarrollo full stack en una empresa de software de control escolar.",
      "Abarco desde el código y el modelado de la base de datos hasta el despliegue y las pruebas.",
      "Trabajo principalmente con C# y MySQL.",
    ],
    skills: [
      SkillNames.CSHARP,
      SkillNames.MYSQL,
      SkillNames.GIT,
      SkillNames.GITHUB,
    ],
  },
  {
    id: 1,
    startDate: "2025",
    endDate: "Actual",
    title: "Desarrollador Freelance",
    company: "La Sirena — Beauty Studio",
    description: [
      "Desarrollé la plataforma de reservas y gestión (lasirenahmo.com) con Next.js, Supabase y PostgreSQL.",
      "Modelé la base de datos y configuré la seguridad (RLS) para clientas y administración.",
      "Integré autenticación (correo y Google OAuth) y recordatorios por WhatsApp.",
    ],
    skills: [
      SkillNames.REACT,
      SkillNames.SUPABASE,
      SkillNames.POSTGRES,
      SkillNames.TAILWIND,
      SkillNames.GIT,
    ],
  },
  {
    id: 2,
    startDate: "2024",
    endDate: "Actual",
    title: "Ingeniería en Sistemas de Información",
    company: "Universidad de Sonora",
    description: [
      "Estudiante de Ingeniería en Sistemas de Información en la Universidad de Sonora (UNISON).",
      "Proyectos académicos de desarrollo de software, bases de datos y estructuras de datos.",
      "Tecnologías: Java, Python, C#, VB, SQL y PostgreSQL.",
    ],
    skills: [
      SkillNames.POSTGRES,
      SkillNames.GIT,
      SkillNames.GITHUB,
      SkillNames.REACT,
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "¡Advertencia: el modo claro emite una cantidad absurda de brillo!",
    "¡Cuidado: modo claro adelante! No intentes esto en casa.",
    "Solo profesionales entrenados soportan tanto brillo. Usa lentes de sol.",
    "Prepárate: el modo claro hará que todo brille más que tu futuro.",
    "Cambiando a modo claro... ¿Seguro que tus ojos están listos?",
  ],
  dark: [
    "¿Modo claro? Pensé que habías enloquecido... bienvenido de vuelta al lado oscuro.",
    "Cambiando a modo oscuro... ¿Cómo estuvo la vida en el lado claro?",
    "Modo oscuro activado. Gracias de corazón, y mis ojos también.",
    "Bienvenido de vuelta a las sombras. ¿Cómo estuvo por allá afuera?",
    "Modo oscuro activado. Por fin, alguien que entiende la verdadera sofisticación.",
  ],
};
