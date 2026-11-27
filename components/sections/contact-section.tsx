"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { Reveal } from "@/components/motion/reveal";
import { ReservationForm } from "@/components/reservation-form";
import { contact } from "@/data/flight79";

export function ContactSection() {
  const { copy } = useLanguage();

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-navy py-16 text-cream sm:py-20 lg:py-32"
    >
      <div className="runway-line absolute inset-x-0 top-0 opacity-65" />

      <div className="section-shell relative">
        <Reveal>
          <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="eyebrow text-amber">{copy.contact.eyebrow}</p>
              <h2 className="mt-4 font-display text-[clamp(3.4rem,8.5vw,8rem)] font-semibold uppercase leading-[.82] tracking-[-.035em]">
                {copy.contact.title1}
                <br />
                <span className="text-outline">{copy.contact.title2}</span>
              </h2>
            </div>
            <p className="max-w-md text-base leading-8 text-cream/80">
              {copy.contact.body}
            </p>
          </div>
        </Reveal>

        <div className="grid gap-10 border-t border-cream/20 pt-10 lg:grid-cols-[.68fr_1.32fr] lg:gap-16 lg:pt-12">
          <Reveal variant="left" className="space-y-6">
            <a
              href={contact.phoneHref}
              data-track="phone_click"
              className="contact-link"
            >
              <Phone className="mt-1 size-5 shrink-0 text-amber" aria-hidden="true" />
              <span>
                <small>{copy.contact.phone}</small>
                {contact.phoneDisplay}
              </span>
            </a>
            <a
              href={`mailto:${contact.email}`}
              data-track="email_click"
              className="contact-link"
            >
              <Mail className="mt-1 size-5 shrink-0 text-amber" aria-hidden="true" />
              <span>
                <small>{copy.contact.email}</small>
                {contact.email}
              </span>
            </a>
            <div className="contact-link">
              <MapPin className="mt-1 size-5 shrink-0 text-amber" aria-hidden="true" />
              <span>
                <small>{copy.contact.destination}</small>
                {contact.address}
              </span>
            </div>
          </Reveal>

          <Reveal variant="up" delay={100}>
            <ReservationForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
