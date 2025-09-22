import { useTranslation } from "react-i18next";
import { projects } from "../data";

export default function Projects(){
  const { t } = useTranslation();

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>{t("projects.title", { defaultValue: "Projects" })}</h2>
        <p className="sub">
          {t("projects.subtitle", {
            defaultValue: "Selected builds. Ask for a tailored demo for your industry."
          })}
        </p>

        <div className="grid cards">
          {projects.map((p, i) => (
            <article key={p.title} className="card" style={{ overflow: "hidden" }}>
              {/* thumbnail */}
              {p.image && (
                <div style={{ margin: "-1rem -1rem 1rem -1rem" }}>
                  <a href={p.link || "#"} target="_blank" rel="noreferrer" aria-label={`Open ${p.title}`}>
                    <img
                      src={p.image}
                      alt={p.title}
                      style={{ display: "block", width: "100%", height: 180, objectFit: "cover" }}
                      loading={i === 0 ? "eager" : "lazy"}
                      decoding="async"
                    />
                  </a>
                </div>
              )}

              <h3>{t(`projects.items.${i}.title`, { defaultValue: p.title })}</h3>
              <p>{t(`projects.items.${i}.blurb`, { defaultValue: p.blurb })}</p>

              {!!(p.tags && p.tags.length) && (
                <p aria-label={t("projects.techUsed", { defaultValue: "Tech used" })}>
                  {p.tags.map((tag, k) => (
                    <span className="tag" key={k}>
                      {t(`projects.items.${i}.tags.${k}`, { defaultValue: tag })}
                    </span>
                  ))}
                </p>
              )}

              <p>
                {p.link && (
                  <a href={p.link} className="btn" target="_blank" rel="noreferrer">
                    {t("projects.cta.live", { defaultValue: "Live" })}
                  </a>
                )}
                {p.repo && p.repo !== "" && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    style={{ marginLeft: ".6rem" }}
                  >
                    {t("projects.cta.source", { defaultValue: "Source" })}
                  </a>
                )}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}