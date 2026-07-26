import { useTranslation } from "react-i18next";
import PageMeta from "../components/PageMeta.jsx";
import Hero from "../components/Hero.jsx";
import Welcome from "../components/Welcome.jsx";
import Philosophy from "../components/Philosophy.jsx";
import WhyDigitalArchitecture from "../components/WhyDigitalArchitecture.jsx";
import Method from "../components/Method.jsx";
import Services from "../components/Services.jsx";
import CorporatePricing from "../components/CorporatePricing.jsx";
import CaseStudies from "../components/CaseStudies.jsx";
import Industries from "../components/Industries.jsx";
import Labs from "../components/Labs.jsx";
import ExplainerVideo from "../components/ExplainerVideo.jsx";
import TechnicalProjects from "../components/TechnicalProjects.jsx";
import Insights from "../components/Insights.jsx";
import About from "../components/About.jsx";
import Founder from "../components/Founder.jsx";
import Contact from "../components/Contact.jsx";

export default function HomePage() {
  const { t } = useTranslation();
  return <main>
    <PageMeta title={t("meta.title")} description={t("meta.description")} path="/" />
    <Hero /><Welcome /><Philosophy /><WhyDigitalArchitecture /><Method /><Services /><CorporatePricing />
    <CaseStudies /><Industries /><Labs /><ExplainerVideo /><TechnicalProjects /><Insights /><About /><Founder /><Contact />
  </main>;
}
