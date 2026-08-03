import { useTranslation } from "react-i18next";

export default function ProjectAssessmentMatrix() {
  const { t } = useTranslation();
  const factors = t("homepage.pricing.factors", { returnObjects: true });

  const groups = [
    { title: "System conditions", items: factors?.slice(0, 4) || [] },
    { title: "Production requirements", items: factors?.slice(4, 7) || [] },
    { title: "Engagement conditions", items: factors?.slice(7) || [] },
  ];

  return (
    <div className="home-visual home-assessment-matrix" aria-describedby="assessment-summary">
      <div className="home-visual-surface">
        <div className="home-assessment-grid" aria-hidden="true">
          {groups.map((group, index) => (
            <div key={group.title} className={`home-assessment-column column-${index + 1}`}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
          <div className="home-assessment-result">
            <span>Scope definition</span>
            <strong>Clear expectations</strong>
          </div>
        </div>
      </div>
      <p id="assessment-summary" className="sr-only">
        Project scope is shaped by visible conditions such as complexity, systems, integrations, content readiness, timeline, and support.
      </p>
    </div>
  );
}
