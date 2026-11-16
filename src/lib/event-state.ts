import { useEffect, useState } from "react";
import { event } from "@/config/site";

export type EventState = "upcoming" | "live" | "ended";
export type EventTimes = { startISO: string; endISO: string };

export function getEventState(now: Date, times: EventTimes): EventState {
  if (now.getTime() < new Date(times.startISO).getTime()) return "upcoming";
  if (now.getTime() <= new Date(times.endISO).getTime()) return "live";
  return "ended";
}

export function useEventState(): EventState {
  const [state, setState] = useState<EventState>("upcoming");
  useEffect(() => {
    const update = () => setState(getEventState(new Date(), event));
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);
  return state;
}