import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "accent" | "outline" | "light";
const styles: Record<Variant, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90",
  accent: "bg-accent text-accent-foreground hover:bg-accent/90",
  outline: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
  light: "bg-background text-primary hover:bg-secondary",
};

export function ExternalButton({
  href, children, variant = "primary", className,
}: { href: string; children: ReactNode; variant?: Variant; className?: string }) {
  const base = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 font-heading text-sm font-semibold transition-colors",
    styles[variant], className,
  );
  if (!href) {
    return (
      <span className="group relative inline-flex">
        <button type="button" disabled aria-disabled="true" title="Link coming soon"
          aria-describedby={undefined} className={cn(base, "cursor-not-allowed opacity-60")}>
          {children}
          <span className="sr-only"> (link coming soon)</span>
        </button>
        <span role="tooltip" className="pointer-events-none absolute -top-9 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-xs text-background opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">
          Link coming soon
        </span>
      </span>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={base}>
      {children}
    </a>
  );
}
