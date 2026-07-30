import "./OperatingModelSection.css";

const outputStages = [
  { step: "03", title: "Strategy", sub: "Direction set" },
  { step: "04", title: "Design", sub: "Experience shaped" },
  { step: "05", title: "Build", sub: "System produced" },
  { step: "06", title: "Launch", sub: "Work activated" },
];

export default function OperatingModelSection() {
  return <section id="homepage-operating-model" className="section home-operating-model" aria-labelledby="operating-model-title">
    <div className="container">
      <div className="operating-model-heading">
        <p className="eyebrow">VThree Operating Model</p>
        <h2 id="operating-model-title">Intelligence before execution.</h2>
        <p id="operating-model-description" className="sub">Every engagement moves through one controlled production system.</p>
      </div>

      <div className="operating-model-visual" aria-describedby="operating-model-description operating-model-caption">
        <p id="operating-model-caption" className="operating-model-caption">
          Client need enters through Discovery, becomes the Production Intelligence Blueprint, then guides Strategy, Design, Build, Launch, and ongoing measurement.
        </p>
        <div className="operating-model-canvas">
          <svg className="operating-model-connectors" viewBox="0 0 1200 520" preserveAspectRatio="none" aria-hidden="true" focusable="false">
            <line className="operating-rail operating-rail-base" x1="38" y1="210" x2="1162" y2="210" />
            <line className="operating-rail operating-rail-ruby" x1="255" y1="210" x2="928" y2="210" />
            <circle className="operating-rail-node" cx="255" cy="210" r="5" />
            <circle className="operating-rail-node" cx="928" cy="210" r="5" />
            <path className="operating-loop-path" d="M1110 360C1110 455 980 485 820 485H255C120 485 88 428 88 360" />
            <path className="operating-loop-arrow" d="M78 365L88 346L101 365" />
          </svg>

          <article className="operating-node operating-client">
            <div className="operating-client-symbol" aria-hidden="true">
              <span />
            </div>
            <span className="operating-step">01</span>
            <h3>Client</h3>
            <p>Need enters</p>
          </article>

          <article className="operating-node operating-discovery">
            <div className="operating-discovery-symbol" aria-hidden="true">
              <span />
            </div>
            <span className="operating-step">02</span>
            <h3>Discovery</h3>
            <p>Signals captured</p>
          </article>

          <article className="operating-pib">
            <span className="operating-pib-rail" aria-hidden="true" />
            <p className="operating-meta">System Artifact / PIB-001</p>
            <h3>Production Intelligence Blueprint</h3>
            <p>Research, strategy, UX, architecture, messaging, and QA are unified before production begins.</p>
            <span className="operating-verified">Verified input</span>
          </article>

          {outputStages.map(stage => <article key={stage.step} className={`operating-node operating-output operating-stage-${stage.step}`}>
            <span className="operating-step">{stage.step}</span>
            <h3>{stage.title}</h3>
            <p>{stage.sub}</p>
          </article>)}

          <article className="operating-loop">
            <h3>Measure + Continuous Improvement</h3>
            <p>Evidence feeds the next discovery cycle.</p>
          </article>
        </div>

        <ol className="sr-only">
          <li>Client: Need enters.</li>
          <li>Discovery: Signals captured.</li>
          <li>Production Intelligence Blueprint: Research, strategy, UX, architecture, messaging, and QA are unified before production begins.</li>
          <li>Strategy: Direction set.</li>
          <li>Design: Experience shaped.</li>
          <li>Build: System produced.</li>
          <li>Launch: Work activated.</li>
          <li>Measure + Continuous Improvement: Evidence feeds the next discovery cycle.</li>
        </ol>
      </div>

      <a className="text-link home-section-link" href="#vthree-method">Explore the Blueprint <span aria-hidden="true">↓</span></a>
    </div>
  </section>;
}
