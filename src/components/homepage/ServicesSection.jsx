import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CapabilityEcosystem from "./visuals/CapabilityEcosystem.jsx";

export default function ServicesSection() {
  const { t } = useTranslation();
  return <section id="capabilities" className="section home-capabilities" aria-labelledby="home-capabilities-title">
    <div className="container">
      <p className="eyebrow">{t("homepage.capabilities.eyebrow")}</p>
      <h2 id="home-capabilities-title">{t("homepage.capabilities.title")}</h2>
      <CapabilityEcosystem />
      <Link className="text-link home-section-link" to="/services">{t("homepage.capabilities.cta")} <span aria-hidden="true">→</span></Link>
    </div>
  </section>;
}
