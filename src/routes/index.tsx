import { eventStructuredData } from "@/lib/event-metadata";
import { RegistrationAction, RegistrationNotice } from "@/components/site/RegistrationAction";
import { AddToCalendar } from "@/components/site/AddToCalendar";
import { ShareButton } from "@/components/site/ShareButton";
import { TriBar } from "@/components/site/TriBar";
import { pageUrlMetadata } from "@/lib/site-metadata";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CalendarDays, Clock, MapPin, Ticket, Users, HandHelping, Handshake, Mail, ArrowRight,
} from "lucide-react";
import { event, links, sponsors } from "@/config/site";
import { ExternalButton } from "@/components/site/ExternalButton";
import { Countdown } from "@/components/site/Countdown";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ActivityCards } from "@/components/site/ActivityCards";
import { VenueBlock } from "@/components/site/VenueBlock";
import { SponsorWall } from "@/components/site/SponsorWall";
import { CtaBanner } from "@/components/site/CtaBanner";

const title = "Cook for Peace Festival 3.0 — 18 Dec 2026, Surulere, Lagos";
const desc = "Free community food festival in Lagos promoting unity and peace. Cooking, food sharing, lectures, music, games and awards. Register now.";

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title },
      { name: "description", content: desc },
      { property: "og:title", content: title },
      { property: "og:description", content: desc },
      { property: "og:type", content: "website" },
      ...pageUrlMetadata("/").meta,
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: pageUrlMetadata("/").links,
    scripts: [{ type: "application/ld+json", children: JSON.stringify(eventStructuredData("/")) }],
  }),
  component: Home,
});

const facts = [
  { Icon: CalendarDays, label: "Date", value: "Fri, 18 Dec 2026" },
  { Icon: Clock, label: "Time", value: "9 AM – 5 PM" },
  { Icon: MapPin, label: "Venue", value: "The Stable, Surulere" },
  { Icon: Ticket, label: "Entry", value: "Free" },
  { Icon: Users, label: "Expected", value: "5,000+" },
];


