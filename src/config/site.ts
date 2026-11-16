export const siteUrl: string = "";

export const event = {
  name: "Cook for Peace Festival 3.0",
  shortName: "Cook for Peace",
  tagline: "Cooking together. Building peace.",
  edition: "3rd annual edition",
  previousEditions: [2024, 2025],
  dateLabel: "Friday, 18 December 2026",
  timeLabel: "9:00 AM – 5:00 PM (WAT)",
  startISO: "2026-12-18T09:00:00+01:00",
  endISO: "2026-12-18T17:00:00+01:00",
  venueName: "The Stable, Union Bank Sports Complex",
  venueAddress: "Bode Thomas Street, Surulere, Lagos",
  mapQuery: "Union Bank Sports Complex, Bode Thomas Street, Surulere, Lagos",
  entry: "Free entry, registration required",
  expected: "5,000+",
  communities: ["Orile Iganmu", "Coker-Aguda LCDA", "Surulere"],
  purpose:
    "A holiday food festival that brings people together to celebrate while promoting unity, communal peace and social development.",
};

export const links = {
  registerFormUrl: "https://events.ticketsdeck.com/event/cookforpeacefestival",
  volunteerFormUrl: "https://forms.gle/8nSFPARNWc73woQu5",
  sponsorFormUrl: "",
  contactFormUrl: "",
  newsletterFormUrl: "",
  cookingTeamFormUrl: "",
  privacyNoticeUrl: "",
};

export const social = {
  facebook: "",
  instagram: "",
  x: "",
  youtube: "",
};

export const contact = {
  phone: "0805 772 2794",
  phoneHref: "+2348057722794",
  email: "Cookforpeacefestival@gmail.com",
  whatsapp: "",
};

export type ProgrammeItem = { time: string; title: string; description?: string };
export type Person = { name: string; role: string; photo?: string; bio?: string };

export const programme: ProgrammeItem[] = [];
export const guests: Person[] = [];
export const team: Person[] = [];
export const vision = "";
export const mission = "";
export const objectives: string[] = [];
export const volunteerRoles: string[] = [];

export type Sponsor = { name: string; logo: string; url?: string; tier?: string };
export type Donation = { bankName: string; accountName: string; accountNumber: string; note?: string };
export type GalleryPhoto = { src: string; alt: string; caption?: string; year?: number };
export type FestivalVideo = { title: string; youtubeId: string };
export type NewsItem = { title: string; date: string; summary: string; body?: string };
export type Faq = { q: string; a: string };

export const sponsors: Sponsor[] = [];
export const donation: Donation = { bankName: "", accountName: "", accountNumber: "" };
export const gallery: GalleryPhoto[] = [];
export const videos: FestivalVideo[] = [];
export const news: NewsItem[] = [];
export const faqs: Faq[] = [
  { q: "What is Cook for Peace?", a: "A holiday food festival that brings people together to celebrate while promoting unity, communal peace and social development." },
  { q: "When and where is Festival 3.0?", a: "Friday, 18 December 2026, 9:00 AM to 5:00 PM at The Stable, Union Bank Sports Complex, Bode Thomas Street, Surulere, Lagos." },
  { q: "Is it free to attend?", a: "Yes, entry is free." },
  { q: "Do I need to register?", a: "Yes, registration is required. Use the Register button on this site." },
  { q: "Who can attend?", a: "The festival is open to the general public, with a focus on residents of Orile Iganmu, Coker-Aguda LCDA and Surulere." },
  { q: "What will happen at the festival?", a: "Cooking, food sharing, lectures, a panel session, music, games and awards." },
  { q: "How can I volunteer?", a: "Use the Volunteer button on the Get Involved page." },
  { q: "How can I sponsor or partner with the festival?", a: "Use the Partner with us button on the Support Us page." },
  { q: "Can I make a donation?", a: "Bank transfer details are shared on the Support Us page." },
];
