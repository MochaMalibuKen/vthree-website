import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function AssessmentCTASection() {
  const { t } = useTranslation();
  return <section id="assessment" className="section home-final-cta" aria-labelledby="home-assessment-title">
    <div className="container home-final-cta-layout">
      <div>
        <h2 id="home-assessment-title">{t("homepage.assessment.title")}</h2>
        <p>{t("homepage.assessment.body")}</p>
        <p className="fine-print">{t("homepage.assessment.disclaimer")}</p>
      </div>
      <Link className="btn" to="/contact" onClick={() => window.dataLayer?.push({ event: "assessment_start", source: "home_final_cta" })}>{t("homepage.assessment.cta")}</Link>
    </div>
  </section>;
}
