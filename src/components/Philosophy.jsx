import { useTranslation } from "react-i18next";

export default function Philosophy({ headingLevel = "h2" }) {
  const { t } = useTranslation();
  const Heading = headingLevel;
  return (
    <section className="section philosophy" aria-labelledby="philosophy-title">
      <div className="container split-layout">
        <div>
          <p className="eyebrow">{t("philosophy.eyebrow", { defaultValue: "The operating philosophy" })}</p>
          <Heading className="section-title" id="philosophy-title">{t("philosophy.title", { defaultValue: "Marketing should be engineered—not improvised." })}</Heading>
        </div>
        <div className="prose-large">
          <p>{t("philosophy.p1", { defaultValue: "Businesses often purchase websites, social media management, advertising, automation, and analytics as disconnected services. VTHREE designs them as one coordinated system, where each component supports the next." })}</p>
          <p>{t("philosophy.p2", { defaultValue: "We study the audience, design the structure, build the assets, connect the technology, measure performance, and improve the system over time." })}</p>
          <strong className="closing-line">{t("philosophy.close", { defaultValue: "That is Digital Architecture." })}</strong>
        </div>
      </div>
    </section>
  );
}
