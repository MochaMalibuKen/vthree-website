import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ProjectAssessmentMatrix from "./visuals/ProjectAssessmentMatrix.jsx";

export default function PricingGuidanceSection() {
  const { t } = useTranslation();
  return <section id="pricing-guidance" className="section home-pricing-guidance" aria-labelledby="home-pricing-title">
    <div className="container home-pricing-layout">
      <div>
        <p className="eyebrow">{t("homepage.pricing.eyebrow")}</p>
        <h2 id="home-pricing-title">{t("homepage.pricing.title")}</h2>
      </div>
      <div>
        <ProjectAssessmentMatrix />
        <Link className="text-link home-section-link" to="/pricing">{t("homepage.pricing.cta")} <span aria-hidden="true">→</span></Link>
      </div>
    </div>
  </section>;
}
