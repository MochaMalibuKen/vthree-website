import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta.jsx";
import Insights from "../components/Insights.jsx";
import Labs from "../components/Labs.jsx";
import { getPublishedIntelligenceArticles } from "../content/intelligence.js";
import intelligenceHeroImage from "../assets/images/proof system/v3clientzeroPIB.png";

export default function IntelligencePage() {
  const { t } = useTranslation();
  const publishedArticles = getPublishedIntelligenceArticles();

  return (
    <main>
      <PageMeta 
        title={t("intelligence.pageTitle")} 
        description={t("intelligence.pageDescription")} 
        path="/intelligence" 
      />
      
      {/* Intelligence Hero */}
      <section className="section intelligence-hero" aria-labelledby="intelligence-hero-title">
        <div className="container intelligence-hero-layout">
          <div className="intelligence-hero-copy">
            <p className="eyebrow">{t("intelligence.hero.eyebrow")}</p>
            <h1 id="intelligence-hero-title" className="section-title">{t("intelligence.hero.title")}</h1>
            <p className="sub section-intro">{t("intelligence.hero.subtitle")}</p>
          </div>
        </div>
      </section>

      {/* Purpose */}
      <section className="section intelligence-purpose" aria-labelledby="intelligence-purpose-title">
        <div className="container">
          <div className="intelligence-purpose-content">
            <h2 id="intelligence-purpose-title">{t("intelligence.purpose.title")}</h2>
            <p>{t("intelligence.purpose.body")}</p>
          </div>
          <div className="intelligence-hero-media">
            <img src={intelligenceHeroImage} alt={t("intelligence.hero.imageAlt", { defaultValue: "Visual overview of the VThree intelligence framework" })} />
          </div>
        </div>
      </section>

      {/* Research Domains via Insights */}
      <Insights headingLevel="h2" />

      {/* Publications Section */}
      <section className="section intelligence-publications" aria-labelledby="intelligence-publications-title">
        <div className="container">
          <h2 id="intelligence-publications-title">{t("intelligence.publications.title")}</h2>
          
          {publishedArticles.length === 0 ? (
            <div className="intelligence-empty-state">
              <p className="empty-state-message">{t("intelligence.publications.emptyState")}</p>
              <p className="empty-state-explanation">{t("intelligence.publications.emptyExplanation")}</p>
            </div>
          ) : (
            <div className="article-list">
              {publishedArticles.map(article => (
                <article key={article.slug} className="article-preview">
                  <div className="article-metadata">
                    <span className="article-category">{article.category}</span>
                    <time dateTime={article.publishedDate}>{new Date(article.publishedDate).toLocaleDateString()}</time>
                    <span className="article-reading-time">{article.readingTime} min read</span>
                  </div>
                  <Link to={`/intelligence/${article.slug}`} className="article-link">
                    <h3>{article.title}</h3>
                  </Link>
                  <p>{article.summary}</p>
                  <Link to={`/intelligence/${article.slug}`} className="read-more-link">
                    {t("intelligence.publications.readMore")} <span aria-hidden="true">→</span>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Editorial Standards */}
      <section className="section intelligence-standards" aria-labelledby="intelligence-standards-title">
        <div className="container">
          <h2 id="intelligence-standards-title">{t("intelligence.standards.title")}</h2>
          <p>{t("intelligence.standards.intro")}</p>
          <ul className="standards-list">
            {Array.isArray(t("intelligence.standards.items", { returnObjects: true })) && 
              t("intelligence.standards.items", { returnObjects: true }).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
          </ul>
        </div>
      </section>

      {/* Research Areas via Labs */}
      <Labs />
    </main>
  );
}
