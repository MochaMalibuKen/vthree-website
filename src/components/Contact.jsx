import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Contact({ headingLevel = "h2" }) {
  const { t } = useTranslation();
  const Heading = headingLevel;
  const expectations = t("contact.expectations.items", { returnObjects: true });
  return <section id="contact" className="section contact-section" aria-labelledby="contact-title"><div className="container contact-layout">
    <div><p className="eyebrow">{t("contact.eyebrow")}</p><Heading className="section-title" id="contact-title">{t("contact.title")}</Heading><p className="contact-lead">{t("contact.subtitle")}</p><div className="contact-prompt"><span>{t("contact.promptLabel")}</span><p>{t("contact.prompt")}</p></div></div>
    <div className="assessment-gate" aria-labelledby="assessment-gate-title">
      <p className="home-status">{t("contact.statusLabel")}</p>
      <h2 id="assessment-gate-title">{t("contact.statusTitle")}</h2>
      <p>{t("contact.statusBody")}</p>
      <div className="assessment-expectations">
        <h3>{t("contact.expectations.title")}</h3>
        <ul>{Array.isArray(expectations) && expectations.map(item => <li key={item}>{item}</li>)}</ul>
      </div>
      <p className="fine-print">{t("contact.dataNotice")}</p>
      <Link className="text-link" to="/privacy">{t("contact.privacyCta")} <span aria-hidden="true">→</span></Link>
    </div>
  </div></section>;
}
