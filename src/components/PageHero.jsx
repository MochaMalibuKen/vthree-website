export default function PageHero({ eyebrow, title, lead, status }) {
  return <header className="section page-hero"><div className="container">
    {eyebrow && <p className="eyebrow">{eyebrow}</p>}
    <h1>{title}</h1>
    {lead && <p>{lead}</p>}
    {status && <p className="page-status" role="status">{status}</p>}
  </div></header>;
}
