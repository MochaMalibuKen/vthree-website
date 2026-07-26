import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { caseStudies } from "../content/cases.js";

export default function CaseStudies() {
  const { t } = useTranslation();
  const labels = t("cases.labels", { returnObjects: true });
  return <section id="case-studies" className="section work-section" aria-labelledby="work-title"><div className="container">
    <p className="eyebrow">{t("cases.eyebrow")}</p><h2 id="work-title">{t("cases.title")}</h2><p className="sub section-intro">{t("cases.subtitle")}</p>
    <div className="case-list">{caseStudies.map((study, index) => <article className="case-study" key={study.title}>
      <div className="case-heading"><span className="case-number">0{index + 1}</span><div><p className="tag">{study.category}</p><h3>{study.title}</h3></div></div>
      <details className="case-details">
        <summary><span>{t("visual.reviewEvidence", { defaultValue: "Review evidence" })}</span><i aria-hidden="true">+</i></summary>
      <div className="case-content">
        <div><h4>{labels.challenge}</h4><p>{study.challenge}</p><h4>{labels.diagnosis}</h4><p>{study.diagnosis}</p><h4>{labels.solution}</h4><p>{study.solution}</p></div>
        <div><h4>{labels.deliverables}</h4><ul>{study.deliverables.map(x => <li key={x}>{x}</li>)}</ul><h4>{labels.outcomes}</h4><ul>{study.outcomes.map(x => <li key={x}>{x}</li>)}</ul></div>
        <div><h4>{labels.capabilities}</h4><div>{study.capabilities.map(x => <span className="tag" key={x}>{x}</span>)}</div><h4>{labels.future}</h4><p>{study.future}</p><p><Link className="text-link" to={`/work/${study.slug}`}>{t("visual.reviewEvidence", { defaultValue: "Review evidence" })} <span aria-hidden="true">→</span></Link></p><a href={study.link} target="_blank" rel="noreferrer" className="text-link" onClick={() => window.dataLayer?.push({ event: "case_study_click", case_study: study.title })}>{t("cases.cta")} <span aria-hidden="true">↗</span></a></div>
      </div>
      </details>
      <span className="metric-field" data-status="awaiting-verification" hidden>Verified metrics field reserved</span>
    </article>)}</div>
    <aside className="future-case" aria-label={t("cases.futureTemplate.label")}><p className="eyebrow">{t("cases.futureTemplate.eyebrow")}</p><h3>{t("cases.futureTemplate.title")}</h3><p>{t("cases.futureTemplate.body")}</p><span>{t("cases.futureTemplate.status")}</span></aside>
  </div></section>;
}
