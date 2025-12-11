import { Target, Eye, Award } from "lucide-react";
import productsImage from "@/assets/products-showcase.jpg";

const About = () => {
  return (
    <section id="about" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              Sobre a <span className="gradient-gold">Personalizados PMW</span>
            </h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
              Somos especialistas em transformar ideias em realidade através da personalização
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-10 md:mb-16">
            <div className="order-2 md:order-1 animate-fade-in">
              <img
                src={productsImage}
                alt="Produtos personalizados PERSONALIZADOS PMW"
                className="rounded-2xl shadow-elegant w-full h-auto object-cover"
              />
            </div>

            <div className="space-y-5 md:space-y-6 order-1 md:order-2 animate-fade-in animation-delay-200">
              <div className="flex gap-3 md:gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Target className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">Nossa missão</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Transformar ideias em produtos personalizados que encantam e criam conexões verdadeiras. 
                    Nosso compromisso é entregar qualidade, criatividade e identidade em cada item — seja uma 
                    lembrança afetiva, um brinde corporativo ou uma peça exclusiva.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 md:gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Eye className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">Nossa visão</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Ser reconhecida como a maior referência em personalização no Tocantins, levando o nome da 
                    Personalizados PMW para todo o Brasil como sinônimo de inovação, qualidade e confiança.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-accent/5 rounded-2xl p-6 md:p-8 animate-fade-in animation-delay-400">
            <Award className="w-12 h-12 md:w-16 md:h-16 text-primary mb-4 md:mb-6" />
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Diferenciais</h3>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-sm md:text-base text-muted-foreground">
                  Tecnologia de ponta em DTF UV, DTF Têxtil e gravação a laser
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-sm md:text-base text-muted-foreground">
                  Atendimento personalizado e humanizado
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-sm md:text-base text-muted-foreground">
                  Resultados únicos com acabamento premium
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-sm md:text-base text-muted-foreground">
                  Orgulho tocantinense em cada projeto
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
