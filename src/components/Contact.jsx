// src/components/Contact.jsx
import { useState } from "react";
import { useTranslation } from "react-i18next";

const FORM_ENDPOINT = "https://formspree.io/f/xdkdqdjp"; // your real endpoint

export default function Contact() {
  const { t } = useTranslation();
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [msg, setMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setMsg("");

    const formEl = e.currentTarget; // keep a stable ref

    // Honeypot (leave empty)
    if (formEl.elements.honey?.value) {
      setStatus("success");
      setMsg(t("contact.status.success", { defaultValue: "Thanks! I’ll reply soon." }));
      formEl.reset();
      return;
    }

    const formData = new FormData(formEl);
    formData.set("_subject", "New lead from vthreeagency.com");
    formData.set("_replyto", formEl.elements.email.value);
    formData.set("site", "vthreeagency.com");

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData
      });

      let body = {};
      try { body = await res.json(); } catch {}

      if (import.meta.env.DEV) {
        console.log("Formspree response:", res.status, body);
      }

      if (res.ok) {
        setStatus("success");
        setMsg(t("contact.status.success", { defaultValue: "Thanks! I’ll reply soon." }));
        formEl.reset(); // safe: formEl is never null
      } else {
        const detail = body?.errors?.[0]?.message
          || t("contact.status.error", { defaultValue: "Something went wrong. Please email me." });
        setStatus("error");
        setMsg(detail);
      }
    } catch (err) {
      if (import.meta.env.DEV) console.error("Form error:", err);
      setStatus("error");
      setMsg(t("contact.status.error", { defaultValue: "Something went wrong. Please email me." }));
    }
  }

  const sending = status === "sending";

  return (
    <section id="contact" className="section">
      <div className="container card">
        <h2>{t("contact.title", { defaultValue: "Let’s talk" })}</h2>
        <p className="muted">{t("contact.subtitle", { defaultValue: "Tell me about your business and goals." })}</p>

        <form onSubmit={handleSubmit} className="grid" style={{ gridTemplateColumns: "1fr 1fr" }} noValidate>
          {/* Honeypot */}
          <input
            type="text"
            name="honey"
            autoComplete="off"
            tabIndex="-1"
            aria-hidden="true"
            style={{ position: "absolute", left: "-9999px" }}
          />

          <label>
            {t("contact.labels.name", { defaultValue: "Name" })}
            <input name="name" required placeholder={t("contact.placeholders.name", { defaultValue: "Your name" })} />
          </label>

          <label>
            {t("contact.labels.email", { defaultValue: "Email" })}
            <input name="email" type="email" required placeholder={t("contact.placeholders.email", { defaultValue: "you@domain.com" })} />
          </label>

          <label style={{ gridColumn: "1 / -1" }}>
            {t("contact.labels.message", { defaultValue: "Message" })}
            <textarea name="message" rows="5" required placeholder={t("contact.placeholders.message", { defaultValue: "What do you need?" })} />
          </label>

          <button className="btn" type="submit" disabled={sending}>
            {sending ? t("contact.sending", { defaultValue: "Sending…" }) : t("contact.cta", { defaultValue: "Request consult" })}
          </button>

          {msg && (
            <span role="status" aria-live="polite" style={{ alignSelf: "center", marginLeft: ".75rem", color: status === "error" ? "#ef4444" : "#10b981" }}>
              {msg}
            </span>
          )}
        </form>
      </div>
    </section>
  );
}