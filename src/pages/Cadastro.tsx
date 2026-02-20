import PageShell from "@/components/PageShell";
import { Home, Sparkles, Clock, Banknote, CheckCircle2, Star, ClipboardList } from "lucide-react";

const Cadastro = () => (
  <PageShell title="Seja uma Diarista Parceira">
    <p className="text-lg text-muted-foreground">
      Estamos selecionando diaristas parceiras para prestação de serviços de limpeza em residências 
      e imóveis por temporada na cidade de Uberlândia.
    </p>

    {/* Tipo de imóvel */}
    <div className="not-prose bg-card rounded-2xl p-6 shadow-card border border-border mt-8">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <Home className="w-5 h-5 text-primary" />
        </div>
        <h2 className="font-display font-bold text-foreground text-xl">Tipo de Imóvel</h2>
      </div>
      <ul className="space-y-2 text-muted-foreground text-sm">
        <li>• A maioria das limpezas será em casas sem moradores no momento, facilitando a execução</li>
        <li>• Eventualmente poderá haver hóspedes no local, sendo necessário discrição e postura profissional</li>
      </ul>
    </div>

    {/* Objetivo */}
    <div className="not-prose bg-card rounded-2xl p-6 shadow-card border border-border">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-secondary" />
        </div>
        <h2 className="font-display font-bold text-foreground text-xl">Objetivo do Serviço</h2>
      </div>
      <p className="text-muted-foreground text-sm">
        Deixar o imóvel totalmente limpo, organizado e pronto para uso do próximo hóspede.
      </p>
    </div>

    {/* Atividades */}
    <div className="not-prose bg-card rounded-2xl p-6 shadow-card border border-border">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <ClipboardList className="w-5 h-5 text-primary" />
        </div>
        <h2 className="font-display font-bold text-foreground text-xl">Atividades Incluídas</h2>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <h3 className="font-display font-semibold text-foreground mb-2">🧹 Limpeza Geral</h3>
          <ul className="space-y-1 text-muted-foreground text-sm">
            <li>• Varrer e passar pano com cuidado</li>
            <li>• Proteger móveis em MDF ao jogar água</li>
            <li>• Tirar pó de todos os móveis</li>
            <li>• Limpar superfícies</li>
            <li>• Organizar os ambientes</li>
          </ul>
        </div>

        <div>
          <h3 className="font-display font-semibold text-foreground mb-2">🍳 Cozinha</h3>
          <ul className="space-y-1 text-muted-foreground text-sm">
            <li>• Lavar louças</li>
            <li>• Limpar pia, fogão e bancadas</li>
            <li>• Deixar utensílios organizados</li>
          </ul>
        </div>

        <div>
          <h3 className="font-display font-semibold text-foreground mb-2">🚿 Banheiros</h3>
          <ul className="space-y-1 text-muted-foreground text-sm">
            <li>• Limpeza completa do vaso sanitário</li>
            <li>• Limpeza da pia e espelho</li>
            <li>• Limpeza do box e do chão</li>
          </ul>
        </div>

        <div>
          <h3 className="font-display font-semibold text-foreground mb-2">🛏️ Rouparia</h3>
          <ul className="space-y-1 text-muted-foreground text-sm">
            <li>• Retirar roupas de cama usadas</li>
            <li>• Lavar e repor roupas de cama limpas</li>
            <li>• Lavar tapetes quando necessário</li>
          </ul>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="font-display font-semibold text-foreground mb-2">🌿 Área Externa</h3>
        <ul className="space-y-1 text-muted-foreground text-sm">
          <li>• Quando necessário: lavar áreas externas, varrer quintal/garagem</li>
        </ul>
      </div>
    </div>

    {/* Materiais */}
    <div className="not-prose bg-secondary/5 rounded-2xl p-6 border border-secondary/20">
      <h2 className="font-display font-bold text-foreground text-lg mb-2">🧴 Materiais de Limpeza</h2>
      <p className="text-muted-foreground text-sm">
        Os materiais estarão disponíveis no imóvel. Utilize os produtos do local e mantenha-os organizados após o uso. 
        <strong className="text-foreground"> Não é necessário levar produtos próprios.</strong>
      </p>
    </div>

    {/* Tempo e Pagamento */}
    <div className="not-prose grid sm:grid-cols-2 gap-6">
      <div className="bg-card rounded-2xl p-6 shadow-card border border-border">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center">
            <Clock className="w-5 h-5 text-warning" />
          </div>
          <h2 className="font-display font-bold text-foreground text-lg">Tempo de Execução</h2>
        </div>
        <p className="text-muted-foreground text-sm">
          Cada limpeza deverá ser realizada em até <strong className="text-foreground">5 horas</strong>, 
          com foco em agilidade, organização e qualidade.
        </p>
      </div>

      <div className="bg-card rounded-2xl p-6 shadow-card border border-border">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
            <Banknote className="w-5 h-5 text-secondary" />
          </div>
          <h2 className="font-display font-bold text-foreground text-lg">Pagamento</h2>
        </div>
        <ul className="space-y-1 text-muted-foreground text-sm">
          <li>• Valor fixo por faxina</li>
          <li>• Pagamento toda <strong className="text-foreground">sexta-feira</strong></li>
          <li>• Mais serviços para quem tem bom desempenho</li>
        </ul>
      </div>
    </div>

    {/* Requisitos */}
    <div className="not-prose bg-card rounded-2xl p-6 shadow-card border border-border">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <CheckCircle2 className="w-5 h-5 text-primary" />
        </div>
        <h2 className="font-display font-bold text-foreground text-xl">Requisitos</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {["Pontuais", "Responsáveis", "Caprichosas na limpeza", "Ágeis", "De confiança"].map((req) => (
          <div key={req} className="flex items-center gap-2 text-sm text-muted-foreground">
            <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
            {req}
          </div>
        ))}
      </div>
    </div>

    {/* Diferenciais */}
    <div className="not-prose bg-card rounded-2xl p-6 shadow-card border border-border">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center">
          <Star className="w-5 h-5 text-warning" />
        </div>
        <h2 className="font-display font-bold text-foreground text-xl">Diferenciais</h2>
      </div>
      <p className="text-muted-foreground text-sm">
        Diaristas bem avaliadas terão <strong className="text-foreground">prioridade na agenda</strong> e 
        <strong className="text-foreground"> maior volume de serviços</strong>.
      </p>
    </div>

    {/* CTA */}
    <div className="not-prose gradient-hero rounded-2xl p-8 text-center mt-4">
      <h2 className="font-display font-bold text-primary-foreground text-2xl mb-2">
        📲 Como se candidatar
      </h2>
      <p className="text-primary-foreground/80 text-sm mb-6">
        Envie seu nome completo, bairro, experiência com faxina e dias disponíveis.
      </p>
      <button className="bg-card text-foreground font-semibold px-8 py-4 rounded-xl text-lg hover:bg-card/90 transition-colors">
        Quero me Candidatar
      </button>
    </div>
  </PageShell>
);

export default Cadastro;
