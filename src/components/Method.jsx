import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { MethodIcon } from "./VisualDiagrams.jsx";

const stages = ["discover", "assess", "design", "build", "launch", "optimize", "grow"];

export default function Method({ headingLevel = "h2" }) {
  const { t } = useTranslation();
  const Heading = headingLevel;
  const principles = t("method.principles.items", { returnObjects: true });
  const factors = t("method.assessment.factors", { returnObjects: true });

  useEffect(() => {
    window.dataLayer?.push({ event: "method_view" });
  }, []);

  const trackStage = (stage) => (event) => {
    if (event.currentTarget.open) {
      window.dataLayer?.push({ event: "method_stage_expand", stage, source: "method_stage" });
    }
  };

  return (
    <section id="method" className="section method-section" aria-labelledby="method-title">
      <div className="container">
        <p className="eyebrow">{t("method.eyebrow", { defaultValue: "The VTHREE Method" })}</p>
        <Heading className="section-title" id="method-title">{t("method.title", { defaultValue: "A practical path from uncertainty to coordinated action." })}</Heading>
        <p className="sub section-intro">{t("method.subtitle", { defaultValue: "The Method is a flexible operating model for understanding the situation, shaping recommendations, implementing the right work, and improving after launch." })}</p>
        <div className="method-context" aria-labelledby="method-context-title">
          <div>
            <h2 id="method-context-title">{t("method.principles.title")}</h2>
            <p>{t("method.principles.body")}</p>
          </div>
          <ul>{Array.isArray(principles) && principles.map(item => <li key={item}>{item}</li>)}</ul>
        </div>
        <ol className="method-grid method-visual">
          {stages.map((stage, index) => (
            <li key={stage} className="method-card">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span className={`method-symbol method-symbol-${index + 1}`} aria-hidden="true"><MethodIcon type={index + 1} /></span>
              <h3>{t(`method.stages.${stage}.title`)}</h3>
              <p>{t(`method.stages.${stage}.desc`)}</p>
              <details className="method-details" onToggle={trackStage(stage)}>
                <summary>{t("method.stageDetailsLabel")}</summary>
                <dl>
                  <div><dt>{t("method.labels.purpose")}</dt><dd>{t(`method.stages.${stage}.purpose`)}</dd></div>
                  <div><dt>{t("method.labels.involvement")}</dt><dd>{t(`method.stages.${stage}.involvement`)}</dd></div>
                </dl>
              </details>
            </li>
          ))}
        </ol>
        <p className="method-loop" aria-label={stages.map(stage => t(`method.stages.${stage}.title`)).join(", ")}>
          {stages.map(stage => t(`method.stages.${stage}.title`)).join(" → ")}
        </p>
        <section className="method-assessment" aria-labelledby="method-assessment-title">
          <div>
            <p className="eyebrow">{t("method.assessment.eyebrow")}</p>
            <h2 id="method-assessment-title">{t("method.assessment.title")}</h2>
          </div>
          <div>
            <p>{t("method.assessment.body")}</p>
            <ul>{Array.isArray(factors) && factors.map(item => <li key={item}>{item}</li>)}</ul>
          </div>
        </section>
        <div className="cta">
          <Link className="btn" to="/contact" onClick={() => window.dataLayer?.push({ event: "assessment_start", source: "method_final_cta" })}>
            {t("nav.schedule", { defaultValue: "Start an Assessment" })}
          </Link>
        </div>
      </div>
    </section>
  );
}
