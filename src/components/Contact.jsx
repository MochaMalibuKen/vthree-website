import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const assessmentFormUrl = "https://forms.cloud.microsoft/r/hd6SU1zJH5";
const assessmentEmbedUrl = `${assessmentFormUrl}?embed=true`;
const bookingUrl = "https://outlook.office.com/bookwithme/user/9059ca4a223d40a8926101d527c1d068@vthreeagency.com?anonymous&ismsaljsauthenabled&ep=plink";

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
      <div className="assessment-embed" aria-labelledby="assessment-form-title">
        <h3 id="assessment-form-title">{t("contact.formTitle")}</h3>
        <iframe
          title={t("contact.formTitle")}
          src={assessmentEmbedUrl}
          width="640"
          height="720"
          loading="lazy"
          allowFullScreen
        />
      </div>
      <a
        className="btn assessment-external-link"
        href={assessmentFormUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => window.dataLayer?.push({ event: "assessment_start", source: "contact_external_form" })}
      >
        {t("contact.formFallbackCta")}
      </a>
      <div className="assessment-scheduling">
        <h3>{t("contact.bookingTitle")}</h3>
        <p>{t("contact.bookingBody")}</p>
        <a
          className="btn outline assessment-external-link"
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => window.dataLayer?.push({ event: "assessment_schedule", source: "contact_booking" })}
        >
          {t("contact.bookingCta")}
        </a>
      </div>
      <p className="fine-print">{t("contact.dataNotice")}</p>
      <Link className="text-link" to="/privacy">{t("contact.privacyCta")} <span aria-hidden="true">→</span></Link>
    </div>
  </div></section>;
}
