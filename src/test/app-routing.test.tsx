import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryHistory, createRootRoute, Outlet } from "@tanstack/react-router";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("renders the branded 404 for an unknown address", async () => {
    // Mount the actual root boundary without the document shell inside jsdom's div.
    const testRoot = createRootRoute({ component: Outlet, notFoundComponent: routeTree.options.notFoundComponent });
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
});
