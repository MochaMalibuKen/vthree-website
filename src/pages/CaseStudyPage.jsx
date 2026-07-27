import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PageMeta from "../components/PageMeta.jsx";
import PageHero from "../components/PageHero.jsx";
import { findPublicCaseStudy } from "../content/cases.js";

export default function CaseStudyPage() {
  const { slug } = useParams();
  const { t } = useTranslation();
  const study = findPublicCaseStudy(slug);

  if (!study) {
    return <main>
      <PageMeta title={t("cases.unavailable.title")} description={t("cases.unavailable.body")} path="/work" noIndex />
      <PageHero eyebrow={t("cases.unavailable.eyebrow")} title={t("cases.unavailable.title")} lead={t("cases.unavailable.body")} />
      <div className="container page-back-link"><Link className="btn" to="/work">{t("cases.unavailable.cta")}</Link></div>
    </main>;
  }

  const labels = t("cases.labels", { returnObjects: true });
  const displayTitle = study.displayName || study.title;

  return <main>
    <PageMeta title={displayTitle} description={study.summary || t("cases.publishedDescription")} path={`/work/${study.slug}`} />
    <PageHero eyebrow={study.industry} title={displayTitle} lead={study.summary} />
    <section className="section case-detail-page"><div className="container">
      {study.logo && <img className="case-logo" src={study.logo.src} alt={study.logo.alt} />}
      {study.clientName && <p className="case-client">{study.clientName}</p>}
      {study.images.length > 0 && <div className="case-image-grid">{study.images.map(image => <img key={image.src} src={image.src} alt={image.alt} loading="lazy" decoding="async" />)}</div>}
      <div className="case-content">
        {(study.problem || study.approach || study.solution) && <div>
          {study.problem && <><h2>{labels.problem}</h2><p>{study.problem}</p></>}
          {study.approach && <><h2>{labels.approach}</h2><p>{study.approach}</p></>}
          {study.solution && <><h2>{labels.solution}</h2><p>{study.solution}</p></>}
        </div>}
        {(study.outcomes.length > 0 || study.metrics.length > 0) && <div>
          {study.outcomes.length > 0 && <><h2>{labels.outcomes}</h2><ul>{study.outcomes.map(item => <li key={item}>{item}</li>)}</ul></>}
          {study.metrics.length > 0 && <><h2>{labels.metrics}</h2><ul>{study.metrics.map(item => <li key={item.label || item}>{item.label ? `${item.label}: ${item.value}` : item}</li>)}</ul></>}
        </div>}
        <div>
          {study.serviceCategories.length > 0 && <><h2>{labels.services}</h2><div>{study.serviceCategories.map(item => <span className="tag" key={item}>{item}</span>)}</div></>}
          {study.completionDate && <p><strong>{labels.completed}:</strong> <time dateTime={study.completionDate}>{study.completionDate}</time></p>}
          {study.externalLink && <a className="text-link" href={study.externalLink} target="_blank" rel="noreferrer" onClick={() => window.dataLayer?.push({ event: "work_external_link", case_id: study.id })}>{t("cases.externalCta")} <span aria-hidden="true">↗</span></a>}
        </div>
      </div>
      {study.testimonial && <blockquote><p>{study.testimonial}</p><cite>{study.quoteAttribution}</cite></blockquote>}
    </div><div className="container page-back-link"><Link to="/work">← {t("nav.work")}</Link></div></section>
  </main>;
}
