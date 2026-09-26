import { Mail, MapPin, Phone } from "lucide-react";
import { ReservationForm } from "@/components/reservation-form";
import { contact } from "@/data/flight79";

export function ContactSection() {
  return (
    <section id="contact" className="bg-navy py-24 text-cream lg:py-36"><div className="section-shell">
      <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="eyebrow text-amber">Final call</p><h2 className="mt-4 font-display text-[clamp(4rem,9vw,8.5rem)] font-semibold uppercase leading-[.78] tracking-[-.035em]">Ready for<br /><span className="text-outline">Take-Off?</span></h2></div><p className="max-w-md text-base leading-8 text-cream/60">Reservasi meja untuk sarapan, makan bersama, meeting, atau perayaan. Isi detail di bawah dan lanjutkan lewat WhatsApp.</p></div>
      <div className="grid gap-12 border-t border-cream/15 pt-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20"><div className="space-y-7">
        <a href={contact.phoneHref} data-track="phone_click" className="contact-link"><Phone className="size-5 text-amber" /><span><small>Phone / WhatsApp</small>{contact.phoneDisplay}</span></a>
        <a href={`mailto:${contact.email}`} data-track="email_click" className="contact-link"><Mail className="size-5 text-amber" /><span><small>Email</small>{contact.email}</span></a>
        <div className="contact-link"><MapPin className="size-5 text-amber" /><span><small>Destination</small>{contact.address}</span></div>
      </div><ReservationForm /></div>
    </div></section>
  );
}
