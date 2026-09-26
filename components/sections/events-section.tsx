import { CalendarDays } from "lucide-react";
import { EventSlider } from "@/components/event-slider";
import { contact, eventSlides, events } from "@/data/flight79";

export function EventsSection() {
  return (
    <section aria-labelledby="events-title" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute bottom-0 right-0 h-1/2 w-1/3 bg-amber" />
      <div className="section-shell relative"><div className="grid overflow-hidden bg-navy text-cream lg:grid-cols-[1.15fr_.85fr]"><EventSlider slides={eventSlides} /><div className="p-7 sm:p-10 lg:p-12"><p className="eyebrow text-amber">Special occasions</p><h2 id="events-title" className="mt-4 font-display text-5xl font-semibold uppercase leading-[.95] tracking-tight sm:text-6xl">Plan Your Event</h2><p className="mt-5 text-sm leading-7 text-cream/60">Bawa orang-orang favorit Anda. Kami siap membantu menyiapkan suasana yang pas untuk momen penting.</p><ul className="mt-8 divide-y divide-cream/15 border-y border-cream/15">{events.map((event) => <li key={event} className="flex items-center gap-3 py-3 text-sm"><span className="size-1.5 bg-amber" />{event}</li>)}</ul><a href={contact.whatsappUrl} target="_blank" rel="noreferrer" data-track="plan_event" className="button-primary mt-8">Plan Your Event <CalendarDays className="size-4" /></a></div></div></div>
    </section>
  );
}
