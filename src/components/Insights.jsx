import { useTranslation } from "react-i18next";

export default function Insights({ headingLevel = "h2" }) {
  const { t } = useTranslation();
  const topics = t("insights.topics", { returnObjects: true });
  const Heading = headingLevel;
  return <section id="insights" className="section insights-section" aria-labelledby="insights-title"><div className="container">
    <p className="eyebrow">{t("insights.eyebrow")}</p><Heading className="section-title" id="insights-title">{t("insights.title")}</Heading><p className="sub section-intro">{t("insights.subtitle")}</p>
    <div className="grid insight-grid">{Array.isArray(topics) && topics.map((topic, i) => <article className="insight-card" key={topic.title}><span>0{i+1}</span><p className="tag">{t("insights.label")}</p><h3>{topic.title}</h3><p>{topic.desc}</p></article>)}</div>
  </div></section>;
}
