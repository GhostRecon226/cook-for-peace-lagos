import { Sparkles } from "lucide-react";
export function EmptyState({ message }: { message: string }) {
  return (
    <div className="flex items-center gap-4 rounded-3xl border-2 border-dashed border-accent bg-card p-6 sm:p-8">
      <Sparkles className="h-7 w-7 shrink-0 text-accent-strong" aria-hidden />
      <p className="font-heading font-semibold">{message}</p>
    </div>
  );
}
