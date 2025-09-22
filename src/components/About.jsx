import { useTranslation } from "react-i18next";

export default function About(){
  const { t } = useTranslation();

  const fallbackPoints = [
    { label: "Core",    value: "HTML, CSS (Flex/Grid), JS (ES2023), React" },
    { label: "Quality", value: "a11y, Lighthouse audits, SEO basics" },
    { label: "Tools",   value: "Vite, GitHub, Netlify/Vercel, Figma" }
  ];
  const points = t("about.list", { returnObjects: true }) || fallbackPoints;

  return (
    <section id="about" className="section">
      <div className="container">
        <h2>{t("about.title", { defaultValue: "About" })}</h2>
        <p style={{ fontSize: "1.05rem", lineHeight: 1.65, opacity: 0.95, maxWidth: 820 }}>
          {t("about.lead", {
            defaultValue:
              "I’m Kenni—developer and problem-solver. I help small businesses launch sites that are fast, easy to update, and built to convert. I use semantic HTML, modern CSS, accessible JavaScript, and React for interactive experiences."
          })}
        </p>
        <ul style={{ marginTop: "1rem" }}>
          {points.map((p, i) => (
            <li key={i} style={{ marginBottom: ".35rem" }}>
              <strong>{p.label}:</strong> {p.value}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}