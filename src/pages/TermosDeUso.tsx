import PageShell from "@/components/PageShell";

const TermosDeUso = () => (
  <PageShell title="Termos de Uso">
    <p className="text-muted-foreground"><strong>Última atualização:</strong> Fevereiro de 2026</p>

    <h2 className="font-display font-bold text-foreground text-xl mt-6">1. Aceitação dos Termos</h2>
    <p className="text-muted-foreground">Ao utilizar o Faxina Perfeita, você concorda com estes termos de uso. Caso não concorde, não utilize a plataforma.</p>

    <h2 className="font-display font-bold text-foreground text-xl">2. Natureza do Serviço</h2>
    <p className="text-muted-foreground">O Faxina Perfeita é uma plataforma de intermediação entre clientes e diaristas autônomas. Não existe vínculo empregatício (CLT) entre a plataforma e as profissionais cadastradas.</p>

    <h2 className="font-display font-bold text-foreground text-xl">3. Responsabilidades do Usuário</h2>
    <p className="text-muted-foreground">Cada usuário é responsável pela veracidade das informações fornecidas no cadastro e pelo cumprimento dos acordos feitos na plataforma.</p>

    <h2 className="font-display font-bold text-foreground text-xl">4. Pagamentos</h2>
    <p className="text-muted-foreground">Os pagamentos são processados pela plataforma. O valor é retido até a confirmação do serviço pelo cliente. Uma taxa de serviço é aplicada em cada transação.</p>

    <h2 className="font-display font-bold text-foreground text-xl">5. Cancelamentos</h2>
    <p className="text-muted-foreground">Cancelamentos com mais de 24 horas de antecedência são gratuitos. Cancelamentos tardios podem gerar cobrança parcial.</p>

    <h2 className="font-display font-bold text-foreground text-xl">6. Contato</h2>
    <p className="text-muted-foreground">Dúvidas sobre os termos? Entre em contato pelo e-mail: contato@faxinaperfeita.app</p>
  </PageShell>
);

export default TermosDeUso;
