# Cook For Peace Lagos

Build a mobile-first marketing website for "Cook for Peace Festival 3.0", an annual community food festival in Lagos, Nigeria that promotes unity and peace. Frontend only. Do not enable any backend or database. All forms are external Google Forms, opened via links.

KNOWN FACTS (use exactly, do not invent others)
- Event: Cook for Peace Festival 3.0, 3rd annual edition (previous editions 2024 and 2025)
- Date: Friday, 18 December 2026, 9:00 AM to 5:00 PM (Lagos time, WAT, UTC+1)
- Venue: The Stable, Union Bank Sports Complex, Bode Thomas Street, Surulere, Lagos
- Entry: free, registration required
- Expected attendance: 5,000+
- Activities: cooking, food sharing, lectures, panel session, music, games, awards
- Focus community: Orile Iganmu, Coker-Aguda LCDA and Surulere
- Purpose: a holiday food festival that brings people together to celebrate while promoting unity, communal peace and social development

DESIGN DIRECTION
- Feel: vibrant, colourful, celebratory, welcoming. Community and cultural, not corporate.
- Tentative palette (we will swap to the logo colours later, so define all colours as CSS variables / Tailwind theme tokens, never hardcode): deep green primary #1B7F4B, sunny orange accent #F59E0B, warm cream background #FFF8EC, chili red highlight #D9381E, dark text #1F2937.
- Fonts: Poppins for headings, Inter for body.
- Rounded cards, generous spacing, playful but clean section dividers, subtle motion on scroll. Respect prefers-reduced-motion.
- Most visitors are on mobile phones with limited data. Keep it fast, use lazy-loaded images, no heavy libraries.
- Accessible: AA contrast, visible focus states, alt text, semantic HTML.

STRUCTURE
- Sticky header with logo placeholder (text wordmark "Cook for Peace" for now), nav links, and a prominent "Register" button. Mobile hamburger menu.
- Footer with short about line, quick links, social icon placeholders, contact placeholder, and a "Privacy notice" link placeholder.
- Routes (react-router): / (Home), /about, /festival, /get-involved, /support-us, /gallery, /news, /faq, /contact. Build Home fully. For the other pages create a clean page with a heading, a one-line intro and a "Content coming soon" block, using the shared layout.

HOME PAGE SECTIONS
1. Hero: festival name, tagline "Cooking together. Building peace.", date, venue, a live countdown to 18 Dec 2026 9:00 AM WAT, primary "Register Now" button and secondary "Volunteer" button.
2. Quick facts strip: Date, Time, Venue, Free entry, 5,000+ expected.
3. About teaser: 2 to 3 sentences from the purpose above, link to /about.
4. "What to expect": icon cards for Cooking, Food sharing, Lectures and panel, Music, Games, Awards.
5. "Get involved": cards for Attend (Register), Volunteer, Sponsor or partner, each with a button.
6. Venue block: address and an embedded Google Map for "Union Bank Sports Complex, Bode Thomas Street, Surulere, Lagos" plus a "Get directions" link.
7. Sponsors strip: placeholder logo tiles labelled "Sponsor logos coming soon".
8. Newsletter block: a button linking to the newsletter form (not an inline form).
9. Final CTA banner: "Join us on 18 December" with Register button.

CONFIG
- Create a single file src/config/site.ts exporting: event details, and these external URLs, all currently empty placeholders: registerFormUrl, volunteerFormUrl, sponsorFormUrl, contactFormUrl, newsletterFormUrl, plus social links and contact phone/email.
- All CTA buttons read from this file and open the link in a new tab (rel="noopener noreferrer"). If a URL is empty, show the button as disabled with a "Link coming soon" tooltip.

SEO
- Page titles, meta descriptions and Open Graph tags per page. Add structured data (schema.org Event) for the festival using the known facts.

Do not add testimonials, sponsor names, guest names, a programme schedule or donation details. Those come later.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://cook-for-peace-lagos.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/1d7ad290-ce60-4350-bdd8-0c627df78f91).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
