// Controlled Sprint 001 baseline: publish only Delivery- and Founder-approved articles.
export const intelligenceArticles = [];
export const findIntelligenceArticle = (slug) => intelligenceArticles.find(article => article.slug === slug);
