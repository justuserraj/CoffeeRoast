import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import FAQPage from "./pages/FAQPage";
import Cookies from "./pages/Cookies";
import ReturnsExchanges from "./pages/ReturnsExchanges";
import ShippingPolicy from "./pages/ShippingPolicy";
import ContactUs from "./pages/ContactUs";
import OurStory from "./pages/OurStory";
import Sustainability from "./pages/Sustainability";
import Wholesale from "./pages/Wholesale";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/returns-exchanges" element={<ReturnsExchanges />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/wholesale" element={<Wholesale />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;