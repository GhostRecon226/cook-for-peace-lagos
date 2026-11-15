import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

export const Route = createFileRoute("/get-involved")({
  head: () => ({
    meta: [
      { title: "Get Involved — Cook for Peace Festival 3.0" },
      { name: "description", content: "Ways to take part in Cook for Peace Festival 3.0: register to attend, volunteer, or become a sponsor or partner." },
      { property: "og:title", content: "Get Involved — Cook for Peace Festival 3.0" },
      { property: "og:description", content: "Ways to take part in Cook for Peace Festival 3.0: register to attend, volunteer, or become a sponsor or partner." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/get-involved" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/get-involved" }],
  }),
  component: () => <PlaceholderPage title="Get Involved" intro="Attend, volunteer, or partner with Cook for Peace Festival." />,
});
