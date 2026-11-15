import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CalendarDays, Clock, MapPin, Ticket, Users, ChefHat, HandHeart, Mic, Music, Gamepad2, Trophy,
  HandHelping, Handshake, Mail, Navigation, ArrowRight,
} from "lucide-react";
import { event, links } from "@/config/site";
import { ExternalButton } from "@/components/site/ExternalButton";
import { Countdown } from "@/components/site/Countdown";
import { Reveal } from "@/components/site/Reveal";

const title = "Cook for Peace Festival 3.0 — 18 Dec 2026, Surulere, Lagos";
const desc = "Free community food festival in Lagos promoting unity and peace. Cooking, food sharing, lectures, music, games and awards. Register now.";

const eventLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: event.name,
  description: event.purpose,
  startDate: event.startISO,
  endDate: event.endISO,
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  isAccessibleForFree: true,
  maximumAttendeeCapacity: 5000,
  location: {
    "@type": "Place",
    name: event.venueName,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Union Bank Sports Complex, Bode Thomas Street",
      addressLocality: "Surulere",
      addressRegion: "Lagos",
      addressCountry: "NG",
    },
  },
  offers: { "@type": "Offer", price: "0", priceCurrency: "NGN", availability: "https://schema.org/InStock" },
  organizer: { "@type": "Organization", name: "Cook for Peace Festival" },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: desc },
      { property: "og:title", content: title },
      { property: "og:description", content: desc },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(eventLd) }],
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

const expect = [
  { Icon: ChefHat, title: "Cooking", text: "Pots on fire, recipes shared across cultures." },
  { Icon: HandHeart, title: "Food sharing", text: "Everyone eats. Plates passed from hand to hand." },
  { Icon: Mic, title: "Lectures & panel", text: "Conversations on unity, peace and community." },
  { Icon: Music, title: "Music", text: "Sounds that get the whole crowd moving." },
  { Icon: Gamepad2, title: "Games", text: "Fun for families, friends and neighbours." },
  { Icon: Trophy, title: "Awards", text: "Celebrating people who build peace." },
];

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-8">
      <p className="font-heading text-sm font-bold uppercase tracking-widest text-highlight">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">{title}</h2>
    </div>
  );
}

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-12 sm:pt-20">
          <p className="inline-block rounded-full bg-accent px-4 py-1 font-heading text-xs font-bold uppercase tracking-widest text-accent-foreground">
            {event.edition}
          </p>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-6xl">{event.name}</h1>
          <p className="mt-3 font-heading text-xl font-semibold sm:text-2xl">{event.tagline}</p>
          <ul className="mt-6 space-y-2 text-base">
            <li className="flex items-center gap-2"><CalendarDays className="h-5 w-5" aria-hidden />{event.dateLabel} · {event.timeLabel}</li>
            <li className="flex items-center gap-2"><MapPin className="h-5 w-5" aria-hidden />{event.venueName}, {event.venueAddress}</li>
          </ul>
          <div className="mt-8"><Countdown /></div>
          <div className="mt-8 flex flex-wrap gap-3">
            <ExternalButton href={links.registerFormUrl} variant="accent">Register Now</ExternalButton>
            <ExternalButton href={links.volunteerFormUrl} variant="light">Volunteer</ExternalButton>
          </div>
        </div>
        <div className="divider-scallop" aria-hidden="true" />
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
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {expect.map(({ Icon, title, text }, i) => (
            <li key={title}>
              <Reveal className="h-full">
                <div className="h-full rounded-3xl bg-card p-6 shadow-soft">
                  <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${["bg-primary text-primary-foreground","bg-accent text-accent-foreground","bg-highlight text-highlight-foreground"][i % 3]}`}>
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="mt-4 text-xl font-bold">{title}</h3>
                  <p className="mt-1 text-muted-foreground">{text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      {/* Get involved */}
      <section className="bg-secondary py-14">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal><SectionHeading eyebrow="Join in" title="Get involved" /></Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { Icon: Ticket, title: "Attend", text: "Entry is free. Register to secure your spot.", label: "Register", href: links.registerFormUrl },
              { Icon: HandHelping, title: "Volunteer", text: "Lend a hand and help the day run smoothly.", label: "Volunteer", href: links.volunteerFormUrl },
              { Icon: Handshake, title: "Sponsor or partner", text: "Work with us to grow peace in our communities.", label: "Partner with us", href: links.sponsorFormUrl },
            ].map(({ Icon, title, text, label, href }) => (
              <Reveal key={title} className="h-full">
                <div className="flex h-full flex-col rounded-3xl bg-card p-6 shadow-soft">
                  <Icon className="h-8 w-8 text-primary" aria-hidden />
                  <h3 className="mt-3 text-xl font-bold">{title}</h3>
                  <p className="mt-1 flex-1 text-muted-foreground">{text}</p>
                  <div className="mt-5"><ExternalButton href={href}>{label}</ExternalButton></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Venue */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <Reveal><SectionHeading eyebrow="Venue" title="Find us in Surulere" /></Reveal>
        <div className="grid gap-6 overflow-hidden rounded-3xl bg-card shadow-soft md:grid-cols-2">
          <div className="p-8">
            <address className="not-italic">
              <p className="font-heading text-xl font-bold">{event.venueName}</p>
              <p className="mt-1 text-muted-foreground">{event.venueAddress}</p>
            </address>
            <p className="mt-4">{event.dateLabel}<br />{event.timeLabel}</p>
            <a href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(event.mapQuery)}`}
              target="_blank" rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-primary px-6 py-3 font-heading text-sm font-semibold text-primary-foreground hover:bg-primary/90">
              <Navigation className="h-4 w-4" aria-hidden /> Get directions
            </a>
          </div>
          <iframe
            title="Map of Union Bank Sports Complex, Surulere"
            src={`https://www.google.com/maps?q=${encodeURIComponent(event.mapQuery)}&output=embed`}
            loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            className="h-72 w-full border-0 md:h-full md:min-h-80"
          />
        </div>
      </section>

      {/* Sponsors */}
      <section aria-labelledby="sponsors-h" className="mx-auto max-w-6xl px-4 py-10">
        <h2 id="sponsors-h" className="text-center font-heading text-sm font-bold uppercase tracking-widest text-muted-foreground">Our sponsors & partners</h2>
        <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[1, 2, 3, 4].map((n) => (
            <li key={n} className="flex h-20 items-center justify-center rounded-2xl border-2 border-dashed border-border bg-card text-center text-xs text-muted-foreground">
              Sponsor logos coming soon
            </li>
          ))}
        </ul>
      </section>

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

      {/* Final CTA */}
      <section className="px-4 pb-16 pt-6">
        <Reveal className="mx-auto max-w-6xl">
          <div className="rounded-3xl bg-cta p-10 text-center text-highlight-foreground sm:p-16">
            <h2 className="text-3xl font-extrabold sm:text-5xl">Join us on 18 December</h2>
            <p className="mx-auto mt-3 max-w-xl text-lg">Free entry. Good food. Great people. Register to be part of it.</p>
            <div className="mt-8 flex justify-center"><ExternalButton href={links.registerFormUrl} variant="light">Register Now</ExternalButton></div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
