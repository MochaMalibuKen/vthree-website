import { useId } from "react";

export default function PageHero({ eyebrow, title, lead, status }) {
  const titleId = useId();
  return <header className="section page-hero" aria-labelledby={titleId}><div className="container">
    {eyebrow && <p className="eyebrow">{eyebrow}</p>}
    <h1 id={titleId}>{title}</h1>
    {lead && <p>{lead}</p>}
    {status && <p className="page-status" role="status">{status}</p>}
  </div></header>;
}
