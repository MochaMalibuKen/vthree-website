import { useTranslation } from "react-i18next";
import { pricingContent } from "../pricingContent.js";

const planKeys = ["launch", "growth", "commerce"];
const serviceKeys = ["digital", "creative", "marketing", "business", "automation", "ai"];
const partnershipKeys = ["essential", "growth", "strategic"];

export default function CorporatePricing() {
  const { i18n } = useTranslation();
  const language = i18n.language?.startsWith("es") ? "es" : "en";
  const content = pricingContent[language];

  return (
    <section id="corporate-pricing" className="section pricing-section" aria-labelledby="pricing-title">
      <div className="container pricing-intro">
        <p className="eyebrow">{content.eyebrow}</p>
        <h2 id="pricing-title">{content.title}</h2>
        <p className="sub section-intro">{content.subtitle}</p>
        <div className="pricing-principle"><span>{content.principleLabel}</span><p>{content.principle}</p></div>
      </div>

      <div className="container pricing-grid">
        {planKeys.map((key, index) => {
          const plan = content.plans[key];
          return <article key={key} className={`card price-card price-card-${index + 1}`}>
            <div className="package-heading"><span>0{index + 1}</span><p>{plan.bestForLabel}</p></div>
            <h3>{plan.title}</h3>
            <p className="price"><small>{content.starting}</small>{plan.price}</p>
            <p className="package-purpose">{plan.purpose}</p>
            <div className="audience-tags">{plan.audiences.map(item => <span key={item}>{item}</span>)}</div>
            <details className="package-details">
              <summary>{content.deliverablesLabel}<i aria-hidden="true">+</i></summary>
              <ul>{plan.deliverables.map(item => <li key={item}>{item}</li>)}</ul>
            </details>
            {plan.addons && <details className="package-details package-addons">
              <summary>{content.addonsLabel}<i aria-hidden="true">+</i></summary>
              <ul>{plan.addons.map(item => <li key={item}>{item}</li>)}</ul>
            </details>}
            <a className="btn package-cta" href="#schedule-review" onClick={() => window.dataLayer?.push({ event: "cta_click", cta: `pricing_${key}` })}>{content.cta}</a>
          </article>;
        })}
      </div>
      <p className="container fine-print pricing-note">{content.note}</p>

      <div className="pricing-band strategic-services">
        <div className="container">
          <p className="eyebrow">{content.services.eyebrow}</p><h2>{content.services.title}</h2><p className="sub section-intro">{content.services.subtitle}</p>
          <div className="strategic-grid">{serviceKeys.map((key, index) => {
            const service = content.services.items[key];
            return <article key={key} className="strategic-card"><span className="card-index">0{index + 1}</span><h3>{service.title}</h3><p>{service.outcome}</p><ul>{service.items.map(item => <li key={item}>{item}</li>)}</ul><strong>{content.services.scope}</strong></article>;
          })}</div>
        </div>
      </div>

      <div className="container partnership-section">
        <p className="eyebrow">{content.partnerships.eyebrow}</p><h2>{content.partnerships.title}</h2><p className="sub section-intro">{content.partnerships.subtitle}</p>
        <div className="partnership-grid">{partnershipKeys.map((key, index) => {
          const partnership = content.partnerships.items[key];
          return <article key={key} className="partnership-card"><span>0{index + 1}</span><h3>{partnership.title}</h3><p>{partnership.purpose}</p><ul>{partnership.items.map(item => <li key={item}>{item}</li>)}</ul></article>;
        })}</div>
        <p className="partnership-note">{content.partnerships.note}</p>
      </div>

      <div className="pricing-band discovery-section">
        <div className="container">
          <p className="eyebrow">{content.discovery.eyebrow}</p><h2>{content.discovery.title}</h2><p className="sub section-intro">{content.discovery.subtitle}</p>
          <ol className="discovery-timeline">{content.discovery.steps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong></li>)}</ol>
        </div>
      </div>

      <div className="container pricing-faq">
        <p className="eyebrow">{content.faq.eyebrow}</p><h2>{content.faq.title}</h2>
        <div className="faq-list">{content.faq.items.map(item => <details key={item.q}><summary>{item.q}<i aria-hidden="true">+</i></summary><p>{item.a}</p></details>)}</div>
      </div>

      <div id="schedule-review" className="container scheduling-section">
        <div className="scheduling-copy"><p className="eyebrow">{content.scheduling.eyebrow}</p><h2>{content.scheduling.title}</h2><p>{content.scheduling.copy}</p><a className="btn" href="#contact">{content.scheduling.cta}</a></div>
        <div className="bookings-placeholder" aria-label={content.scheduling.placeholderLabel}>
          {/* Microsoft Bookings embed will be inserted inside this container. */}
          <div className="booking-calendar" aria-hidden="true"><span /><span /><span /><span /><span /><span /><span /><span /><span /></div>
          <strong>{content.scheduling.placeholderTitle}</strong><p>{content.scheduling.placeholderNote}</p>
        </div>
      </div>

      <div className="container trust-section" aria-labelledby="trust-title">
        <p className="eyebrow">{content.trust.eyebrow}</p><h2 id="trust-title">{content.trust.title}</h2>
        <div className="trust-grid">{content.trust.items.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</div>)}</div>
        <div className="pricing-final-cta"><p>{content.finalCta.copy}</p><a className="btn" href="#contact">{content.finalCta.cta}</a></div>
      </div>
    </section>
  );
}
