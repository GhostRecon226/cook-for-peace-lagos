import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News — Cook for Peace Festival 3.0" },
      { name: "description", content: "Latest news and announcements for Cook for Peace Festival 3.0 in Lagos." },
      { property: "og:title", content: "News — Cook for Peace Festival 3.0" },
      { property: "og:description", content: "Latest news and announcements for Cook for Peace Festival 3.0 in Lagos." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/news" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/news" }],
  }),
  component: () => <PlaceholderPage title="News" intro="Updates and announcements about the festival." />,
});
