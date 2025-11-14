import { Mail, MapPin, Clock, Instagram } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo e Descrição */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.png"
                alt="PERSONALIZADOS PMW"
                className="h-12 w-12 object-contain"
              />
              <span className="text-xl font-bold gradient-gold">
                PERSONALIZADOS PMW
              </span>
            </div>
            <p className="text-secondary-foreground/80 leading-relaxed mb-4">
              Transformamos ideias em produtos personalizados que encantam. 
              Tecnologia de ponta em DTF UV, DTF Têxtil e gravação a laser.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/personalizadospmw"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">Links rápidos</h3>
            <nav className="space-y-2">
              <button
                onClick={() => scrollToSection("hero")}
                className="block text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("technologies")}
                className="block text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                Tecnologias
              </button>
              <button
                onClick={() => scrollToSection("values")}
                className="block text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                Valores
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                Contato
              </button>
            </nav>
          </div>

          {/* Informações de Contato */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:personalizadospalmas@gmail.com"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm"
                >
                  personalizadospalmas@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-secondary-foreground/80 text-sm">
                  Quadra 208 Norte Alameda 32<br />
                  QI 17 Lote 08 Casa 05<br />
                  Palmas, TO
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-secondary-foreground/80 text-sm">
                  Seg. a Sex. - Horário comercial<br />
                  Fechado: 12h às 14h
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Linha Divisória */}
        <div className="border-t border-secondary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-foreground/60 text-sm text-center md:text-left">
              © {currentYear} PERSONALIZADOS PMW. Todos os direitos reservados.
            </p>
            <p className="text-secondary-foreground/60 text-sm">
              CNPJ: 10.926.537/0001-30
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
