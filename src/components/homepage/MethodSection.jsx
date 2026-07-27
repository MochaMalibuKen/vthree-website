import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function MethodSection() {
  const { t } = useTranslation();
  const stages = t("homepage.method.stages", { returnObjects: true });
  return <section id="vthree-method" className="section home-method" aria-labelledby="home-method-title">
    <div className="container">
      <p className="eyebrow">{t("homepage.method.eyebrow")}</p>
      <h2 id="home-method-title">{t("homepage.method.title")}</h2>
      <ol className="home-method-list">
        {Array.isArray(stages) && stages.map((stage, index) => <li key={stage}>
          <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
          <strong>{stage}</strong>
        </li>)}
      </ol>
      <Link className="text-link home-section-link" to="/method">{t("homepage.method.cta")} <span aria-hidden="true">→</span></Link>
    </div>
  </section>;
}
