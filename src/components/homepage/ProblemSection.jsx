import { useTranslation } from "react-i18next";
import OperationalFragmentationVisual from "./visuals/OperationalFragmentationVisual.jsx";

export default function ProblemSection() {
  const { t } = useTranslation();
  return <section id="problem" className="section home-problem" aria-labelledby="home-problem-title">
    <div className="container">
      <p className="eyebrow">{t("homepage.problem.eyebrow")}</p>
      <h2 id="home-problem-title">{t("homepage.problem.title")}</h2>
      <OperationalFragmentationVisual />
      <a className="text-link home-section-link" href="#vthree-method">{t("homepage.problem.cta")} <span aria-hidden="true">↓</span></a>
    </div>
  </section>;
}
