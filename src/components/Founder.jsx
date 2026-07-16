import { useTranslation } from "react-i18next";

export default function Founder() {
  const { t } = useTranslation();
  const strengths = t("founder.strengths", { returnObjects: true });
  return <section className="section founder-section" aria-labelledby="founder-title"><div className="container founder-card">
    <div><p className="eyebrow">{t("founder.eyebrow")}</p><h2 id="founder-title">Kennieth D. Allen</h2><p className="founder-role">{t("founder.role")}</p></div>
    <div><p>{t("founder.bio")}</p><ul className="compact-list">{Array.isArray(strengths) && strengths.map(item => <li key={item}>{item}</li>)}</ul></div>
  </div></section>;
}
