import { activities, toneFor } from "./activities";
import { Reveal } from "./Reveal";
export function ActivityCards({ long = false }: { long?: boolean }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {activities.map(({ Icon, title, short, long: l }, i) => (
        <li key={title}>
          <Reveal className="h-full">
            <div className="h-full rounded-3xl bg-card p-6 shadow-soft">
              <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${toneFor(i)}`}><Icon className="h-6 w-6" aria-hidden /></span>
              <h3 className="mt-4 text-xl font-bold">{title}</h3>
              <p className="mt-1 text-muted-foreground">{long ? l : short}</p>
            </div>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
