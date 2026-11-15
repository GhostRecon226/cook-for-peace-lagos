import { siteUrl } from "@/config/site";

// Omitting these tags is safer than attributing a page to an unconfirmed address.
export function pageUrlMetadata(path: string, configuredUrl = siteUrl) {
  const base = configuredUrl.trim().replace(/\/+$/, "");
  if (!base) return { meta: [], links: [] };
  const url = `${base}${path.startsWith("/") ? path : `/${path}`}`;
  return {
    meta: [{ property: "og:url", content: url }],
    links: [{ rel: "canonical", href: url }],
  };
}