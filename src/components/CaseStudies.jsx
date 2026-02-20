const caseStudies = [
  {
    title: "Hospitality Conversion Platform",
    category: "Hospitality",
    challenge:
      "The business had fragmented digital touchpoints and a booking path with avoidable drop-off. Mobile visitors were not moving from interest to action at a reliable rate.",
    solution:
      "We rebuilt the site structure around high-intent pathways, clarified decision-stage messaging, and tightened call-to-action sequencing. The implementation prioritized speed, booking clarity, and measurable funnel behavior.",
    outcomes: [
      "Conversion path restructured for faster booking decisions",
      "Higher quality mobile traffic flow",
      "Core page-speed and technical structure upgrade"
    ],
    link: "https://eaglecorpsessentials.com/"
  },
  {
    title: "Service Business Positioning Rebuild",
    category: "Service Business",
    challenge:
      "The company had solid service delivery but weak digital positioning and unclear offer hierarchy. Sales calls were frequently spent clarifying fundamentals instead of moving prospects forward.",
    solution:
      "We redesigned the information architecture, aligned service copy to buyer intent, and implemented a cleaner lead routing structure. The result was a more coherent sales narrative supported by clearer user journeys.",
    outcomes: [
      "Improved conversion clarity across service pages",
      "Stronger qualification quality from inbound leads",
      "Structural rebrand with clearer market positioning"
    ],
    link: "https://eaglecorpsessentials.com/mighty-matt-lifesavers-kit/"
  },
  {
    title: "Nonprofit Program Visibility Upgrade",
    category: "Nonprofit",
    challenge:
      "Program information was difficult to scan, and key trust signals were buried in dense page layouts. Stakeholders needed clearer pathways for participation and outreach.",
    solution:
      "We simplified navigation, rebuilt content hierarchy, and improved readability standards across devices. This created a cleaner public-facing structure for program visibility and community engagement.",
    outcomes: [
      "Clearer organization of program information",
      "Improved content readability and access",
      "Modernized site structure supporting future growth"
    ],
    link: "https://brotherssistersofaikencounty.org/"
  },
  {
    title: "SafeRide Escorts Digital Presence Build",
    category: "Service Business",
    challenge:
      "The brand needed a clear, trustworthy web presence that could communicate services quickly and reduce friction for first-time visitors.",
    solution:
      "We structured the site around fast comprehension, clear user pathways, and direct inquiry flow. The implementation focused on conversion clarity and consistent brand presentation.",
    outcomes: [
      "Improved service-page clarity",
      "Clearer conversion path for inbound inquiries",
      "Stronger trust signaling in core pages"
    ],
    link: "https://www.saferideescorts.com"
  },
  {
    title: "TX Elite Meal Prep Growth Site",
    category: "E-Commerce",
    challenge:
      "The business required a clearer product and offer structure to support repeat orders and reduce decision friction for mobile users.",
    solution:
      "We streamlined navigation and offer communication while tightening page hierarchy for faster buying decisions. The resulting structure supports both acquisition and retention workflows.",
    outcomes: [
      "Stronger product-path clarity",
      "Improved mobile decision flow",
      "Foundation for repeat-purchase optimization"
    ],
    link: "https://txelitemac.com"
  },
  {
    title: "Citizens Park OCC Community Visibility Platform",
    category: "Nonprofit",
    challenge:
      "The organization needed a stronger digital front door for community communication, events visibility, and stakeholder trust.",
    solution:
      "We organized content for easier scanning, simplified primary navigation, and clarified audience pathways across the site. The build prioritized accessibility, readability, and operational ease.",
    outcomes: [
      "Clearer communication structure",
      "Better event and program discoverability",
      "Upgraded site architecture for future expansion"
    ],
    link: "https://www.citizensparkocc.com"
  }
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="section">
      <div className="container">
        <h2>Case Studies</h2>
        <p className="sub">Execution Over Explanation.</p>
        <p style={{ maxWidth: 860 }}>
          We don&apos;t theorize growth. We build it. Below are selected projects demonstrating strategic
          design, marketing infrastructure, and operational clarity.
        </p>

        <div className="grid case-grid" style={{ marginTop: "1.2rem" }}>
          {caseStudies.map((study) => (
            <article key={study.title} className="card">
              <p className="tag">{study.category}</p>
              <h3>{study.title}</h3>

              <h4>Challenge</h4>
              <p>{study.challenge}</p>

              <h4>Solution</h4>
              <p>{study.solution}</p>

              <p>
                <a href={study.link} target="_blank" rel="noreferrer" className="btn">
                  View Live Site
                </a>
              </p>

              <h4>Outcomes</h4>
              <ul>
                {study.outcomes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
