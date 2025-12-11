import { MapPin, Clock, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
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

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Tecnologia de personalização PERSONALIZADOS PMW"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/95 via-secondary/90 to-accent/95" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-playfair">
            PMW Personalizados
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gold font-medium mb-8 text-balance">
            Transformamos ideias em produtos personalizados que encantam e criam conexões verdadeiras
          </h2>


          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("about")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold shadow-gold transition-all hover:scale-105"
            >
              Conheça nossos serviços
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-2 border-white/60 bg-white/10 text-white hover:bg-white hover:text-secondary px-8 py-6 text-lg font-semibold transition-all hover:scale-105"
            >
              <Link to="/vitrine">Vitrine</Link>
            </Button>
          </div>

          {/* Quick Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-16 border-t border-white/20">
            <div className="flex flex-col items-center gap-2 text-white">
              <MapPin className="w-6 h-6 text-primary" />
              <p className="text-sm">Palmas, Tocantins</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-white">
              <Clock className="w-6 h-6 text-primary" />
              <p className="text-sm">Seg. a Sex. - Horário comercial</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-white">
              <Instagram className="w-6 h-6 text-primary" />
              <a
                href="https://instagram.com/personalizadospmw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-primary transition-colors"
              >
                @personalizadospmw
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
