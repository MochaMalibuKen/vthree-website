import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function PricingGuidanceSection() {
  const { t } = useTranslation();
  const factors = t("homepage.pricing.factors", { returnObjects: true });
  return <section id="pricing-guidance" className="section home-pricing-guidance" aria-labelledby="home-pricing-title">
    <div className="container home-pricing-layout">
      <div>
        <p className="eyebrow">{t("homepage.pricing.eyebrow")}</p>
        <h2 id="home-pricing-title">{t("homepage.pricing.title")}</h2>
      </div>
      <div>
        <ul className="home-factor-list">
          {Array.isArray(factors) && factors.map((factor, index) => <li key={factor}><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>{factor}</li>)}
        </ul>
        <Link className="text-link home-section-link" to="/pricing">{t("homepage.pricing.cta")} <span aria-hidden="true">→</span></Link>
      </div>
    </div>
  </section>;
}
