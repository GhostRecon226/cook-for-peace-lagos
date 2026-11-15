import type { ReactNode } from "react";
import { TriBar } from "./TriBar";
export function PageHero({ title, intro, children }: { title: string; intro: string; children?: ReactNode }) {
  return (
    <section className="bg-hero text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 pb-14 pt-12 sm:pt-16">
        <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">{title}</h1>
        <p className="mt-3 max-w-2xl text-lg">{intro}</p>
        {children}
      </div>
      <TriBar />
    </section>
  );
}
