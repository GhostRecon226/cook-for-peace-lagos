import { MessageCircle } from "lucide-react";
import { contact } from "@/config/site";
import { whatsappChatUrl } from "@/lib/whatsapp";

/**
 * Floating chat entry point, rendered once in the shared layout so it appears on
 * every page. Renders nothing while contact.whatsapp is empty, and never reads
 * window, so server rendering and first paint match.
 */
export function WhatsAppFloat() {
  if (!contact.whatsapp) return null;
  return (
    <a
      href={whatsappChatUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-4 right-4 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg md:bottom-6 md:right-6"
    >
      <MessageCircle className="h-7 w-7" aria-hidden />
    </a>
  );
}
