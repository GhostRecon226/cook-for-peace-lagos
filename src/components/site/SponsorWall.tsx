import type { Sponsor } from "@/config/site";
import { EmptyState } from "./EmptyState";

export function SponsorWall({ items, home = false }: { items: Sponsor[]; home?: boolean }) {
  if (!items.length) {
    if (!home) return <EmptyState message="Our sponsors and partners will be recognised here." />;
    return <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">{[1, 2, 3, 4].map(n => <li key={n} className="flex h-20 items-center justify-center rounded-2xl border-2 border-dashed border-border bg-card p-3 text-center text-xs text-muted-foreground">Sponsor logos coming soon</li>)}</ul>;
  }
  return <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">{items.map((s, i) => {
    const logo = <img src={s.logo} alt={s.name} loading="lazy" width={240} height={120} className="h-24 w-full object-contain grayscale transition-[filter] group-hover:grayscale-0 group-focus-visible:grayscale-0 motion-reduce:transition-none" />;
    return <li key={`${s.name}-${i}`} className="min-w-0 rounded-2xl bg-card p-5 shadow-soft">{s.url ? <a href={s.url} target="_blank" rel="noopener noreferrer" className="group block">{logo}</a> : <div className="group">{logo}</div>}{s.tier && <p className="mt-2 text-center text-sm text-muted-foreground">{s.tier}</p>}</li>;
  })}</ul>;
}