import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation();
  const cues = t("homepage.hero.cues", { returnObjects: true });
  return <header className="section home-hero" aria-labelledby="home-hero-title">
    <div className="home-hero-grid" aria-hidden="true" />
    <div className="container home-hero-layout">
      <div className="home-hero-copy">
        <p className="eyebrow">{t("homepage.hero.eyebrow")}</p>
        <h1 id="home-hero-title">{t("homepage.hero.title")}</h1>
        <p className="home-hero-lead">{t("homepage.hero.body")}</p>
        <ul className="home-proof-cues" aria-label={t("homepage.hero.cuesLabel")}>
          {Array.isArray(cues) && cues.map(cue => <li key={cue}>{cue}</li>)}
        </ul>
        <div className="cta">
          <Link className="btn" to="/contact" onClick={() => window.dataLayer?.push({ event: "cta_click", cta: "home_start_assessment" })}>{t("homepage.hero.primaryCta")}</Link>
          <a className="btn outline" href="#vthree-method" onClick={() => window.dataLayer?.push({ event: "cta_click", cta: "home_explore_method" })}>{t("homepage.hero.secondaryCta")}</a>
        </div>
      </div>
      <div className="home-system-visual" aria-hidden="true">
        <span className="home-system-core">VTHREE</span>
        <span className="home-system-node home-system-node-1">{t("homepage.hero.system.strategy")}</span>
        <span className="home-system-node home-system-node-2">{t("homepage.hero.system.experience")}</span>
        <span className="home-system-node home-system-node-3">{t("homepage.hero.system.content")}</span>
        <span className="home-system-node home-system-node-4">{t("homepage.hero.system.automation")}</span>
        <span className="home-system-node home-system-node-5">{t("homepage.hero.system.measurement")}</span>
      </div>
    </div>
  </header>;
}
