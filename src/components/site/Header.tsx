import { useEventState } from "@/lib/event-state";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { links } from "@/config/site";
import { ExternalButton } from "./ExternalButton";

export const navItems = [
  { to: "/about", label: "About" },
  { to: "/festival", label: "Festival" },
  { to: "/get-involved", label: "Get Involved" },
  { to: "/support-us", label: "Support Us" },
  { to: "/gallery", label: "Gallery" },
  { to: "/news", label: "News" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const state = useEventState();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-3 py-3 sm:px-4">
        <Link to="/" className="shrink-0" onClick={() => setOpen(false)}>
          <img src="/brand/cfp-logo.png" alt="Cook for Peace Festival" width={1000} height={532} className="h-[54px] w-auto lg:h-16" />
        </Link>
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex gap-1">
            {navItems.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="rounded-full px-3 py-2 text-sm font-medium hover:bg-secondary"
                  activeProps={{ className: "bg-secondary text-primary" }}>{n.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          {state !== "ended" && <ExternalButton href={links.registerFormUrl} variant="accent" className="px-3 py-2">Register</ExternalButton>}
          <Button type="button" variant="ghost" size="icon" className="h-11 w-11 shrink-0 rounded-full hover:bg-secondary lg:hidden"
            aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-border lg:hidden">
          <ul className="mx-auto grid max-w-6xl gap-1 px-4 py-3">
            {navItems.map((n) => (
              <li key={n.to}>
                <Link to={n.to} onClick={() => setOpen(false)} className="block rounded-xl px-3 py-3 font-medium hover:bg-secondary"
                  activeProps={{ className: "bg-secondary text-primary" }}>{n.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
