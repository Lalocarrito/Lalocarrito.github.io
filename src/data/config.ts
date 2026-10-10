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
  fullName: "Josué Ignacio Martínez Ruiz",
  email: "josuemtzruiz@icloud.com",
  site: "https://lalocarrito.github.io",

  // for github stars button
  githubUsername: "Lalocarrito",
  githubRepo: "lalocarrito.github.io",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/rracolal",
    linkedin:
      "https://www.linkedin.com/in/josu%C3%A9-mart%C3%ADnez-b37128380/",
    instagram: "https://github.com/Lalocarrito",
    facebook: "https://github.com/Lalocarrito",
    github: "https://github.com/Lalocarrito",
  },
};
export { config };
