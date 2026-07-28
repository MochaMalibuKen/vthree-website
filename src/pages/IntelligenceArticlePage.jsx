import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { findIntelligenceArticle } from "../content/intelligence.js";
import PageMeta from "../components/PageMeta.jsx";
import NotFoundPage from "./NotFoundPage.jsx";

export default function IntelligenceArticlePage() {
  const { slug } = useParams();
  const { t } = useTranslation();
  const article = findIntelligenceArticle(slug);

  if (!article) {
    return <NotFoundPage />;
  }

  return (
    <main>
      <PageMeta 
        title={article.seoTitle || article.title} 
        description={article.seoDescription || article.summary} 
        path={`/intelligence/${article.slug}`}
      />

      {/* Article Header */}
      <article className="intelligence-article">
        <div className="article-header">
          <div className="container">
            <Link to="/intelligence" className="article-back-link">
              {t("intelligence.article.backToList")} <span aria-hidden="true">←</span>
            </Link>
            
            <header className="article-header-content">
              <span className="article-category">{article.category}</span>
              <h1>{article.title}</h1>
              <p className="article-summary">{article.summary}</p>
              
              <div className="article-metadata">
                <div className="metadata-item">
                  <span className="label">{t("intelligence.article.author")}:</span>
                  <span className="value">{article.author}</span>
                </div>
                <div className="metadata-item">
                  <span className="label">{t("intelligence.article.published")}:</span>
                  <time dateTime={article.publishedDate}>
                    {new Date(article.publishedDate).toLocaleDateString()}
                  </time>
                </div>
                {article.updatedDate && article.updatedDate !== article.publishedDate && (
                  <div className="metadata-item">
                    <span className="label">{t("intelligence.article.updated")}:</span>
                    <time dateTime={article.updatedDate}>
                      {new Date(article.updatedDate).toLocaleDateString()}
                    </time>
                  </div>
                )}
                <div className="metadata-item">
                  <span className="label">{t("intelligence.article.readingTime")}:</span>
                  <span className="value">{article.readingTime} min</span>
                </div>
              </div>
            </header>
          </div>
        </div>

        {/* Article Content */}
        <div className="article-body">
          <div className="container">
            {Array.isArray(article.sections) && article.sections.map((section, index) => (
              <section key={index} className="article-section">
                {section.title && <h2>{section.title}</h2>}
                <div className="section-body">{section.body}</div>
              </section>
            ))}
          </div>
        </div>

        {/* Sources */}
        {Array.isArray(article.sources) && article.sources.length > 0 && (
          <div className="article-sources">
            <div className="container">
              <h3>{t("intelligence.article.sources")}</h3>
              <ul>
                {article.sources.map((source, index) => (
                  <li key={index}>
                    {source.url ? (
                      <a href={source.url} target="_blank" rel="noopener noreferrer">
                        {source.title}
                      </a>
                    ) : (
                      source.title
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Return to List CTA */}
        <div className="article-footer">
          <div className="container">
            <Link to="/intelligence" className="btn">
              {t("intelligence.article.backToList")}
            </Link>
          </div>
        </div>

        {/* Assessment CTA */}
        <section className="section article-assessment-cta" aria-labelledby="article-cta-title">
          <div className="container cta-content">
            <div>
              <h2 id="article-cta-title">{t("intelligence.article.cta.title")}</h2>
              <p>{t("intelligence.article.cta.body")}</p>
            </div>
            <Link to="/contact" className="btn">
              {t("intelligence.article.cta.buttonText")}
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
