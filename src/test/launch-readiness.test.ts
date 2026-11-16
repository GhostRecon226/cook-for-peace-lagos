import { describe, expect, it } from "vitest";
import { event } from "@/config/site";
import { getEventState } from "@/lib/event-state";
import { buildIcs, googleCalendarUrl } from "@/lib/calendar";
import { buildShareMessage } from "@/lib/share";
import { eventStructuredData } from "@/lib/event-metadata";

describe("Event states", () => {
  it("is upcoming before the start", () => { expect(getEventState(new Date("2026-12-18T07:59:59Z"), event)).toBe("upcoming"); });
  it("is live at the exact start", () => { expect(getEventState(new Date("2026-12-18T08:00:00Z"), event)).toBe("live"); });
  it("is live during the event", () => { expect(getEventState(new Date("2026-12-18T12:00:00Z"), event)).toBe("live"); });
  it("is live at the exact end", () => { expect(getEventState(new Date("2026-12-18T16:00:00Z"), event)).toBe("live"); });
  it("is ended after the end", () => { expect(getEventState(new Date("2026-12-18T16:00:01Z"), event)).toBe("ended"); });
});

describe("Calendar exports", () => {
  it("converts 09:00 and 17:00 WAT to 08:00 and 16:00 UTC for Google", () => {
    const url = new URL(googleCalendarUrl(event));
    expect(url.origin).toBe("https://calendar.google.com");
    expect(url.searchParams.get("action")).toBe("TEMPLATE");
    expect(url.searchParams.get("dates")).toBe("20261218T080000Z/20261218T160000Z");
    expect(url.searchParams.get("text")).toBe("Cook for Peace Festival 3.0");
    expect(url.searchParams.get("location")).toBe("The Stable, Union Bank Sports Complex, Bode Thomas Street, Surulere, Lagos");
    expect(url.searchParams.get("details")).toBe(`${event.purpose}\nFree entry, registration required.`);
  });
  it("includes UTC start and end, stable UID and timestamp in a valid calendar envelope", () => {
    const ics = buildIcs(event, new Date("2026-11-16T06:45:00Z"), "festival-test");
    expect(ics).toContain("DTSTART:20261218T080000Z\r\n");
    expect(ics).toContain("DTEND:20261218T160000Z\r\n");
    expect(ics).toContain("DTSTAMP:20261116T064500Z\r\n");
    expect(ics).toContain("UID:festival-test\r\n");
    expect(ics).toMatch(/^BEGIN:VCALENDAR\r\nVERSION:2.0/);
    expect(ics).toMatch(/END:VEVENT\r\nEND:VCALENDAR\r\n$/);
  });
  it("escapes text and folds lines to at most 75 bytes", () => {
    const ics = buildIcs({ ...event, name: "Food; peace, together\\always\nNext", purpose: "é".repeat(120) }, new Date(event.startISO), "test");
    expect(ics).toContain("SUMMARY:Food\\; peace\\, together\\\\always\\nNext");
    expect(ics.split("\r\n").every(line => new TextEncoder().encode(line).length <= 75)).toBe(true);
  });
});

describe("Share message", () => {
  it("uses the configured name, date, venue, entry and current page address", () => {
    expect(buildShareMessage(event, "https://example.org/festival")).toBe("Cook for Peace Festival 3.0\nFriday, 18 December 2026\nThe Stable, Union Bank Sports Complex, Bode Thomas Street, Surulere, Lagos\nFree entry, registration required.\nhttps://example.org/festival");
  });
});

describe("Event structured data", () => {
  it("uses confirmed event facts without inventing a capacity, performer or URL", () => {
    const data = eventStructuredData("/festival");
    expect(data.startDate).toBe("2026-12-18T09:00:00+01:00");
    expect(data.endDate).toBe("2026-12-18T17:00:00+01:00");
    expect(data.organizer.name).toBe("Cook for Peace");
    expect(data.location.address.streetAddress).toBe(event.venueAddress);
    expect(data).not.toHaveProperty("performer");
    expect(data).not.toHaveProperty("url");
    expect(data).not.toHaveProperty("image");
    expect(data).not.toHaveProperty("maximumAttendeeCapacity");
  });
});