import { cn } from "@/lib/utils";

export function TriBar({ className }: { className?: string }) {
  return <div aria-hidden="true" className={cn("mx-auto flex h-2 w-24 overflow-hidden", className)}>
    <span className="flex-1 bg-logo-green" />
    <span className="flex-1 bg-logo-red" />
    <span className="flex-1 bg-logo-orange" />
  </div>;
}