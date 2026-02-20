import { motion } from "framer-motion";
import { Brain, ShieldCheck, Camera, MessageCircle, TrendingUp, MapPin } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "IA para Precificação",
    description: "Preço justo calculado automaticamente com base no tamanho, tipo de sujeira e região.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: ShieldCheck,
    title: "Segurança Total",
    description: "Verificação de identidade, avaliações reais e pagamento protegido pelo app.",
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
    icon: MessageCircle,
    title: "Chat Interno",
    description: "Converse diretamente com a diarista sem compartilhar dados pessoais.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: TrendingUp,
    title: "Painel de Ganhos",
    description: "Diaristas acompanham ganhos, avaliações e performance em tempo real.",
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
  {
    icon: MapPin,
    title: "Rota Inteligente",
    description: "IA sugere a melhor rota do dia para otimizar tempo e deslocamento.",
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
