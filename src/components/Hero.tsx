import { motion } from "framer-motion";
import { ArrowRight, Shield, Star } from "lucide-react";
import heroImage from "@/assets/hero-cleaning.jpg";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-subtle -z-10" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              Marketplace #1 de diaristas
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
              Sua casa{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, hsl(217, 91%, 50%) 0%, hsl(200, 80%, 50%) 50%, hsl(160, 64%, 45%) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                impecável
              </span>
              , sem preocupação.
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
              Encontre diaristas de confiança perto de você. Com IA para precificação justa, 
              avaliações verificadas e pagamento seguro pelo app.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button className="gradient-hero text-primary-foreground font-semibold px-8 py-4 rounded-xl text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-elevated">
                Quero Contratar
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-secondary text-secondary font-semibold px-8 py-4 rounded-xl text-lg hover:bg-secondary hover:text-secondary-foreground transition-colors">
                Sou Diarista
              </button>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-secondary" />
                Pagamento seguro
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-warning" />
                4.9 estrelas
              </div>
              <span>+2.000 diaristas</span>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={heroImage}
                alt="Diarista profissional em casa limpa"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
            {/* Floating card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 shadow-elevated border border-border"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center">
                  <Star className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-display font-bold text-foreground">IA Integrada</p>
                  <p className="text-xs text-muted-foreground">Preço justo automático</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
