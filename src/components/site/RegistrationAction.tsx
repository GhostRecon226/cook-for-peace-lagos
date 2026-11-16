import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { links } from "@/config/site";
import { useEventState } from "@/lib/event-state";
import { ExternalButton } from "./ExternalButton";

export function ArchiveLinks() {
  return <><Button asChild className="min-h-11 bg-background text-primary hover:bg-secondary"><Link to="/gallery">See the gallery</Link></Button><Button asChild className="min-h-11 bg-background text-primary hover:bg-secondary"><Link to="/news">Read the news</Link></Button></>;
}
export function RegistrationAction({ variant = "primary", children = "Register Now" }: { variant?: "primary" | "accent" | "light"; children?: React.ReactNode }) {
  const state = useEventState();
  if (state === "ended") return <ArchiveLinks />;
  return <div><ExternalButton href={links.registerFormUrl} variant={variant}>{children}</ExternalButton></div>;
}

/** Shown on its own line below the hero button row while registration is not open yet. */
export function RegistrationNotice() {
  const state = useEventState();
  if (state !== "upcoming" || links.registerFormUrl) return null;
  return <p className="mt-3 text-sm">Registration opens soon. Check back here.</p>;
}