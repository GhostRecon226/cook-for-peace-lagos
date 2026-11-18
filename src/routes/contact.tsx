import { pageUrlMetadata } from "@/lib/site-metadata";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ExternalButton } from "@/components/site/ExternalButton";
import { Mail, Phone, MessageCircle, Send, Share2, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { contact, links, social, socialHandles } from "@/config/site";
import { whatsappChatUrl } from "@/lib/whatsapp";
import { VenueBlock } from "@/components/site/VenueBlock";
import { Button } from "@/components/ui/button";
export const Route = createFileRoute("/contact")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Contact — Cook for Peace Festival 3.0" },
      { name: "description", content: "Get in touch with the Cook for Peace team and find the festival venue in Surulere, Lagos." },
      { property: "og:title", content: "Contact — Cook for Peace Festival 3.0" },
      { property: "og:description", content: "Get in touch with the Cook for Peace team and find the festival venue in Surulere, Lagos." },
      { property: "og:type", content: "website" },
      ...pageUrlMetadata("/contact").meta,
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: pageUrlMetadata("/contact").links,
    
  }),
  component: Page,
});

// Only accounts with a URL are shown; empty ones render nothing.
const socialLinks = [
  { label: "Facebook", href: social.facebook, handle: "", Icon: Facebook },
  { label: "Instagram", href: social.instagram, handle: socialHandles.instagram, Icon: Instagram },
  { label: "X (Twitter)", href: social.x, handle: socialHandles.x, Icon: Twitter },
  { label: "YouTube", href: social.youtube, handle: "", Icon: Youtube },
].filter(({ href }) => href);

function Page() { return <><PageHero title="Contact us" intro="Get in touch with the Cook for Peace team." />
<section className="mx-auto max-w-6xl px-4 py-14"><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
<div className="rounded-3xl bg-card p-6 shadow-soft"><Send className="h-7 w-7 text-primary" aria-hidden /><h2 className="mt-3 text-xl font-bold">Send us a message</h2><div className="mt-4">{links.contactFormUrl ? <ExternalButton href={links.contactFormUrl}>Send a message</ExternalButton> : <p className="text-muted-foreground">Coming soon</p>}</div></div>
{[{ Icon: Mail, title: "Email", value: contact.email, href: `mailto:${contact.email}` }, { Icon: Phone, title: "Phone", value: contact.phone, href: `tel:${contact.phoneHref}` }, { Icon: MessageCircle, title: "WhatsApp", value: contact.whatsapp.replace(/\D/g, ""), href: whatsappChatUrl() }].map(({ Icon, title, value, href }) => <div key={title} className="min-w-0 rounded-3xl bg-card p-6 shadow-soft"><Icon className="h-7 w-7 text-primary" aria-hidden /><h2 className="mt-3 text-xl font-bold">{title}</h2><div className="mt-4">{value ? <Button asChild variant="link" className="h-auto min-h-11 max-w-full whitespace-normal break-all p-0"><a href={href} {...(title === "WhatsApp" ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{title === "WhatsApp" ? "Chat on WhatsApp" : value}</a></Button> : <p className="text-muted-foreground">Coming soon</p>}</div></div>)}
<div className="rounded-3xl bg-card p-6 shadow-soft"><Share2 className="h-7 w-7 text-primary" aria-hidden /><h2 className="mt-3 text-xl font-bold">Social media</h2><ul className="mt-4 space-y-3">{socialLinks.map(({ label, href, handle, Icon }) => <li key={label}><Button asChild variant="link" className="min-h-11 p-0"><a href={href} target="_blank" rel="noopener noreferrer" aria-label={`Cook for Peace Festival on ${label}`}><Icon aria-hidden />{`@${handle}`}</a></Button></li>)}</ul></div>
</div></section><VenueBlock /></>; }
