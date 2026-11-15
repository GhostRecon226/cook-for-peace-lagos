import { useEffect, useState } from "react";
import { event } from "@/config/site";

const target = new Date(event.startISO).getTime();

export function Countdown() {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  const diff = now === null ? 0 : Math.max(0, target - now);
  const parts = [
    ["Days", Math.floor(diff / 864e5)],
    ["Hours", Math.floor(diff / 36e5) % 24],
    ["Mins", Math.floor(diff / 6e4) % 60],
    ["Secs", Math.floor(diff / 1e3) % 60],
  ] as const;
  if (now !== null && diff === 0) {
    return <p className="font-heading text-lg font-bold">The festival is here!</p>;
  }
  return (
    <div role="timer" aria-label="Countdown to the festival" className="grid max-w-md grid-cols-4 gap-2">
      {parts.map(([label, v]) => (
        <div key={label} className="rounded-2xl bg-card/95 px-2 py-3 text-center text-card-foreground shadow-soft">
          <span className="block font-heading text-2xl font-extrabold tabular-nums text-primary sm:text-3xl">
            {now === null ? "--" : String(v).padStart(2, "0")}
          </span>
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}</span>
        </div>
      ))}
    </div>
  );
}
