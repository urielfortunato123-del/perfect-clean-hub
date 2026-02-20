import PageShell from "@/components/PageShell";
import { Home, Sparkles, Clock, Banknote, CheckCircle2, Star, ClipboardList, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const DIAS_SEMANA = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];

const Cadastro = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [form, setForm] = useState({ nome: "", bairro: "", telefone: "", experiencia: "" });
  const [diasSelecionados, setDiasSelecionados] = useState<string[]>([]);

  const toggleDia = (dia: string) => {
    setDiasSelecionados((prev) =>
      prev.includes(dia) ? prev.filter((d) => d !== dia) : [...prev, dia]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome || !form.bairro || !form.telefone || !form.experiencia || diasSelecionados.length === 0) {
      toast({ title: "Preencha todos os campos", description: "Todos os campos são obrigatórios.", variant: "destructive" });
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("candidaturas").insert({
      nome_completo: form.nome.trim(),
      bairro: form.bairro.trim(),
      telefone: form.telefone.trim(),
      experiencia: form.experiencia.trim(),
      dias_disponiveis: diasSelecionados,
    });
    setLoading(false);
    if (error) {
      toast({ title: "Erro ao enviar", description: "Tente novamente mais tarde.", variant: "destructive" });
    } else {
      setEnviado(true);
      toast({ title: "Candidatura enviada! ✅", description: "Entraremos em contato em breve." });
    }
  };

  return (
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

    {/* CTA / Formulário */}
    <div className="not-prose gradient-hero rounded-2xl p-8 mt-4" id="formulario">
      <h2 className="font-display font-bold text-primary-foreground text-2xl mb-2 text-center">
        📲 Como se candidatar
      </h2>

      {enviado ? (
        <div className="text-center py-8">
          <CheckCircle2 className="w-16 h-16 text-primary-foreground mx-auto mb-4" />
          <p className="text-primary-foreground text-xl font-semibold mb-2">Candidatura enviada com sucesso!</p>
          <p className="text-primary-foreground/80">Entraremos em contato em breve pelo telefone informado.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4 mt-4">
          <div>
            <Label htmlFor="nome" className="text-primary-foreground text-sm">Nome completo</Label>
            <Input
              id="nome"
              placeholder="Seu nome completo"
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              className="bg-card/90 border-0 mt-1"
              maxLength={100}
            />
          </div>
          <div>
            <Label htmlFor="bairro" className="text-primary-foreground text-sm">Bairro</Label>
            <Input
              id="bairro"
              placeholder="Ex: Santa Mônica"
              value={form.bairro}
              onChange={(e) => setForm({ ...form, bairro: e.target.value })}
              className="bg-card/90 border-0 mt-1"
              maxLength={100}
            />
          </div>
          <div>
            <Label htmlFor="telefone" className="text-primary-foreground text-sm">Telefone / WhatsApp</Label>
            <Input
              id="telefone"
              placeholder="(34) 99999-9999"
              value={form.telefone}
              onChange={(e) => setForm({ ...form, telefone: e.target.value })}
              className="bg-card/90 border-0 mt-1"
              maxLength={20}
            />
          </div>
          <div>
            <Label htmlFor="experiencia" className="text-primary-foreground text-sm">Experiência com faxina</Label>
            <Textarea
              id="experiencia"
              placeholder="Conte um pouco sobre sua experiência..."
              value={form.experiencia}
              onChange={(e) => setForm({ ...form, experiencia: e.target.value })}
              className="bg-card/90 border-0 mt-1 min-h-[80px]"
              maxLength={500}
            />
          </div>
          <div>
            <Label className="text-primary-foreground text-sm mb-2 block">Dias disponíveis</Label>
            <div className="flex flex-wrap gap-3">
              {DIAS_SEMANA.map((dia) => (
                <label
                  key={dia}
                  className="flex items-center gap-2 bg-card/90 rounded-lg px-3 py-2 cursor-pointer text-sm"
                >
                  <Checkbox
                    checked={diasSelecionados.includes(dia)}
                    onCheckedChange={() => toggleDia(dia)}
                  />
                  <span className="text-foreground">{dia}</span>
                </label>
              ))}
            </div>
          </div>
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-card text-foreground font-semibold text-lg py-6 hover:bg-card/90 rounded-xl"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Send className="w-5 h-5" /> Enviar Candidatura</>}
          </Button>
        </form>
      )}
    </div>
  </PageShell>
  );
};

export default Cadastro;
