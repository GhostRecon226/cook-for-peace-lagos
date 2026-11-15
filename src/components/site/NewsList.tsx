import type { NewsItem } from "@/config/site";
import { EmptyState } from "./EmptyState";

export function NewsList({ items }: { items: NewsItem[] }) {
  if (!items.length) return <EmptyState message="No announcements yet. Check back soon." />;
  return <div className="grid gap-5">{[...items].sort((a, b) => b.date.localeCompare(a.date)).map((n, i) => <article key={`${n.title}-${i}`} className="min-w-0 rounded-3xl bg-card p-6 shadow-soft sm:p-8">
    <time dateTime={n.date} className="text-sm text-muted-foreground">{new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "Africa/Lagos" }).format(new Date(n.date))}</time>
    <h2 className="mt-2 break-words text-2xl font-bold">{n.title}</h2><p className="mt-3 whitespace-pre-line break-words">{n.summary}</p>
    {n.body && <details className="mt-4"><summary className="w-fit cursor-pointer py-2 font-heading font-semibold text-primary">Read more<span className="sr-only">: {n.title}</span></summary><p className="mt-3 whitespace-pre-line break-words leading-relaxed">{n.body}</p></details>}
  </article>)}</div>;
}