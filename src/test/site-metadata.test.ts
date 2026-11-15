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
      meta: [{ property: "og:url", content: "https://example.org/festival" }],
      links: [{ rel: "canonical", href: "https://example.org/festival" }],
    });
  });
});