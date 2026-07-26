import { useTranslation } from "react-i18next";
import PageMeta from "../components/PageMeta.jsx";
import Services from "../components/Services.jsx";
import Industries from "../components/Industries.jsx";
import TechnicalProjects from "../components/TechnicalProjects.jsx";

export default function ServicesPage() {
  const { t } = useTranslation();
  return <main><PageMeta title={t("nav.capabilities")} description={t("capabilities.subtitle")} path="/services" /><Services headingLevel="h1" /><Industries /><TechnicalProjects /></main>;
}
