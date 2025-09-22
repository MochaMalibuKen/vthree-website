import { useTranslation } from "react-i18next";

export default function Welcome() {
  const { t } = useTranslation();

  return (
    <section id="welcome" className="section">
      <div className="container">
        <h2>{t("welcome.title", { defaultValue: "Welcome to VThree Agency" })}</h2>
        <p className="muted">
          {t("welcome.subtitle", { defaultValue: "We build websites and provide digital consulting." })}
        </p>
      </div>
    </section>
  );
}