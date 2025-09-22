import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer>
      <div className="container">
        © {new Date().getFullYear()} {t("footer.name", { defaultValue: "Kenni Allen" })}.{" "}
        {t("footer.built", { defaultValue: "Built with HTML, CSS, JS & React." })}
      </div>
    </footer>
  );
}