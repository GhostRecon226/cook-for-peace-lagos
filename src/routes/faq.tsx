import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Cook for Peace Festival 3.0" },
      { name: "description", content: "Frequently asked questions about Cook for Peace Festival 3.0, 18 December 2026 in Surulere, Lagos." },
      { property: "og:title", content: "FAQ — Cook for Peace Festival 3.0" },
      { property: "og:description", content: "Frequently asked questions about Cook for Peace Festival 3.0, 18 December 2026 in Surulere, Lagos." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/faq" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: () => <PlaceholderPage title="FAQ" intro="Answers to common questions about the festival." />,
});
