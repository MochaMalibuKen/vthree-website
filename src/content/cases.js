export const PUBLICATION_STATUSES = Object.freeze([
  "draft",
  "internal-review",
  "approved",
  "published",
  "archived",
]);

export const CASE_STUDY_TEMPLATE = Object.freeze({
  id: "",
  slug: "",
  title: "",
  displayName: "",
  clientName: "",
  publicationStatus: "draft",
  permissionToPublish: false,
  permissionToUseClientName: false,
  permissionToUseLogo: false,
  permissionToUseImages: false,
  permissionToUseMetrics: false,
  permissionToUseQuote: false,
  permissionToUseExternalLink: false,
  permissionToUseNarrative: false,
  permissionToUseOutcomes: false,
  permissionToUseCompletionDate: false,
  industry: "",
  serviceCategories: [],
  summary: "",
  problem: "",
  approach: "",
  solution: "",
  outcomes: [],
  metrics: [],
  testimonial: "",
  quoteAttribution: "",
  logo: null,
  images: [],
  externalLink: "",
  featured: false,
  completionDate: "",
});

// This client-delivered registry must contain publication-cleared records only.
// Draft narratives and private evidence belong in a non-public governance system,
// not in the browser bundle. No existing case has documented publication approval.
export const caseStudies = Object.freeze([]);

export function isPublicCaseStudy(record) {
  return Boolean(
    record
      && record.id
      && record.slug
      && record.title
      && record.publicationStatus === "published"
      && record.permissionToPublish === true,
  );
}

function permittedImages(record) {
  if (!record.permissionToUseImages || !Array.isArray(record.images)) return [];
  return record.images
    .filter(image => image?.src && typeof image.alt === "string")
    .map(image => ({ src: image.src, alt: image.alt }));
}

function permittedLogo(record) {
  if (!record.permissionToUseLogo || !record.logo?.src || typeof record.logo.alt !== "string") return null;
  return { src: record.logo.src, alt: record.logo.alt };
}

export function toPublicCaseStudy(record) {
  if (!isPublicCaseStudy(record)) return null;

  const quoteApproved = record.permissionToUseQuote === true
    && Boolean(record.testimonial)
    && Boolean(record.quoteAttribution);

  return {
    id: record.id,
    slug: record.slug,
    title: record.title,
    displayName: record.displayName || record.title,
    clientName: record.permissionToUseClientName ? record.clientName : "",
    publicationStatus: record.publicationStatus,
    industry: record.industry || "",
    serviceCategories: Array.isArray(record.serviceCategories) ? record.serviceCategories : [],
    summary: record.permissionToUseNarrative ? record.summary : "",
    problem: record.permissionToUseNarrative ? record.problem : "",
    approach: record.permissionToUseNarrative ? record.approach : "",
    solution: record.permissionToUseNarrative ? record.solution : "",
    outcomes: record.permissionToUseOutcomes && Array.isArray(record.outcomes) ? record.outcomes : [],
    metrics: record.permissionToUseMetrics && Array.isArray(record.metrics) ? record.metrics : [],
    testimonial: quoteApproved ? record.testimonial : "",
    quoteAttribution: quoteApproved ? record.quoteAttribution : "",
    logo: permittedLogo(record),
    images: permittedImages(record),
    externalLink: record.permissionToUseExternalLink ? record.externalLink : "",
    featured: record.featured === true,
    completionDate: record.permissionToUseCompletionDate ? record.completionDate : "",
  };
}

export const publicCaseStudies = Object.freeze(
  caseStudies.map(toPublicCaseStudy).filter(Boolean),
);

export const findPublicCaseStudy = slug => (
  publicCaseStudies.find(study => study.slug === slug)
);
