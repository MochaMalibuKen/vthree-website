import "./ProductionIntelligenceBlueprint.css";

const inputs = [
  { title: "SEO Intelligence", description: "Keyword data, intent mapping, content gaps, search landscape.", position: "input-seo", icon: "⌕" },
  { title: "Research", description: "Market, industry, audience, trends, opportunities.", position: "input-research", icon: "◎" },
  { title: "Competitive Intelligence", description: "Competitor analysis, positioning, messaging, strengths & weaknesses.", position: "input-competitive", icon: "◌" },
  { title: "Brand Intelligence", description: "Brand audit, perception, differentiation, voice, visual identity.", position: "input-brand", icon: "◇" },
  { title: "UX Intelligence", description: "User research, journey mapping, pain points, experience strategy.", position: "input-ux", icon: "◯" },
  { title: "Message Intelligence", description: "Core message, value proposition, audience communication.", position: "input-message", icon: "▱" },
  { title: "Website Architecture", description: "Structure, navigation, content relationships, user pathways.", position: "input-architecture", icon: "⌬" },
  { title: "Content Intelligence", description: "Content strategy, topic clusters, content gap opportunities.", position: "input-content", icon: "▤" },
  { title: "Automation Intelligence", description: "Workflow analysis, automation opportunities, system integrations.", position: "input-automation", icon: "⚙" },
  { title: "Strategy Intelligence", description: "Business goals, KPIs, positioning strategy, growth roadmap.", position: "input-strategy", icon: "♞" },
  { title: "Design Intelligence", description: "Visual strategy, UI patterns, design system, brand application.", position: "input-design", icon: "✒" },
];

const outputs = [
  { title: "Strategic Direction", description: "Clear objectives, positioning and roadmap." },
  { title: "Design System", description: "UI components, patterns and visual standards." },
  { title: "Content Plan", description: "Content strategy, calendar and production plan." },
  { title: "Development Plan", description: "Technical architecture, features and specifications." },
  { title: "Launch Strategy", description: "Go-to-market plan, activation and distribution." },
  { title: "Measurement Plan", description: "KPIs, dashboards and performance framework." },
  { title: "Continuous Improvement", description: "Insights loop, testing roadmap and ongoing optimization." },
];

const metadata = [
  { label: "PIB Identifier", value: "PIB-001" },
  { label: "Revision", value: "1.0" },
  { label: "Status", value: "Approved" },
  { label: "Date", value: "May 24, 2025" },
];

export default function ProductionIntelligenceBlueprint() {
  return (
    <section className="pib-section" aria-labelledby="pib-title">
      <div className="pib-shell">
        <div className="pib-frame" aria-hidden="true" />
        <div className="pib-intro">
          <p className="pib-system-label">VThree System Diagram</p>
          <h2 id="pib-title">Production Intelligence Blueprint <span>(PIB)</span></h2>
          <p>Intelligence synthesized. Strategy engineered. Results produced.</p>
        </div>

        <p className="sr-only">
          The Production Intelligence Blueprint synthesizes eleven intelligence inputs into a central production plan that produces seven operational outputs, including strategic direction, design, content, development, launch, measurement, and continuous improvement.
        </p>

        <div className="pib-diagram" aria-label="Production Intelligence Blueprint system diagram">
          <svg className="pib-connectors" viewBox="0 0 1200 760" preserveAspectRatio="none" aria-hidden="true" focusable="false">
            <path className="pib-orbit orbit-1" d="M420 332a180 154 0 1 0 360 0a180 154 0 1 0 -360 0" />
            <path className="pib-orbit orbit-2" d="M366 332a234 196 0 1 0 468 0a234 196 0 1 0 -468 0" />
            <path className="pib-orbit orbit-3" d="M314 332a286 238 0 1 0 572 0a286 238 0 1 0 -572 0" />
            <path className="pib-input-line" d="M500 92L600 206" />
            <path className="pib-input-line" d="M250 164L430 240" />
            <path className="pib-input-line" d="M930 164L770 240" />
            <path className="pib-input-line" d="M202 274L420 300" />
            <path className="pib-input-line" d="M982 274L780 300" />
            <path className="pib-input-line" d="M206 380L420 370" />
            <path className="pib-input-line" d="M986 380L780 370" />
            <path className="pib-input-line" d="M230 496L430 428" />
            <path className="pib-input-line" d="M960 496L770 428" />
            <path className="pib-input-line" d="M468 594L560 468" />
            <path className="pib-input-line" d="M732 594L640 468" />
            <path className="pib-output-line" d="M600 468V642H70V704" />
            <path className="pib-output-line" d="M600 642H247V704" />
            <path className="pib-output-line" d="M600 642H424V704" />
            <path className="pib-output-line" d="M600 468V704" />
            <path className="pib-output-line" d="M600 642H776V704" />
            <path className="pib-output-line" d="M600 642H953V704" />
            <path className="pib-output-line" d="M600 642H1130V704" />
          </svg>
          <div className="pib-inputs" aria-label="Intelligence inputs">
            <p className="pib-group-label">Intelligence Inputs</p>
            {inputs.map(input => (
              <article className={`pib-input-node ${input.position}`} key={input.title}>
                <span className="pib-node-icon" aria-hidden="true">{input.icon}</span>
                <div>
                  <h3>{input.title}</h3>
                  <p>{input.description}</p>
                </div>
              </article>
            ))}
          </div>

          <article className="pib-artifact" aria-labelledby="pib-artifact-title">
            <span className="pib-document-corner" aria-hidden="true" />
            <p>VThree</p>
            <h3 id="pib-artifact-title">Production Intelligence Blueprint <span>(PIB)</span></h3>
            <i aria-hidden="true" />
            <p>A single source of truth that drives everything we build.</p>
            <span className="pib-mark" aria-hidden="true">▽</span>
          </article>

          <dl className="pib-metadata" aria-label="PIB metadata">
            {metadata.map(item => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>

          <div className="pib-outputs" aria-label="Intelligence outputs">
            <p className="pib-group-label">Intelligence Outputs</p>
            {outputs.map(output => (
              <article className="pib-output-node" key={output.title}>
                <h3>{output.title}</h3>
                <p>{output.description}</p>
              </article>
            ))}
          </div>
        </div>

        <p className="pib-closing">The PIB is not just a document. <span>It is our operating system.</span></p>
      </div>
    </section>
  );
}
