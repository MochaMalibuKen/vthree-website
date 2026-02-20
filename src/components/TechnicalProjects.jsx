export default function TechnicalProjects() {
  return (
    <section id="technical-projects" className="section">
      <div className="container">
        <h2>Applied Systems &amp; Automation</h2>
        <p className="sub">
          Beyond marketing, we build operational tools. From automation scripts to analytics systems,
          our technical work bridges business logic and code.
        </p>

        <div className="grid cards" style={{ marginTop: "1rem" }}>
          <article className="card">
            <h3>Data &amp; Automation Projects</h3>
            <ul>
              <li>Built automated reporting workflows</li>
              <li>Created backend data transformations</li>
              <li>API integrations for CRM + marketing systems</li>
            </ul>
          </article>

          <article className="card">
            <h3>Python &amp; Ad Hoc Engineering</h3>
            <ul>
              <li>Data cleaning and structuring pipelines</li>
              <li>Business logic scripting</li>
              <li>Process automation tools</li>
              <li>Performance analytics dashboards</li>
            </ul>
          </article>
        </div>

        <article className="card" style={{ marginTop: "1.25rem" }}>
          <h3>Enterprise Insurance Workflow Optimization Project</h3>
          <p>
            A regional enterprise insurance team was running a high-volume manual workflow that created
            delays and inconsistent record quality. We designed internal logic tooling to standardize
            processing decisions, reduce repetitive handling, and improve reliability across submissions.
          </p>
          <ul>
            <li>Diagnosed manual process inefficiency across key workflow stages</li>
            <li>Built internal logic tools for consistent case handling</li>
            <li>Reduced time-to-completion across recurring process tasks</li>
            <li>Improved data reliability and reporting confidence</li>
            <li>Established a scalable scripting structure for future iteration</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
