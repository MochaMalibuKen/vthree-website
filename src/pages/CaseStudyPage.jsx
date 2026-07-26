import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PageMeta from "../components/PageMeta.jsx";
import PageHero from "../components/PageHero.jsx";
import NotFoundPage from "./NotFoundPage.jsx";
import { findCaseStudy } from "../content/cases.js";

export default function CaseStudyPage() {
  const { slug } = useParams();
  const { t } = useTranslation();
  const study = findCaseStudy(slug);
  if (!study) return <NotFoundPage />;
  const labels = t("cases.labels", { returnObjects: true });
  return <main>
    <PageMeta title={study.title} description={study.challenge} path={`/work/${study.slug}`} noIndex />
    <PageHero eyebrow={study.category} title={study.title} lead={study.challenge} />
    <section className="section case-detail-page"><div className="container case-content">
      <div><h2>{labels.diagnosis}</h2><p>{study.diagnosis}</p><h2>{labels.solution}</h2><p>{study.solution}</p></div>
      <div><h2>{labels.deliverables}</h2><ul>{study.deliverables.map(item => <li key={item}>{item}</li>)}</ul><h2>{labels.outcomes}</h2><ul>{study.outcomes.map(item => <li key={item}>{item}</li>)}</ul></div>
      <div><h2>{labels.capabilities}</h2><div>{study.capabilities.map(item => <span className="tag" key={item}>{item}</span>)}</div><h2>{labels.future}</h2><p>{study.future}</p><a className="text-link" href={study.link} target="_blank" rel="noreferrer" aria-label={`${t("cases.cta")}: ${study.title}`}>{t("cases.cta")} <span aria-hidden="true">↗</span></a></div>
    </div><div className="container page-back-link"><Link to="/work">← {t("nav.work")}</Link></div></section>
  </main>;
}
