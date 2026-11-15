export function SectionHeading({ eyebrow, title, id }: { eyebrow: string; title: string; id?: string }) {
  return (
    <div className="mb-8">
      <p className="font-heading text-sm font-bold uppercase tracking-widest text-highlight">{eyebrow}</p>
      <h2 id={id} className="mt-2 text-3xl font-extrabold sm:text-4xl">{title}</h2>
    </div>
  );
}
