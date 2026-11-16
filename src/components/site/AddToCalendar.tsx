import { CalendarPlus, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { event } from "@/config/site";
import { buildIcs, googleCalendarUrl } from "@/lib/calendar";
import { useEventState } from "@/lib/event-state";

export function AddToCalendar() {
  const state = useEventState();
  if (state === "ended") return null;
  function download() {
    const blob = new Blob([buildIcs(event, new Date(), `${encodeURIComponent(event.name)}-${event.startISO}@festival`)], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url; anchor.download = "festival.ics";
    document.body.appendChild(anchor); anchor.click(); anchor.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  return <div className="flex flex-wrap gap-2" role="group" aria-label="Add to calendar"><Button asChild variant="outline" className="min-h-11 text-primary"><a href={googleCalendarUrl(event)} target="_blank" rel="noopener noreferrer"><CalendarPlus aria-hidden />Google Calendar</a></Button><Button variant="outline" className="min-h-11 text-primary" onClick={download}><Download aria-hidden />Download .ics</Button></div>;
}