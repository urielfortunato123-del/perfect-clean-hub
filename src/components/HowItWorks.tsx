import { motion } from "framer-motion";
import { ClipboardList, Users, CreditCard, Star } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Preencha o formulário",
    description: "Informe o tamanho do imóvel, tipo de limpeza e frequência desejada.",
  },
  {
    icon: Users,
    title: "Fale com a Helen Clara",
    description: "Você será direcionado ao WhatsApp para combinar os detalhes diretamente.",
  },
  {
    icon: CreditCard,
    title: "Pagamento direto",
    description: "Combine o valor e pague diretamente para a empresa. Sem taxas extras.",
  },
  {
    icon: Star,
    title: "Casa impecável",
    description: "Receba a diarista no dia combinado e aproveite sua casa limpa e organizada.",
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Como funciona?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Em 4 passos simples, sua casa fica impecável
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative text-center"
            >
              {/* Step number */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full gradient-hero text-primary-foreground text-xs font-bold flex items-center justify-center z-10">
                {i + 1}
              </div>

              <div className="bg-background rounded-2xl p-8 pt-10 shadow-card hover:shadow-elevated transition-shadow h-full">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-bold text-foreground text-lg mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
