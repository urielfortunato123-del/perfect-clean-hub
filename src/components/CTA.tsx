import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="gradient-hero rounded-3xl p-10 md:p-16 text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Pronto para uma casa impecável?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
            Cadastre-se grátis e encontre diaristas de confiança na sua região agora mesmo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/orcamento" className="bg-card text-foreground font-semibold px-8 py-4 rounded-xl text-lg hover:bg-card/90 transition-colors flex items-center justify-center gap-2">
              Quero Contratar
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="https://wa.me/5577999800514?text=Ol%C3%A1!%20Sou%20diarista%20e%20gostaria%20de%20me%20cadastrar."
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-primary-foreground/30 text-primary-foreground font-semibold px-8 py-4 rounded-xl text-lg hover:bg-primary-foreground/10 transition-colors text-center"
            >
              Sou Diarista
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
