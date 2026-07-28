import { useTranslation } from "react-i18next";
import PageMeta from "../components/PageMeta.jsx";
import Method from "../components/Method.jsx";

export default function MethodPage() {
  const { t } = useTranslation();
  return (
    <main>
      <PageMeta title={t("methodMeta.title")} description={t("methodMeta.description")} path="/method" />
      <Method headingLevel="h1" />
    </main>
  );
}
