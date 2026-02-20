import PageShell from "@/components/PageShell";

const Privacidade = () => (
  <PageShell title="Política de Privacidade">
    <p className="text-muted-foreground"><strong>Última atualização:</strong> Fevereiro de 2026</p>

    <h2 className="font-display font-bold text-foreground text-xl mt-6">1. Dados Coletados</h2>
    <p className="text-muted-foreground">Coletamos nome, e-mail, telefone, endereço e dados de pagamento necessários para o funcionamento da plataforma.</p>

    <h2 className="font-display font-bold text-foreground text-xl">2. Uso dos Dados</h2>
    <p className="text-muted-foreground">Seus dados são utilizados exclusivamente para conectar clientes a diaristas, processar pagamentos e melhorar a experiência na plataforma.</p>

    <h2 className="font-display font-bold text-foreground text-xl">3. Compartilhamento</h2>
    <p className="text-muted-foreground">Não vendemos nem compartilhamos seus dados com terceiros, exceto quando necessário para processamento de pagamentos e cumprimento legal.</p>

    <h2 className="font-display font-bold text-foreground text-xl">4. Segurança</h2>
    <p className="text-muted-foreground">Utilizamos criptografia e boas práticas de segurança para proteger seus dados pessoais.</p>

    <h2 className="font-display font-bold text-foreground text-xl">5. Seus Direitos</h2>
    <p className="text-muted-foreground">Você pode solicitar acesso, correção ou exclusão dos seus dados a qualquer momento entrando em contato conosco.</p>

    <h2 className="font-display font-bold text-foreground text-xl">6. Contato</h2>
    <p className="text-muted-foreground">Para questões de privacidade: privacidade@faxinaperfeita.app</p>
  </PageShell>
);

export default Privacidade;
