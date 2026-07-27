import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../assets/V3logo.png";

export default function Nav() {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggleRef = useRef(null);
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

  useEffect(() => {
    if (!menuOpen) return undefined;
    function closeOnEscape(event) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuToggleRef.current?.focus();
      }
    }
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  function track(event, details = {}) { window.dataLayer?.push({ event, ...details }); }
  const navClass = ({ isActive }) => isActive ? "active" : undefined;

  return <nav aria-label={t("nav.primary", { defaultValue: "Primary navigation" })}>
    <div className="container inner">
      <Link to="/" className="brand" aria-label={t("nav.home", { defaultValue: "VTHREE home" })}>
        <img src={logo} alt="" /><span><strong>VTHREE</strong><small>Digital Architecture</small></span>
      </Link>
      <button ref={menuToggleRef} type="button" className="menu-toggle" onClick={() => setMenuOpen(value => !value)} aria-expanded={menuOpen} aria-controls="site-links">
        <span className="sr-only">{t("nav.menu", { defaultValue: "Toggle menu" })}</span><span aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
      </button>
      <div id="site-links" className={`site-links ${menuOpen ? "open" : ""}`}>
        <NavLink to="/services" className={navClass}>{t("nav.capabilities", { defaultValue: "Services" })}</NavLink>
        <NavLink to="/method" className={navClass}>{t("nav.method", { defaultValue: "Method" })}</NavLink>
        <NavLink to="/work" className={navClass}>{t("nav.work", { defaultValue: "Work" })}</NavLink>
        <NavLink to="/intelligence" className={navClass}>{t("nav.insights", { defaultValue: "Intelligence" })}</NavLink>
        <NavLink to="/about" className={navClass}>{t("nav.about", { defaultValue: "About" })}</NavLink>
        <NavLink to="/pricing" className={navClass}>{t("nav.pricing", { defaultValue: "Pricing" })}</NavLink>
        <NavLink to="/contact" className={navClass}>{t("nav.contact", { defaultValue: "Contact" })}</NavLink>
        <span className="language-switcher" role="group" aria-label={t("nav.language", { defaultValue: "Language" })}>
          <button type="button" className={current === "en" ? "active" : undefined} onClick={() => { i18n.changeLanguage("en"); track("language_select", { language: "en" }); }} disabled={current === "en"} aria-pressed={current === "en"}>EN</button>
          <button type="button" className={current === "es" ? "active" : undefined} onClick={() => { i18n.changeLanguage("es"); track("language_select", { language: "es" }); }} disabled={current === "es"} aria-pressed={current === "es"}>ES</button>
        </span>
        <Link onClick={() => track("assessment_start", { source: "navigation" })} to="/contact" className="btn nav-cta">{t("nav.schedule", { defaultValue: "Start an Assessment" })}</Link>
      </div>
    </div>
  </nav>;
}
