import { event } from "@/config/site";

type CalendarEvent = Pick<typeof event, "name" | "startISO" | "endISO" | "venueName" | "venueAddress" | "purpose" | "entry">;
export function calendarDate(iso: string) {
  return new Date(iso).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}
export function calendarLocation(details: CalendarEvent) {
  return `${details.venueName}, ${details.venueAddress}`;
}
export function calendarDetails(details: CalendarEvent) {
  return `${details.purpose}\n${details.entry}.`;
}
export function googleCalendarUrl(details: CalendarEvent) {
  const params = new URLSearchParams({ action: "TEMPLATE", text: details.name,
    dates: `${calendarDate(details.startISO)}/${calendarDate(details.endISO)}`,
    location: calendarLocation(details), details: calendarDetails(details) });
  return `https://calendar.google.com/calendar/render?${params}`;
}
function escapeText(text: string) {
  return text.replace(/\\/g, "\\\\").replace(/\r?\n/g, "\\n").replace(/;/g, "\\;").replace(/,/g, "\\,");
}
// RFC 5545 lines are limited to 75 octets, including continuation spaces.
function foldLine(line: string) {
  const lines: string[] = [];
  let part = "";
  let bytes = 0;
  for (const char of line) {
    const size = new TextEncoder().encode(char).length;
    if (bytes + size > 75) { lines.push(part); part = " "; bytes = 1; }
    part += char; bytes += size;
  }
  lines.push(part);
  return lines.join("\r\n");
}
export function buildIcs(details: CalendarEvent, stamp: Date, uid: string) {
  return ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Festival Calendar//EN", "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT", `UID:${escapeText(uid)}`, `DTSTAMP:${calendarDate(stamp.toISOString())}`,
    `DTSTART:${calendarDate(details.startISO)}`, `DTEND:${calendarDate(details.endISO)}`,
    `SUMMARY:${escapeText(details.name)}`, `LOCATION:${escapeText(calendarLocation(details))}`,
    `DESCRIPTION:${escapeText(calendarDetails(details))}`, "END:VEVENT", "END:VCALENDAR", ""].map(foldLine).join("\r\n");
}