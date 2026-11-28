"use client";

import Image from "next/image";
import { Coffee, Compass } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { Reveal } from "@/components/motion/reveal";
import { contact } from "@/data/flight79";

export function AboutSection() {
  const { copy } = useLanguage();

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-6 select-none font-display text-[15rem] font-bold leading-none text-navy/[.04] lg:text-[22rem]"
      >
        79
      </div>

      <div className="section-shell relative">
        <div className="grid items-start gap-12 lg:grid-cols-[.82fr_1.18fr] lg:gap-16">
          <Reveal variant="left">
            <div className="flex items-center gap-3">
              <span className="inline-flex size-8 items-center justify-center border border-coffee/40 text-coffee">
                <Compass className="size-4" aria-hidden="true" />
              </span>
              <p className="eyebrow text-coffee">{copy.about.eyebrow}</p>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#524d45]">
              {copy.about.intro}
            </p>

            {/* Aircraft window porthole preview of the espresso bar */}
            <div className="relative mt-8 max-w-sm sm:mt-10">
              <div className="porthole-frame relative aspect-[4/5] overflow-hidden bg-navy">
                <Image
                  src="/flight79-coffee-machine.jpg"
                  alt="Mesin espresso Flight 79 dengan secangkir kopi yang baru diseduh"
                  fill
                  sizes="(min-width: 1024px) 24rem, 100vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent" />
                <div className="absolute inset-x-5 bottom-5 flex items-center justify-between border-t border-cream/30 pt-3 text-cream">
                  <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-amber">
                    <Coffee className="size-3.5" aria-hidden="true" />
                    {contact.openingHours}
                  </span>
                  <span className="font-display text-sm tracking-widest text-cream">
                    F79
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal variant="up" delay={100} className="relative lg:pt-4">
            <h2 className="section-title max-w-5xl text-navy">
              {copy.about.title1}{" "}
              <span className="text-coffee">{copy.about.title2}</span>
              {copy.about.title3}
            </h2>

            <div className="mt-8 grid gap-6 border-t border-ink/20 pt-8 sm:mt-10 sm:gap-8 md:grid-cols-2">
              <p className="text-base leading-8 text-ink/80">
                {copy.about.body1}
              </p>
              <p className="text-base leading-8 text-ink/80">
                {copy.about.body2}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 border-y border-ink/20 py-5 text-xs font-bold uppercase tracking-[0.14em] text-coffee sm:mt-10 sm:gap-6">
              <span>FLIGHT 79 · COFFEE &amp; EATERY</span>
              <span
                aria-hidden="true"
                className="hidden h-3 w-px bg-ink/25 sm:inline-block"
              />
              <span className="text-[#524d45]">{contact.address}</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
