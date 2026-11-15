import { pageUrlMetadata } from "@/lib/site-metadata";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Ticket, HandHelping, ChefHat, Handshake, ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { links, volunteerRoles } from "@/config/site";
import { PageHero } from "@/components/site/PageHero";
import { ExternalButton } from "@/components/site/ExternalButton";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/get-involved")({
  head: () => ({
    meta: [
      { title: "Get Involved — Cook for Peace Festival 3.0" },
      { name: "description", content: "Attend for free, volunteer, join a cooking team, or sponsor and partner with Cook for Peace Festival 3.0 in Surulere, Lagos." },
      { property: "og:title", content: "Get Involved — Cook for Peace Festival 3.0" },
      { property: "og:description", content: "Attend for free, volunteer, join a cooking team, or sponsor and partner with Cook for Peace Festival 3.0 in Surulere, Lagos." },
      { property: "og:type", content: "website" },
      ...pageUrlMetadata("/get-involved").meta,
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: pageUrlMetadata("/get-involved").links,
  }),
  component: GetInvolved,
});

function Block({ id, Icon, title, children, action, tone }: { id: string; Icon: typeof Ticket; title: string; children: ReactNode; action: ReactNode; tone: string }) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="mx-auto max-w-6xl px-4 py-6">
      <Reveal>
        <div className="flex flex-col gap-6 rounded-3xl bg-card p-6 shadow-soft sm:flex-row sm:p-10">
          <span className={`inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${tone}`}><Icon className="h-7 w-7" aria-hidden /></span>
          <div className="flex-1">
            <h2 id={`${id}-h`} className="text-2xl font-bold sm:text-3xl">{title}</h2>
            <div className="mt-2 space-y-3 text-muted-foreground">{children}</div>
            <div className="mt-6 flex flex-wrap items-center gap-4">{action}</div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function GetInvolved() {
  return (
    <>
      <PageHero title="Get involved" intro="There are many ways to be part of Cook for Peace Festival 3.0." />
      <div className="py-8">
        <Block id="attend" Icon={Ticket} title="Attend" tone="bg-primary text-primary-foreground"
          action={<ExternalButton href={links.registerFormUrl}>Register</ExternalButton>}>
          <p>Entry is free and the festival is open to the general public. Registration is required, so sign up early to secure your spot.</p>
        </Block>
        <Block id="volunteer" Icon={HandHelping} title="Volunteer" tone="bg-accent text-accent-foreground"
          action={<ExternalButton href={links.volunteerFormUrl}>Volunteer</ExternalButton>}>
          <p>Volunteers help the day run smoothly. Give your time, meet new people and help your community celebrate in peace.</p>
          {volunteerRoles.length > 0 && (
            <ul className="flex flex-wrap gap-2">{volunteerRoles.map((r) => <li key={r} className="rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">{r}</li>)}</ul>
          )}
        </Block>
        <Block id="cooking-teams" Icon={ChefHat} title="Join a cooking team" tone="bg-highlight text-highlight-foreground"
          action={<ExternalButton href={links.cookingTeamFormUrl}>Join a cooking team</ExternalButton>}>
          <p>Cooking teams are at the heart of the festival. Bring your team and cook food to share with everyone on the day.</p>
        </Block>
        <Block id="sponsor" Icon={Handshake} title="Sponsor or partner" tone="bg-primary text-primary-foreground"
          action={<>
            <ExternalButton href={links.sponsorFormUrl}>Partner with us</ExternalButton>
            <Link to="/support-us" className="inline-flex items-center gap-1 font-heading font-semibold text-primary underline-offset-4 hover:underline">More ways to support <ArrowRight className="h-4 w-4" aria-hidden /></Link>
          </>}>
          <p>We welcome support in many forms: funding, food and drinks, equipment and media coverage. Partner with us to promote unity and peace in our communities.</p>
        </Block>
      </div>
    </>
  );
}
