import { useTranslation } from "react-i18next";

export default function Industries() {
  const { t } = useTranslation();
  const items = t("industries.items", { returnObjects: true });
  return <section className="section industries" aria-labelledby="industries-title"><div className="container">
    <p className="eyebrow">{t("industries.eyebrow")}</p><h2 id="industries-title">{t("industries.title")}</h2>
    <p className="sub section-intro">{t("industries.subtitle")}</p>
    <div className="industry-list">{Array.isArray(items) && items.map(item => <span key={item}>{item}</span>)}</div>
  </div></section>;
}
