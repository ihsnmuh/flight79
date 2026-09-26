import { ArrowRight } from "lucide-react";
import { contact } from "@/data/flight79";

export function MobileReservationCta() {
  return <a href={contact.whatsappUrl} target="_blank" rel="noreferrer" data-track="whatsapp_reservation" className="fixed inset-x-4 bottom-4 z-40 flex min-h-14 items-center justify-center gap-3 bg-amber px-5 text-xs font-extrabold uppercase tracking-[.12em] text-navy shadow-[0_12px_32px_rgba(7,24,39,.28)] sm:hidden">Reserve via WhatsApp <ArrowRight className="size-4" /></a>;
}
