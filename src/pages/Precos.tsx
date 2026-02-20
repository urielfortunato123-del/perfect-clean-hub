import PageShell from "@/components/PageShell";

const plans = [
  { name: "Avulso", price: "A partir de R$ 80", features: ["Limpeza básica", "Pagamento seguro", "Avaliação pós-serviço", "Chat com diarista"] },
  { name: "Mensal", price: "A partir de R$ 280/mês", features: ["4 faxinas por mês", "Diarista fixa", "Prioridade no agendamento", "Desconto de 10%"] },
  { name: "Premium", price: "A partir de R$ 500/mês", features: ["8 faxinas por mês", "Diarista exclusiva", "Limpeza pesada inclusa", "Suporte prioritário"] },
];

const Precos = () => (
  <PageShell title="Preços">
    <p className="text-lg text-muted-foreground">
      Planos flexíveis para todas as necessidades. Valores estimados pela IA com base na sua região.
    </p>

    <div className="grid sm:grid-cols-3 gap-6 mt-8 not-prose">
      {plans.map((plan) => (
        <div key={plan.name} className="bg-card rounded-2xl p-6 shadow-card border border-border">
          <h3 className="font-display font-bold text-foreground text-xl mb-1">{plan.name}</h3>
          <p className="text-primary font-bold text-2xl mb-4">{plan.price}</p>
          <ul className="space-y-2">
            {plan.features.map((f) => (
              <li key={f} className="text-muted-foreground text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </PageShell>
);

export default Precos;
