import type { Faq } from "@/config/site";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { EmptyState } from "./EmptyState";

export function FaqList({ items }: { items: Faq[] }) {
  if (!items.length) return <EmptyState message="Answers to your questions will be shared here soon." />;
  return <Accordion type="single" collapsible>{items.map((f, i) => <AccordionItem value={`faq-${i}`} key={f.q}><AccordionTrigger className="min-h-14 gap-4 font-heading text-base font-semibold">{f.q}</AccordionTrigger><AccordionContent className="whitespace-pre-line break-words text-base leading-relaxed">{f.a}</AccordionContent></AccordionItem>)}</Accordion>;
}