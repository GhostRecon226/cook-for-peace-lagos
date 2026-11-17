import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MessageCircle } from "lucide-react";
import { contact, event, links, social } from "@/config/site";
import { whatsappChatUrl } from "@/lib/whatsapp";
import { navItems } from "./Header";
import { TriBar } from "./TriBar";

const socials = [
  { href: social.facebook, label: "Facebook", Icon: Facebook },
  { href: social.instagram, label: "Instagram", Icon: Instagram },
  { href: social.x, label: "X (Twitter)", Icon: Twitter },
  { href: social.youtube, label: "YouTube", Icon: Youtube },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <TriBar />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <Link to="/" className="mb-4 inline-block rounded-lg bg-background p-4">
            <img src="/brand/cfp-logo.png" alt="Cook for Peace Festival" loading="lazy" decoding="async" width={1000} height={532} className="h-auto w-48" />
          </Link>
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
              {contact.phone ? <a href={`tel:${contact.phoneHref}`}>{contact.phone}</a> : "Phone coming soon"}</li>
            <li className="flex items-center gap-2"><MessageCircle className="h-4 w-4" aria-hidden />
              {contact.whatsapp ? <a href={whatsappChatUrl()} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a> : "WhatsApp coming soon"}</li>
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
            <Link to="/privacy" className="underline">Privacy notice</Link>
          )}
        </div>
      </div>
    </footer>
  );
}