function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-12 sm:pt-20 lg:grid lg:grid-cols-[minmax(0,1fr)_300px] lg:items-center lg:gap-8">
          <div>
          <p className="inline-block rounded-full bg-accent px-4 py-1 font-heading text-xs font-bold uppercase tracking-widest text-accent-foreground">
            {event.edition}
          </p>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-6xl">{event.name}</h1>
          <p className="mt-3 font-heading text-xl font-semibold sm:text-2xl">{event.tagline}</p>
          <ul className="mt-6 space-y-2 text-base">
            <li className="flex items-center gap-2"><CalendarDays className="h-5 w-5 shrink-0" aria-hidden />{event.dateLabel} · {event.timeLabel}</li>
            <li className="flex items-center gap-2"><MapPin className="h-5 w-5 shrink-0" aria-hidden />{event.venueName}, {event.venueAddress}</li>
          </ul>
          <div className="mt-8"><Countdown /></div>
          <div className="mt-8 flex flex-wrap items-start gap-3">
            <RegistrationAction variant="accent" />
            <ExternalButton href={links.volunteerFormUrl} variant="light">Volunteer</ExternalButton>
          </div>
          <RegistrationNotice />
          </div>
          <div className="hidden rounded-lg bg-background p-6 lg:block">
            <img src="/brand/cfp-logo.png" alt="Cook for Peace Festival" width={1000} height={532} className="h-auto w-full" />
          </div>
        </div>
        <TriBar />
      </section>

      {/* Quick facts */}
      <section aria-label="Quick facts" className="mx-auto max-w-6xl px-4 py-8">
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {facts.map(({ Icon, label, value }) => (
            <li key={label} className="flex items-center gap-3 rounded-2xl bg-card p-4 shadow-soft last:col-span-2 sm:last:col-span-1">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary"><Icon className="h-5 w-5" aria-hidden /></span>
              <span><span className="block text-xs uppercase tracking-wide text-muted-foreground">{label}</span>
                <span className="font-heading font-semibold">{value}</span></span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto flex max-w-6xl flex-wrap gap-4 px-4 pb-6" aria-label="Calendar and sharing"><AddToCalendar /><ShareButton /></section>

      {/* About teaser */}
      <Reveal className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-3xl bg-card p-8 shadow-soft sm:p-12">
          <SectionHeading eyebrow="About" title="A festival of food, unity and peace" />
          <p className="max-w-3xl text-lg leading-relaxed">
            Cook for Peace is {event.purpose.charAt(0).toLowerCase() + event.purpose.slice(1)} Now in its third year after the 2024 and 2025 editions,
            the festival centres the communities of Orile Iganmu, Coker-Aguda LCDA and Surulere.
          </p>
          <Link to="/about" className="mt-6 inline-flex items-center gap-2 font-heading font-semibold text-primary underline-offset-4 hover:underline">
            Read our story <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </Reveal>

      <div className="divider-dots mx-auto max-w-6xl" aria-hidden="true" />

      {/* What to expect */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <Reveal><SectionHeading eyebrow="On the day" title="What to expect" /></Reveal>
        <ActivityCards />
      </section>

      {/* Get involved */}
      <section className="bg-secondary py-14">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal><SectionHeading eyebrow="Join in" title="Get involved" /></Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { Icon: Ticket, title: "Attend", text: "Entry is free. Register to secure your spot.", label: "Register", href: links.registerFormUrl, hash: "attend" },
              { Icon: HandHelping, title: "Volunteer", text: "Lend a hand and help the day run smoothly.", label: "Volunteer", href: links.volunteerFormUrl, hash: "volunteer" },
              { Icon: Handshake, title: "Sponsor or partner", text: "Work with us to grow peace in our communities.", label: "Partner with us", href: links.sponsorFormUrl, hash: "sponsor" },
            ].map(({ Icon, title, text, label, href, hash }) => (
              <Reveal key={title} className="h-full">
                <div className="flex h-full flex-col rounded-3xl bg-card p-6 shadow-soft">
                  <Icon className="h-8 w-8 text-primary" aria-hidden />
                  <h3 className="mt-3 text-xl font-bold">{title}</h3>
                  <p className="mt-1 flex-1 text-muted-foreground">{text}</p>
                  <div className="mt-5 flex flex-wrap items-center gap-4">
                    <ExternalButton href={href}>{label}</ExternalButton>
                    <Link to="/get-involved" hash={hash} className="font-heading text-sm font-semibold text-primary underline-offset-4 hover:underline">Learn more<span className="sr-only"> about {title.toLowerCase()}</span></Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <VenueBlock />

      {/* Sponsors — hidden entirely until the config lists sponsors */}
      {sponsors.length > 0 && (
        <section aria-labelledby="sponsors-h" className="mx-auto max-w-6xl px-4 py-10">
          <h2 id="sponsors-h" className="text-center font-heading text-sm font-bold uppercase tracking-widest text-muted-foreground">Our sponsors & partners</h2>
          <div className="mt-6"><SponsorWall items={sponsors} home /></div>
        </section>
      )}

      {/* Newsletter */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <Reveal>
          <div className="flex flex-col items-start gap-4 rounded-3xl border-2 border-accent bg-card p-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <Mail className="h-8 w-8 shrink-0 text-accent-strong" aria-hidden />
              <div>
                <h2 className="text-2xl font-bold">Stay in the loop</h2>
                <p className="text-muted-foreground">Get festival updates and announcements.</p>
              </div>
            </div>
            <ExternalButton href={links.newsletterFormUrl} variant="outline">Join the newsletter</ExternalButton>
          </div>
        </Reveal>
      </section>

      <CtaBanner title="Join us on 18 December" text="Free entry. Good food. Great people. Register to be part of it.">
        <ExternalButton href={links.registerFormUrl} variant="light">Register Now</ExternalButton>
      </CtaBanner>
    </>
  );
}
