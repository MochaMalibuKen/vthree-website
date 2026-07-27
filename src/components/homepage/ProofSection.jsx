import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ProofSection() {
  const { t } = useTranslation();
  const slots = t("homepage.proof.slots", { returnObjects: true });
  return <section id="proof" className="section home-proof" aria-labelledby="home-proof-title">
    <div className="container">
      <p className="eyebrow">{t("homepage.proof.eyebrow")}</p>
      <h2 id="home-proof-title">{t("homepage.proof.title")}</h2>
      <div className="home-proof-grid">
        {Array.isArray(slots) && slots.map(slot => <article className="home-proof-card" key={slot.title}>
          <div className="home-proof-media" role="img" aria-label={slot.imageStatus}>
            <span aria-hidden="true">{slot.imageMark}</span>
          </div>
          <span className="home-status">{slot.status}</span>
          <h3>{slot.title}</h3>
          <dl>
            <div><dt>{t("homepage.proof.contextLabel")}</dt><dd>{slot.context}</dd></div>
            <div><dt>{t("homepage.proof.problemLabel")}</dt><dd>{slot.problem}</dd></div>
            <div><dt>{t("homepage.proof.decisionLabel")}</dt><dd>{slot.decision}</dd></div>
            <div><dt>{t("homepage.proof.implementationLabel")}</dt><dd>{slot.implementation}</dd></div>
            <div><dt>{t("homepage.proof.evidenceLabel")}</dt><dd>{slot.evidence}</dd></div>
          </dl>
          <p className="home-proof-cta-status">{slot.ctaStatus}</p>
        </article>)}
      </div>
      <Link className="text-link home-section-link" to="/work">{t("homepage.proof.cta")} <span aria-hidden="true">→</span></Link>
    </div>
  </section>;
}
