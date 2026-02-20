export default function CorporatePricing() {
  const plans = [
    {
      title: "Launch Site",
      price: "$750+",
      blurb: "Simple, professional website to get you online fast."
    },
    {
      title: "Growth Site",
      price: "$1500+",
      blurb: "Custom, scalable website built for small-business growth."
    },
    {
      title: "E-commerce",
      price: "$2500+",
      blurb: "Online store with secure checkout, inventory, and integrations."
    }
  ];

  return (
    <section id="corporate-pricing" className="section">
      <div className="container">
        <h2>Corporate Pricing</h2>
        <p className="sub">
          Strategic pricing for organizations investing in durable growth systems.
        </p>

        <p style={{ margin: "0 0 1.2rem 0" }}>
          <strong>If it doesn&apos;t produce measurable movement, we don&apos;t build it.</strong>
        </p>

        <div className="grid cards">
          {plans.map((plan) => (
            <article key={plan.title} className="card">
              <h3>{plan.title}</h3>
              <p style={{ fontWeight: 800, fontSize: "1.2rem", margin: ".5rem 0" }}>
                {plan.price} <span style={{ fontWeight: 500, opacity: 0.8 }}>one-time</span>
              </p>
              <p>{plan.blurb}</p>
              <p style={{ marginTop: "1rem" }}>
                <a className="btn" href="#contact">Get Started</a>
              </p>
            </article>
          ))}
        </div>

        <p style={{ marginTop: "1rem", color: "var(--muted)" }}>
          Prices are starting points. Final quotes depend on scope, content, and integrations.
        </p>

        <article className="card" style={{ marginTop: "1.25rem" }}>
          <h3>Why Transparent Pricing?</h3>
          <p style={{ marginBottom: 0 }}>
            Serious businesses don&apos;t shop for discounts. They invest in systems. Our pricing reflects
            strategic depth, execution capacity, and measurable outcomes.
          </p>
        </article>
      </div>
    </section>
  );
}
