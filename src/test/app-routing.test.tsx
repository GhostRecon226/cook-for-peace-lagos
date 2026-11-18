import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { sponsors } from "@/config/site";
import { whatsappChatUrl } from "@/lib/whatsapp";
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

  it("shows the team card on the About page", async () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() }, history: createMemoryHistory({ initialEntries: ["/about"] }) });
    await router.load();
    render(<RouterProvider router={router} />);

    expect(await screen.findByRole("heading", { name: "Hadji Kwame Ahmed" })).toBeInTheDocument();
    expect(screen.getByText("Lead Volunteer, Cook for Peace Festival")).toBeInTheDocument();
    const photo = screen.getByAltText("Portrait of Hadji Kwame Ahmed");
    expect(photo).toHaveAttribute("src", "/team/hadji-kwame-ahmed.jpg");
    expect(screen.queryByText("Our organising team will be introduced here soon.")).not.toBeInTheDocument();
  });

  it("shows the approved Mission and Vision on the About page", async () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() }, history: createMemoryHistory({ initialEntries: ["/about"] }) });
    await router.load();
    render(<RouterProvider router={router} />);

    expect(await screen.findByText("To promote peaceful coexistence and social development through greater engagement and fun interactions.")).toBeInTheDocument();
    expect(screen.getByText("To become a platform that connects people across global communities, where discussions on bridging social gaps and corresponding interventions are proposed and implemented.")).toBeInTheDocument();
    // Objectives is still pending client input, so its empty state stays.
    expect(screen.getAllByText("To be announced")).toHaveLength(1);
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

  it("links phone, email and WhatsApp on the Contact page and footer", async () => {
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

    const whatsappLinks = await screen.findAllByRole("link", { name: "Chat on WhatsApp" });
    // Contact card, footer row and the floating button.
    expect(whatsappLinks).toHaveLength(3);
    for (const link of whatsappLinks) {
      expect(link).toHaveAttribute("href", "https://wa.me/2348057722794?text=Hello%2C%20I%20have%20a%20question%20about%20Cook%20for%20Peace%20Festival%203.0.");
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    }
    expect(screen.queryByText("WhatsApp coming soon")).not.toBeInTheDocument();
  });

  it("shows the floating WhatsApp button on every page", async () => {
    for (const path of ["/", "/contact"]) {
      const router = createRouter({ routeTree, context: { queryClient: new QueryClient() }, history: createMemoryHistory({ initialEntries: [path] }) });
      await router.load();
      const { unmount } = render(<RouterProvider router={router} />);

      const chatLinks = await screen.findAllByRole("link", { name: "Chat on WhatsApp" });
      const float = chatLinks.find((link) => link.className.includes("fixed"));
      if (!float) throw new Error(`Floating WhatsApp button is missing on ${path}`);
      expect(float).toHaveAttribute("href", whatsappChatUrl());
      expect(float).toHaveAttribute("target", "_blank");
      expect(float).toHaveAttribute("rel", "noopener noreferrer");
      expect(float).toHaveAttribute("aria-label", "Chat on WhatsApp");
      unmount();
    }
  });

  it("links Instagram and X on the Contact page and footer, and renders nothing for empty socials", async () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() }, history: createMemoryHistory({ initialEntries: ["/contact"] }) });
    await router.load();
    render(<RouterProvider router={router} />);

    const wired = [
      { name: "Cook for Peace Festival on Instagram", href: "https://www.instagram.com/cookforpeacefestival/" },
      { name: "Cook for Peace Festival on X (Twitter)", href: "https://x.com/cook4peacefest" },
    ];
    for (const { name, href } of wired) {
      // Once in the Contact card and once in the footer.
      const links = await screen.findAllByRole("link", { name });
      expect(links).toHaveLength(2);
      for (const link of links) {
        expect(link).toHaveAttribute("href", href);
        expect(link).toHaveAttribute("target", "_blank");
        expect(link).toHaveAttribute("rel", "noopener noreferrer");
      }
    }

    // Handles are visible text on the Contact card.
    expect(screen.getByText("@cookforpeacefestival")).toBeInTheDocument();
    expect(screen.getByText("@cook4peacefest")).toBeInTheDocument();

    // Facebook and YouTube have no URL, so they render nothing at all.
    expect(screen.queryByText("Facebook: Coming soon")).not.toBeInTheDocument();
    expect(screen.queryByText("YouTube: Coming soon")).not.toBeInTheDocument();
    expect(screen.queryByTitle("Link coming soon")).not.toBeInTheDocument();
    expect(screen.queryAllByLabelText("Facebook (coming soon)")).toHaveLength(0);
    expect(screen.queryAllByLabelText("YouTube (coming soon)")).toHaveLength(0);
  });
});
