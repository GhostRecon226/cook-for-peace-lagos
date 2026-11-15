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
  registerFormUrl: "",
  volunteerFormUrl: "",
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
  phone: "",
  email: "",
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

export const sponsors: Sponsor[] = [{"name": "DUMMY TEST SPONSOR", "logo": "data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"640\" height=\"480\"%3E%3Crect width=\"640\" height=\"480\" fill=\"lightgreen\"/%3E%3Ctext x=\"50\" y=\"220\" font-size=\"32\"%3EDUMMY TEST IMAGE%3C/text%3E%3C/svg%3E", "url": "https://example.com", "tier": "DUMMY TEST TIER"}];
export const donation: Donation = {"bankName": "DUMMY TEST BANK", "accountName": "DUMMY TEST ACCOUNT", "accountNumber": "0000000000", "note": "DUMMY TEST ONLY - DO NOT TRANSFER"};
export const gallery: GalleryPhoto[] = [{"src": "data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"640\" height=\"480\"%3E%3Crect width=\"640\" height=\"480\" fill=\"lightgreen\"/%3E%3Ctext x=\"50\" y=\"220\" font-size=\"32\"%3EDUMMY TEST IMAGE%3C/text%3E%3C/svg%3E", "alt": "Dummy photo one", "caption": "DUMMY TEST PHOTO ONE", "year": 2024}, {"src": "data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"640\" height=\"480\"%3E%3Crect width=\"640\" height=\"480\" fill=\"lightgreen\"/%3E%3Ctext x=\"50\" y=\"220\" font-size=\"32\"%3EDUMMY TEST IMAGE%3C/text%3E%3C/svg%3E", "alt": "Dummy photo two", "caption": "DUMMY TEST PHOTO TWO", "year": 2025}];
export const videos: FestivalVideo[] = [];
export const news: NewsItem[] = [{"title": "DUMMY OLD NEWS", "date": "2024-01-01", "summary": "DUMMY OLD SUMMARY"}, {"title": "DUMMY NEW NEWS", "date": "2025-01-01", "summary": "DUMMY NEW SUMMARY", "body": "DUMMY EXPANDED BODY"}];
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
