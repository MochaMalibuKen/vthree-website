import { useTranslation } from "react-i18next";
import PageMeta from "../components/PageMeta.jsx";
import HeroSection from "../components/homepage/HeroSection.jsx";
import ProblemSection from "../components/homepage/ProblemSection.jsx";
import OperatingModelSection from "../components/homepage/OperatingModelSection.jsx";
import StakesSection from "../components/homepage/StakesSection.jsx";
import MethodSection from "../components/homepage/MethodSection.jsx";
import ServicesSection from "../components/homepage/ServicesSection.jsx";
import ProofSection from "../components/homepage/ProofSection.jsx";
import AudienceFitSection from "../components/homepage/AudienceFitSection.jsx";
import PricingGuidanceSection from "../components/homepage/PricingGuidanceSection.jsx";
import IntelligenceSection from "../components/homepage/IntelligenceSection.jsx";
import FounderSection from "../components/homepage/FounderSection.jsx";
import AssessmentCTASection from "../components/homepage/AssessmentCTASection.jsx";

export default function HomePage() {
  const { t } = useTranslation();
  return <main>
    <PageMeta title={t("meta.title")} description={t("meta.description")} path="/" />
    <HeroSection />
    <ProblemSection />
    <OperatingModelSection />
    <StakesSection />
    <MethodSection />
    <ServicesSection />
    <ProofSection />
    <AudienceFitSection />
    <PricingGuidanceSection />
    <IntelligenceSection />
    <FounderSection />
    <AssessmentCTASection />
  </main>;
}
