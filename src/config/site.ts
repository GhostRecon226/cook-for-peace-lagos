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
  whatsapp: "2348057722794",
  whatsappMessage: "Hello, I have a question about Cook for Peace Festival 3.0.",
};

export type ProgrammeItem = { time: string; title: string; description?: string };
export type Person = { name: string; role: string; photo?: string; bio?: string };

export const programme: ProgrammeItem[] = [];
export const guests: Person[] = [];
export const team: Person[] = [
  {
    name: "Hadji Kwame Ahmed",
    role: "Lead Volunteer, Cook for Peace Festival",
    photo: "/team/hadji-kwame-ahmed.jpg",
    bio: "Pan-African youth advocate and community development expert. Founder of Associates of Change Africa. JCI Top Ten Outstanding Young Persons of Nigeria 2023.",
  },
];
export const vision = "To become a platform that connects people across global communities, where discussions on bridging social gaps and corresponding interventions are proposed and implemented.";
export const mission = "To promote peaceful coexistence and social development through largest engagement and fun interactions.";
export const objectives: string[] = [];
export const volunteerRoles: string[] = [];

export type Sponsor = { name: string; logo: string; url?: string; tier?: string };
export type Donation = { bankName: string; accountName: string; accountNumber: string; note?: string };
export type GalleryPhoto = { src: string; alt: string; caption?: string; year?: number };
export type FestivalVideo = { title: string; youtubeId: string };
export type NewsItem = { title: string; date: string; summary: string; body?: string };
export type Faq = { q: string; a: string };

export const sponsors: Sponsor[] = [
  { name: "Nestlé", logo: "/sponsors/nestle.png", url: "https://www.nestle-cwa.com/" },
  { name: "Purelife Pharmacy", logo: "/sponsors/purelife-pharmacy.png" },
  { name: "Ticketsdeck", logo: "/sponsors/ticketsdeck.png", url: "https://events.ticketsdeck.com/event/cookforpeacefestival" },
  { name: "Evogue Consulting", logo: "/sponsors/evogue-consulting.png", url: "https://evogueconsulting.com/" },
  { name: "Coker/Aguda Local Council Development Area", logo: "/sponsors/coker-aguda-lcda.png" },
  { name: "Lagos Youth Mobilization", logo: "/sponsors/lagos-youth-mobilization.png" },
  { name: "Associates of Change Africa", logo: "/sponsors/associates-of-change-africa.png" },
  { name: "Moshood Ojora-Williams Foundation", logo: "/sponsors/moshood-ojora-williams-foundation.png" },
  { name: "Don Climax Group", logo: "/sponsors/don-climax-group.png" },
  { name: "Lagos & Beyond", logo: "/sponsors/lagos-and-beyond.png" },
  { name: "Turret", logo: "/sponsors/turret.png" },
  { name: "Steel World & Design Nig. Ent.", logo: "/sponsors/steel-world-design.png" },
  { name: "Aurora Court Luxury Apartments", logo: "/sponsors/aurora-court.png" },
];
export const donation: Donation = { bankName: "", accountName: "", accountNumber: "" };
export const gallery: GalleryPhoto[] = [
  { src: "/gallery/cfp-6861.jpg", alt: "Serving tables and cooking pots, ready for the community meal", caption: "Serving tables and cooking pots, ready for the community meal" },
  { src: "/gallery/cfp-6886.jpg", alt: "A chef serves a hot meal from the chafing dish", caption: "A chef serves a hot meal from the chafing dish" },
  { src: "/gallery/cfp-6905.jpg", alt: "Organisers and partners gather behind the cooking pots", caption: "Organisers and partners gather behind the cooking pots" },
  { src: "/gallery/cfp-6846.jpg", alt: "Guests and chefs address the crowd at the festival opening", caption: "Guests and chefs address the crowd at the festival opening" },
  { src: "/gallery/cfp-6848.jpg", alt: "Residents and guests gather under the canopy", caption: "Residents and guests gather under the canopy" },
  { src: "/gallery/cfp-6894.jpg", alt: "Volunteers hand out plates of food", caption: "Volunteers hand out plates of food" },
  { src: "/gallery/cfp-6935.jpg", alt: "A volunteer checks a woman's blood pressure", caption: "A volunteer checks a woman's blood pressure" },
  { src: "/gallery/cfp-6944.jpg", alt: "Free health checks at the festival", caption: "Free health checks at the festival" },
  { src: "/gallery/cfp-6918.jpg", alt: "Guests play a game of ludo", caption: "Guests play a game of ludo" },
  { src: "/gallery/cfp-6868.jpg", alt: "A speaker addresses the crowd", caption: "A speaker addresses the crowd" },
  { src: "/gallery/cfp-6870.jpg", alt: "The festival backdrop with partner and sponsor logos", caption: "The festival backdrop with partner and sponsor logos" },
  { src: "/gallery/cfp-6954.jpg", alt: "A chef serves food with tongs (black and white)", caption: "A chef serves food with tongs (black and white)" },
];
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
