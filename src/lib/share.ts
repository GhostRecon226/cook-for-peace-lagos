import { event } from "@/config/site";

export function buildShareMessage(details: Pick<typeof event, "name" | "dateLabel" | "venueName" | "venueAddress" | "entry">, url: string) {
  const entry = details.entry.charAt(0).toUpperCase() + details.entry.slice(1).replace(/\.$/, "");
  return `${details.name}\n${details.dateLabel}\n${details.venueName}, ${details.venueAddress}\n${entry}.\n${url}`;
}

export async function copyLink(text: string) {
  try {
    if (navigator.clipboard) { await navigator.clipboard.writeText(text); return; }
  } catch { /* Try the legacy fallback below. */ }
  const previous = document.activeElement;
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.className = "sr-only";
  document.body.appendChild(textarea);
  textarea.select();
  const copied = document.execCommand("copy");
  textarea.remove();
  if (previous instanceof HTMLElement) previous.focus();
  if (!copied) throw new Error("Copy unavailable");
}