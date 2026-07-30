import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Founder() {
  const { t } = useTranslation();
  const strengths = t("founder.strengths", { returnObjects: true });

  useEffect(() => {
    window.dataLayer?.push({ event: "founder_section_view" });
  }, []);

  return <section className="section founder-section" aria-labelledby="founder-title"><div className="container founder-card">
    <div className="founder-identity">
      <img className="founder-portrait" src="/images/founder/v3founder_photo.png" alt="Portrait of Kennieth Allen, Founder and Digital Architect of VThree" loading="lazy" decoding="async" />
      <p className="eyebrow">{t("founder.eyebrow")}</p><h2 id="founder-title">Kennieth D. Allen</h2><p className="founder-role">{t("founder.role")}</p>
    </div>
    <div><p>{t("founder.bio")}</p><ul className="compact-list">{Array.isArray(strengths) && strengths.map(item => <li key={item}>{item}</li>)}</ul></div>
  </div></section>;
}
