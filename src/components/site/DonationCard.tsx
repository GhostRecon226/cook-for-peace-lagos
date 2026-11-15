import { useState } from "react";
import { Copy } from "lucide-react";
import type { Donation } from "@/config/site";
import { Button } from "@/components/ui/button";
import { EmptyState } from "./EmptyState";

export function DonationCard({ details }: { details: Donation }) {
  const [status, setStatus] = useState("");
  if (!details.bankName || !details.accountName || !details.accountNumber) return <EmptyState message="Donation details will be shared here soon." />;
  async function copy() {
    let copied = false;
    try { await navigator.clipboard.writeText(details.accountNumber); copied = true; } catch {
      const field = document.createElement("textarea");
      field.value = details.accountNumber;
      field.setAttribute("readonly", "");
      field.className = "fixed left-0 top-0 opacity-0";
      const focused = document.activeElement;
      document.body.appendChild(field);
      field.select();
      try { copied = document.execCommand("copy"); } catch { copied = false; }
      field.remove();
      if (focused instanceof HTMLElement) focused.focus();
    }
    setStatus(copied ? "Copied" : "Unable to copy. Please select and copy the account number.");
  }
  return <div className="max-w-xl rounded-3xl bg-card p-6 shadow-soft sm:p-8">
    <dl className="space-y-4">{[["Bank", details.bankName], ["Account name", details.accountName], ["Account number", details.accountNumber]].map(([label, value]) => <div key={label}><dt className="text-sm text-muted-foreground">{label}</dt><dd className="break-words font-heading text-lg font-semibold">{value}</dd></div>)}</dl>
    {details.note && <p className="mt-4 whitespace-pre-line break-words">{details.note}</p>}
    <Button onClick={copy} className="mt-5 min-h-11 whitespace-normal"><Copy aria-hidden />Copy account number</Button>
    <p role="status" aria-live="polite" className="mt-2 min-h-6 text-sm text-primary">{status}</p>
    <p className="mt-3 text-sm">Please confirm the account name above before you transfer.</p>
  </div>;
}