import { useTranslation } from "react-i18next";

export default function Insights() {
  const { t } = useTranslation();
  const topics = t("insights.topics", { returnObjects: true });
  return <section id="insights" className="section insights-section" aria-labelledby="insights-title"><div className="container">
    <p className="eyebrow">{t("insights.eyebrow")}</p><h2 id="insights-title">{t("insights.title")}</h2><p className="sub section-intro">{t("insights.subtitle")}</p>
    <div className="grid insight-grid">{Array.isArray(topics) && topics.map((topic, i) => <article className="insight-card" key={topic.title}><span>0{i+1}</span><p className="tag">{t("insights.label")}</p><h3>{topic.title}</h3><p>{topic.desc}</p></article>)}</div>
  </div></section>;
}
