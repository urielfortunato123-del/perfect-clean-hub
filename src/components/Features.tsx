import { motion } from "framer-motion";
import { Brain, ShieldCheck, Camera, MessageCircle, TrendingUp, MapPin } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Profissionais Verificadas",
    description: "Todas as diaristas são selecionadas e verificadas pela nossa equipe.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: MessageCircle,
    title: "Atendimento Direto",
    description: "Fale diretamente com a Helen Clara pelo WhatsApp para combinar tudo.",
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
  {
    icon: Camera,
    title: "Fotos Antes e Depois",
    description: "Diaristas enviam fotos do serviço, garantindo transparência e qualidade.",
    color: "text-warning",
    bg: "bg-warning/10",
  },
  {
    icon: MapPin,
    title: "Uberlândia e Região",
    description: "Cobertura em diversos bairros de Uberlândia com atendimento rápido.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: TrendingUp,
    title: "Pagamento Direto",
    description: "Sem intermediários. Combine o valor e pague diretamente para a empresa.",
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
  {
    icon: Brain,
    title: "Flexibilidade Total",
    description: "Escolha a frequência ideal: avulso, semanal, quinzenal ou mensal.",
    color: "text-warning",
    bg: "bg-warning/10",
  },
];

const Features = () => {
  return (
    <section id="funcionalidades" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tecnologia a seu favor
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Inteligência artificial para clientes, diaristas e administração
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-7 shadow-card hover:shadow-elevated transition-all hover:-translate-y-1 border border-border"
            >
              <div className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-5`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="font-display font-bold text-foreground text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
