import { useTranslation } from "react-i18next";

export default function ProblemSection() {
  const { t } = useTranslation();
  const themes = t("homepage.problem.themes", { returnObjects: true });
  return <section id="problem" className="section home-problem" aria-labelledby="home-problem-title">
    <div className="container">
      <p className="eyebrow">{t("homepage.problem.eyebrow")}</p>
      <h2 id="home-problem-title">{t("homepage.problem.title")}</h2>
      <div className="home-card-grid home-problem-grid">
        {Array.isArray(themes) && themes.map((theme, index) => <article className="home-signal-card" key={theme}>
          <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
          <h3>{theme}</h3>
        </article>)}
      </div>
      <a className="text-link home-section-link" href="#vthree-method">{t("homepage.problem.cta")} <span aria-hidden="true">↓</span></a>
    </div>
  </section>;
}
