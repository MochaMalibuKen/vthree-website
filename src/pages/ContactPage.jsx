import { useTranslation } from "react-i18next";
import PageMeta from "../components/PageMeta.jsx";
import Contact from "../components/Contact.jsx";

export default function ContactPage() {
  const { t } = useTranslation();
  return <main><PageMeta title={t("contact.title")} description={t("contact.subtitle")} path="/contact" noIndex /><Contact /></main>;
}
