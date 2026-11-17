import { contact } from "@/config/site";

export function whatsappChatUrl(): string {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappMessage)}`;
}
