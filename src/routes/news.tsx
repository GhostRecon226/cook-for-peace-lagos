import { pageUrlMetadata } from "@/lib/site-metadata";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ExternalButton } from "@/components/site/ExternalButton";
import { Mail } from "lucide-react";
import { links, news } from "@/config/site";
import { NewsList } from "@/components/site/NewsList";
export const Route = createFileRoute("/news")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "News and announcements — Cook for Peace Festival 3.0" },
      { name: "description", content: "News and announcements from Cook for Peace Festival. Join the newsletter for festival updates." },
      { property: "og:title", content: "News and announcements — Cook for Peace Festival 3.0" },
      { property: "og:description", content: "News and announcements from Cook for Peace Festival. Join the newsletter for festival updates." },
      { property: "og:type", content: "website" },
      ...pageUrlMetadata("/news").meta,
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: pageUrlMetadata("/news").links,
    
  }),
  component: Page,
});
function Page() { return <><PageHero title="News and announcements" intro="Updates from Cook for Peace." /><section className="mx-auto max-w-6xl px-4 py-14"><NewsList items={news} /></section><section className="bg-secondary py-14"><div className="mx-auto max-w-6xl px-4"><Mail className="mb-4 h-8 w-8 text-primary" aria-hidden /><SectionHeading eyebrow="Newsletter" title="Stay in the loop" /><p className="mb-6">Get festival updates and announcements.</p><ExternalButton href={links.newsletterFormUrl}>Join the newsletter</ExternalButton></div></section></>; }
