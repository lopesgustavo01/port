import ScrollReveal from "./ScrollReveal";
import { Terminal } from "lucide-react";

const AboutSection = () => {
  const codeLines = [
    { type: "comment", content: "// Sobre mim" },
    { type: "code", content: "const desenvolvedor = {" },
    { type: "property", content: '  nome: "Luiz Lopes",' },
    { type: "property", content: '  localização: "Brasil",' },
    { type: "property", content: '  Formação: {' },
    { type: "propertymain", content: '    graduação: "Engenharia da Computação",' },
    { type: "propertymain", content: '    pós-graduação: "Modelagem computacional"' },
    { type: "propertyend", content: '  },' },
    { type: "propertyend", content: '  foco: "Desenvolvimento Web",' },
    { type: "code", content: "};" },
    { type: "empty", content: "" },
    { type: "comment", content: "// Minha missão" },
    { type: "string", content: '> "Aprendizado contínuo e evolução constante."' },

  ];

  return (
    <section id="sobre" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center neon-glow">
            <span className="text-primary/50">&lt;</span>
            Sobre
            <span className="text-primary/50">/&gt;</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="matrix-card neon-box-glow overflow-hidden">
            {/* Terminal header */}
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500" />
              <div className="terminal-dot bg-yellow-500" />
              <div className="terminal-dot bg-green-500" />
              <span className="ml-4 text-xs text-muted-foreground flex items-center gap-2">
                <Terminal className="w-3 h-3" />
                sobre.js
              </span>
            </div>

            {/* Terminal content */}
            <div className="p-6 font-mono text-sm md:text-base">
              {codeLines.map((line, index) => (
                <div
                  key={index}
                  className="leading-relaxed"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {line.type === "comment" && (
                    <span className="text-muted-foreground">{line.content}</span>
                  )}
                  {line.type === "code" && (
                    <span className="text-primary">{line.content}</span>
                  )}
                  {line.type === "property" && (
                    <span className="pl-2 text-accent-foreground">{line.content}</span>
                  )}
                  {line.type === "propertymain" && (
                    <span className="pl-8 text-accent-foreground">{line.content}</span>
                  )}
                  {line.type === "propertyend" && (
                    <span className="pl-2 text-accent-foreground">{line.content}</span>
                  )}
                  {line.type === "string" && (
                    <span className="text-primary/80">{line.content}</span>
                  )}
                  {line.type === "empty" && <br />}
                </div>
              ))}
              <div className="mt-4 text-primary cursor-blink">_</div>
            </div>
          </div>
        </ScrollReveal>

        {/* Stats */}
        <ScrollReveal delay={400}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { value: "∞", label: "Café ☕" },
            ].map((stat, index) => (
              <div
                key={index}
                className="matrix-card p-4 text-center hover:neon-box-glow transition-all duration-300"
              >
                <div className="text-2xl md:text-3xl font-bold text-primary neon-glow-sm">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutSection;
