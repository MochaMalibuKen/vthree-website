import { useState } from "react";
import { useTranslation } from "react-i18next";

const FORM_ENDPOINT = "https://formspree.io/f/xdkdqdjp";
const projectTypes = ["website", "campaign", "social", "creative", "automation", "analytics", "communications", "media", "translation", "technical", "unsure"];

export default function Contact({ headingLevel = "h2" }) {
  const { t } = useTranslation();
  const [status, setStatus] = useState("idle");
  const [msg, setMsg] = useState("");
  const Heading = headingLevel;
  async function handleSubmit(e) {
    e.preventDefault(); const formEl = e.currentTarget;
    if (!formEl.reportValidity()) return;
    setStatus("sending"); setMsg("");
    if (formEl.elements.honey?.value) { setStatus("success"); setMsg(t("contact.status.success")); formEl.reset(); return; }
    const formData = new FormData(formEl);
    formData.set("_subject", "New strategic review request from vthreeagency.com"); formData.set("_replyto", formEl.elements.email.value); formData.set("site", "vthreeagency.com");
    try {
      const res = await fetch(FORM_ENDPOINT, { method: "POST", headers: { Accept: "application/json" }, body: formData });
      let body = {}; try { body = await res.json(); } catch { /* Formspree may return an empty response. */ }
      if (res.ok) { setStatus("success"); setMsg(t("contact.status.success")); formEl.reset(); window.dataLayer?.push({ event: "form_submit", form_name: "strategic_review" }); }
      else { setStatus("error"); setMsg(body?.errors?.[0]?.message || t("contact.status.error")); }
    } catch { setStatus("error"); setMsg(t("contact.status.error")); }
  }
  const sending = status === "sending";
  return <section id="contact" className="section contact-section" aria-labelledby="contact-title"><div className="container contact-layout">
    <div><p className="eyebrow">{t("contact.eyebrow")}</p><Heading className="section-title" id="contact-title">{t("contact.title")}</Heading><p className="contact-lead">{t("contact.subtitle")}</p><div className="contact-prompt"><span>{t("contact.promptLabel")}</span><p>{t("contact.prompt")}</p></div></div>
    <form onSubmit={handleSubmit} className="contact-form">
      <input type="text" name="honey" autoComplete="off" tabIndex="-1" aria-hidden="true" className="honeypot" />
      <div className="field-grid"><label>{t("contact.labels.name")}<input name="name" required autoComplete="name" /></label><label>{t("contact.labels.email")}<input name="email" type="email" required autoComplete="email" /></label></div>
      <div className="field-grid"><label>{t("contact.labels.organization")}<input name="organization" autoComplete="organization" /></label><label>{t("contact.labels.website")}<input name="website" type="url" placeholder="https://" inputMode="url" /></label></div>
      <div className="field-grid"><label>{t("contact.labels.need")}<input name="primary_need" required /></label><label>{t("contact.labels.projectType")}<select name="project_type" required defaultValue=""><option value="" disabled>{t("contact.select")}</option>{projectTypes.map(key => <option value={key} key={key}>{t(`contact.projectTypes.${key}`)}</option>)}</select></label></div>
      <label>{t("contact.labels.timeline")}<select name="timeline" defaultValue=""><option value="">{t("contact.timeline.flexible")}</option><option value="2-4-weeks">{t("contact.timeline.soon")}</option><option value="1-3-months">{t("contact.timeline.quarter")}</option><option value="3-plus-months">{t("contact.timeline.later")}</option></select></label>
      <label>{t("contact.labels.message")}<textarea name="message" rows="5" required placeholder={t("contact.placeholders.message")} /></label>
      <label className="consent"><input type="checkbox" name="consent" required /><span>{t("contact.consent")}</span></label>
      <div className="form-actions"><button className="btn" type="submit" disabled={sending} aria-busy={sending}>{sending ? t("contact.sending") : t("contact.cta")}</button>{msg && <span role={status === "error" ? "alert" : "status"} aria-live={status === "error" ? "assertive" : "polite"} className={status}>{msg}</span>}</div>
    </form>
  </div></section>;
}
