import { Mail, MapPin, Clock, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              Entre em <span className="gradient-gold">contato</span>
            </h2>
            <p className="text-base md:text-xl text-muted-foreground px-2">
              Estamos prontos para transformar suas ideias em realidade
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
            <div className="bg-card rounded-2xl p-5 md:p-8 shadow-elegant animate-fade-in">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Informações de contato</h3>
              
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold mb-1 text-sm md:text-base">E-mail</p>
                    <a
                      href="mailto:personalizadospalmas@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors text-xs md:text-sm break-all"
                    >
                      personalizadospalmas@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1 text-sm md:text-base">Instagram</p>
                    <a
                      href="https://instagram.com/personalizadospmw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors text-xs md:text-sm"
                    >
                      @personalizadospmw
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1 text-sm md:text-base">Endereço</p>
                    <p className="text-muted-foreground text-xs md:text-sm">
                      Quadra 208 Norte Alameda 32<br />
                      QI 17 Lote 08 Casa 05<br />
                      Palmas, Tocantins
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1 text-sm md:text-base">Horário de funcionamento</p>
                    <p className="text-muted-foreground text-xs md:text-sm">
                      Segunda a sexta<br />
                      Horário comercial<br />
                      Fechado para almoço: 12h às 14h
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-5 md:p-8 shadow-elegant animate-fade-in animation-delay-200">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Solicite um orçamento</h3>
              <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8 leading-relaxed">
                Entre em contato conosco para solicitar um orçamento personalizado. 
                Nossa equipe está pronta para atender suas necessidades e criar 
                produtos exclusivos que vão além das suas expectativas.
              </p>
              
              <div className="space-y-3 md:space-y-4">
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-5 md:py-6 text-base md:text-lg font-semibold shadow-gold transition-all hover:scale-105"
                  asChild
                >
                  <a href="mailto:personalizadospalmas@gmail.com">
                    Enviar e-mail
                  </a>
                </Button>

                <Button
                  variant="outline"
                  className="w-full border-2 border-primary/60 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground py-5 md:py-6 text-base md:text-lg font-semibold transition-all hover:scale-105"
                  asChild
                >
                  <a
                    href="https://instagram.com/personalizadospmw"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Seguir no Instagram
                  </a>
                </Button>
              </div>

              <p className="text-xs md:text-sm text-muted-foreground mt-4 md:mt-6 text-center">
                Responderemos o mais breve possível
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
