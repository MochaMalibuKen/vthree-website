import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { CapabilityBlueprint } from "./VisualDiagrams.jsx";

const capabilityKeys = ["strategy", "brand", "platforms", "content", "systems"];

export default function Services({ headingLevel = "h2" }) {
  const { t } = useTranslation();
  const Heading = headingLevel;
  const engagementSteps = t("capabilities.engagement.items", { returnObjects: true });

  useEffect(() => {
    window.dataLayer?.push({ event: "services_view" });
  }, []);

  const trackCapability = (key) => (event) => {
    if (event.currentTarget.open) {
      window.dataLayer?.push({ event: "service_capability_engage", capability: key, source: "services_capability" });
    }
  };

  return (
    <section id="services" className="section services" aria-labelledby="capabilities-title">
      <div className="container">
        <p className="eyebrow">{t("capabilities.eyebrow", { defaultValue: "Intelligence-led digital growth partner" })}</p>
        <Heading className="section-title" id="capabilities-title">{t("capabilities.title", { defaultValue: "Five connected capabilities shaped around the situation." })}</Heading>
        <p className="sub section-intro">{t("capabilities.subtitle", { defaultValue: "VTHREE combines research, strategy, creative production, digital platforms, and connected operating systems to help organizations make better decisions and execute more effectively." })}</p>
        <p className="section-intro services-model">{t("capabilities.model")}</p>
        <div className="system-map" aria-label={t("visual.capabilitiesLabel", { defaultValue: "Five capabilities connected through one coordinated system" })}>
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
                <p className="card-note">{t(`capabilities.groups.${key}.problem`)}</p>
                <details className="capability-details" onToggle={trackCapability(key)}><summary>{t("visual.exploreCapability", { defaultValue: "Representative services" })}</summary><ul>{Array.isArray(items) && items.map(item => <li key={item}>{item}</li>)}</ul></details>
              </article>
            );
          })}
        </div>
        <section className="services-engagement" aria-labelledby="services-engagement-title">
          <div>
            <p className="eyebrow">{t("capabilities.engagement.eyebrow")}</p>
            <h2 id="services-engagement-title">{t("capabilities.engagement.title")}</h2>
          </div>
          <div>
            <p>{t("capabilities.engagement.body")}</p>
            <ul>{Array.isArray(engagementSteps) && engagementSteps.map(item => <li key={item}>{item}</li>)}</ul>
          </div>
        </section>
        <div className="cta">
          <Link className="btn" to="/contact" onClick={() => window.dataLayer?.push({ event: "assessment_start", source: "services_final_cta" })}>
            {t("nav.schedule", { defaultValue: "Start an Assessment" })}
          </Link>
        </div>
      </div>
    </section>
  );
}
