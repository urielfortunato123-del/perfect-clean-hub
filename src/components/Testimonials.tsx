import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Souza",
    role: "Cliente",
    text: "Encontrei uma diarista incrível em menos de 1 hora! O preço foi justo e o serviço impecável.",
    rating: 5,
  },
  {
    name: "Ana Paula",
    role: "Diarista",
    text: "Meus ganhos aumentaram 40% desde que comecei a usar o app. A organização de rota é perfeita!",
    rating: 5,
  },
  {
    name: "Carlos Mendes",
    role: "Cliente",
    text: "As fotos antes e depois me deram muita confiança. Uso toda semana agora.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que dizem nossos usuários
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-background rounded-2xl p-7 shadow-card border border-border"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-warning text-warning" />
                ))}
              </div>
              <p className="text-foreground mb-5 leading-relaxed">"{t.text}"</p>
              <div>
                <p className="font-display font-bold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
