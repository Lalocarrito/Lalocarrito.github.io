const config = {
  title: "Josué Martínez | Desarrollador",
  description: {
    long: "Portafolio de Josué Martínez, desarrollador de software. Explora mis proyectos: aplicaciones web, sistemas de punto de venta, herramientas de escritorio y más. Conoce mi trabajo y contáctame para colaborar.",
    short:
      "Portafolio de Josué Martínez, desarrollador de software. Descubre mis proyectos y contáctame.",
  },
  keywords: [
    "Josué Martínez",
    "portfolio",
    "developer",
    "desarrollador",
    "web development",
    "Java",
    "Python",
    "JavaScript",
    "Next.js",
    "React",
    "Flask",
    "SQL",
  ],
  author: "Josué Martínez",
  email: "josuemtzruiz@icloud.com",
  site: "https://lalocarrito.github.io",

  // for github stars button
  githubUsername: "Lalocarrito",
  githubRepo: "lalocarrito.github.io",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://github.com/Lalocarrito",
    linkedin: "https://github.com/Lalocarrito",
    instagram: "https://github.com/Lalocarrito",
    facebook: "https://github.com/Lalocarrito",
    github: "https://github.com/Lalocarrito",
  },
};
export { config };
