import { describe, expect, it } from "vitest";
import { createRootRoute, createRoute, createRouter } from "@tanstack/react-router";
import { sitemapStaticPaths, sitemapXML } from "@/lib/sitemap";

describe("Public sitemap", () => {
  it("includes public pages but excludes endpoints and private descendants", () => {
    const root = createRootRoute({ staticData: { sitemap: false } });
    const home = createRoute({ getParentRoute: () => root, path: "/", staticData: { sitemap: true } });
    const about = createRoute({ getParentRoute: () => root, path: "about", staticData: { sitemap: true } });
    const endpoint = createRoute({ getParentRoute: () => root, path: "sitemap.xml", staticData: { sitemap: false } });
    const privateArea = createRoute({ getParentRoute: () => root, path: "private", staticData: { sitemap: "exclude-subtree" } });
    const privatePage = createRoute({ getParentRoute: () => privateArea, path: "account", staticData: { sitemap: true } });
    const router = createRouter({ routeTree: root.addChildren([home, about, endpoint, privateArea.addChildren([privatePage])]) });
    expect(sitemapStaticPaths(router)).toEqual(["/", "/about"]);
  });
  it("uses the confirmed public domain without invented modification dates", () => {
    const xml = sitemapXML("https://cookforpeacefestival.com", [{ path: "/" }, { path: "/festival" }, { path: "/festival" }]);
    expect(xml).toContain("<loc>https://cookforpeacefestival.com/</loc>");
    expect(xml).toContain("<loc>https://cookforpeacefestival.com/festival</loc>");
    expect(xml.match(/<url>/g)).toHaveLength(2);
    expect(xml).not.toContain("lastmod");
  });
  it("rejects external and traversal paths", () => {
    for (const path of ["//other.example", "/../private", "/about?x=1"]) {
      expect(() => sitemapXML("https://cookforpeacefestival.com", [{ path }])).toThrow("Invalid sitemap path");
    }
  });
});