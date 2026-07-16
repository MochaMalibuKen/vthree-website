import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer>
      <div className="container">
        <strong>VTHREE</strong>
        <span>© {new Date().getFullYear()} {t("footer.name", { defaultValue: "Kennieth D. Allen" })}.</span>
        <span>{t("footer.built", { defaultValue: "Designed with research. Built with intention. Measured by results." })}</span>
      </div>
    </footer>
  );
}
