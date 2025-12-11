import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logoPmw from "@/assets/logo-pmw.png";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (isHomePage) {
      // Se estamos na home, fazer scroll direto
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
        setIsMobileMenuOpen(false);
      }
    } else {
      // Se estamos em outra página, navegar para home e fazer scroll
      navigate(`/#${id}`);
      setIsMobileMenuOpen(false);
    }
  };

  // Efeito para fazer scroll quando navegamos com hash
  useEffect(() => {
    if (location.hash && isHomePage) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
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
      }, 100);
    }
  }, [location.hash, isHomePage]);

  const navItems = [
    { label: "Início", id: "hero", type: "scroll" },
    { label: "Sobre", id: "about", type: "scroll" },
    { label: "Tecnologias", id: "technologies", type: "scroll" },
    { label: "Valores", id: "values", type: "scroll" },
    { label: "Contato", id: "contact", type: "scroll" },
    { label: "Vitrine", id: "/vitrine", type: "route" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md shadow-lg transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/"
            className="flex items-center gap-3 group"
          >
            <img
              src={logoPmw}
              alt="PMW Personalizados"
              className="h-20 w-20 object-contain transition-transform group-hover:scale-110"
            />
            <span className="text-xl font-bold gradient-gold hidden sm:block">
              PMW Personalizados
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              item.type === "route" ? (
                <Button
                  key={item.id}
                  variant="ghost"
                  asChild
                  className="text-foreground hover:text-primary transition-colors"
                >
                  <Link to={item.id}>{item.label}</Link>
                </Button>
              ) : (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </Button>
              )
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pb-4 animate-fade-in">
            {navItems.map((item) => (
              item.type === "route" ? (
                <Button
                  key={item.id}
                  variant="ghost"
                  asChild
                  className="w-full justify-start text-foreground hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Link to={item.id}>{item.label}</Link>
                </Button>
              ) : (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => scrollToSection(item.id)}
                  className="w-full justify-start text-foreground hover:text-primary"
                >
                  {item.label}
                </Button>
              )
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
