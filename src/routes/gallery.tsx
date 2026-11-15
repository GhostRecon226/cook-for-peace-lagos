import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Cook for Peace Festival 3.0" },
      { name: "description", content: "Photos and moments from Cook for Peace Festival editions in Lagos." },
      { property: "og:title", content: "Gallery — Cook for Peace Festival 3.0" },
      { property: "og:description", content: "Photos and moments from Cook for Peace Festival editions in Lagos." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/gallery" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: () => <PlaceholderPage title="Gallery" intro="Moments from past Cook for Peace festivals." />,
});
