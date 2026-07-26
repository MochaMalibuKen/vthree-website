import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../assets/V3logo.png";

export default function Nav() {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const current = i18n.language?.startsWith("es") ? "es" : "en";

  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang");
      if (saved && saved !== current) i18n.changeLanguage(saved);
    } catch { /* Ignore storage access errors. */ }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.documentElement.lang = current;
    try { localStorage.setItem("lang", current); } catch { /* Ignore storage access errors. */ }
  }, [current]);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  function track(event, details = {}) { window.dataLayer?.push({ event, ...details }); }
  const navClass = ({ isActive }) => isActive ? "active" : undefined;
  const langBtn = (code) => ({
    padding: "6px 10px", borderRadius: 8, border: "1px solid rgba(255,255,255,.14)",
    background: current === code ? "rgba(255,255,255,.12)" : "transparent",
    color: "inherit", cursor: current === code ? "default" : "pointer"
  });

  return <nav aria-label={t("nav.primary", { defaultValue: "Primary navigation" })}>
    <div className="container inner">
      <Link to="/" className="brand" aria-label={t("nav.home", { defaultValue: "VTHREE home" })}>
        <img src={logo} alt="" /><span><strong>VTHREE</strong><small>Digital Architecture</small></span>
      </Link>
      <button className="menu-toggle" onClick={() => setMenuOpen(value => !value)} aria-expanded={menuOpen} aria-controls="site-links">
        <span className="sr-only">{t("nav.menu", { defaultValue: "Toggle menu" })}</span><span aria-hidden="true">☰</span>
      </button>
      <div id="site-links" className={`site-links ${menuOpen ? "open" : ""}`}>
        <NavLink to="/services" className={navClass}>{t("nav.capabilities", { defaultValue: "Services" })}</NavLink>
        <NavLink to="/method" className={navClass}>{t("nav.method", { defaultValue: "Method" })}</NavLink>
        <NavLink to="/work" className={navClass}>{t("nav.work", { defaultValue: "Work" })}</NavLink>
        <NavLink to="/intelligence" className={navClass}>{t("nav.insights", { defaultValue: "Intelligence" })}</NavLink>
        <NavLink to="/about" className={navClass}>{t("nav.about", { defaultValue: "About" })}</NavLink>
        <NavLink to="/pricing" className={navClass}>{t("nav.pricing", { defaultValue: "Pricing" })}</NavLink>
        <span className="language-switcher" aria-label={t("nav.language", { defaultValue: "Language" })}>
          <button style={langBtn("en")} onClick={() => { i18n.changeLanguage("en"); track("language_select", { language: "en" }); }} disabled={current === "en"} aria-pressed={current === "en"}>EN</button>
          <button style={langBtn("es")} onClick={() => { i18n.changeLanguage("es"); track("language_select", { language: "es" }); }} disabled={current === "es"} aria-pressed={current === "es"}>ES</button>
        </span>
        <Link onClick={() => track("cta_click", { cta: "nav_schedule_review" })} to="/contact" className="btn nav-cta">{t("nav.schedule", { defaultValue: "Schedule Review" })}</Link>
      </div>
    </div>
  </nav>;
}
