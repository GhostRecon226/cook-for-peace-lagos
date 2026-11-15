import { Navigation } from "lucide-react";
import { event } from "@/config/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
export function VenueBlock() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <Reveal><SectionHeading eyebrow="Venue" title="Find us in Surulere" /></Reveal>
      <div className="grid overflow-hidden rounded-3xl bg-card shadow-soft md:grid-cols-2">
        <div className="p-6 sm:p-8">
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
        <iframe title="Map of Union Bank Sports Complex, Surulere"
          src={`https://www.google.com/maps?q=${encodeURIComponent(event.mapQuery)}&output=embed`}
          loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          className="h-72 w-full border-0 md:h-full md:min-h-80" />
      </div>
    </section>
  );
}
