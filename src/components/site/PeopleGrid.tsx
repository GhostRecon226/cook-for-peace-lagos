import { User } from "lucide-react";
import type { Person } from "@/config/site";
import { EmptyState } from "./EmptyState";
export function PeopleGrid({ people, empty }: { people: Person[]; empty: string }) {
  if (!people.length) return <EmptyState message={empty} />;
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {people.map((p) => (
        <li key={p.name} className="rounded-3xl bg-card p-6 text-center shadow-soft">
          {p.photo ? (
            <img src={p.photo} alt={`Portrait of ${p.name}`} loading="lazy" decoding="async" width={112} height={112} className="mx-auto h-28 w-28 rounded-full object-cover object-top" />
          ) : (
            <span className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-secondary text-primary"><User className="h-10 w-10" aria-hidden /></span>
          )}
          <h3 className="mt-4 text-lg font-bold">{p.name}</h3>
          <p className="text-sm font-medium text-primary">{p.role}</p>
          {p.bio && <p className="mt-2 text-sm text-muted-foreground">{p.bio}</p>}
        </li>
      ))}
    </ul>
  );
}
