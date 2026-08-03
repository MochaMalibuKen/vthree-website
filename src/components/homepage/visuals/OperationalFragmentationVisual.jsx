import { useTranslation } from "react-i18next";

export default function OperationalFragmentationVisual() {
  const { t } = useTranslation();
  const themes = t("homepage.problem.themes", { returnObjects: true });
  const nodes = [
    { id: "strategy", label: "Strategy" },
    { id: "website", label: "Website" },
    { id: "content", label: "Content" },
    { id: "leads", label: "Leads" },
    { id: "reporting", label: "Reporting" },
    { id: "operations", label: "Operations" },
  ];

  const consequenceNodes = [
    { id: "c1", label: themes?.[0] || "Disconnected Experience" },
    { id: "c2", label: themes?.[1] || "Manual Friction" },
    { id: "c3", label: themes?.[2] || "Unclear Priorities" },
    { id: "c4", label: themes?.[3] || "Limited Visibility" },
    { id: "c5", label: themes?.[4] || "Isolated Deliverables" },
  ];

  return (
    <div className="home-visual home-fragmentation" aria-describedby="fragmentation-summary">
      <div className="home-visual-surface">
        <div className="home-fragmentation-network" aria-hidden="true">
          <div className="home-fragmentation-hub">
            <span>Signals lose continuity</span>
            <strong>Each function moves, but the system stops aligning</strong>
          </div>
          <svg viewBox="0 0 560 360" className="home-fragmentation-svg" role="presentation">
            <rect x="40" y="40" width="480" height="280" rx="28" className="home-visual-grid" />
            <path d="M140 120 L200 100" className="home-visual-rail broken" />
            <path d="M230 110 L310 120" className="home-visual-rail broken" />
            <path d="M320 128 L390 108" className="home-visual-rail broken" />
            <path d="M180 210 L250 190" className="home-visual-rail broken" />
            <path d="M272 194 L336 208" className="home-visual-rail broken" />
            <path d="M348 214 L420 196" className="home-visual-rail broken" />
            <circle cx="120" cy="122" r="10" className="home-visual-node node-core" />
            <circle cx="210" cy="100" r="8" className="home-visual-node node-1" />
            <circle cx="320" cy="120" r="8" className="home-visual-node node-2" />
            <circle cx="420" cy="102" r="8" className="home-visual-node node-3" />
            <circle cx="174" cy="214" r="8" className="home-visual-node node-4" />
            <circle cx="348" cy="214" r="8" className="home-visual-node node-5" />
            <circle cx="434" cy="198" r="8" className="home-visual-node node-6" />
            <circle cx="208" cy="282" r="7" className="home-visual-node node-7" />
            <circle cx="352" cy="282" r="7" className="home-visual-node node-8" />
          </svg>
          <div className="home-fragmentation-nodes">
            {nodes.map((node, index) => (
              <div key={node.id} className={`home-fragmentation-node home-fragmentation-node-${index + 1}`}>
                <span>{node.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="home-fragmentation-effects" aria-hidden="true">
          <div className="home-fragmentation-effect effect-a" />
          <div className="home-fragmentation-effect effect-b" />
        </div>
      </div>
      <ul className="home-visual-list home-fragmentation-list">
        {consequenceNodes.map((item) => (
          <li key={item.id}><span>{item.label}</span></li>
        ))}
      </ul>
      <p id="fragmentation-summary" className="sr-only">
        Disconnected business functions create compounding operational consequences across strategy, website, content, leads, reporting, and operations.
      </p>
    </div>
  );
}
