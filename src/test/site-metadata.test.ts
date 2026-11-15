import { describe, expect, it } from "vitest";
import { siteUrl } from "@/config/site";
import { pageUrlMetadata } from "@/lib/site-metadata";

describe("Confirmed site address metadata", () => {
  it("keeps the unconfirmed siteUrl empty", () => { expect(siteUrl).toBe(""); });
  it("omits canonical and og:url when no address is confirmed", () => {
    expect(pageUrlMetadata("/festival")).toEqual({ meta: [], links: [] });
  });
  it("self-references each page when an address is configured", () => {
    expect(pageUrlMetadata("/festival", "https://example.org/")).toEqual({
      meta: expect.arrayContaining([{ property: "og:url", content: "https://example.org/festival" }]),
      links: [{ rel: "canonical", href: "https://example.org/festival" }],
    });
  });
  it("omits share images when siteUrl is empty", () => {
    expect(pageUrlMetadata("/", "").meta).toEqual([]);
  });
  it("uses the supplied 1200 by 630 share image at the configured absolute address", () => {
    expect(pageUrlMetadata("/about", "https://example.org/").meta).toEqual(expect.arrayContaining([
      { property: "og:image", content: "https://example.org/brand/cfp-og.png" },
      { name: "twitter:image", content: "https://example.org/brand/cfp-og.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Cook for Peace Festival official logo" },
    ]));
  });
});