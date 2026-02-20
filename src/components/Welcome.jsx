import { useTranslation } from "react-i18next";

export default function Welcome() {
  const { t } = useTranslation();

  return (
    <section id="welcome" className="section">
      <div className="container">
        <h2>{t("welcome.title", { defaultValue: "Strategic Digital Infrastructure for Growth-Focused Teams" })}</h2>
        <p className="muted">
          {t("welcome.subtitle", { defaultValue: "We engineer revenue infrastructure for businesses that value execution over noise." })}
        </p>
      </div>
    </section>
  );
}
