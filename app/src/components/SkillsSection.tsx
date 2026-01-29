import ScrollReveal from "./ScrollReveal";
import { Code2, Database, Globe, Smartphone, Server, Palette } from "lucide-react";

const skills = [
  { name: "React", level: 70, icon: Code2 },
  { name: "TypeScript", level: 70, icon: Code2 },
  { name: "Node.js", level: 60, icon: Server },
  { name: "PostgreSQL", level: 60, icon: Database },
  { name: "Python", level: 70, icon: Smartphone },
  { name: "English", level: 65, icon: Palette },
];

const technologies = [
  "JavaScript", "TypeScript", "React", "Node.js", "Express",
  "PostgreSQL",  "Prisma", "Git",
  "Tailwind CSS",  "REST API", "Python"
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center neon-glow">
            <span className="text-primary/50">&lt;</span>
            Skills
            <span className="text-primary/50">/&gt;</span>
          </h2>
        </ScrollReveal>

        {/* Progress bars */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skills.map((skill, index) => (
            <ScrollReveal key={skill.name} delay={index * 100}>
              <div className="matrix-card p-4 hover:neon-box-glow transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <skill.icon className="w-5 h-5 text-primary" />
                    <span className="font-medium">{skill.name}</span>
                  </div>
                  <span className="text-primary text-sm">{skill.level}%</span>
                </div>
                <div className="progress-neon">
                  <div
                    className="progress-neon-bar transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Technology cloud */}
        <ScrollReveal delay={300}>
          <div className="matrix-card p-6 neon-box-glow">
            <div className="flex items-center gap-2 mb-4">
              <Globe className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-bold">Tecnologias</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm border border-primary/30 bg-primary/5 hover:bg-primary/20 hover:border-primary transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SkillsSection;
