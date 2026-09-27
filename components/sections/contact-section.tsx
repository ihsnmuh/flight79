"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { ReservationForm } from "@/components/reservation-form";
import { contact } from "@/data/flight79";
import { useLanguage } from "@/components/language-provider";

export function ContactSection() {
  const { copy } = useLanguage();
  return (
    <section id="contact" className="bg-navy py-24 text-cream lg:py-36"><div className="section-shell">
      <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="eyebrow text-amber">{copy.contact.eyebrow}</p><h2 className="mt-4 font-display text-[clamp(4rem,9vw,8.5rem)] font-semibold uppercase leading-[.78] tracking-[-.035em]">{copy.contact.title1}<br /><span className="text-outline">{copy.contact.title2}</span></h2></div><p className="max-w-md text-base leading-8 text-cream/60">{copy.contact.body}</p></div>
      <div className="grid gap-12 border-t border-cream/15 pt-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20"><div className="space-y-7">
        <a href={contact.phoneHref} data-track="phone_click" className="contact-link"><Phone className="size-5 text-amber" /><span><small>{copy.contact.phone}</small>{contact.phoneDisplay}</span></a>
        <a href={`mailto:${contact.email}`} data-track="email_click" className="contact-link"><Mail className="size-5 text-amber" /><span><small>{copy.contact.email}</small>{contact.email}</span></a>
        <div className="contact-link"><MapPin className="size-5 text-amber" /><span><small>{copy.contact.destination}</small>{contact.address}</span></div>
      </div><ReservationForm /></div>
    </div></section>
  );
}
