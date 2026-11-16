import { event, guests, siteUrl } from "@/config/site";

export function eventStructuredData(path: string) {
  const base = siteUrl.trim().replace(/\/+$/, "");
  return {
    "@context": "https://schema.org", "@type": "Event", name: event.name,
    startDate: event.startISO, endDate: event.endISO,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    isAccessibleForFree: true,
    location: { "@type": "Place", name: event.venueName,
      address: { "@type": "PostalAddress", streetAddress: event.venueAddress, addressCountry: "NG" } },
    organizer: { "@type": "Organization", name: event.shortName },
    ...(base ? { url: `${base}${path}`, image: `${base}/brand/cfp-og.png` } : {}),
    ...(guests.length ? { performer: guests.map(guest => ({ "@type": "Person", name: guest.name })) } : {}),
  };
}