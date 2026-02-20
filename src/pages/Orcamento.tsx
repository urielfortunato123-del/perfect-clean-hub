import PageShell from "@/components/PageShell";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, MapPin, Home, ClipboardList, Navigation, Loader2, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const WHATSAPP_NUMBER = "5577999800514";

const SERVICOS = [
  "Faxina completa",
  "Limpeza de cozinha",
  "Limpeza de banheiros",
  "Passar roupa",
  "Lavar roupa",
  "Limpeza de vidros",
  "Organização geral",
  "Limpeza de área externa",
];

const Orcamento = () => {
  const [form, setForm] = useState({
    nome: "",
    bairro: "",
    telefone: "",
    local: "",
    tamanho: "",
    frequencia: "",
    observacoes: "",
  });
  const [servicosSelecionados, setServicosSelecionados] = useState<string[]>([]);
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [loadingLocation, setLoadingLocation] = useState(false);

  const getLocation = () => {
    if (!navigator.geolocation) {
      toast.error("Seu navegador não suporta geolocalização.");
      return;
    }
    setLoadingLocation(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        setLoadingLocation(false);
        toast.success("Localização capturada com sucesso!");
      },
      () => {
        setLoadingLocation(false);
        toast.error("Não foi possível obter sua localização. Verifique as permissões.");
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  };

  const toggleServico = (servico: string) => {
    setServicosSelecionados((prev) =>
      prev.includes(servico) ? prev.filter((s) => s !== servico) : [...prev, servico]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.nome || !form.bairro || !form.telefone || !form.tamanho || !form.frequencia || servicosSelecionados.length === 0) {
      return;
    }

    const locationLink = location
      ? `https://www.google.com/maps?q=${location.lat},${location.lng}`
      : null;

    const mensagem = [
      `Olá! Gostaria de solicitar um orçamento de limpeza.`,
      ``,
      `*Nome:* ${form.nome.trim()}`,
      `*Telefone:* ${form.telefone.trim()}`,
      `*Bairro:* ${form.bairro.trim()}`,
      form.local ? `*Local:* ${form.local.trim()}` : null,
      locationLink ? `*📍 Localização:* ${locationLink}` : null,
      `*Tamanho da casa:* ${form.tamanho}`,
      `*Frequência:* ${form.frequencia}`,
      `*Serviços desejados:* ${servicosSelecionados.join(", ")}`,
      form.observacoes ? `*Observações:* ${form.observacoes.trim()}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  };

  return (
    <PageShell title="Solicite seu Orçamento">
      <p className="text-lg text-muted-foreground">
        Preencha o formulário abaixo com os detalhes do serviço desejado. Ao enviar, você será direcionado(a)
        para o nosso WhatsApp com todas as informações preenchidas.
      </p>

      <form onSubmit={handleSubmit} className="not-prose space-y-6 mt-8">
        {/* Dados pessoais */}
        <div className="bg-card rounded-2xl p-6 shadow-card border border-border space-y-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <h2 className="font-display font-bold text-foreground text-xl">Seus Dados</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="nome">Nome completo *</Label>
              <Input
                id="nome"
                placeholder="Seu nome"
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                maxLength={100}
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="telefone">Telefone / WhatsApp *</Label>
              <Input
                id="telefone"
                placeholder="(34) 99999-9999"
                value={form.telefone}
                onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                maxLength={20}
                required
                className="mt-1"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="bairro">Bairro *</Label>
              <Input
                id="bairro"
                placeholder="Ex: Santa Mônica"
                value={form.bairro}
                onChange={(e) => setForm({ ...form, bairro: e.target.value })}
                maxLength={100}
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="local">Endereço / Condomínio</Label>
              <Input
                id="local"
                placeholder="Ex: Condomínio Jardins"
                value={form.local}
                onChange={(e) => setForm({ ...form, local: e.target.value })}
                maxLength={200}
                className="mt-1"
              />
            </div>
          </div>

          {/* Localização */}
          <div>
            <Label>Local da faxina — envie sua localização</Label>
            <button
              type="button"
              onClick={getLocation}
              disabled={loadingLocation}
              className={`mt-1 w-full flex items-center justify-center gap-2 rounded-xl border border-border px-4 py-3 text-sm transition-colors ${
                location
                  ? "bg-green-50 border-green-300 text-green-700"
                  : "bg-muted/50 text-foreground hover:bg-muted"
              }`}
            >
              {loadingLocation ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Obtendo localização...
                </>
              ) : location ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  Localização capturada ✓
                </>
              ) : (
                <>
                  <Navigation className="w-4 h-4" />
                  📍 Enviar minha localização
                </>
              )}
            </button>
            {location && (
              <p className="text-xs text-muted-foreground mt-1">
                Coordenadas: {location.lat.toFixed(5)}, {location.lng.toFixed(5)}
              </p>
            )}
          </div>
        </div>

        {/* Detalhes do imóvel */}
        <div className="bg-card rounded-2xl p-6 shadow-card border border-border space-y-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
              <Home className="w-5 h-5 text-secondary" />
            </div>
            <h2 className="font-display font-bold text-foreground text-xl">Detalhes do Imóvel</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="tamanho">Tamanho da casa *</Label>
              <Select value={form.tamanho} onValueChange={(v) => setForm({ ...form, tamanho: v })}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Kitnet / Studio">Kitnet / Studio</SelectItem>
                  <SelectItem value="1 quarto">1 quarto</SelectItem>
                  <SelectItem value="2 quartos">2 quartos</SelectItem>
                  <SelectItem value="3 quartos">3 quartos</SelectItem>
                  <SelectItem value="4+ quartos">4+ quartos</SelectItem>
                  <SelectItem value="Casa grande / Sobrado">Casa grande / Sobrado</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="frequencia">Frequência desejada *</Label>
              <Select value={form.frequencia} onValueChange={(v) => setForm({ ...form, frequencia: v })}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Avulso (uma vez)">Avulso (uma vez)</SelectItem>
                  <SelectItem value="Semanal">Semanal</SelectItem>
                  <SelectItem value="Quinzenal">Quinzenal</SelectItem>
                  <SelectItem value="Mensal">Mensal</SelectItem>
                  <SelectItem value="Diário">Diário</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Serviços */}
        <div className="bg-card rounded-2xl p-6 shadow-card border border-border space-y-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <ClipboardList className="w-5 h-5 text-primary" />
            </div>
            <h2 className="font-display font-bold text-foreground text-xl">Serviços Desejados *</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {SERVICOS.map((servico) => (
              <label
                key={servico}
                className="flex items-center gap-3 bg-muted/50 rounded-xl px-4 py-3 cursor-pointer hover:bg-muted transition-colors"
              >
                <Checkbox
                  checked={servicosSelecionados.includes(servico)}
                  onCheckedChange={() => toggleServico(servico)}
                />
                <span className="text-sm text-foreground">{servico}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Observações */}
        <div>
          <Label htmlFor="observacoes">Observações adicionais</Label>
          <Textarea
            id="observacoes"
            placeholder="Alguma informação extra? (ex: tem pets, preferência de horário...)"
            value={form.observacoes}
            onChange={(e) => setForm({ ...form, observacoes: e.target.value })}
            maxLength={500}
            className="mt-1 min-h-[80px]"
          />
        </div>

        <Button
          type="submit"
          className="w-full gradient-hero text-primary-foreground font-semibold text-lg py-6 rounded-xl"
        >
          <Send className="w-5 h-5" />
          Enviar pelo WhatsApp
        </Button>
      </form>
    </PageShell>
  );
};

export default Orcamento;
