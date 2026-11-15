import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone } from "lucide-react";
import { contact, event, links, social } from "@/config/site";
import { navItems } from "./Header";

const socials = [
  { href: social.facebook, label: "Facebook", Icon: Facebook },
  { href: social.instagram, label: "Instagram", Icon: Instagram },
  { href: social.x, label: "X (Twitter)", Icon: Twitter },
  { href: social.youtube, label: "YouTube", Icon: Youtube },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="divider-wave-top" aria-hidden="true" />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <p className="font-heading text-xl font-extrabold">Cook for Peace</p>
          <p className="mt-3 text-sm opacity-90">{event.purpose}</p>
        </div>
        <nav aria-label="Footer">
          <p className="font-heading font-semibold">Quick links</p>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
            {navItems.map((n) => (
              <li key={n.to}><Link to={n.to} className="underline-offset-4 hover:underline">{n.label}</Link></li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="font-heading font-semibold">Contact</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" aria-hidden />
              {contact.email ? <a href={`mailto:${contact.email}`}>{contact.email}</a> : "Email coming soon"}</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" aria-hidden />
              {contact.phone ? <a href={`tel:${contact.phone}`}>{contact.phone}</a> : "Phone coming soon"}</li>
          </ul>
          <ul className="mt-4 flex gap-2" aria-label="Social media">
            {socials.map(({ href, label, Icon }) => (
              <li key={label}>
                {href ? (
                  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/15 hover:bg-primary-foreground/25"><Icon className="h-5 w-5" /></a>
                ) : (
                  <span title="Link coming soon" aria-label={`${label} (coming soon)`} role="img"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/15 opacity-90"><Icon className="h-5 w-5" /></span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-2 px-4 py-4 text-xs opacity-90">
          <p>© 2026 Cook for Peace Festival</p>
          {links.privacyNoticeUrl ? (
            <a href={links.privacyNoticeUrl} target="_blank" rel="noopener noreferrer" className="underline">Privacy notice</a>
          ) : (
            <span title="Link coming soon">Privacy notice (coming soon)</span>
          )}
        </div>
      </div>
    </footer>
  );
}
