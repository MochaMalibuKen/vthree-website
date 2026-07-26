import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import HomePage from "./pages/HomePage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import MethodPage from "./pages/MethodPage.jsx";
import WorkPage from "./pages/WorkPage.jsx";
import CaseStudyPage from "./pages/CaseStudyPage.jsx";
import IntelligencePage from "./pages/IntelligencePage.jsx";
import IntelligenceArticlePage from "./pages/IntelligenceArticlePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import PricingPage from "./pages/PricingPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import PrivacyPage from "./pages/PrivacyPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/method" element={<MethodPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/work/:slug" element={<CaseStudyPage />} />
        <Route path="/intelligence" element={<IntelligencePage />} />
        <Route path="/intelligence/:slug" element={<IntelligenceArticlePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/assessment" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}
