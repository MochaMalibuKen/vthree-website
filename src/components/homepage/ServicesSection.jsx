import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ServicesSection() {
  const { t } = useTranslation();
  const groups = t("homepage.capabilities.groups", { returnObjects: true });
  return <section id="capabilities" className="section home-capabilities" aria-labelledby="home-capabilities-title">
    <div className="container">
      <p className="eyebrow">{t("homepage.capabilities.eyebrow")}</p>
      <h2 id="home-capabilities-title">{t("homepage.capabilities.title")}</h2>
      <div className="home-card-grid home-capability-grid">
        {Array.isArray(groups) && groups.map((group, index) => <article className="home-capability-card" key={group}>
          <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
          <h3>{group}</h3>
        </article>)}
      </div>
      <Link className="text-link home-section-link" to="/services">{t("homepage.capabilities.cta")} <span aria-hidden="true">→</span></Link>
    </div>
  </section>;
}
