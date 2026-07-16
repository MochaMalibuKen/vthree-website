import { useTranslation } from "react-i18next";
import { DecisionDiagram } from "./VisualDiagrams.jsx";

export default function TechnicalProjects() {
  const { t } = useTranslation();
  const systems = t("technical.systems", { returnObjects: true });
  const project = t("technical.project.items", { returnObjects: true });
  return <section id="technical-projects" className="section technical-section" aria-labelledby="technical-title"><div className="container">
    <p className="eyebrow">{t("technical.eyebrow")}</p><h2 id="technical-title">{t("technical.title")}</h2><p className="sub section-intro">{t("technical.subtitle")}</p>
    <div className="decision-flow" aria-label={t("visual.flowLabel", { defaultValue: "Activity becomes evidence, and evidence informs the next decision" })}>
      <DecisionDiagram />
      <div className="decision-labels"><span>{t("visual.activity", { defaultValue: "Activity" })}</span><span>{t("visual.evidence", { defaultValue: "Evidence" })}</span><span>{t("visual.decision", { defaultValue: "Next decision" })}</span></div>
    </div>
    <div className="technical-layout"><div className="system-list">{Array.isArray(systems) && systems.map((item, i) => <span key={item}><small>{String(i+1).padStart(2,"0")}</small>{item}</span>)}</div>
    <article className="card evidence-card"><p className="tag">{t("technical.project.label")}</p><h3>{t("technical.project.title")}</h3><p>{t("technical.project.body")}</p><ul>{Array.isArray(project) && project.map(item => <li key={item}>{item}</li>)}</ul><p className="fine-print">{t("technical.project.note")}</p></article></div>
  </div></section>;
}
