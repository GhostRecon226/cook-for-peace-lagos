import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryHistory } from "@tanstack/react-router";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("renders the branded 404 for an unknown address", async () => {
    const router = createRouter({ routeTree, history: createMemoryHistory({ initialEntries: ["/missing-page"] }), context: { queryClient: new QueryClient() } });
    // Test the route boundary without mounting the document shell inside jsdom's div.
    router.routeTree.update({ shellComponent: undefined, head: undefined });
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
