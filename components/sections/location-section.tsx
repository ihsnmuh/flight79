"use client";

import { ArrowRight, Clock3, MapPin } from "lucide-react";
import { contact } from "@/data/flight79";
import { useLanguage } from "@/components/language-provider";

export function LocationSection() {
  const { copy } = useLanguage();
  return (
    <section id="location" className="bg-coffee text-cream"><div className="grid lg:grid-cols-[.82fr_1.18fr]">
      <div className="px-5 py-20 sm:px-8 lg:px-14 lg:py-24 xl:pl-[max(3.5rem,calc((100vw-1440px)/2+3.5rem))]">
        <p className="eyebrow text-amber">{copy.location.eyebrow}</p><h2 className="section-title mt-5 max-w-xl text-cream">{copy.location.title}</h2>
        <div className="mt-10 space-y-8">
          <div className="flex gap-4"><MapPin className="mt-1 size-5 shrink-0 text-amber" /><div><p className="eyebrow text-cream/40">{copy.location.address}</p><p className="mt-2 max-w-sm text-base leading-relaxed">{contact.address}</p></div></div>
          <div className="flex gap-4"><Clock3 className="mt-1 size-5 shrink-0 text-amber" /><div><p className="eyebrow text-cream/40">{copy.location.hours}</p><p className="mt-2 text-base">{contact.openingHours}</p></div></div>
          <div className="border-t border-cream/20 pt-6 text-sm leading-7 text-cream/60"><p><strong className="text-cream">{copy.location.parking}:</strong> {contact.parking}</p></div>
        </div>
        <a href={contact.mapsUrl} target="_blank" rel="noreferrer" data-track="get_directions" className="button-primary mt-10">{copy.location.directions} <ArrowRight className="size-4" /></a>
      </div>
      <div className="relative min-h-[460px] bg-navy"><iframe title="Peta lokasi Flight 79" src="https://www.google.com/maps?q=Ruko%20Sasakirana%2079%2C%20Kota%20Baru%20Parahyangan&output=embed" className="absolute inset-0 h-full w-full border-0 grayscale-[.15] contrast-[1.05]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
    </div></section>
  );
}
