import { useTranslation } from "react-i18next";

export default function Pricing() {
  const { t } = useTranslation();

  return (
    <section id="pricing" className="section">
      <div className="container">
        <h2>{t("pricing.title", { defaultValue: "Pricing" })}</h2>
        <p className="sub">
          {t("pricing.subtitle", {
            defaultValue: "Flexible plans with discounts for Nonprofits & Small Businesses."
          })}
        </p>

        <div className="grid cards">
          <article className="card">
            <h3>{t("pricing.launch.title", { defaultValue: "Launch Site" })}</h3>
            <p>{t("pricing.launch.desc", { defaultValue: "Perfect starter site to get your business online." })}</p>
            <p className="price">$750+</p>
          </article>

          <article className="card">
            <h3>{t("pricing.growth.title", { defaultValue: "Growth Site" })}</h3>
            <p>{t("pricing.growth.desc", { defaultValue: "For growing businesses that need more features." })}</p>
            <p className="price">$1,500+</p>
          </article>

          <article className="card">
            <h3>{t("pricing.ecommerce.title", { defaultValue: "E-Commerce Site" })}</h3>
            <p>{t("pricing.ecommerce.desc", { defaultValue: "Full online store with custom integrations." })}</p>
            <p className="price">$2,500+</p>
          </article>
        </div>

        <p className="sub">
          {t("pricing.note", { defaultValue: "Discounts & payment plans available for nonprofits and small businesses." })}
        </p>
      </div>
    </section>
  );
}