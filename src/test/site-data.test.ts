import { describe, expect, it } from "vitest";
import { contact, donation, event, faqs, gallery, guests, mission, news, objectives, programme, social, socialHandles, sponsors, team, vision, videos } from "@/config/site";
import { whatsappChatUrl } from "@/lib/whatsapp";

describe("Confirmed festival data", () => {
  it("lists 13 sponsors, each with a name and a /sponsors/ logo path", () => {
    expect(sponsors).toHaveLength(13);
    for (const sponsor of sponsors) {
      expect(sponsor.name.length).toBeGreaterThan(0);
      expect(sponsor.logo).toMatch(/^\/sponsors\//);
    }
  });
  it("gives backlinks to exactly three sponsors", () => {
    const linked = sponsors.filter((sponsor) => Boolean(sponsor.url));
    expect(linked.map((sponsor) => sponsor.name)).toEqual(["Nestlé", "Ticketsdeck", "Evogue Consulting"]);
    expect(sponsors.find((sponsor) => sponsor.name === "Nestlé")?.url).toBe("https://www.nestle-cwa.com/");
    expect(sponsors.find((sponsor) => sponsor.name === "Ticketsdeck")?.url).toBe("https://events.ticketsdeck.com/event/cookforpeacefestival");
    expect(sponsors.find((sponsor) => sponsor.name === "Evogue Consulting")?.url).toBe("https://evogueconsulting.com/");
    const unlinked = sponsors.filter((sponsor) => !sponsor.url);
    expect(unlinked).toHaveLength(10);
    for (const sponsor of unlinked) {
      expect(sponsor.url).toBeUndefined();
    }
  });
  it("uses the exact donation bank details", () => {
    expect(donation.bankName).toBe("Providus Bank");
    expect(donation.accountName).toBe("Associates of change & soc. Dev");
    expect(donation.accountNumber).toBe("4308985940");
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
  it("uses the approved Mission text", () => {
    expect(mission).toBe("To promote peaceful coexistence and social development through greater engagement and fun interactions.");
  });
  it("uses the approved Vision text", () => {
    expect(vision).toBe("To become a platform that connects people across global communities, where discussions on bridging social gaps and corresponding interventions are proposed and implemented.");
  });
  it("keeps objectives empty pending client input", () => { expect(objectives).toEqual([]); });
  it("keeps announcements empty after verification", () => { expect(news).toEqual([]); });
  it("uses the confirmed WhatsApp number and message", () => {
    expect(contact.whatsapp).toBe("2348057722794");
    expect(contact.whatsappMessage).toBe("Hello, I have a question about Cook for Peace Festival 3.0.");
    expect(whatsappChatUrl()).toBe("https://wa.me/2348057722794?text=Hello%2C%20I%20have%20a%20question%20about%20Cook%20for%20Peace%20Festival%203.0.");
  });
  it("uses the confirmed phone display text and tel link", () => {
    expect(contact.phone).toBe("0805 772 2794");
    expect(contact.phoneHref).toBe("+2348057722794");
  });
  it("uses the confirmed email address", () => { expect(contact.email).toBe("Cookforpeacefestival@gmail.com"); });
  it("wires the approved Instagram and X links and leaves the other socials empty", () => {
    expect(social.instagram).toBe("https://www.instagram.com/cookforpeacefestival/");
    expect(social.x).toBe("https://x.com/cook4peacefest");
    expect(social.facebook).toBe("");
    expect(social.youtube).toBe("");
    expect(socialHandles.instagram).toBe("cookforpeacefestival");
    expect(socialHandles.x).toBe("cook4peacefest");
  });
  it("does not invent a schedule or guests", () => {
    expect(programme).toEqual([]); expect(guests).toEqual([]);
  });
  it("lists exactly the one confirmed team member", () => {
    expect(team).toEqual([
      {
        name: "Hadji Kwame Ahmed",
        role: "Lead Volunteer, Cook for Peace Festival",
        photo: "/team/hadji-kwame-ahmed.jpg",
        bio: "Pan-African youth advocate and community development expert. Founder of Associates of Change Africa. JCI Top Ten Outstanding Young Persons of Nigeria 2023.",
      },
    ]);
    expect(team[0]?.photo).toMatch(/^\/team\//);
  });
  it("includes only the nine requested FAQs", () => { expect(faqs).toHaveLength(9); });
  it("uses the confirmed festival opening date and Lagos time", () => { expect(event.startISO).toBe("2026-12-18T09:00:00+01:00"); });
  it("uses the confirmed festival closing time", () => { expect(event.endISO).toBe("2026-12-18T17:00:00+01:00"); });
});