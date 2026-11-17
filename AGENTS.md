<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->

- All event facts and external form/social URLs live in src/config/site.ts; CTAs use ExternalButton, which disables itself when a URL is empty — keeps links editable in one place.
- Shared page sections live in src/components/site (PageHero, SectionHeading, CtaBanner, VenueBlock, EmptyState, Timeline, PeopleGrid); list content from config renders an EmptyState when empty. Reveal keeps content visible by default and only hides below-fold items once JS runs.

- SponsorWall, DonationCard, GalleryGrid, FaqList and NewsList take typed configuration data as props so empty and filled states share the same rendering path.
- Gallery dialogs restore focus to the originating photo button and support arrow-key navigation; privacy has its own route as the fallback for an unset external notice URL.
- Set siteUrl in the shared configuration once the custom domain is connected; pageUrlMetadata emits canonical and og:url only when that setting is nonempty, so unconfirmed addresses never reach page metadata.
- Reuse TriBar for decorative hero/footer accents; its colours come from theme tokens so the motif remains consistent.
- Official brand files are served directly from public/brand and referenced by /brand/ URLs with explicit image dimensions, preserving the supplied assets and preventing layout shift.
- Share previews appear once siteUrl is set; pageUrlMetadata adds the official share image only with a configured address, keeping sharing and canonical URLs consistent.

- Event state starts upcoming during SSR and updates only after mount; calendar, sharing and structured data use pure config-driven helpers so dates stay consistent and testable.

- Sitemap URLs derive from the router with required staticData.sitemap decisions; use the confirmed public origin and omit lastmod without authoritative page timestamps to keep discovery accurate.
- Site-wide overlays (e.g. the floating chat button) render once from the shared layout in src/routes/__root.tsx, stay below dialog z-index 50, and render nothing when their config value is empty.
