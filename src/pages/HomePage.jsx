import { useTranslation } from "react-i18next";
import PageMeta from "../components/PageMeta.jsx";
import HeroSection from "../components/homepage/HeroSection.jsx";
import TrustSection from "../components/homepage/TrustSection.jsx";
import ProblemSection from "../components/homepage/ProblemSection.jsx";
import MethodSection from "../components/homepage/MethodSection.jsx";
import ServicesSection from "../components/homepage/ServicesSection.jsx";
import ProofSection from "../components/homepage/ProofSection.jsx";
import FounderSection from "../components/homepage/FounderSection.jsx";
import AssessmentCTASection from "../components/homepage/AssessmentCTASection.jsx";

export default function HomePage() {
  const { t } = useTranslation();
  return <main>
    <PageMeta title={t("meta.title")} description={t("meta.description")} path="/" />
    <HeroSection />
    <TrustSection />
    <ProblemSection />
    <MethodSection />
    <ServicesSection />
    <ProofSection />
    <FounderSection />
    <AssessmentCTASection />
  </main>;
}
