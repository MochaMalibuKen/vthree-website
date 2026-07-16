import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ChatbotBox from "./ChatbotBox.jsx";
import logo from "../assets/V3logo.png";

export default function Nav() {
  const { t, i18n } = useTranslation();
  const [chatOpen, setChatOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const current = i18n.language?.startsWith("es") ? "es" : "en";

  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang");
      if (saved && saved !== current) i18n.changeLanguage(saved);
    } catch {
      // Ignore storage access errors.
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("lang", current);
    } catch {
      // Ignore storage access errors.
    }
  }, [current]);

  useEffect(() => {
    document.documentElement.lang = current;
    document.title = t("meta.title", { defaultValue: "VTHREE | Digital Architecture Studio" });
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = t("meta.description", { defaultValue: "VTHREE architects connected websites, campaigns, automation, analytics, and creative systems for measurable growth." });
  }, [current, t]);

  function track(event, details = {}) {
    window.dataLayer?.push({ event, ...details });
  }

  const closeMenu = () => setMenuOpen(false);

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
      <nav aria-label={t("nav.primary", { defaultValue: "Primary navigation" })}>
        <div className="container inner">
          <a
            href="/"
            className="brand"
            aria-label={t("nav.home", { defaultValue: "VTHREE home" })}
          >
            <img src={logo} alt="" />
            <span><strong>VTHREE</strong><small>Digital Architecture</small></span>
          </a>
          <button className="menu-toggle" onClick={() => setMenuOpen(v => !v)} aria-expanded={menuOpen} aria-controls="site-links">
            <span className="sr-only">{t("nav.menu", { defaultValue: "Toggle menu" })}</span><span aria-hidden="true">☰</span>
          </button>
          <div id="site-links" className={`site-links ${menuOpen ? "open" : ""}`}>
            <a onClick={closeMenu} href="#services">{t("nav.capabilities", { defaultValue: "Capabilities" })}</a>
            <a onClick={closeMenu} href="#case-studies">{t("nav.work", { defaultValue: "Work" })}</a>
            <a onClick={closeMenu} href="#labs">{t("nav.labs", { defaultValue: "Labs" })}</a>
            <a onClick={closeMenu} href="#technical-projects">{t("nav.systems", { defaultValue: "Technical Systems" })}</a>
            <a onClick={closeMenu} href="#about">{t("nav.about", { defaultValue: "About" })}</a>
            <a onClick={closeMenu} href="#insights">{t("nav.insights", { defaultValue: "Insights" })}</a>
            <span className="language-switcher" aria-label={t("nav.language", { defaultValue: "Language" })}>
              <button
                style={langBtn("en")}
                onClick={() => { i18n.changeLanguage("en"); track("language_select", { language: "en" }); }}
                disabled={current === "en"}
                aria-pressed={current === "en"}
              >
                EN
              </button>
              <button
                style={langBtn("es")}
                onClick={() => { i18n.changeLanguage("es"); track("language_select", { language: "es" }); }}
                disabled={current === "es"}
                aria-pressed={current === "es"}
              >
                ES
              </button>
            </span>

            <button
              onClick={() => setChatOpen((v) => !v)}
              className="chat-trigger"
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
            <a onClick={() => { closeMenu(); track("cta_click", { cta: "nav_schedule_review" }); }} href="#contact" className="btn nav-cta">{t("nav.schedule", { defaultValue: "Schedule Review" })}</a>
          </div>
        </div>
      </nav>

      {chatOpen && <ChatbotBox onClose={() => setChatOpen(false)} />}
    </>
  );
}
