import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ExternalButton } from "@/components/site/ExternalButton";
import { gallery, videos } from "@/config/site";
import { GalleryGrid, VideoTile } from "@/components/site/GalleryGrid";
export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Cook for Peace Festival 3.0" },
      { name: "description", content: "Moments from past Cook for Peace festival editions in Lagos." },
      { property: "og:title", content: "Gallery — Cook for Peace Festival 3.0" },
      { property: "og:description", content: "Moments from past Cook for Peace festival editions in Lagos." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://cook-for-peace-lagos.lovable.app/gallery" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cook-for-peace-lagos.lovable.app/gallery" }],
    
  }),
  component: Page,
});
function Page() { return <><PageHero title="Gallery" intro="Moments from past editions of Cook for Peace." /><section className="mx-auto max-w-6xl px-4 py-14"><SectionHeading eyebrow="Past editions" title="Festival moments" /><GalleryGrid items={gallery} /></section>{videos.length > 0 && <section className="mx-auto max-w-6xl px-4 py-14"><SectionHeading eyebrow="Watch" title="Videos" /><div className="grid gap-6 md:grid-cols-2">{videos.map((v, i) => <VideoTile key={`${v.youtubeId}-${i}`} video={v} />)}</div></section>}</>; }
