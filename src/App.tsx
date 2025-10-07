import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import HoneypotProject from "./pages/HoneypotProject";
import WebPenTestProject from "./pages/WebPenTestProject";
import VulnAssessmentProject from "./pages/VulnAssessmentProject";
import IncidentResponseProject from "./pages/IncidentResponseProject";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/honeypot" element={<HoneypotProject />} />
          <Route path="/web-pentest" element={<WebPenTestProject />} />
          <Route path="/vuln-assessment" element={<VulnAssessmentProject />} />
          <Route path="/incident-response" element={<IncidentResponseProject />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
