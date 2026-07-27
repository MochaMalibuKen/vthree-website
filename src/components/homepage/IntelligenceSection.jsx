import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function IntelligenceSection() {
  const { t } = useTranslation();
  return <section id="intelligence-preview" className="section home-intelligence" aria-labelledby="home-intelligence-title">
    <div className="container home-intelligence-layout">
      <div>
        <p className="eyebrow">{t("homepage.intelligence.eyebrow")}</p>
        <h2 id="home-intelligence-title">{t("homepage.intelligence.title")}</h2>
      </div>
      <div className="home-empty-state">
        <span>{t("homepage.intelligence.status")}</span>
        <p>{t("homepage.intelligence.empty")}</p>
        <Link className="text-link" to="/intelligence">{t("homepage.intelligence.cta")} <span aria-hidden="true">→</span></Link>
      </div>
    </div>
  </section>;
}
