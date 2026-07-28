import { useTranslation } from "react-i18next";
import PageMeta from "../components/PageMeta.jsx";
import Services from "../components/Services.jsx";

export default function ServicesPage() {
  const { t } = useTranslation();
  return (
    <main>
      <PageMeta
        title={t("servicesMeta.title")}
        description={t("servicesMeta.description")}
        path="/services"
      />
      <Services headingLevel="h1" />
    </main>
  );
}
