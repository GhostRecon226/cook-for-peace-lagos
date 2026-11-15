import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy notice — Cook for Peace Festival 3.0" },
      { name: "description", content: "Privacy notice for Cook for Peace Festival registration. The notice will be published before registration opens." },
      { property: "og:title", content: "Privacy notice — Cook for Peace Festival 3.0" },
      { property: "og:description", content: "Privacy notice for Cook for Peace Festival registration. The notice will be published before registration opens." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://cook-for-peace-lagos.lovable.app/privacy" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cook-for-peace-lagos.lovable.app/privacy" }],
    
  }),
  component: Page,
});
function Page() { return <><PageHero title="Privacy notice" intro="Our privacy notice will be published here before registration opens." /></>; }
