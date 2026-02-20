import { Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg gradient-hero flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-lg text-background">Faxina Perfeita</span>
            </div>
            <p className="text-background/60 text-sm leading-relaxed">
              Sua casa impecável, sem preocupação. Marketplace inteligente de diaristas.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-background mb-4">Para Clientes</h4>
            <ul className="space-y-2 text-sm text-background/60">
              <li><a href="#" className="hover:text-background transition-colors">Como funciona</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Preços</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Segurança</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-background mb-4">Para Diaristas</h4>
            <ul className="space-y-2 text-sm text-background/60">
              <li><a href="#" className="hover:text-background transition-colors">Cadastre-se</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Vantagens</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Diarista Premium</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-background mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-background/60">
              <li><a href="#" className="hover:text-background transition-colors">Sobre nós</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Termos de uso</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Privacidade</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-6 text-center">
          <p className="text-background/40 text-sm">
            © 2026 Faxina Perfeita. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
