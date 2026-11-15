import { Sparkles } from "lucide-react";

export function PlaceholderPage({ title, intro }: { title: string; intro: string }) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:py-24">
      <h1 className="font-heading text-4xl font-extrabold text-primary sm:text-5xl">{title}</h1>
      <p className="mt-4 text-lg text-muted-foreground">{intro}</p>
      <div className="mt-10 flex items-center gap-4 rounded-3xl border-2 border-dashed border-accent bg-card p-8">
        <Sparkles className="h-8 w-8 shrink-0 text-accent-strong" aria-hidden />
        <p className="font-heading text-lg font-semibold">Content coming soon</p>
      </div>
    </section>
  );
}
