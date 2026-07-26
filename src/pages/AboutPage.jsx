import { useTranslation } from "react-i18next";
import PageMeta from "../components/PageMeta.jsx";
import About from "../components/About.jsx";
import Founder from "../components/Founder.jsx";

export default function AboutPage() {
  const { t } = useTranslation();
  return <main><PageMeta title={t("about.eyebrow")} description={t("about.p2")} path="/about" /><About /><Founder /></main>;
}
