import { siteUrl } from "@/config/site";

// Omitting these tags is safer than attributing a page to an unconfirmed address.
export function pageUrlMetadata(path: string, configuredUrl = siteUrl) {
  const base = configuredUrl.trim().replace(/\/+$/, "");
  if (!base) return { meta: [], links: [] };
  const url = `${base}${path.startsWith("/") ? path : `/${path}`}`;
  const shareImageUrl = `${base}/brand/cfp-og.png`;
  return {
    meta: [
      { property: "og:url", content: url },
      { property: "og:image", content: shareImageUrl },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Cook for Peace Festival official logo" },
      { name: "twitter:image", content: shareImageUrl },
      { name: "twitter:image:alt", content: "Cook for Peace Festival official logo" },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}