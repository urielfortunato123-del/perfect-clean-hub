import PageShell from "@/components/PageShell";
import { Crown, Eye, Zap } from "lucide-react";

const perks = [
  { icon: Crown, title: "Destaque nos resultados", text: "Seu perfil aparece primeiro para clientes na sua região." },
  { icon: Eye, title: "Selo Premium", text: "Badge exclusivo que transmite confiança e profissionalismo." },
  { icon: Zap, title: "Propostas prioritárias", text: "Receba novos anúncios antes das diaristas não-premium." },
];

const DiaristaPremium = () => (
  <PageShell title="Diarista Premium">
    <p className="text-lg text-muted-foreground">
      Eleve seu perfil profissional e conquiste mais clientes com o plano Premium.
    </p>
    <div className="not-prose bg-card rounded-2xl p-8 shadow-card border border-border mt-8">
      <p className="text-primary font-bold text-3xl font-display mb-1">R$ 29,90/mês</p>
      <p className="text-muted-foreground text-sm mb-6">Cancele quando quiser</p>
      <div className="space-y-5">
        {perks.map((p) => (
          <div key={p.title} className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center flex-shrink-0">
              <p.icon className="w-5 h-5 text-warning" />
            </div>
            <div>
              <h3 className="font-display font-bold text-foreground">{p.title}</h3>
              <p className="text-muted-foreground text-sm">{p.text}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="gradient-hero text-primary-foreground font-semibold px-8 py-3 rounded-xl mt-8 hover:opacity-90 transition-opacity">
        Assinar Premium
      </button>
    </div>
  </PageShell>
);

export default DiaristaPremium;
