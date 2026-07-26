import { useTranslation } from "react-i18next";

export default function About({ headingLevel = "h2" }) {
  const { t } = useTranslation();
  const Heading = headingLevel;
  return (
    <section id="about" className="section about-section" aria-labelledby="about-title">
      <div className="container split-layout">
        <div>
          <p className="eyebrow">{t("about.eyebrow", { defaultValue: "About VTHREE" })}</p>
          <Heading className="section-title" id="about-title">{t("about.title", { defaultValue: "Strategy and technology, organized around outcomes." })}</Heading>
        </div>
        <div className="prose-large">
          <p>{t("about.p1")}</p><p>{t("about.p2")}</p><p>{t("about.p3")}</p>
          <div className="principle-grid">
            <span>{t("about.principles.systems")}</span><span>{t("about.principles.clarity")}</span><span>{t("about.principles.measure")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
