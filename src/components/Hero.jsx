import { useTranslation } from "react-i18next";
import logo from "../assets/V3logo.png"; // still in src/assets, so keep import

export default function Hero() {
  const { t } = useTranslation();

  return (
    <header className="section hero fade-in">
      {/* Background image layer */}
      <div className="hero-media" aria-hidden="true">
        <img
          src="/hero/bigcity.jpg"
          alt=""
          loading="eager"
          fetchpriority="high"
          decoding="async"
        />
      </div>

      <div className="container">
        <img
          src={logo}
          alt="VTHREE"
          style={{ height: 56, width: "auto", marginBottom: "1rem", opacity: 0.95 }}
        />
        <h1>
          {t("hero.title", {
            defaultValue: "Small-business sites that look great and convert."
          })}
        </h1>
        <p>
          {t("hero.subtitle", {
            defaultValue:
              "Fast, mobile-first websites built with semantic HTML, modern CSS, clean JavaScript, and React. Clear messaging and performance that turns visitors into customers."
          })}
        </p>
            <div className="cta">
              <a className="btn" href="#contact">
                {t("hero.cta", {
                  defaultValue: "Get Started"
                })}
              </a>
            </div>
          </div>
                </header>
            );
        }
