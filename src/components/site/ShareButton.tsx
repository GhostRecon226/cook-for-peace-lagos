import { useEffect, useState } from "react";
import { Copy, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { event } from "@/config/site";
import { buildShareMessage, copyLink } from "@/lib/share";
import { useEventState } from "@/lib/event-state";

export function ShareButton() {
  const state = useEventState();
  const [url, setUrl] = useState("");
  const [native, setNative] = useState(false);
  const [status, setStatus] = useState("");
  useEffect(() => { setUrl(window.location.href); setNative(typeof navigator.share === "function"); }, []);
  if (state === "ended") return null;
  const message = buildShareMessage(event, url);
  async function share() {
    try { await navigator.share({ title: event.name, text: message }); }
    catch (error) { if (!(error instanceof Error && error.name === "AbortError")) setNative(false); }
  }
  async function copy() {
    try { await copyLink(url); setStatus("Link copied."); }
    catch { setStatus("Unable to copy. Use Share on WhatsApp instead."); }
  }
  return <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Share festival">{native ? <Button variant="outline" className="min-h-11 text-primary" onClick={share}><Share2 aria-hidden />Share</Button> : <><Button asChild variant="outline" className="min-h-11 text-primary"><a href={`https://wa.me/?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer" aria-disabled={!url} onClick={e => { if (!url) e.preventDefault(); }}><Share2 aria-hidden />Share on WhatsApp</a></Button><Button variant="outline" className="min-h-11 text-primary" disabled={!url} onClick={copy}><Copy aria-hidden />Copy link</Button></>}<span className="text-sm" role="status">{status}</span></div>;
}