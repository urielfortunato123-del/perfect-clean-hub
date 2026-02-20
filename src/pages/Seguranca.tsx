import PageShell from "@/components/PageShell";
import { ShieldCheck, Camera, Lock, AlertTriangle } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Verificação de identidade", text: "Todas as diaristas passam por verificação de identidade e antecedentes antes de serem aprovadas na plataforma." },
  { icon: Camera, title: "Fotos antes e depois", text: "Fotos obrigatórias do serviço garantem transparência e qualidade comprovada." },
  { icon: Lock, title: "Pagamento protegido", text: "O dinheiro só é liberado após confirmação do serviço. Sem risco para você." },
  { icon: AlertTriangle, title: "Sistema de denúncias", text: "Canal direto para reportar problemas. Usuários problemáticos são banidos da plataforma." },
];

const Seguranca = () => (
  <PageShell title="Segurança">
    <p className="text-lg text-muted-foreground">
      Sua segurança é nossa prioridade. Conheça as medidas que adotamos.
    </p>
    <div className="space-y-6 mt-8">
      {items.map((item) => (
        <div key={item.title} className="flex gap-4 items-start">
          <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
            <item.icon className="w-6 h-6 text-secondary" />
          </div>
          <div>
            <h3 className="font-display font-bold text-foreground text-lg">{item.title}</h3>
            <p className="text-muted-foreground">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  </PageShell>
);

export default Seguranca;
