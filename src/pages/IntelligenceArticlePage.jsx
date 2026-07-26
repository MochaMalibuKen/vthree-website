import { useParams } from "react-router-dom";
import { findIntelligenceArticle } from "../content/intelligence.js";
import NotFoundPage from "./NotFoundPage.jsx";

export default function IntelligenceArticlePage() {
  const { slug } = useParams();
  const article = findIntelligenceArticle(slug);
  if (!article) return <NotFoundPage />;
  return null;
}
