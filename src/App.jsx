// src/App.jsx
import Nav from "./components/Nav.jsx";
import Welcome from "./components/Welcome.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Pricing from "./components/pricing.jsx"; 
import Projects from "./components/Projects.jsx";
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
        <Pricing />   
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}