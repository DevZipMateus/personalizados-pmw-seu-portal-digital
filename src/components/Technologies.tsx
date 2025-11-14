import { Printer, Zap, Sparkles } from "lucide-react";
import dtfTextileImage from "@/assets/dtf-textile.jpg";
import dtfUvImage from "@/assets/dtf-uv.jpg";
import laserImage from "@/assets/laser-engraving.jpg";

const Technologies = () => {
  const technologies = [
    {
      icon: Printer,
      title: "DTF Têxtil",
      image: dtfTextileImage,
      description:
        "Impressão digital direta em tecidos com cores vibrantes e durabilidade excepcional. Ideal para camisetas, uniformes e produtos têxteis personalizados.",
      features: ["Alta qualidade", "Cores vibrantes", "Durabilidade"],
    },
    {
      icon: Zap,
      title: "DTF UV",
      image: dtfUvImage,
      description:
        "Tecnologia UV para personalização em diversos materiais rígidos. Perfeito para brindes corporativos, produtos promocionais e itens diferenciados.",
      features: ["Versatilidade", "Resistência", "Acabamento premium"],
    },
    {
      icon: Sparkles,
      title: "Gravação a Laser",
      image: laserImage,
      description:
        "Precisão e elegância em gravações permanentes. Ideal para peças sofisticadas, presentes especiais e produtos que exigem detalhamento.",
      features: ["Precisão máxima", "Permanente", "Acabamento refinado"],
    },
  ];

  return (
    <section id="technologies" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nossas <span className="gradient-gold">tecnologias</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Equipamentos de última geração para garantir qualidade e inovação em cada projeto
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl overflow-hidden shadow-elegant hover:shadow-gold transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={tech.image}
                    alt={tech.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-8">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <tech.icon className="w-8 h-8 text-primary" />
                  </div>
                
                  <h3 className="text-2xl font-bold mb-4">{tech.title}</h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {tech.description}
                  </p>

                  <div className="space-y-2">
                    {tech.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
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

export default Technologies;
