import { Heart, Lightbulb, Users, TrendingUp, CheckCircle, MapPin } from "lucide-react";

const Values = () => {
  const values = [
    {
      icon: CheckCircle,
      title: "Qualidade e excelência",
      description: "Buscamos sempre o melhor acabamento e durabilidade em cada produto.",
    },
    {
      icon: Lightbulb,
      title: "Criatividade",
      description: "Cada peça é pensada para surpreender e emocionar.",
    },
    {
      icon: Users,
      title: "Atendimento humanizado",
      description: "Valorizamos cada cliente como parte da nossa história.",
    },
    {
      icon: TrendingUp,
      title: "Inovação",
      description: "Estamos sempre atualizados com novas técnicas e tendências do mercado.",
    },
    {
      icon: Heart,
      title: "Comprometimento",
      description: "Cumprimos prazos e entregamos o que prometemos.",
    },
    {
      icon: MapPin,
      title: "Orgulho tocantinense",
      description: "Valorizamos nossa cultura, nossas cores e nossa identidade regional.",
    },
  ];

  return (
    <section id="values" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              Nossos <span className="gradient-gold">valores</span>
            </h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
              Princípios que guiam nosso trabalho e relacionamento com cada cliente
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group p-4 md:p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <value.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">{value.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
