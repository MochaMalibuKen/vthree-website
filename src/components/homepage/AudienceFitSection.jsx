import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function AudienceFitSection() {
  const { t } = useTranslation();
  const fit = t("homepage.audience.fit", { returnObjects: true });
  const notFit = t("homepage.audience.notFit", { returnObjects: true });
  return <section id="audience-fit" className="section home-audience" aria-labelledby="home-audience-title">
    <div className="container">
      <p className="eyebrow">{t("homepage.audience.eyebrow")}</p>
      <h2 id="home-audience-title">{t("homepage.audience.title")}</h2>
      <div className="home-fit-grid">
        <div className="home-fit-panel">
          <h3>{t("homepage.audience.fitLabel")}</h3>
          <ul>{Array.isArray(fit) && fit.map(item => <li key={item}>{item}</li>)}</ul>
        </div>
        <div className="home-fit-panel home-fit-panel-muted">
          <h3>{t("homepage.audience.notFitLabel")}</h3>
          <ul>{Array.isArray(notFit) && notFit.map(item => <li key={item}>{item}</li>)}</ul>
        </div>
      </div>
      <Link className="text-link home-section-link" to="/contact" onClick={() => window.dataLayer?.push({ event: "assessment_start", source: "home_audience_fit" })}>{t("homepage.audience.cta")} <span aria-hidden="true">→</span></Link>
    </div>
  </section>;
}
