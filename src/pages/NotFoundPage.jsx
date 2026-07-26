import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import PageMeta from "../components/PageMeta.jsx";

export default function NotFoundPage() {
  return <main>
    <PageMeta title="Page Not Found" description="The requested page could not be found." path="/404" noIndex />
    <PageHero eyebrow="404" title="Page Not Found" lead="The requested page could not be found." />
    <div className="container page-back-link"><Link className="btn" to="/">Return home</Link></div>
  </main>;
}
