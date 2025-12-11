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
      className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-20 pb-8"
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
      <div className="container mx-auto px-4 relative z-10 flex-1 flex items-center">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 font-playfair drop-shadow-[0_6px_12px_rgba(0,0,0,0.8)]">
            Personalizados PMW
          </h1>
          <img 
            src={logoHero} 
            alt="Logo Personalizados PMW" 
            className="w-32 h-32 md:w-40 md:h-40 object-contain mx-auto drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]"
          />
          
          <h2 className="text-xl md:text-2xl text-gold font-medium text-balance">
            Transformamos ideias em produtos personalizados que encantam e criam conexões verdadeiras
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("about")}
              className="border-2 border-white/60 bg-white/10 text-white hover:bg-white hover:text-secondary px-8 py-6 text-lg font-semibold transition-all hover:scale-105"
            >
              Conheça nossos serviços
            </Button>
            <Button
              size="lg"
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-xl font-bold shadow-gold transition-all hover:scale-110 animate-pulse ring-2 ring-primary/50 ring-offset-2 ring-offset-transparent"
            >
              <Link to="/vitrine">✨ Vitrine</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Info */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/20">
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
    </section>
  );
};

export default Hero;
