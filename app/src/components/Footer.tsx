const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-primary/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            <span className="text-primary">&lt;</span>
            {currentYear} - Feito com 💚 e muito ☕
            <span className="text-primary">/&gt;</span>
          </div>

          {/* Credits */}
          <div className="text-xs text-muted-foreground">
            <span className="text-primary">$</span> echo "Código é poesia"
          </div>
        </div>

        {/* Matrix-style decoration */}
        <div className="mt-6 text-center">
          <div className="text-primary/20 text-xs font-mono overflow-hidden whitespace-nowrap">
            01101100 01110101 01101001 01111010 00100000 01101100 01101111 01110000 01100101 01110011 
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
