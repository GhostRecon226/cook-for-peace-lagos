import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { links } from "@/config/site";
import { useEventState } from "@/lib/event-state";
import { ExternalButton } from "./ExternalButton";

export function ArchiveLinks() {
  return <><Button asChild className="min-h-11 bg-background text-primary hover:bg-secondary"><Link to="/gallery">See the gallery</Link></Button><Button asChild className="min-h-11 bg-background text-primary hover:bg-secondary"><Link to="/news">Read the news</Link></Button></>;
}
export function RegistrationAction({ variant = "primary", children = "Register Now", notice = false }: { variant?: "primary" | "accent" | "light"; children?: React.ReactNode; notice?: boolean }) {
  const state = useEventState();
  if (state === "ended") return <ArchiveLinks />;
  const button = <ExternalButton href={links.registerFormUrl} variant={variant}>{children}</ExternalButton>;
  if (notice && state === "upcoming" && !links.registerFormUrl) {
    return <>{button}<p className="mt-2 w-full text-sm">Registration opens soon. Check back here.</p></>;
  }
  return <div>{button}</div>;
}