import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import PageMeta from "../components/PageMeta.jsx";
import CaseStudies from "../components/CaseStudies.jsx";
import { publicCaseStudies } from "../content/cases.js";

export default function WorkPage() {
  const { t } = useTranslation();
  const hasPublicCases = publicCaseStudies.length > 0;

  useEffect(() => {
    window.dataLayer?.push({ event: "work_view", state: hasPublicCases ? "published" : "controlled_empty" });
  }, [hasPublicCases]);

  return <main><PageMeta title={t("nav.work")} description={t("cases.standard")} path="/work" noIndex={!hasPublicCases} /><CaseStudies headingLevel="h1" /></main>;
}
