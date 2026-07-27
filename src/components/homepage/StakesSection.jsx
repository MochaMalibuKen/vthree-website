import { useTranslation } from "react-i18next";

export default function StakesSection() {
  const { t } = useTranslation();
  const consequences = t("homepage.stakes.consequences", { returnObjects: true });
  return <section className="section home-stakes" aria-labelledby="home-stakes-title">
    <div className="container home-stakes-layout">
      <div>
        <h2 id="home-stakes-title">{t("homepage.stakes.title")}</h2>
        <p className="home-qualification">{t("homepage.stakes.qualification")}</p>
      </div>
      <ul className="home-consequence-list">
        {Array.isArray(consequences) && consequences.map((item, index) => <li key={item}><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>{item}</li>)}
      </ul>
    </div>
  </section>;
}
