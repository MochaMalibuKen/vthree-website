import { useTranslation } from "react-i18next";

export default function CapabilityEcosystem() {
  const { t } = useTranslation();
  const groups = t("homepage.capabilities.groups", { returnObjects: true });

  return (
    <div className="home-visual home-capability-ecosystem" aria-describedby="capability-summary">
      <div className="home-visual-surface">
        <div className="home-capability-graphic" aria-hidden="true">
          <svg viewBox="0 0 620 420" className="home-capability-svg" role="presentation">
            <rect x="52" y="56" width="516" height="308" rx="32" className="home-visual-grid" />
            <path d="M308 132 L245 170" className="home-visual-rail" />
            <path d="M308 132 L372 170" className="home-visual-rail" />
            <path d="M242 186 L208 260" className="home-visual-rail" />
            <path d="M374 186 L408 260" className="home-visual-rail" />
            <path d="M214 274 L280 308" className="home-visual-rail" />
            <path d="M402 274 L336 308" className="home-visual-rail" />
            <circle cx="308" cy="132" r="20" className="home-visual-node node-core" />
            <circle cx="232" cy="176" r="14" className="home-visual-node node-1" />
            <circle cx="388" cy="176" r="14" className="home-visual-node node-2" />
            <circle cx="194" cy="280" r="14" className="home-visual-node node-3" />
            <circle cx="424" cy="280" r="14" className="home-visual-node node-4" />
            <circle cx="308" cy="314" r="14" className="home-visual-node node-5" />
          </svg>
          <div className="home-capability-hub">
            <span>Shared operating system</span>
            <strong>One direction, multiple capabilities</strong>
          </div>
          <div className="home-capability-nodes">
            {Array.isArray(groups) && groups.map((group, index) => (
              <div key={group} className={`home-capability-node node-${index + 1}`}>
                <span>{group}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p id="capability-summary" className="sr-only">
        The five capabilities reinforce one another and create a coordinated operating system rather than a set of isolated services.
      </p>
    </div>
  );
}
