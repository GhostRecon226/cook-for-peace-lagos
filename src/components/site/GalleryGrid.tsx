import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import type { FestivalVideo, GalleryPhoto } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { EmptyState } from "./EmptyState";

export function GalleryGrid({ items }: { items: GalleryPhoto[] }) {
  const [year, setYear] = useState<number | undefined>();
  const [index, setIndex] = useState<number | null>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const years = [...new Set(items.flatMap(p => p.year === undefined ? [] : [p.year]))].sort((a, b) => b - a);
  const filtered = items.filter(p => year === undefined || p.year === year);
  const active = index === null ? undefined : filtered[index];
  function step(direction: number) { setIndex(i => i === null ? null : (i + direction + filtered.length) % filtered.length); }
  if (!items.length) return <EmptyState message="Photos from past editions will be shared here soon." />;
  return <>
    {years.length > 0 && <div className="mb-6 flex flex-wrap gap-2" role="group" aria-label="Filter photos by year">{[undefined, ...years].map(y => <Button key={y ?? "all"} variant={y === year ? "default" : "outline"} aria-pressed={y === year} className="min-h-11 rounded-full" onClick={() => setYear(y)}>{y ?? "All years"}</Button>)}</div>}
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5">{filtered.map((p, i) => <figure key={`${p.src}-${i}`} className="min-w-0"><Button variant="ghost" className="h-auto w-full overflow-hidden rounded-2xl p-0" aria-label={`Open photo: ${p.alt}`} onClick={e => { opener.current = e.currentTarget; setIndex(i); }}><img src={p.src} alt={p.alt} loading="lazy" decoding="async" width={640} height={480} className="aspect-[4/3] w-full object-cover" /></Button>{p.caption && <figcaption className="mt-2 break-words text-sm text-muted-foreground">{p.caption}</figcaption>}</figure>)}</div>
    <Dialog open={index !== null} onOpenChange={open => { if (!open) setIndex(null); }}>
      <DialogContent className="max-h-[90dvh] w-[calc(100%-2rem)] max-w-4xl overflow-y-auto" onCloseAutoFocus={e => { e.preventDefault(); opener.current?.focus(); }} onKeyDown={e => { if (e.key === "ArrowLeft") { e.preventDefault(); step(-1); } if (e.key === "ArrowRight") { e.preventDefault(); step(1); } }}>
        <DialogTitle className="pr-8 leading-normal">{active?.alt}</DialogTitle>
        <DialogDescription>{active?.caption || active?.alt}</DialogDescription>
        {active && <img src={active.src} alt={active.alt} decoding="async" width={1200} height={900} className="max-h-[60dvh] w-full object-contain" />}
        <div className="flex items-center justify-between gap-3"><Button variant="outline" size="icon" className="h-11 w-11" disabled={filtered.length < 2} onClick={() => step(-1)} aria-label="Previous photo" title="Previous photo"><ArrowLeft /></Button><p className="text-sm" aria-live="polite">{index === null ? 0 : index + 1} / {filtered.length}</p><Button variant="outline" size="icon" className="h-11 w-11" disabled={filtered.length < 2} onClick={() => step(1)} aria-label="Next photo" title="Next photo"><ArrowRight /></Button></div>
      </DialogContent>
    </Dialog>
  </>;
}

export function VideoTile({ video }: { video: FestivalVideo }) {
  const [loaded, setLoaded] = useState(false);
  return <figure className="min-w-0"><div className="aspect-video overflow-hidden rounded-2xl bg-secondary">{loaded ? <iframe title={video.title} src={`https://www.youtube-nocookie.com/embed/${encodeURIComponent(video.youtubeId)}?autoplay=1`} loading="lazy" decoding="async" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" className="h-full w-full border-0" /> : <Button variant="secondary" onClick={() => setLoaded(true)} className="h-full w-full flex-col whitespace-normal p-6" aria-label={`Play video: ${video.title}`}><Play className="size-10" aria-hidden /><span className="break-words text-base">{video.title}</span></Button>}</div><figcaption className="mt-2 text-sm text-muted-foreground">{video.title}</figcaption></figure>;
}