import { useTranslation } from "react-i18next";

export default function Labs() {
  const { t } = useTranslation();
  const areas = t("labs.areas", { returnObjects: true });
  return <section id="labs" className="section labs-section" aria-labelledby="labs-title"><div className="container labs-layout">
    <div><p className="eyebrow">{t("labs.eyebrow")}</p><h2 id="labs-title">{t("labs.title")}</h2><p className="labs-lead">{t("labs.lead")}</p></div>
    <div><p>{t("labs.body")}</p><p>{t("labs.goal")}</p><div className="tag-cloud">{Array.isArray(areas) && areas.map(area => <span key={area}>{area}</span>)}</div></div>
  </div></section>;
}
