import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

export const Route = createFileRoute("/festival")({
  head: () => ({
    meta: [
      { title: "The Festival — Cook for Peace Festival 3.0" },
      { name: "description", content: "Details on Cook for Peace Festival 3.0: cooking, food sharing, lectures, panel, music, games and awards in Surulere, Lagos." },
      { property: "og:title", content: "The Festival — Cook for Peace Festival 3.0" },
      { property: "og:description", content: "Details on Cook for Peace Festival 3.0: cooking, food sharing, lectures, panel, music, games and awards in Surulere, Lagos." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/festival" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/festival" }],
  }),
  component: () => <PlaceholderPage title="The Festival" intro="What happens at Cook for Peace Festival 3.0 on 18 December 2026." />,
});
