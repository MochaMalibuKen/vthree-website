import { useTranslation } from "react-i18next";
import { CapabilityBlueprint } from "./VisualDiagrams.jsx";

const capabilityKeys = ["digital", "creative", "intelligence", "automation", "analytics", "communications"];

export default function Services() {
  const { t } = useTranslation();
  return (
    <section id="services" className="section services" aria-labelledby="capabilities-title">
      <div className="container">
        <p className="eyebrow">{t("capabilities.eyebrow", { defaultValue: "Connected capabilities" })}</p>
        <h2 id="capabilities-title">{t("capabilities.title", { defaultValue: "One architecture. Six connected disciplines." })}</h2>
        <p className="sub section-intro">{t("capabilities.subtitle", { defaultValue: "VTHREE brings strategic, creative, technical, and analytical work into one operating plan—so each investment makes the others more useful." })}</p>
        <div className="system-map" aria-label={t("visual.capabilitiesLabel", { defaultValue: "Six capabilities connected through one coordinated system" })}>
          <CapabilityBlueprint />
          <div className="system-core"><span>{t("visual.capabilitiesCore", { defaultValue: "Coordinated system" })}</span><i aria-hidden="true" /></div>
          {capabilityKeys.map((key, index) => <div className={`system-node system-node-${index + 1}`} key={key}><span aria-hidden="true">0{index + 1}</span>{t(`capabilities.groups.${key}.title`)}</div>)}
        </div>
        <div className="grid capability-grid">
          {capabilityKeys.map((key, index) => {
            const items = t(`capabilities.groups.${key}.items`, { returnObjects: true });
            return (
              <article key={key} className="card capability-card">
                <span className="card-index">0{index + 1}</span>
                <h3>{t(`capabilities.groups.${key}.title`)}</h3>
                <p>{t(`capabilities.groups.${key}.desc`)}</p>
                <details className="capability-details"><summary>{t("visual.exploreCapability", { defaultValue: "Explore capability" })}</summary><ul>{Array.isArray(items) && items.map(item => <li key={item}>{item}</li>)}</ul></details>
                {key === "automation" && <p className="card-note">{t("capabilities.automationNote")}</p>}
                {key === "analytics" && <p className="card-note">{t("capabilities.analyticsNote")}</p>}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
