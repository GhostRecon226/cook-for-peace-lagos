import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Cook for Peace Festival 3.0" },
      { name: "description", content: "Learn about Cook for Peace Festival, a holiday food festival in Lagos promoting unity, communal peace and social development." },
      { property: "og:title", content: "About — Cook for Peace Festival 3.0" },
      { property: "og:description", content: "Learn about Cook for Peace Festival, a holiday food festival in Lagos promoting unity, communal peace and social development." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: () => <PlaceholderPage title="About" intro="The story and purpose behind Cook for Peace Festival." />,
});
