"use client";

import { contact } from "@/data/flight79";
import { useLanguage } from "@/components/language-provider";

function WhatsAppIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.8 14.07c-.24.68-1.41 1.3-1.95 1.38-.5.08-1.13.11-1.82-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.79-4.18-4.94-4.37-.14-.2-1.18-1.57-1.18-2.99 0-1.42.74-2.12 1.01-2.41.26-.29.58-.36.77-.36.19 0 .39.01.56.01.18.01.42-.07.66.5.24.58.82 2 .89 2.15.07.15.12.32.02.52-.1.2-.15.32-.29.49-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.76 1.25 1.63 2.03 1.12 1 2.06 1.31 2.35 1.46.29.15.46.12.63-.07.17-.2.73-.85.92-1.14.2-.29.39-.24.66-.15.27.1 1.7.8 1.99.95.29.15.48.22.55.34.07.12.07.7-.17 1.38z" />
    </svg>
  );
}

export function MobileReservationCta() {
  const { copy } = useLanguage();

  return (
    <a
      href={contact.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      data-track="whatsapp_reservation"
      aria-label={copy.nav.reserveWhatsapp}
      title={copy.nav.reserveWhatsapp}
      className="fixed bottom-5 right-5 z-40 flex size-14 touch-manipulation items-center justify-center rounded-full border border-navy/15 bg-amber text-navy shadow-[0_12px_32px_rgba(7,24,39,.34)] transition-transform duration-150 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-amber sm:hidden"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
