import { MapPin, Clock, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";
import logoHero from "@/assets/logo-hero.png";

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
      className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-20 pb-6"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Tecnologia de personalização PERSONALIZADOS PMW"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/75" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 flex-1 flex items-center py-8">
        <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-6 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-2 md:mb-4 font-playfair drop-shadow-[0_6px_12px_rgba(0,0,0,0.8)]">
            Personalizados PMW
          </h1>
          <img 
            src={logoHero} 
            alt="Logo Personalizados PMW" 
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-contain mx-auto drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]"
          />
          
          <h2 className="text-lg sm:text-xl md:text-2xl text-gold font-medium text-balance px-2">
            Transformamos ideias em produtos personalizados que encantam e criam conexões verdadeiras
          </h2>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center pt-2 md:pt-4">
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("about")}
              className="border-2 border-white/60 bg-white/10 text-white hover:bg-white hover:text-secondary px-6 py-5 md:px-8 md:py-6 text-base md:text-lg font-semibold transition-all hover:scale-105 w-full sm:w-auto"
            >
              Conheça nossos serviços
            </Button>
            <Button
              size="lg"
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-5 md:px-10 md:py-6 text-lg md:text-xl font-bold shadow-gold transition-all hover:scale-110 animate-pulse ring-2 ring-primary/50 ring-offset-2 ring-offset-transparent w-full sm:w-auto"
            >
              <Link to="/vitrine">✨ Vitrine</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Info */}
      <div className="container mx-auto px-4 relative z-10 mt-auto">
        <div className="grid grid-cols-3 gap-2 md:gap-6 pt-4 md:pt-6 border-t border-white/20">
          <div className="flex flex-col items-center gap-1 md:gap-2 text-white">
            <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            <p className="text-xs md:text-sm text-center">Palmas, TO</p>
          </div>
          <div className="flex flex-col items-center gap-1 md:gap-2 text-white">
            <Clock className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            <p className="text-xs md:text-sm text-center">Seg. a Sex.</p>
          </div>
          <div className="flex flex-col items-center gap-1 md:gap-2 text-white">
            <Instagram className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            <a
              href="https://instagram.com/personalizadospmw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs md:text-sm hover:text-primary transition-colors text-center"
            >
              @personalizadospmw
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
