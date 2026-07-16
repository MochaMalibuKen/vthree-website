import { useTranslation } from "react-i18next";
import { MethodIcon } from "./VisualDiagrams.jsx";

const stages = ["observe", "research", "architect", "build", "measure", "evolve"];

export default function Method() {
  const { t } = useTranslation();
  return (
    <section id="method" className="section method-section" aria-labelledby="method-title">
      <div className="container">
        <p className="eyebrow">{t("method.eyebrow", { defaultValue: "The VTHREE Method" })}</p>
        <h2 id="method-title">{t("method.title", { defaultValue: "A system for moving from signal to outcome." })}</h2>
        <p className="sub">{t("method.subtitle", { defaultValue: "Every engagement follows a disciplined loop. Each result informs what comes next." })}</p>
        <ol className="method-grid method-visual">
          {stages.map((stage, index) => (
            <li key={stage} tabIndex={0}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span className={`method-symbol method-symbol-${index + 1}`} aria-hidden="true"><MethodIcon type={index + 1} /></span>
              <h3>{t(`method.stages.${stage}.title`)}</h3>
              <p>{t(`method.stages.${stage}.desc`)}</p>
            </li>
          ))}
        </ol>
        <p className="method-loop" aria-label={stages.map(stage => t(`method.stages.${stage}.title`)).join(", ")}>
          {stages.map(stage => t(`method.stages.${stage}.title`)).join(" → ")}
        </p>
      </div>
    </section>
  );
}
