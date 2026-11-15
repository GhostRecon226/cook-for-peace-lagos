import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

export const Route = createFileRoute("/support-us")({
  head: () => ({
    meta: [
      { title: "Support Us — Cook for Peace Festival 3.0" },
      { name: "description", content: "Support Cook for Peace Festival 3.0 and help promote unity and communal peace in Lagos." },
      { property: "og:title", content: "Support Us — Cook for Peace Festival 3.0" },
      { property: "og:description", content: "Support Cook for Peace Festival 3.0 and help promote unity and communal peace in Lagos." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/support-us" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/support-us" }],
  }),
  component: () => <PlaceholderPage title="Support Us" intro="Help us bring communities together through food and peace." />,
});
