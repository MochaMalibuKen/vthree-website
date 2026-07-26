import { useTranslation } from "react-i18next";
import PageMeta from "../components/PageMeta.jsx";
import CorporatePricing from "../components/CorporatePricing.jsx";

export default function PricingPage() {
  const { t } = useTranslation();
  return <main><PageMeta title={t("pricing.title")} description={t("pricing.subtitle")} path="/pricing" /><CorporatePricing /></main>;
}
