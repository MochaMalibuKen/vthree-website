import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "../assets/V3logo.png"; // still in src/assets, so keep import

export default function Hero() {
  const { t } = useTranslation();

  return (
    <header className="section hero fade-in">
      <div className="hero-blueprint" aria-hidden="true">
        <span className="blueprint-line line-one" /><span className="blueprint-line line-two" />
        <span className="blueprint-node node-one" /><span className="blueprint-node node-two" /><span className="blueprint-node node-three" />
        <span className="signal-path" />
      </div>
      {/* Background image layer */}
      <div className="hero-media" aria-hidden="true">
        <img
          src="/hero/bigcity.jpg"
          alt=""
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </div>

      <div className="container">
        <p className="eyebrow">{t("hero.eyebrow", { defaultValue: "Digital Architecture Studio" })}</p>
        <img src={logo} alt="" className="hero-logo" />
        <h1>
          {t("hero.title", {
            defaultValue: "We Architect Digital Growth Systems."
          })}
        </h1>
        <p>
          {t("hero.subtitle", {
            defaultValue:
              "VTHREE connects research, strategy, storytelling, automation, analytics, and technical execution into coordinated digital systems built to produce measurable business movement."
          })}
        </p>
        <p className="capability-line">{t("hero.capabilities", { defaultValue: "Websites. Campaigns. Creative Production. Automation. Intelligence." })}</p>
            <div className="cta">
              <Link className="btn" to="/contact" onClick={() => window.dataLayer?.push({ event: "assessment_start", source: "legacy_hero" })}>
                {t("hero.cta", {
                  defaultValue: "Start an Assessment"
                })}
              </Link>
              <a className="btn outline" href="#case-studies" onClick={() => window.dataLayer?.push({ event: "cta_click", cta: "hero_explore_work" })}>
                {t("hero.secondary", { defaultValue: "Explore Our Work" })}
              </a>
            </div>
          </div>
                </header>
            );
        }
