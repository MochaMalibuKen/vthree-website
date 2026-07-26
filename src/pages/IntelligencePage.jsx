import { useTranslation } from "react-i18next";
import PageMeta from "../components/PageMeta.jsx";
import Insights from "../components/Insights.jsx";
import Labs from "../components/Labs.jsx";

export default function IntelligencePage() {
  const { t } = useTranslation();
  return <main><PageMeta title={t("insights.title")} description={t("insights.subtitle")} path="/intelligence" /><Insights /><Labs /></main>;
}
