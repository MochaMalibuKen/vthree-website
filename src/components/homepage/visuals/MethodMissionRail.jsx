import { useTranslation } from "react-i18next";

export default function MethodMissionRail() {
  const { t } = useTranslation();
  const stages = t("homepage.method.stages", { returnObjects: true });

  return (
    <div className="home-visual home-method-rail" aria-describedby="method-rail-summary">
      <div className="home-visual-surface">
        <div className="home-method-rail-graphic" aria-hidden="true">
          <div className="home-method-rail-line" />
          <div className="home-method-rail-signal" />
          <ol className="home-method-rail-stages">
            {Array.isArray(stages) && stages.map((stage, index) => (
              <li key={stage} className={`home-method-stage stage-${index + 1}`}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{stage}</strong>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <p id="method-rail-summary" className="sr-only">
        The VThree method moves through intelligence, strategy, architecture, production, automation, measurement, and improvement in a connected progression that returns evidence to the next cycle.
      </p>
    </div>
  );
}
