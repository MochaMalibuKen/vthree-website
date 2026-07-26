import { useTranslation } from "react-i18next";
import PageMeta from "../components/PageMeta.jsx";
import Philosophy from "../components/Philosophy.jsx";
import WhyDigitalArchitecture from "../components/WhyDigitalArchitecture.jsx";
import Method from "../components/Method.jsx";

export default function MethodPage() {
  const { t } = useTranslation();
  return <main><PageMeta title={t("method.eyebrow")} description={t("method.subtitle")} path="/method" /><Philosophy /><WhyDigitalArchitecture /><Method /></main>;
}
