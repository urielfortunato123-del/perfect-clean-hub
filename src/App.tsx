import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ComoFunciona from "./pages/ComoFunciona";
import Precos from "./pages/Precos";
import Seguranca from "./pages/Seguranca";
import Cadastro from "./pages/Cadastro";
import Vantagens from "./pages/Vantagens";
import DiaristaPremium from "./pages/DiaristaPremium";
import SobreNos from "./pages/SobreNos";
import TermosDeUso from "./pages/TermosDeUso";
import Privacidade from "./pages/Privacidade";
import Orcamento from "./pages/Orcamento";
import Chatbot from "./components/Chatbot";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/como-funciona" element={<ComoFunciona />} />
          <Route path="/precos" element={<Precos />} />
          <Route path="/seguranca" element={<Seguranca />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/vantagens" element={<Vantagens />} />
          <Route path="/diarista-premium" element={<DiaristaPremium />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="/termos-de-uso" element={<TermosDeUso />} />
          <Route path="/privacidade" element={<Privacidade />} />
          <Route path="/orcamento" element={<Orcamento />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Chatbot />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
