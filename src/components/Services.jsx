import { services } from "../data";

export default function Services() {
  return (
    <section id="services" className="section services">
      {/* Background image (decorative) */}
      <div className="services-media" aria-hidden="true">
        <img src="/hero/cpuadvert.jpg" alt="" />
      </div>

      <div className="container">
        <h2>Services</h2>
        <p className="sub">
          Clear packages, transparent pricing, built for speed and SEO.
        </p>

        <div className="grid cards">
          {services.map((s) => (
            <article key={s.title} className="card">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <ul>
                {s.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
