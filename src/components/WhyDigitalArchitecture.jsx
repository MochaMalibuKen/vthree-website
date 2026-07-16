import { useTranslation } from "react-i18next";
import { ComparisonDiagram } from "./VisualDiagrams.jsx";

const disconnected = ["website", "social", "analytics", "automation", "reporting"];
const connected = ["everything", "research", "strategy", "creative", "technology", "decisions"];

export default function WhyDigitalArchitecture() {
  const { t } = useTranslation();
  return (
    <section className="section why-section" aria-labelledby="why-title">
      <div className="container">
        <p className="eyebrow">{t("why.eyebrow", { defaultValue: "The difference" })}</p>
        <h2 id="why-title">{t("why.title", { defaultValue: "Why Digital Architecture?" })}</h2>
        <p className="sub section-intro">{t("why.subtitle", { defaultValue: "The value is not another service. It is the connection between every service." })}</p>
        <div className="architecture-comparison">
          <article className="comparison-side disconnected-side">
            <header><span className="status-dot" /> <h3>{t("why.disconnected.title", { defaultValue: "Disconnected Marketing" })}</h3></header>
            <ComparisonDiagram />
            <ul>{disconnected.map(key => <li key={key}>{t(`why.disconnected.items.${key}`)}</li>)}</ul>
            <strong>{t("why.disconnected.outcome", { defaultValue: "More activity. Less clarity." })}</strong>
          </article>
          <div className="comparison-shift" aria-hidden="true"><span>→</span></div>
          <article className="comparison-side connected-side">
            <header><span className="status-dot" /> <h3>{t("why.connected.title", { defaultValue: "Digital Architecture" })}</h3></header>
            <ComparisonDiagram connected />
            <ul>{connected.map(key => <li key={key}>{t(`why.connected.items.${key}`)}</li>)}</ul>
            <strong>{t("why.connected.outcome", { defaultValue: "One system. Clearer decisions." })}</strong>
          </article>
        </div>
      </div>
    </section>
  );
}
