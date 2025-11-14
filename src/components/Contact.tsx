import { Mail, MapPin, Clock, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Entre em <span className="gradient-gold">contato</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Estamos prontos para transformar suas ideias em realidade
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card rounded-2xl p-8 shadow-elegant animate-fade-in">
              <h3 className="text-2xl font-bold mb-6">Informações de contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">E-mail</p>
                    <a
                      href="mailto:personalizadospalmas@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      personalizadospalmas@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Instagram</p>
                    <a
                      href="https://instagram.com/personalizadospmw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      @personalizadospmw
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Endereço</p>
                    <p className="text-muted-foreground">
                      Quadra 208 Norte Alameda 32<br />
                      QI 17 Lote 08 Casa 05<br />
                      Palmas, Tocantins
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Horário de funcionamento</p>
                    <p className="text-muted-foreground">
                      Segunda a sexta<br />
                      Horário comercial<br />
                      Fechado para almoço: 12h às 14h
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-elegant animate-fade-in animation-delay-200">
              <h3 className="text-2xl font-bold mb-6">Solicite um orçamento</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Entre em contato conosco para solicitar um orçamento personalizado. 
                Nossa equipe está pronta para atender suas necessidades e criar 
                produtos exclusivos que vão além das suas expectativas.
              </p>
              
              <div className="space-y-4">
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg font-semibold shadow-gold transition-all hover:scale-105"
                  asChild
                >
                  <a href="mailto:personalizadospalmas@gmail.com">
                    Enviar e-mail
                  </a>
                </Button>

                <Button
                  variant="outline"
                  className="w-full border-2 border-primary/60 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground py-6 text-lg font-semibold transition-all hover:scale-105"
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

              <p className="text-sm text-muted-foreground mt-6 text-center">
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
