import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { publicCaseStudies } from "../content/cases.js";

function PublicCaseCard({ study, labels, t }) {
  const displayTitle = study.displayName || study.title;
  const image = study.images[0];

  return <article className="case-study">
    {image
      ? <img className="case-media" src={image.src} alt={image.alt} loading="lazy" decoding="async" />
      : <div className="case-media-placeholder" role="img" aria-label={t("cases.imagePlaceholder")}><span aria-hidden="true">V3</span></div>}
    <div className="case-public-heading">
      <div>
        {study.industry && <p className="tag">{study.industry}</p>}
        <h2>{displayTitle}</h2>
        {study.clientName && <p className="case-client">{study.clientName}</p>}
      </div>
    </div>
    {study.summary && <p className="case-summary">{study.summary}</p>}
    <div className="case-content">
      {(study.problem || study.approach || study.solution) && <div>
        {study.problem && <><h3>{labels.problem}</h3><p>{study.problem}</p></>}
        {study.approach && <><h3>{labels.approach}</h3><p>{study.approach}</p></>}
        {study.solution && <><h3>{labels.solution}</h3><p>{study.solution}</p></>}
      </div>}
      {(study.outcomes.length > 0 || study.metrics.length > 0) && <div>
        {study.outcomes.length > 0 && <><h3>{labels.outcomes}</h3><ul>{study.outcomes.map(item => <li key={item}>{item}</li>)}</ul></>}
        {study.metrics.length > 0 && <><h3>{labels.metrics}</h3><ul>{study.metrics.map(item => <li key={item.label || item}>{item.label ? `${item.label}: ${item.value}` : item}</li>)}</ul></>}
      </div>}
      <div>
        {study.serviceCategories.length > 0 && <><h3>{labels.services}</h3><div>{study.serviceCategories.map(item => <span className="tag" key={item}>{item}</span>)}</div></>}
        <p><Link className="text-link" to={`/work/${study.slug}`} onClick={() => window.dataLayer?.push({ event: "work_case_open", case_id: study.id })}>{t("cases.detailCta")} <span aria-hidden="true">→</span></Link></p>
        {study.externalLink && <a href={study.externalLink} target="_blank" rel="noreferrer" className="text-link" onClick={() => window.dataLayer?.push({ event: "work_external_link", case_id: study.id })}>{t("cases.externalCta")} <span aria-hidden="true">↗</span></a>}
      </div>
    </div>
    {study.testimonial && <blockquote><p>{study.testimonial}</p><cite>{study.quoteAttribution}</cite></blockquote>}
  </article>;
}

export default function CaseStudies({ headingLevel = "h2" }) {
  const { t } = useTranslation();
  const labels = t("cases.labels", { returnObjects: true });
  const Heading = headingLevel;
  const hasPublicCases = publicCaseStudies.length > 0;

  return <section id="case-studies" className="section work-section" aria-labelledby="work-title"><div className="container">
    <p className="eyebrow">{t("cases.eyebrow")}</p>
    <Heading className="section-title" id="work-title">{t("cases.title")}</Heading>
    <p className="sub section-intro work-proof-standard">{t("cases.standard")}</p>

    {hasPublicCases
      ? <div className="case-list">{publicCaseStudies.map(study => <PublicCaseCard key={study.id} study={study} labels={labels} t={t} />)}</div>
      : <div className="work-empty-state">
        <h2>{t("cases.empty.title")}</h2>
        <p>{t("cases.empty.body")}</p>
      </div>}

    <div className="work-assessment-cta">
      <Link className="btn" to="/contact" onClick={() => window.dataLayer?.push({ event: "assessment_start", source: "work" })}>
        {t("cases.assessmentCta")}
      </Link>
    </div>
  </div></section>;
}
