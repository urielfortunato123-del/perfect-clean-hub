import PageShell from "@/components/PageShell";

const SobreNos = () => (
  <PageShell title="Sobre Nós">
    <p className="text-lg text-muted-foreground">
      O Faxina Perfeita nasceu com uma missão simples: conectar pessoas a profissionais de limpeza de confiança, 
      usando tecnologia para tornar o processo justo, seguro e acessível.
    </p>
    <p className="text-muted-foreground">
      Somos uma plataforma intermediadora entre clientes e diaristas autônomas. Não mantemos 
      vínculo empregatício — valorizamos a autonomia e liberdade de cada profissional.
    </p>
    <p className="text-muted-foreground">
      Com inteligência artificial, garantimos precificação justa, recomendações personalizadas 
      e segurança para todos os envolvidos.
    </p>
    <div className="bg-card rounded-2xl p-6 shadow-card border border-border not-prose mt-4">
      <p className="font-display font-bold text-foreground text-lg mb-1">Helen Clara</p>
      <p className="text-muted-foreground text-sm">Fundadora & CEO</p>
    </div>
  </PageShell>
);

export default SobreNos;
