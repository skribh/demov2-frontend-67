
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToHashElement from "./components/ScrollToHashElement";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Investors from "./pages/Investors";
import EMSDirectors from "./pages/EMSDirectors";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <ScrollToHashElement />
      <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/ems-directors" element={<EMSDirectors />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>        
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
