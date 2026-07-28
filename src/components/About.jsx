import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function About({ headingLevel = "h2" }) {
  const { t } = useTranslation();
  const Heading = headingLevel;
  const audiences = t("about.audiences.items", { returnObjects: true });
  const principles = t("about.principles.items", { returnObjects: true });
  const intelligence = t("about.intelligence.items", { returnObjects: true });
  const assessment = t("about.assessment.items", { returnObjects: true });

  useEffect(() => {
    window.dataLayer?.push({ event: "about_view" });
  }, []);

  return (
    <section id="about" className="section about-section" aria-labelledby="about-title">
      <div className="container split-layout about-intro">
        <div>
          <p className="eyebrow">{t("about.eyebrow", { defaultValue: "About VTHREE" })}</p>
          <Heading className="section-title" id="about-title">{t("about.title", { defaultValue: "Intelligence-led digital growth, built around practical execution." })}</Heading>
        </div>
        <div className="prose-large">
          <p>{t("about.p1")}</p>
          <p>{t("about.p2")}</p>
          <p>{t("about.p3")}</p>
        </div>
      </div>
      <div className="container about-grid">
        <section className="about-panel" aria-labelledby="about-audience-title">
          <p className="eyebrow">{t("about.audiences.eyebrow")}</p>
          <h2 id="about-audience-title">{t("about.audiences.title")}</h2>
          <p>{t("about.audiences.body")}</p>
          <ul>{Array.isArray(audiences) && audiences.map(item => <li key={item}>{item}</li>)}</ul>
        </section>
        <section className="about-panel" aria-labelledby="about-principles-title">
          <p className="eyebrow">{t("about.principles.eyebrow")}</p>
          <h2 id="about-principles-title">{t("about.principles.title")}</h2>
          <ul className="principle-grid">{Array.isArray(principles) && principles.map(item => <li key={item}>{item}</li>)}</ul>
        </section>
        <section className="about-panel" aria-labelledby="about-intelligence-title">
          <p className="eyebrow">{t("about.intelligence.eyebrow")}</p>
          <h2 id="about-intelligence-title">{t("about.intelligence.title")}</h2>
          <p>{t("about.intelligence.body")}</p>
          <ul>{Array.isArray(intelligence) && intelligence.map(item => <li key={item}>{item}</li>)}</ul>
        </section>
        <section className="about-panel" aria-labelledby="about-assessment-title">
          <p className="eyebrow">{t("about.assessment.eyebrow")}</p>
          <h2 id="about-assessment-title">{t("about.assessment.title")}</h2>
          <p>{t("about.assessment.body")}</p>
          <ul>{Array.isArray(assessment) && assessment.map(item => <li key={item}>{item}</li>)}</ul>
          <div className="cta">
            <Link className="btn" to="/contact" onClick={() => window.dataLayer?.push({ event: "assessment_start", source: "about_final_cta" })}>
              {t("nav.schedule", { defaultValue: "Start an Assessment" })}
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
}
