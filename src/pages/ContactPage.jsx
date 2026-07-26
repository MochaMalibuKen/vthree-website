import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import PageMeta from "../components/PageMeta.jsx";
import Contact from "../components/Contact.jsx";

export default function ContactPage() {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  return <main><PageMeta title={t("contact.title")} description={t("contact.subtitle")} path={pathname} noIndex /><Contact headingLevel="h1" /></main>;
}
