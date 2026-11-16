import { eventStructuredData } from "@/lib/event-metadata";
import { AddToCalendar } from "@/components/site/AddToCalendar";
import { ShareButton } from "@/components/site/ShareButton";
import { pageUrlMetadata } from "@/lib/site-metadata";
import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, Clock, MapPin, Ticket, Users, ChefHat } from "lucide-react";
import { event, guests, links, programme } from "@/config/site";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Countdown } from "@/components/site/Countdown";
import { ActivityCards } from "@/components/site/ActivityCards";
import { Timeline } from "@/components/site/Timeline";
import { EmptyState } from "@/components/site/EmptyState";
import { PeopleGrid } from "@/components/site/PeopleGrid";
import { VenueBlock } from "@/components/site/VenueBlock";
import { CtaBanner } from "@/components/site/CtaBanner";
import { ExternalButton } from "@/components/site/ExternalButton";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/festival")({
  head: () => ({
    meta: [
      { title: "The Festival — Cook for Peace Festival 3.0, 18 Dec 2026" },
      { name: "description", content: "Cook for Peace Festival 3.0 on 18 December 2026 at The Stable, Union Bank Sports Complex, Surulere. Free entry: cooking, food sharing, lectures, panel, music, games and awards." },
      { property: "og:title", content: "The Festival — Cook for Peace Festival 3.0, 18 Dec 2026" },
      { property: "og:description", content: "Cook for Peace Festival 3.0 on 18 December 2026 at The Stable, Union Bank Sports Complex, Surulere. Free entry: cooking, food sharing, lectures, panel, music, games and awards." },
      { property: "og:type", content: "website" },
      ...pageUrlMetadata("/festival").meta,
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: pageUrlMetadata("/festival").links,
    scripts: [{ type: "application/ld+json", children: JSON.stringify(eventStructuredData("/festival")) }],
  }),
  component: Festival,
});

function Festival() {
  return (
    <>
      <PageHero title={event.name} intro={event.tagline}>
        <ul className="mt-6 space-y-2">
          <li className="flex items-center gap-2"><CalendarDays className="h-5 w-5 shrink-0" aria-hidden />{event.dateLabel}</li>
          <li className="flex items-center gap-2"><Clock className="h-5 w-5 shrink-0" aria-hidden />{event.timeLabel}</li>
          <li className="flex items-center gap-2"><MapPin className="h-5 w-5 shrink-0" aria-hidden />{event.venueName}, {event.venueAddress}</li>
        </ul>
        <div className="mt-8"><Countdown /></div>
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-8 flex flex-wrap gap-4"><AddToCalendar /><ShareButton /></div>
        <SectionHeading eyebrow="Overview" title="Open to everyone" />
        <ul className="grid gap-4 sm:grid-cols-3">
          <li className="rounded-3xl bg-card p-6 shadow-soft"><Ticket className="h-7 w-7 text-primary" aria-hidden /><p className="mt-3 font-heading text-lg font-bold">Free entry</p><p className="text-muted-foreground">Registration required.</p></li>
          <li className="rounded-3xl bg-card p-6 shadow-soft"><Users className="h-7 w-7 text-primary" aria-hidden /><p className="mt-3 font-heading text-lg font-bold">{event.expected} expected</p><p className="text-muted-foreground">Open to the general public.</p></li>
          <li className="rounded-3xl bg-card p-6 shadow-soft"><MapPin className="h-7 w-7 text-primary" aria-hidden /><p className="mt-3 font-heading text-lg font-bold">Community focus</p><p className="text-muted-foreground">{event.communities.join(", ")}.</p></li>
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <SectionHeading eyebrow="On the day" title="Activities" />
        <ActivityCards long />
      </section>

      <section className="bg-secondary py-14">
        <Reveal className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col gap-6 rounded-3xl bg-card p-6 shadow-soft sm:flex-row sm:items-center sm:p-10">
            <ChefHat className="h-12 w-12 shrink-0 text-accent-strong" aria-hidden />
            <div className="flex-1">
              <h2 className="text-2xl font-bold sm:text-3xl">Cooking teams</h2>
              <p className="mt-2 text-muted-foreground">The festival features cooking teams who prepare food on the day to be shared with everyone. Want your team to take part?</p>
            </div>
            <ExternalButton href={links.cookingTeamFormUrl}>Join a cooking team</ExternalButton>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionHeading eyebrow="Schedule" title="Programme" />
        {programme.length ? (
          <Timeline items={programme.map((p, i) => ({ key: `${p.time}-${i}`, label: p.time, title: p.title, description: p.description }))} />
        ) : <EmptyState message="The full programme will be published here soon." />}
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionHeading eyebrow="Featuring" title="Guests and speakers" />
        <PeopleGrid people={guests} empty="Guests and speakers to be announced." />
      </section>

      <VenueBlock />

      <section className="mx-auto max-w-6xl px-4 py-12">
        <SectionHeading eyebrow="Plan your visit" title="Practical info" />
        <dl className="grid gap-4 rounded-3xl bg-card p-6 shadow-soft sm:grid-cols-2 sm:p-8">
          {[["Date", event.dateLabel], ["Time", event.timeLabel], ["Venue", `${event.venueName}, ${event.venueAddress}`], ["Entry", event.entry]].map(([k, v]) => (
            <div key={k}><dt className="text-sm uppercase tracking-wide text-muted-foreground">{k}</dt><dd className="font-heading font-semibold">{v}</dd></div>
          ))}
        </dl>
      </section>

      <CtaBanner title="Join us on 18 December" text="Register to attend, or volunteer to help the day run smoothly.">
        <ExternalButton href={links.registerFormUrl} variant="light">Register Now</ExternalButton>
        <ExternalButton href={links.volunteerFormUrl} variant="accent">Volunteer</ExternalButton>
      </CtaBanner>
    </>
  );
}
