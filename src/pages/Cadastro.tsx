import PageShell from "@/components/PageShell";

const Cadastro = () => (
  <PageShell title="Cadastre-se como Diarista">
    <p className="text-lg text-muted-foreground">
      Junte-se a mais de 2.000 diaristas que já aumentaram seus ganhos com o Faxina Perfeita.
    </p>

    <div className="space-y-4 mt-8">
      <h2 className="font-display font-bold text-foreground text-xl">Como se cadastrar</h2>
      <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
        <li>Crie sua conta com e-mail ou Google</li>
        <li>Preencha seus dados pessoais e área de atuação</li>
        <li>Envie foto do documento de identidade</li>
        <li>Aguarde a aprovação (até 24 horas)</li>
        <li>Comece a receber propostas de clientes!</li>
      </ol>
    </div>

    <div className="mt-8">
      <button className="gradient-hero text-primary-foreground font-semibold px-8 py-4 rounded-xl text-lg hover:opacity-90 transition-opacity">
        Quero me Cadastrar
      </button>
    </div>
  </PageShell>
);

export default Cadastro;
