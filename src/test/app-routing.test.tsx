import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { sponsors } from "@/config/site";
import { routeTree } from "@/routeTree.gen";
import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryHistory, createRootRoute, Outlet } from "@tanstack/react-router";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("renders the branded 404 for an unknown address", async () => {
    // Mount the actual root boundary without the document shell inside jsdom's div.
    const notFoundComponent = routeTree.options.notFoundComponent;
    if (!notFoundComponent) throw new Error("Root 404 boundary is missing");
    const testRoot = createRootRoute({ staticData: { sitemap: false }, component: Outlet, notFoundComponent });
    const router = createRouter({ routeTree: testRoot, history: createMemoryHistory({ initialEntries: ["/missing-page"] }) });
    await router.load();
    render(<RouterProvider router={router} />);
    expect(await screen.findByRole("heading", { name: "This page isn’t on the menu" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute("href", "/");
  });
  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });
  it("shows the Home sponsors section with all 13 sponsor logos", async () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() }, history: createMemoryHistory({ initialEntries: ["/"] }) });
    await router.load();
    render(<RouterProvider router={router} />);

    expect(await screen.findByRole("heading", { name: "Cook for Peace Festival 3.0" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Our sponsors & partners" })).toBeInTheDocument();
    expect(screen.queryByText("Sponsor logos coming soon")).not.toBeInTheDocument();
    for (const sponsor of sponsors) {
      expect(screen.getAllByAltText(sponsor.name).length).toBeGreaterThan(0);
    }
  });

  it("wraps only the three backlinked sponsor logos in sponsored links", async () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() }, history: createMemoryHistory({ initialEntries: ["/"] }) });
    await router.load();
    render(<RouterProvider router={router} />);

    expect(await screen.findByRole("heading", { name: "Our sponsors & partners" })).toBeInTheDocument();

    const backlinked = [
      { name: "Nestlé", url: "https://www.nestle-cwa.com/" },
      { name: "Ticketsdeck", url: "https://events.ticketsdeck.com/event/cookforpeacefestival" },
      { name: "Evogue Consulting", url: "https://evogueconsulting.com/" },
    ];
    for (const { name, url } of backlinked) {
      const link = screen.getAllByAltText(name)[0]?.closest("a");
      expect(link).not.toBeNull();
      expect(link).toHaveAttribute("href", url);
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "sponsored noopener");
    }

    const unlinked = sponsors.filter((sponsor) => !sponsor.url);
    expect(unlinked).toHaveLength(10);
    for (const sponsor of unlinked) {
      expect(screen.getAllByAltText(sponsor.name)[0]?.closest("a")).toBeNull();
    }
  });

  it("links phone and email on the Contact page and footer, and keeps WhatsApp empty", async () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() }, history: createMemoryHistory({ initialEntries: ["/contact"] }) });
    await router.load();
    render(<RouterProvider router={router} />);

    const phones = await screen.findAllByRole("link", { name: "0805 772 2794" });
    expect(phones).toHaveLength(2);
    for (const phone of phones) expect(phone).toHaveAttribute("href", "tel:+2348057722794");

    const emails = await screen.findAllByRole("link", { name: "Cookforpeacefestival@gmail.com" });
    expect(emails).toHaveLength(2);
    for (const email of emails) expect(email).toHaveAttribute("href", "mailto:Cookforpeacefestival@gmail.com");

    expect(screen.queryByText("Phone coming soon")).not.toBeInTheDocument();
    expect(screen.queryByText("Email coming soon")).not.toBeInTheDocument();

    const whatsapp = await screen.findByRole("heading", { name: "WhatsApp" });
    expect(whatsapp.parentElement?.textContent).toContain("Coming soon");
    expect(screen.queryByRole("link", { name: /wa\.me/ })).not.toBeInTheDocument();
  });
});
