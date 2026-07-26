import { useTranslation } from "react-i18next";
import PageMeta from "../components/PageMeta.jsx";
import CaseStudies from "../components/CaseStudies.jsx";

export default function WorkPage() {
  const { t } = useTranslation();
  return <main><PageMeta title={t("nav.work")} description={t("cases.subtitle")} path="/work" /><CaseStudies /></main>;
}
