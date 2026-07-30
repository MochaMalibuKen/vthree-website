import "./ProductionIntelligenceBlueprint.css";

const inputs = [
  { title: "Research", description: "Market, industry, audience, trends, opportunities." },
  { title: "SEO Intelligence", description: "Keyword data, intent mapping, content gaps, search landscape." },
  { title: "Competitive Intelligence", description: "Competitor analysis, positioning, messaging, strengths & weaknesses." },
  { title: "Brand Intelligence", description: "Brand audit, perception, differentiation, voice, visual identity." },
  { title: "UX Intelligence", description: "User research, journey mapping, pain points, experience strategy." },
  { title: "Message Intelligence", description: "Core message, value proposition, audience communication." },
  { title: "Website Architecture", description: "Structure, navigation, content relationships, user pathways." },
  { title: "Content Intelligence", description: "Content strategy, topic clusters, content gap opportunities." },
  { title: "Automation Intelligence", description: "Workflow analysis, automation opportunities, system integrations." },
  { title: "Strategy Intelligence", description: "Business goals, KPIs, positioning strategy, growth roadmap." },
  { title: "Design Intelligence", description: "Visual strategy, UI patterns, design system, brand application." },
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
        <div className="pib-intro">
          <p className="pib-system-label">VThree System Diagram</p>
          <h2 id="pib-title">Production Intelligence Blueprint <span>(PIB)</span></h2>
          <p>Intelligence synthesized. Strategy engineered. Results produced.</p>
        </div>

        <p className="sr-only">
          The Production Intelligence Blueprint synthesizes eleven intelligence inputs into a central production plan that produces seven operational outputs, including strategic direction, design, content, development, launch, measurement, and continuous improvement.
        </p>

        <div className="pib-diagram" aria-label="Production Intelligence Blueprint system diagram">
          <div className="pib-inputs" aria-label="Intelligence inputs">
            <p className="pib-group-label">Intelligence Inputs</p>
            {inputs.map(input => (
              <article className="pib-input-node" key={input.title}>
                <h3>{input.title}</h3>
                <p>{input.description}</p>
              </article>
            ))}
          </div>

          <article className="pib-artifact" aria-labelledby="pib-artifact-title">
            <p>VThree</p>
            <h3 id="pib-artifact-title">Production Intelligence Blueprint <span>(PIB)</span></h3>
            <p>A single source of truth that drives everything we build.</p>
          </article>

          <aside className="pib-metadata" aria-label="PIB metadata">
            {metadata.map(item => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </aside>

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
