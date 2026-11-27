"use client";

import { CalendarDays } from "lucide-react";
import { EventSlider } from "@/components/event-slider";
import { useLanguage } from "@/components/language-provider";
import { Reveal } from "@/components/motion/reveal";
import { contact, eventSlides, events } from "@/data/flight79";

export function EventsSection() {
  const { copy } = useLanguage();
  const localizedSlides = eventSlides.map((slide, index) => ({
    ...slide,
    ...copy.events.slides[index],
  }));

  return (
    <section
      aria-labelledby="events-title"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-28"
    >
      <div className="absolute bottom-0 right-0 h-1/2 w-1/3 bg-amber/90" />
      <div className="section-shell relative">
        <Reveal variant="scale">
          <div className="grid overflow-hidden border border-cream/20 bg-navy text-cream lg:grid-cols-[1.15fr_.85fr]">
            <EventSlider slides={localizedSlides} />
            <div className="p-6 sm:p-10 lg:p-12">
              <p className="eyebrow text-amber">{copy.events.eyebrow}</p>
              <h2
                id="events-title"
                className="mt-4 font-display text-4xl font-semibold uppercase leading-[.95] tracking-tight sm:text-6xl"
              >
                {copy.events.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-cream/80">
                {copy.events.body}
              </p>
              <ul className="mt-7 divide-y divide-cream/15 border-y border-cream/15">
                {events.map((event, index) => (
                  <li
                    key={event}
                    className="flex items-center justify-between gap-3 py-3.5 text-sm text-cream"
                  >
                    <span>{copy.events.items[index]}</span>
                    <span className="font-display text-xs tracking-widest text-amber">
                      0{index + 1}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                data-track="plan_event"
                className="button-primary mt-8"
              >
                {copy.events.cta} <CalendarDays className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
