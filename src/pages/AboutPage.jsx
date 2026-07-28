import { useTranslation } from "react-i18next";
import PageMeta from "../components/PageMeta.jsx";
import About from "../components/About.jsx";
import Founder from "../components/Founder.jsx";

export default function AboutPage() {
  const { t } = useTranslation();
  return (
    <main>
      <PageMeta title={t("aboutMeta.title")} description={t("aboutMeta.description")} path="/about" />
      <About headingLevel="h1" />
      <Founder />
    </main>
  );
}
