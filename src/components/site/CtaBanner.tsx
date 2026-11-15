import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
export function CtaBanner({ title, text, children }: { title: string; text?: string; children: ReactNode }) {
  return (
    <section className="px-4 pb-16 pt-6">
      <Reveal className="mx-auto max-w-6xl">
        <div className="rounded-3xl bg-cta p-8 text-center text-highlight-foreground sm:p-16">
          <h2 className="text-3xl font-extrabold sm:text-5xl">{title}</h2>
          {text && <p className="mx-auto mt-3 max-w-xl text-lg">{text}</p>}
          <div className="mt-8 flex flex-wrap justify-center gap-3">{children}</div>
        </div>
      </Reveal>
    </section>
  );
}
