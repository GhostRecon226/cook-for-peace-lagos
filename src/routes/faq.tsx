import { pageUrlMetadata } from "@/lib/site-metadata";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ExternalButton } from "@/components/site/ExternalButton";
import { Link } from "@tanstack/react-router";
import { faqs } from "@/config/site";
import { FaqList } from "@/components/site/FaqList";
import { Button } from "@/components/ui/button";
export const Route = createFileRoute("/faq")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Frequently asked questions — Cook for Peace Festival 3.0" },
      { name: "description", content: "Answers about Cook for Peace Festival 3.0, free entry, registration, volunteering and supporting the festival." },
      { property: "og:title", content: "Frequently asked questions — Cook for Peace Festival 3.0" },
      { property: "og:description", content: "Answers about Cook for Peace Festival 3.0, free entry, registration, volunteering and supporting the festival." },
      { property: "og:type", content: "website" },
      ...pageUrlMetadata("/faq").meta,
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: pageUrlMetadata("/faq").links,
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }],
  }),
  component: Page,
});
function Page() { return <><PageHero title="Frequently asked questions" intro="Your questions about Cook for Peace Festival 3.0." /><section className="mx-auto max-w-3xl px-4 py-14"><FaqList items={faqs} /></section><section className="mx-auto max-w-3xl px-4 pb-16"><h2 className="mb-4 text-2xl font-bold">Still have a question?</h2><Button asChild className="min-h-11"><Link to="/contact">Contact us</Link></Button></section></>; }
