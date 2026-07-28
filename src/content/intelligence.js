// Controlled Sprint 001 baseline: publish only Delivery- and Founder-approved articles.
// Publication states: draft, internal-review, executive-review, approved, published, archived
export const intelligenceArticles = [];

/**
 * Publication schema for Intelligence articles
 * @typedef {Object} IntelligenceArticle
 * @property {string} slug - URL-safe identifier
 * @property {string} title - Article title
 * @property {string} summary - Short description
 * @property {string} category - Research category
 * @property {string} author - Author name (must be known)
 * @property {string} publishedDate - ISO date string (YYYY-MM-DD)
 * @property {string} updatedDate - ISO date string (YYYY-MM-DD)
 * @property {number} readingTime - Estimated reading time in minutes
 * @property {'draft'|'internal-review'|'executive-review'|'approved'|'published'|'archived'} status - Publication state
 * @property {boolean} featured - Show in featured slots
 * @property {string} seoTitle - SEO-optimized title
 * @property {string} seoDescription - SEO-optimized description
 * @property {Array} sections - Article content sections [{title, body}]
 * @property {Array} sources - Reference sources [{title, url}]
 */

/**
 * Get only published Intelligence articles, in reverse chronological order
 * @returns {Array} Published articles ready for public display
 */
export const getPublishedIntelligenceArticles = () => {
  return intelligenceArticles
    .filter(article => article.status === 'published')
    .sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate));
};

/**
 * Get featured published articles
 * @param {number} limit - Maximum articles to return
 * @returns {Array} Published featured articles
 */
export const getFeaturedIntelligenceArticles = (limit = 3) => {
  return getPublishedIntelligenceArticles()
    .filter(article => article.featured === true)
    .slice(0, limit);
};

/**
 * Find an article by slug. Only returns published articles.
 * @param {string} slug - URL-safe article identifier
 * @returns {Object|undefined} Published article or undefined
 */
export const findIntelligenceArticle = (slug) => {
  const article = intelligenceArticles.find(article => article.slug === slug);
  // Only expose published articles
  if (article && article.status === 'published') {
    return article;
  }
  return undefined;
};

/**
 * Internal: find article by slug regardless of publication status
 * Used for editorial previews and validation only
 * @param {string} slug - URL-safe article identifier
 * @returns {Object|undefined} Article (any status) or undefined
 */
export const findIntelligenceArticleBySlug = (slug) => {
  return intelligenceArticles.find(article => article.slug === slug);
};
