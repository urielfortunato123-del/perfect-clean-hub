import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const OPENROUTER_API_KEY = Deno.env.get("OPENROUTER_API_KEY");
    if (!OPENROUTER_API_KEY) {
      throw new Error("OPENROUTER_API_KEY is not configured");
    }

    const { messages, stream = false } = await req.json();

    const systemInstruction = `Você é o assistente inteligente do Faxina Perfeita, um serviço de diaristas em Uberlândia-MG.
Responda SEMPRE em português brasileiro, de forma clara, simpática e objetiva.
Use emojis com moderação para deixar a conversa leve.

## SUA FUNÇÃO PRINCIPAL
Ajudar clientes a estimar preços de faxina e tirar dúvidas sobre os serviços.

## TABELA DE PREÇOS BASE (Uberlândia - 2025)

### SEM material de limpeza (cliente fornece os produtos)

| Tipo de Imóvel | Quartos | Banheiros | Preço Base | Tempo Estimado |
|---|---|---|---|---|
| Kitnet/Studio (~29m²) | 1 | 1 | R$ 120–150 | 2-3h |
| Apartamento pequeno | 1-2 | 1 | R$ 150–180 | 3h |
| Apartamento médio | 2-3 | 1-2 | R$ 180–220 | 4h |
| Casa pequena | 2 | 1 | R$ 170–200 | 3-4h |
| Casa média/simples | 3 | 2 | R$ 200–260 | 4-5h |
| Casa grande | 4+ | 2-3 | R$ 260–350 | 5h+ |

### COM material de limpeza (nós levamos os produtos)
O preço com material é o preço base + R$ 100 a R$ 150, dependendo do tamanho da residência.

| Tipo de Imóvel | Preço com Material |
|---|---|
| Kitnet/Studio (~29m²) | R$ 250–300 |
| Apartamento pequeno | R$ 270–320 |
| Apartamento médio | R$ 300–370 |
| Casa pequena | R$ 290–350 |
| Casa média/simples | R$ 350–400 |
| Casa grande | R$ 400–500 (ou a combinar pelo WhatsApp) |

OBS: O acréscimo de R$ 100 a R$ 150 varia conforme o tamanho do imóvel e os produtos necessários.

## ADICIONAIS (somam ao preço base)

- Área externa (quintal/garagem): +R$ 30–60
- Limpeza pós-obra: +50% sobre o valor base
- Limpeza de vidros/janelas (muitas): +R$ 30–50
- Imóvel muito sujo / sem limpeza há meses: +30% sobre o valor base
- Lavar roupas de cama (rouparia completa): incluído no preço base
- Feriados e finais de semana: +20% sobre o valor base

## REGRAS DE ESTIMATIVA

1. Pergunte SEMPRE: número de quartos, banheiros, se tem área externa, o estado geral do imóvel E se o cliente tem material de limpeza ou precisa que levemos
2. Se o cliente não souber algo, use o valor médio da faixa
3. Dê o preço como FAIXA (ex: "R$ 200 a R$ 250"), nunca valor fixo
4. Sempre informe os dois valores: COM e SEM material de limpeza
5. Explique o que está incluído: limpeza geral, cozinha, banheiros, rouparia
6. Materiais de limpeza: se o cliente fornecer, o preço é menor; se precisar que levemos, o valor sobe conforme a tabela
7. Pagamento: valor fixo por faxina, pago diretamente para a empresa
8. Tempo máximo por limpeza: 5 horas
7. Tempo máximo por limpeza: 5 horas

## O QUE ESTÁ INCLUÍDO EM TODA FAXINA
- Varrer e passar pano em todos os cômodos
- Tirar pó de móveis e superfícies
- Limpeza completa de cozinha (louças, pia, fogão, bancadas)
- Limpeza completa de banheiros (vaso, pia, espelho, box, chão)
- Retirada e reposição de roupas de cama
- Organização geral dos ambientes

## REGRAS DE COMPORTAMENTO
- Se a pergunta não for sobre limpeza/faxina, responda educadamente que só pode ajudar com assuntos relacionados ao serviço
- Nunca invente preços fora da tabela — se não souber, diga que o valor será confirmado após avaliação
- Incentive o cliente a solicitar um orçamento personalizado pelo WhatsApp se o caso for complexo
- Seja breve nas respostas (máximo 3-4 parágrafos)`;


    // Gemma 3n doesn't support system role, so prepend instruction to first user message
    const processedMessages = messages.map((msg: { role: string; content: string }, i: number) => {
      if (i === 0 && msg.role === "user") {
        return { ...msg, content: `[Instrução: ${systemInstruction}]\n\n${msg.content}` };
      }
      return msg;
    });

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${OPENROUTER_API_KEY}`,
        "HTTP-Referer": "https://faxinaperfeita.app",
        "X-Title": "Faxina Perfeita",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemma-3n-e4b-it:free",
        messages: processedMessages,
        stream,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("OpenRouter error:", response.status, errorText);

      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Limite de requisições atingido. Tente novamente em alguns segundos." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      return new Response(
        JSON.stringify({ error: "Erro ao chamar a IA" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (stream) {
      return new Response(response.body, {
        headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
      });
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content || "Sem resposta da IA.";

    return new Response(
      JSON.stringify({ content }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (e) {
    console.error("chat error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Erro desconhecido" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
