
CREATE TABLE public.candidaturas (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nome_completo TEXT NOT NULL,
  bairro TEXT NOT NULL,
  telefone TEXT NOT NULL,
  experiencia TEXT NOT NULL,
  dias_disponiveis TEXT[] NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.candidaturas ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit candidatura"
ON public.candidaturas
FOR INSERT
WITH CHECK (true);

CREATE POLICY "No public read access"
ON public.candidaturas
FOR SELECT
USING (false);
