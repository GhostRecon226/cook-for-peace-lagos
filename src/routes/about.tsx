import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { event, links, mission, objectives, team, vision } from "@/config/site";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Timeline } from "@/components/site/Timeline";
import { PeopleGrid } from "@/components/site/PeopleGrid";
import { CtaBanner } from "@/components/site/CtaBanner";
import { ExternalButton } from "@/components/site/ExternalButton";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Cook for Peace Festival" },
      { name: "description", content: "The story of Cook for Peace, an annual holiday food festival promoting unity and communal peace in Orile Iganmu, Coker-Aguda LCDA and Surulere, Lagos." },
      { property: "og:title", content: "About — Cook for Peace Festival" },
      { property: "og:description", content: "The story of Cook for Peace, an annual holiday food festival promoting unity and communal peace in Orile Iganmu, Coker-Aguda LCDA and Surulere, Lagos." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const tba = "To be announced";

function About() {
  return (
    <>
      <PageHero title="About Cook for Peace" intro="An annual holiday food festival bringing Lagos communities together in unity and peace." />

      <section className="mx-auto max-w-6xl px-4 py-12">
        <Reveal>
          <div className="rounded-3xl bg-card p-6 shadow-soft sm:p-12">
            <SectionHeading eyebrow="Our story" title="Why we cook for peace" />
            <div className="max-w-3xl space-y-4 text-lg leading-relaxed">
              <p>Cook for Peace is a holiday food festival that brings people together to celebrate while promoting unity, communal peace and social development.</p>
              <p>It started from a need to promote communal peace and unity in Orile Iganmu and the wider Coker-Aguda LCDA. It is an annual event.</p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <SectionHeading eyebrow="Editions" title="Our journey so far" />
        <Timeline items={[
          { key: "2024", label: "2024", title: "1st edition" },
          { key: "2025", label: "2025", title: "2nd edition" },
          { key: "2026", label: "2026", title: "3rd edition — Festival 3.0", description: "18 December 2026", highlight: true },
        ]} />
      </section>

      <section className="bg-secondary py-14">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 md:grid-cols-3">
          {[{ t: "Vision", v: vision }, { t: "Mission", v: mission }].map(({ t, v }) => (
            <div key={t} className="rounded-3xl bg-card p-6 shadow-soft">
              <h2 className="text-2xl font-bold text-primary">Our {t.toLowerCase()}</h2>
              <p className={`mt-3 ${v ? "" : "italic text-muted-foreground"}`}>{v || tba}</p>
            </div>
          ))}
          <div className="rounded-3xl bg-card p-6 shadow-soft">
            <h2 className="text-2xl font-bold text-primary">Our objectives</h2>
            {objectives.length ? (
              <ul className="mt-3 list-disc space-y-1 pl-5">{objectives.map((o) => <li key={o}>{o}</li>)}</ul>
            ) : <p className="mt-3 italic text-muted-foreground">{tba}</p>}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionHeading eyebrow="Where we focus" title="Communities we serve" />
        <ul className="grid gap-4 sm:grid-cols-3">
          {event.communities.map((c, i) => (
            <li key={c} className="flex items-center gap-4 rounded-3xl bg-card p-6 shadow-soft">
              <span className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${["bg-primary text-primary-foreground","bg-accent text-accent-foreground","bg-highlight text-highlight-foreground"][i % 3]}`}><MapPin className="h-6 w-6" aria-hidden /></span>
              <span className="font-heading text-lg font-bold">{c}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionHeading eyebrow="The people" title="Meet the team" />
        <PeopleGrid people={team} empty="Our organising team will be introduced here soon." />
      </section>

      <CtaBanner title="Be part of Festival 3.0" text="Free entry, registration required. See you on 18 December.">
        <ExternalButton href={links.registerFormUrl} variant="light">Register Now</ExternalButton>
      </CtaBanner>
    </>
  );
}

