import ScrollReveal from "./ScrollReveal";
import { Github, Folder } from "lucide-react";

const projects = [
  {
    title: "Projeto 1",
    description: "dashboard para avaliação de lojas/restaurantes. Utilizando graficos, tabela e Ia para gerar relatorio geral.",
    technologies: ["React", "TypeScript", "Tailwind", "Chart.js", "python", "gemini"],
    github: "https://github.com/lopesgustavo01/challenger_god_level",
    image: "/port/p1.png",
  },
  {
    title: "Projeto 2",
    description: "Sistema de gestão de salas, controle de organização e gestão de salas, como um dashboard para análises.",
    technologies: ["React.ts", "Node.js", "PostgreSQL", "Prisma", "Tailwind", "Express.js"],
    github: "https://github.com/HU-FURG",
    image: "/port/p2.png",
  },
  {
    title: "Projeto 3",
    description: "Projeto em Python para monitoramento e aviso de processos para windows",
    technologies: ["Python", "Windows", "tkinter", "psutil"],
    github: "https://github.com/HU-FURG/MHU-app",
    image: "/port/p3.png",
  },
  {
    title: "Projeto 4",
    description: "Proxy simples utilizando web scraping",
    technologies: ["python", "flask", "BeautifulSoup", "web scraping"],
    github: "https://github.com/lopesgustavo01/Web-Proxy",
    image: "/port/p4.png",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projetos" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center neon-glow">
            <span className="text-primary/50">&lt;</span>
            Projetos
            <span className="text-primary/50">/&gt;</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 150}>
              <div className="matrix-card group overflow-hidden hover:neon-box-glow transition-all duration-500" onClick={() => window.open(project.github, "_blank", "noopener,noreferrer")}>
                {/* Project image */}
                <div className="relative h-48 overflow-hidden bg-primary/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-500 group-hover:scale-105"
                  />
                  {/* Glitch overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
                  </div>
                  {/* Folder icon */}
                  <div className="absolute top-4 left-4">
                    <Folder className="w-8 h-8 text-primary/80" />
                  </div>
                  {/* Links */}
                  <div className="absolute top-4 right-4 flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary/60 hover:text-primary transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-primary glitch" data-text={project.title}>
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-primary/10 border border-primary/30 text-primary/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* View more button */}
        <ScrollReveal delay={600}>
          <div className="text-center mt-12">
            <a
              href="https://github.com/lopesgustavo01"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 cyber-button"
            >
              <Github className="w-4 h-4" />
              Ver mais no GitHub
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProjectsSection;
