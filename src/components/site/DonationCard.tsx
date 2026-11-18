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
    setStatus(copied ? "Account number copied." : "Unable to copy. Please select and copy the account number.");
  }
  return <div className="max-w-xl rounded-3xl bg-card p-6 shadow-soft sm:p-8">
    <dl className="space-y-4">
      <div><dt className="text-sm text-muted-foreground">Account name</dt><dd className="break-words font-heading text-lg font-semibold">{details.accountName}</dd></div>
      <div><dt className="text-sm text-muted-foreground">Account number</dt><dd className="flex flex-wrap items-center gap-3"><span className="break-all font-heading text-lg font-semibold">{details.accountNumber}</span><Button variant="outline" className="min-h-11 text-primary" onClick={copy} aria-label="Copy account number"><Copy aria-hidden />Copy</Button></dd><p role="status" aria-live="polite" className="mt-1 min-h-5 text-sm">{status}</p></div>
      <div><dt className="text-sm text-muted-foreground">Bank</dt><dd className="break-words font-heading text-lg font-semibold">{details.bankName}</dd></div>
    </dl>
    {details.note && <p className="mt-4 whitespace-pre-line break-words">{details.note}</p>}
    <p className="mt-3 text-sm">Please confirm the account name above before you transfer.</p>
  </div>;
}