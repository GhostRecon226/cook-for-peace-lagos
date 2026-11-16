import { describe, expect, it } from "vitest";
import { contact, donation, event, faqs, gallery, guests, news, programme, sponsors, team, videos } from "@/config/site";

describe("Confirmed festival data", () => {
  it("keeps unconfirmed sponsors empty", () => { expect(sponsors).toEqual([]); });
  it("keeps unconfirmed bank details empty", () => {
    expect(donation.bankName).toBe("");
    expect(donation.accountName).toBe("");
    expect(donation.accountNumber).toBe("");
    expect(donation.note || "").toBe("");
  });
  it("lists 12 gallery photos, each with alt text and a public/gallery src", () => {
    expect(gallery).toHaveLength(12);
    for (const photo of gallery) {
      expect(photo.alt.length).toBeGreaterThan(0);
      expect(photo.src).toMatch(/^\/gallery\/cfp-\d+\.jpg$/);
    }
  });
  it("keeps videos empty", () => { expect(videos).toEqual([]); });
  it("keeps announcements empty after verification", () => { expect(news).toEqual([]); });
  it("keeps WhatsApp unconfirmed", () => { expect(contact.whatsapp).toBe(""); });
  it("uses the confirmed phone display text and tel link", () => {
    expect(contact.phone).toBe("0805 772 2794");
    expect(contact.phoneHref).toBe("+2348057722794");
  });
  it("uses the confirmed email address", () => { expect(contact.email).toBe("Cookforpeacefestival@gmail.com"); });
  it("does not invent a schedule or people", () => {
    expect(programme).toEqual([]); expect(guests).toEqual([]); expect(team).toEqual([]);
  });
  it("includes only the nine requested FAQs", () => { expect(faqs).toHaveLength(9); });
  it("uses the confirmed festival opening date and Lagos time", () => { expect(event.startISO).toBe("2026-12-18T09:00:00+01:00"); });
  it("uses the confirmed festival closing time", () => { expect(event.endISO).toBe("2026-12-18T17:00:00+01:00"); });
});