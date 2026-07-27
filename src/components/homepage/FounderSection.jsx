import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function FounderSection() {
  const { t } = useTranslation();
  return <section id="founder-authority" className="section home-founder" aria-labelledby="home-founder-title">
    <div className="container home-founder-layout">
      <div className="home-founder-placeholder" role="img" aria-label={t("homepage.founder.portraitStatus")}>
        <span aria-hidden="true">KA</span>
        <small>{t("homepage.founder.portraitStatus")}</small>
      </div>
      <div>
        <p className="eyebrow">{t("homepage.founder.eyebrow")}</p>
        <h2 id="home-founder-title">{t("homepage.founder.title")}</h2>
        <p className="home-founder-name">{t("homepage.founder.name")}</p>
        <p className="home-founder-role">{t("homepage.founder.role")}</p>
        <p>{t("homepage.founder.company")}</p>
        <Link className="text-link home-section-link" to="/about">{t("homepage.founder.cta")} <span aria-hidden="true">→</span></Link>
      </div>
    </div>
  </section>;
}
