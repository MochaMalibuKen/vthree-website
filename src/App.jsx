// src/App.jsx
import Nav from "./components/Nav.jsx";
import Welcome from "./components/Welcome.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import CorporatePricing from "./components/CorporatePricing.jsx";
import CaseStudies from "./components/CaseStudies.jsx";
import TechnicalProjects from "./components/TechnicalProjects.jsx";
import BuiltForOperators from "./components/BuiltForOperators.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Welcome />
        <Hero />
        <About />
        <Services />
        <CorporatePricing />
        <CaseStudies />
        <TechnicalProjects />
        <BuiltForOperators />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
