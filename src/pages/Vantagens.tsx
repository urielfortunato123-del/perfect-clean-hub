import PageShell from "@/components/PageShell";
import { TrendingUp, MapPin, Star, Calendar } from "lucide-react";

const benefits = [
  { icon: TrendingUp, title: "Aumente seus ganhos", text: "Diaristas no Faxina Perfeita ganham em média 40% a mais do que trabalhando por conta própria." },
  { icon: Calendar, title: "Agenda flexível", text: "Você escolhe seus horários e dias de trabalho. Sem obrigações fixas." },
  { icon: MapPin, title: "Rota inteligente", text: "Nossa IA sugere a melhor rota do dia para otimizar seu tempo e deslocamento." },
  { icon: Star, title: "Reconhecimento", text: "Boas avaliações aumentam sua visibilidade e atraem mais clientes premium." },
];

const Vantagens = () => (
  <PageShell title="Vantagens para Diaristas">
    <p className="text-lg text-muted-foreground">
      Descubra por que milhares de profissionais escolhem o Faxina Perfeita.
    </p>
    <div className="space-y-6 mt-8">
      {benefits.map((b) => (
        <div key={b.title} className="flex gap-4 items-start">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
            <b.icon className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-display font-bold text-foreground text-lg">{b.title}</h3>
            <p className="text-muted-foreground">{b.text}</p>
          </div>
        </div>
      ))}
    </div>
  </PageShell>
);

export default Vantagens;
