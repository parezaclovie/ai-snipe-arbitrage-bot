
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Sniper from "./pages/Sniper";
import Arbitrage from "./pages/Arbitrage";
import NFTSniper from "./pages/NFTSniper";
import MEVProtection from "./pages/MEVProtection";
import Settings from "./pages/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sniper" element={<Sniper />} />
          <Route path="/arbitrage" element={<Arbitrage />} />
          <Route path="/nft-sniper" element={<NFTSniper />} />
          <Route path="/mev-protection" element={<MEVProtection />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
