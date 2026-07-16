// src/App.jsx
import Nav from "./components/Nav.jsx";
import Welcome from "./components/Welcome.jsx";
import Hero from "./components/Hero.jsx";
import Philosophy from "./components/Philosophy.jsx";
import WhyDigitalArchitecture from "./components/WhyDigitalArchitecture.jsx";
import Method from "./components/Method.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import CorporatePricing from "./components/CorporatePricing.jsx";
import CaseStudies from "./components/CaseStudies.jsx";
import Industries from "./components/Industries.jsx";
import Labs from "./components/Labs.jsx";
import ExplainerVideo from "./components/ExplainerVideo.jsx";
import TechnicalProjects from "./components/TechnicalProjects.jsx";
import Insights from "./components/Insights.jsx";
import Founder from "./components/Founder.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Welcome />
        <Philosophy />
        <WhyDigitalArchitecture />
        <Method />
        <Services />
        <CorporatePricing />
        <CaseStudies />
        <Industries />
        <Labs />
        <ExplainerVideo />
        <TechnicalProjects />
        <Insights />
        <About />
        <Founder />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
