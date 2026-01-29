import { useState } from "react";
import TypingEffect from "./TypingEffect";
import { Github, Linkedin, ArrowDown } from "lucide-react";

const HeroSection = () => {
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      {/* Scanlines overlay */}
      <div className="absolute inset-0 scanlines pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Terminal prompt */}
        <div className="mb-4 text-muted-foreground text-sm md:text-base">
          <span className="text-primary">$</span> ./init_portfolio.sh
        </div>

        {/* Main title with typing effect */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 neon-glow">
          <TypingEffect
            text="&gt; Luiz Gustavo Lopes"
            speed={80}
            onComplete={() => setShowSubtitle(true)}
          />
        </h1>

        {/* Subtitle */}
        {showSubtitle && (
          <div className="mb-8">
            <p className="text-lg md:text-2xl text-primary/80 neon-glow-sm">
              <TypingEffect
                text="desenvolvedor_full_stack"
                speed={60}
                onComplete={() => setShowButtons(true)}
              />
            </p>
          </div>
        )}

        {/* CTA Buttons */}
        {showButtons && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in">
            <a
              href="#projetos"
              className="cyber-button glitch"
              data-text="Ver Projetos"
            >
              Ver Projetos
            </a>
            <a
              href="#contato"
              className="cyber-button glitch"
              data-text="Contato"
            >
              Contato
            </a>
          </div>
        )}

        {/* Social links */}
        {showButtons && (
          <div className="flex items-center justify-center gap-6 animate-fade-in">
            <a
              href="https://github.com/lopesgustavo01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary/60 hover:text-primary transition-all hover:scale-110 neon-glow-sm"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/luiz-gustavo-souza-lopes/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary/60 hover:text-primary transition-all hover:scale-110 neon-glow-sm"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        )}

        {/* Scroll indicator */}
        {showButtons && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-6 h-6 text-primary/50" />
          </div>
        )}
      </div>

      {/* Corner decorations */}
      <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-primary/30" />
      <div className="absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-primary/30" />
      <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-primary/30" />
      <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-primary/30" />
    </section>
  );
};

export default HeroSection;
