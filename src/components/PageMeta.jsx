import { useEffect } from "react";

const SITE_NAME = "VTHREE";
const SITE_URL = "https://vthreeagency.com";

export default function PageMeta({ title, description, path = "/", noIndex = false }) {
  useEffect(() => {
    document.title = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) descriptionMeta.content = description;
    const robotsMeta = document.querySelector('meta[name="robots"]');
    if (robotsMeta) robotsMeta.content = noIndex ? "noindex, nofollow" : "index, follow";
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.href = `${SITE_URL}${path}`;
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = document.title;
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.content = description;
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.content = `${SITE_URL}${path}`;
  }, [description, noIndex, path, title]);
  return null;
}
