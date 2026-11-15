import type { ReactNode } from "react";
export type TimelineItem = { key: string; label: string; title: string; description?: ReactNode; highlight?: boolean };
export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative ml-3 border-l-4 border-accent">
      {items.map((it) => (
        <li key={it.key} className="relative mb-8 pl-8 last:mb-0">
          <span aria-hidden className={`absolute -left-[14px] top-1 h-6 w-6 rounded-full border-4 border-background ${it.highlight ? "bg-highlight" : "bg-primary"}`} />
          <p className="font-heading text-sm font-bold uppercase tracking-widest text-highlight">{it.label}</p>
          <h3 className="mt-1 text-xl font-bold">{it.title}</h3>
          {it.description && <p className="mt-1 text-muted-foreground">{it.description}</p>}
        </li>
      ))}
    </ol>
  );
}
