import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ChatbotBox from "./ChatbotBox.jsx";
import logo from "../assets/V3logo.png";

export default function Nav() {
  const { t, i18n } = useTranslation();
  const [chatOpen, setChatOpen] = useState(false);
  const current = i18n.language?.startsWith("es") ? "es" : "en";

  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang");
      if (saved && saved !== current) i18n.changeLanguage(saved);
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("lang", current);
    } catch {}
  }, [current]);

  const langBtn = (code) => ({
    padding: "6px 10px",
    borderRadius: 8,
    border: "1px solid rgba(255,255,255,.14)",
    background: current === code ? "rgba(255,255,255,.12)" : "transparent",
    color: "inherit",
    cursor: current === code ? "default" : "pointer"
  });

  return (
    <>
      <nav
        aria-label="Primary"
        style={{
          position: "sticky",
          top: 0,
          background: "rgba(10,14,26,.55)",
          backdropFilter: "blur(8px)",
          zIndex: 50
        }}
      >
        <div
          className="container inner"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            padding: ".8rem 0"
          }}
        >
          <a
            href="/"
            className="brand"
            aria-label="Home"
            style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}
          >
            <img src={logo} alt="VTHREE" style={{ height: 28 }} />
            <strong>VTHREE</strong>
          </a>

          <div role="navigation" aria-label="Site" style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <a href="#services">{t("nav.services", { defaultValue: "Services" })}</a>
            <a href="#pricing">{t("nav.pricing", { defaultValue: "Pricing" })}</a>
            <a href="#projects">{t("nav.projects", { defaultValue: "Projects" })}</a>
            <a href="#contact" className="btn" style={{ marginLeft: 6 }}>
              {t("nav.contact", { defaultValue: "Contact" })}
            </a>

            <span style={{ display: "inline-flex", gap: 8, marginLeft: 12 }}>
              <button
                style={langBtn("en")}
                onClick={() => i18n.changeLanguage("en")}
                disabled={current === "en"}
                aria-pressed={current === "en"}
              >
                EN
              </button>
              <button
                style={langBtn("es")}
                onClick={() => i18n.changeLanguage("es")}
                disabled={current === "es"}
                aria-pressed={current === "es"}
              >
                ES
              </button>
            </span>

            <button
              onClick={() => setChatOpen((v) => !v)}
              className="btn"
              style={{ marginLeft: 12 }}
              aria-pressed={chatOpen}
              aria-label={
                chatOpen
                  ? t("nav.hideChat", { defaultValue: "Hide chat" })
                  : t("nav.showChat", { defaultValue: "Chat" })
              }
            >
              {chatOpen
                ? t("nav.hideChat", { defaultValue: "Hide Chat" })
                : t("nav.showChat", { defaultValue: "Chat" })}
            </button>
          </div>
        </div>
      </nav>

      {chatOpen && <ChatbotBox onClose={() => setChatOpen(false)} />}
    </>
  );
}