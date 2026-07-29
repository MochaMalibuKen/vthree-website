import { useEffect } from "react";

const SITE_NAME = "VThree";
const SITE_URL = "https://vthreeagency.com";
const DEFAULT_IMAGE = `${SITE_URL}/hero/bigcity.jpg`;
const DEFAULT_IMAGE_ALT = "VThree digital strategy visual";
const DEFAULT_IMAGE_WIDTH = "2048";
const DEFAULT_IMAGE_HEIGHT = "2048";

function normalizePath(path) {
  if (!path || path === "/") return "/";
  return path.startsWith("/") ? path : `/${path}`;
}

function upsertMeta(selector, attributes) {
  let meta = document.querySelector(selector);
  if (!meta) {
    meta = document.createElement("meta");
    document.head.appendChild(meta);
  }
  Object.entries(attributes).forEach(([key, value]) => {
    meta.setAttribute(key, value);
  });
}

export default function PageMeta({
  title,
  description,
  path = "/",
  noIndex = false,
  type = "website",
  image = DEFAULT_IMAGE,
  imageAlt = DEFAULT_IMAGE_ALT,
  imageWidth = DEFAULT_IMAGE_WIDTH,
  imageHeight = DEFAULT_IMAGE_HEIGHT
}) {
  useEffect(() => {
    const routePath = normalizePath(path);
    const canonicalUrl = `${SITE_URL}${routePath === "/" ? "/" : routePath}`;
    const pageTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

    document.title = pageTitle;

    upsertMeta('meta[name="description"]', { name: "description", content: description });
    upsertMeta('meta[name="robots"]', { name: "robots", content: noIndex ? "noindex, nofollow" : "index, follow" });
    upsertMeta('meta[name="theme-color"]', { name: "theme-color", content: "#8C1D40" });

    const canonical = document.querySelector('link[rel="canonical"]') || document.createElement("link");
    canonical.rel = "canonical";
    canonical.href = canonicalUrl;
    if (!canonical.parentNode) document.head.appendChild(canonical);

    upsertMeta('meta[property="og:type"]', { property: "og:type", content: type });
    upsertMeta('meta[property="og:site_name"]', { property: "og:site_name", content: SITE_NAME });
    upsertMeta('meta[property="og:locale"]', { property: "og:locale", content: "en_US" });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: pageTitle });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: description });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: canonicalUrl });
    upsertMeta('meta[property="og:image"]', { property: "og:image", content: image });
    upsertMeta('meta[property="og:image:alt"]', { property: "og:image:alt", content: imageAlt });
    upsertMeta('meta[property="og:image:width"]', { property: "og:image:width", content: imageWidth });
    upsertMeta('meta[property="og:image:height"]', { property: "og:image:height", content: imageHeight });

    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: pageTitle });
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: description });
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: image });
    upsertMeta('meta[name="twitter:image:alt"]', { name: "twitter:image:alt", content: imageAlt });
  }, [description, image, imageAlt, imageHeight, imageWidth, noIndex, path, title, type]);

  return null;
}
