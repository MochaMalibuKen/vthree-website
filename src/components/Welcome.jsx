import { useTranslation } from "react-i18next";

export default function Welcome() {
  const { t } = useTranslation();

  return (
    <section id="welcome" className="signal-strip" aria-label={t("welcome.label", { defaultValue: "VTHREE positioning" })}>
      <div className="container">
        <span>{t("welcome.title", { defaultValue: "Digital Architect" })}</span>
        <strong>{t("welcome.subtitle", { defaultValue: "We architect digital systems that turn attention into measurable growth." })}</strong>
      </div>
    </section>
  );
}
