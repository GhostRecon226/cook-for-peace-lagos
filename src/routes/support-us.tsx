import { pageUrlMetadata } from "@/lib/site-metadata";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ExternalButton } from "@/components/site/ExternalButton";
import { Banknote, Utensils, Wrench, Megaphone } from "lucide-react";
import { donation, links, sponsors } from "@/config/site";
import { CtaBanner } from "@/components/site/CtaBanner";
import { SponsorWall } from "@/components/site/SponsorWall";
import { DonationCard } from "@/components/site/DonationCard";
export const Route = createFileRoute("/support-us")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Support Us — Cook for Peace Festival 3.0" },
      { name: "description", content: "Support Cook for Peace through funding, food and drinks, equipment or media coverage. Enquire about sponsoring or partnering." },
      { property: "og:title", content: "Support Us — Cook for Peace Festival 3.0" },
      { property: "og:description", content: "Support Cook for Peace through funding, food and drinks, equipment or media coverage. Enquire about sponsoring or partnering." },
      { property: "og:type", content: "website" },
      ...pageUrlMetadata("/support-us").meta,
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: pageUrlMetadata("/support-us").links,
    
  }),
  component: Page,
});
function Page() { return <>
<PageHero title="Support Cook for Peace" intro="Help bring communities together through food and peace." />
<section className="mx-auto max-w-6xl px-4 py-14"><SectionHeading eyebrow="Make a contribution" title="Ways to support" /><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[
{ Icon: Banknote, title: "Funding", text: "Contribute funding towards the festival." },
{ Icon: Utensils, title: "Food and drinks", text: "Support the festival with food and drinks." },
{ Icon: Wrench, title: "Equipment", text: "Contribute equipment for festival activities." },
{ Icon: Megaphone, title: "Media coverage", text: "Help share the festival through media coverage." },
].map(({ Icon, title, text }) => <div key={title} className="rounded-3xl bg-card p-6 shadow-soft"><Icon className="h-8 w-8 text-primary" aria-hidden /><h3 className="mt-4 text-xl font-bold">{title}</h3><p className="mt-2 text-muted-foreground">{text}</p></div>)}</div></section>
<section className="bg-secondary py-14"><div className="mx-auto max-w-6xl px-4"><SectionHeading eyebrow="Work with us" title="Sponsor and partner enquiry" /><p className="mb-6 max-w-2xl">Get in touch to discuss supporting Cook for Peace and bringing communities together.</p><ExternalButton href={links.sponsorFormUrl}>Partner with us</ExternalButton></div></section>
<section className="mx-auto max-w-6xl px-4 py-14"><SectionHeading eyebrow="With thanks" title="Our sponsors and partners" /><SponsorWall items={sponsors} /></section>
<section className="mx-auto max-w-6xl px-4 py-14"><SectionHeading eyebrow="Support the festival" title="Donate" /><DonationCard details={donation} /></section>
<CtaBanner title="Be part of Cook for Peace" text="Join us for Festival 3.0."><ExternalButton href={links.registerFormUrl} variant="light">Register Now</ExternalButton></CtaBanner>
</>; }
