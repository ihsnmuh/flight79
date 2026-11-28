"use client";

import { ArrowRight, Clock3, MapPin, PlaneLanding } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { Reveal } from "@/components/motion/reveal";
import { contact } from "@/data/flight79";

export function LocationSection() {
  const { copy } = useLanguage();

  return (
    <section id="location" className="relative overflow-hidden bg-coffee text-cream">
      <div className="grid lg:grid-cols-[.85fr_1.15fr]">
        <div className="px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24 xl:pl-[max(3.5rem,calc((100vw-1440px)/2+3.5rem))]">
          <Reveal variant="left">
            <p className="eyebrow flex items-center gap-2.5 text-[#f6c86b]">
              <PlaneLanding className="size-4" aria-hidden="true" />
              {copy.location.eyebrow}
            </p>
            <h2 className="section-title mt-5 max-w-xl text-cream">
              {copy.location.title}
            </h2>

            <div className="mt-8 space-y-6 border-y border-cream/25 py-7 sm:mt-10 sm:py-8">
              <div className="flex gap-4">
                <MapPin className="mt-1 size-5 shrink-0 text-[#f6c86b]" aria-hidden="true" />
                <div>
                  <p className="eyebrow text-cream/85">
                    {copy.location.address}
                  </p>
                  <p className="mt-2 max-w-sm text-base leading-relaxed text-cream">
                    {contact.address}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock3 className="mt-1 size-5 shrink-0 text-[#f6c86b]" aria-hidden="true" />
                <div>
                  <p className="eyebrow text-cream/85">{copy.location.hours}</p>
                  <p className="mt-2 text-base text-cream">{copy.location.hoursValue}</p>
                </div>
              </div>
              <div className="border-t border-cream/20 pt-5 text-sm leading-7 text-cream/90">
                <p>
                  <strong className="text-cream">
                    {copy.location.parking}:
                  </strong>{" "}
                  {copy.location.parkingValue}
                </p>
              </div>
            </div>

            <a
              href={contact.mapsUrl}
              target="_blank"
              rel="noreferrer"
              data-track="get_directions"
              className="button-primary mt-8 sm:mt-10"
            >
              {copy.location.directions} <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </Reveal>
        </div>

        <div className="relative min-h-[380px] bg-navy sm:min-h-[460px]">
          <iframe
            title="Peta lokasi Flight 79"
            src="https://www.google.com/maps?q=Ruko%20Sasakirana%2079%2C%20Kota%20Baru%20Parahyangan&output=embed"
            className="absolute inset-0 h-full w-full border-0 grayscale-[.15] contrast-[1.05]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
