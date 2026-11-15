import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Cook for Peace Festival 3.0" },
      { name: "description", content: "Contact the Cook for Peace Festival team in Lagos." },
      { property: "og:title", content: "Contact — Cook for Peace Festival 3.0" },
      { property: "og:description", content: "Contact the Cook for Peace Festival team in Lagos." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: () => <PlaceholderPage title="Contact" intro="Get in touch with the Cook for Peace team." />,
});
