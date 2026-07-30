import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation();
  const cues = t("homepage.hero.cues", { returnObjects: true });
  return <header className="section home-hero" aria-labelledby="home-hero-title">
    <div className="home-hero-grid" aria-hidden="true" />
    <svg className="home-hero-connections" viewBox="0 0 1440 760" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <path className="hero-field-route field-route-1" d="M1040 360 C920 286 760 240 590 245 C420 250 286 314 150 410" />
      <path className="hero-field-route field-route-2" d="M1040 360 C890 398 760 450 610 520 C438 600 294 618 104 574" />
      <path className="hero-field-route field-route-3" d="M1040 360 C1135 288 1238 236 1388 222" />
      <path className="hero-field-route field-route-4 field-route-muted" d="M1040 360 C906 176 664 122 386 150" />
      <path className="hero-field-route field-route-5 field-route-muted" d="M1040 360 C1152 454 1268 520 1408 582" />
      <circle className="hero-field-node" cx="590" cy="245" r="4" />
      <circle className="hero-field-node" cx="610" cy="520" r="4" />
      <circle className="hero-field-node" cx="386" cy="150" r="3.5" />
      <circle className="hero-field-node" cx="1388" cy="222" r="3.5" />
      <circle className="hero-field-packet field-packet-1" r="5">
        <animateMotion dur="12s" repeatCount="indefinite" path="M1040 360 C920 286 760 240 590 245 C420 250 286 314 150 410" />
      </circle>
      <circle className="hero-field-packet field-packet-2" r="4.6">
        <animateMotion dur="15s" begin="3s" repeatCount="indefinite" path="M1040 360 C890 398 760 450 610 520 C438 600 294 618 104 574" />
      </circle>
      <circle className="hero-field-packet field-packet-3" r="4.2">
        <animateMotion dur="17s" begin="6s" repeatCount="indefinite" path="M1040 360 C1135 288 1238 236 1388 222" />
      </circle>
      <circle className="hero-field-packet field-packet-4" r="4.4">
        <animateMotion dur="19s" begin="9s" repeatCount="indefinite" path="M1040 360 C906 176 664 122 386 150" />
      </circle>
    </svg>
    <div className="container home-hero-layout">
      <div className="home-hero-copy">
        <p className="eyebrow">{t("homepage.hero.eyebrow")}</p>
        <h1 id="home-hero-title">{t("homepage.hero.title")}</h1>
        <p className="home-hero-lead">{t("homepage.hero.body")}</p>
        <ul className="home-proof-cues" aria-label={t("homepage.hero.cuesLabel")}>
          {Array.isArray(cues) && cues.map(cue => <li key={cue}>{cue}</li>)}
        </ul>
        <div className="cta">
          <Link className="btn home-hero-primary" to="/contact" onClick={() => window.dataLayer?.push({ event: "assessment_start", source: "home_hero" })}>{t("homepage.hero.primaryCta")}</Link>
          <a className="btn outline home-hero-secondary" href="#vthree-method" onClick={() => window.dataLayer?.push({ event: "cta_click", cta: "home_explore_method" })}>{t("homepage.hero.secondaryCta")}</a>
        </div>
      </div>
      <div className="home-system-visual" aria-hidden="true">
        <span className="ruby-environment ruby-bloom" />
        <span className="ruby-environment ruby-spill" />
        <span className="ruby-environment ruby-haze" />
        <span className="ruby-environment ruby-pulse" />
        <svg className="hero-signal-network" viewBox="0 0 520 500" aria-hidden="true" focusable="false">
          <path className="hero-signal-route route-1" d="M110 95 C180 140 218 176 260 250" />
          <path className="hero-signal-route route-2" d="M410 116 C348 154 304 194 260 250" />
          <path className="hero-signal-route route-3" d="M88 258 C154 244 200 242 260 250" />
          <path className="hero-signal-route route-4" d="M430 270 C360 262 314 256 260 250" />
          <path className="hero-signal-route route-5" d="M260 414 C260 350 260 306 260 250" />
          <circle className="hero-signal-packet packet-1" r="4.8">
            <animateMotion dur="13s" repeatCount="indefinite" path="M110 95 C180 140 218 176 260 250" />
          </circle>
          <circle className="hero-signal-packet packet-2" r="4.4">
            <animateMotion dur="16s" begin="4s" repeatCount="indefinite" path="M410 116 C348 154 304 194 260 250" />
          </circle>
          <circle className="hero-signal-packet packet-3" r="4.2">
            <animateMotion dur="18s" begin="7s" repeatCount="indefinite" path="M88 258 C154 244 200 242 260 250" />
          </circle>
          <circle className="hero-signal-packet packet-4" r="4.5">
            <animateMotion dur="21s" begin="11s" repeatCount="indefinite" path="M260 414 C260 350 260 306 260 250" />
          </circle>
        </svg>
        <div className="hero-data-layer" aria-hidden="true">
          <span className="hero-data-element data-1" />
          <span className="hero-data-element data-2" />
          <span className="hero-data-element data-3" />
          <span className="hero-data-element data-4" />
          <span className="hero-data-element data-5" />
          <span className="hero-data-element data-6" />
          <span className="hero-data-element data-7" />
          <span className="hero-data-element data-8" />
          <span className="hero-data-element data-9" />
          <span className="hero-data-element data-10" />
        </div>
        <div className="hero-verification-layer" aria-hidden="true">
          <span className="hero-grid-field" />
          <span className="hero-verification-sweep" />
        </div>
        <span className="ruby-environment ruby-reflection ruby-reflection-1" />
        <span className="ruby-environment ruby-reflection ruby-reflection-2" />
        <span className="home-system-core"><img src="/images/branding/vthree512microcoremarkv1.webp" alt="" /></span>
        <span className="home-system-node home-system-node-1">{t("homepage.hero.system.strategy")}</span>
        <span className="home-system-node home-system-node-2">{t("homepage.hero.system.experience")}</span>
        <span className="home-system-node home-system-node-3">{t("homepage.hero.system.content")}</span>
        <span className="home-system-node home-system-node-4">{t("homepage.hero.system.automation")}</span>
        <span className="home-system-node home-system-node-5">{t("homepage.hero.system.measurement")}</span>
      </div>
    </div>
  </header>;
}
