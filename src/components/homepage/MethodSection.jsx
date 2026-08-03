import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import MethodMissionRail from "./visuals/MethodMissionRail.jsx";

export default function MethodSection() {
  const { t } = useTranslation();
  return <section id="vthree-method" className="section home-method" aria-labelledby="home-method-title">
    <div className="container">
      <p className="eyebrow">{t("homepage.method.eyebrow")}</p>
      <h2 id="home-method-title">{t("homepage.method.title")}</h2>
      <MethodMissionRail />
      <Link className="text-link home-section-link" to="/method">{t("homepage.method.cta")} <span aria-hidden="true">→</span></Link>
    </div>
  </section>;
}
