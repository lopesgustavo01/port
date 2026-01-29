
import ScrollReveal from "./ScrollReveal";
import { Send, Terminal, Github, Linkedin, Mail } from "lucide-react";

const ContactSection = () => {
  

  return (
    <section id="contato" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center neon-glow">
            <span className="text-primary/50">&lt;</span>
            Contato
            <span className="text-primary/50">/&gt;</span>
          </h2>
        </ScrollReveal>

        <div className=" gap-8">

          {/* Contact info */}
          <ScrollReveal delay={400}>
            <div className="space-y-6">
              {/* Info card */}
              <div className="matrix-card p-6">
                <h3 className="text-lg font-bold mb-4 text-primary">
                  &gt; Vamos conversar?
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Estou sempre aberto a novas oportunidades, projetos interessantes 
                  ou apenas uma boa conversa sobre tecnologia. Sinta-se à vontade 
                  para entrar em contato!
                </p>
                
                <div className="space-y-3">
                  <a
                    href="mailto:lglopes1789@gmail.com"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <Mail className="w-5 h-5 group-hover:neon-glow-sm" />
                    <span>seu@email.com</span>
                  </a>
                </div>
              </div>

              {/* Social links */}
              <div className="matrix-card p-6">
                <h3 className="text-lg font-bold mb-4 text-primary">
                  &gt; Redes Sociais
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/lopesgustavo01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all group"
                  >
                    <Github className="w-6 h-6 text-primary/60 group-hover:text-primary group-hover:neon-glow-sm" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/luiz-gustavo-souza-lopes/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all group"
                  >
                    <Linkedin className="w-6 h-6 text-primary/60 group-hover:text-primary group-hover:neon-glow-sm" />
                  </a>
                </div>
              </div>

              {/* ASCII art */}
              <div className="matrix-card p-6 overflow-hidden">
                <pre className="text-primary/30 text-xs leading-tight font-mono">
{`
  ██████╗ ██████╗ ██████╗ ███████╗
 ██╔════╝██╔═══██╗██╔══██╗██╔════╝
 ██║     ██║   ██║██║  ██║█████╗  
 ██║     ██║   ██║██║  ██║██╔══╝  
 ╚██████╗╚██████╔╝██████╔╝███████╗
  ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝
`}
                </pre>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
