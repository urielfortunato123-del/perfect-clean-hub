import PageShell from "@/components/PageShell";
import { ClipboardList, Users, CreditCard, Star } from "lucide-react";

const ComoFunciona = () => (
  <PageShell title="Como Funciona">
    <p className="text-lg text-muted-foreground">
      O Faxina Perfeita conecta você a diaristas de confiança em 4 passos simples.
    </p>

    <div className="space-y-8 mt-8">
      {[
        { icon: ClipboardList, title: "1. Descreva o serviço", text: "Informe o tamanho do imóvel, tipo de limpeza, data e horário desejados. Nossa IA calcula o preço ideal automaticamente." },
        { icon: Users, title: "2. Receba propostas", text: "Diaristas verificadas na sua região enviam propostas com preço e mensagem. Veja avaliações e fotos antes de escolher." },
        { icon: CreditCard, title: "3. Pague com segurança", text: "O pagamento é feito pelo app e só é liberado para a diarista após a confirmação do serviço concluído." },
        { icon: Star, title: "4. Avalie", text: "Após o serviço, avalie a diarista e ajude a comunidade. Fotos antes/depois garantem transparência total." },
      ].map((step) => (
        <div key={step.title} className="flex gap-4 items-start">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
            <step.icon className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-display font-bold text-foreground text-lg">{step.title}</h3>
            <p className="text-muted-foreground">{step.text}</p>
          </div>
        </div>
      ))}
    </div>
  </PageShell>
);

export default ComoFunciona;
