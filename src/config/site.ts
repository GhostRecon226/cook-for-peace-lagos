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
