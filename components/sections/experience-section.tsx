"use client";

import Image from "next/image";
import { Coffee, Compass, Users, UtensilsCrossed } from "lucide-react";
import { CoffeeRunwayCanvas } from "@/components/canvas/coffee-runway-canvas";
import { useLanguage } from "@/components/language-provider";
import { Reveal } from "@/components/motion/reveal";
import { experienceFeatures } from "@/data/flight79";

const serviceHighlights = [
  { label: "Breakfast", Icon: Coffee },
  { label: "All-day menu", Icon: UtensilsCrossed },
  { label: "Groups", Icon: Users },
];

export function ExperienceSection() {
  const { copy } = useLanguage();

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-navy py-16 text-cream sm:py-20 lg:py-32"
    >
      {/* Interactive HTML5 Coffee-Aroma & Altitude Contour Canvas */}
      <div className="absolute inset-0 z-0 opacity-90">
        <CoffeeRunwayCanvas />
      </div>

      <div className="section-shell relative z-10">
        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal variant="left">
              <p className="eyebrow flex items-center gap-2.5 text-amber">
                <Compass className="size-4" aria-hidden="true" />
                {copy.experience.eyebrow}
              </p>
              <h2 className="section-title mt-5 text-cream">
                {copy.experience.title}
              </h2>

              <div className="porthole-frame relative mt-8 aspect-[3/2] w-full max-w-[34rem] overflow-hidden lg:mt-10">
                <Image
                  src="/flight79-second.jpg"
                  alt="Interior hangat Flight 79 untuk keluarga dan profesional"
                  fill
                  sizes="(min-width: 1280px) 34rem, (min-width: 1024px) 42vw, 100vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="eyebrow text-amber">{copy.experience.mood}</p>
                  <p className="mt-1 text-sm text-cream/90">
                    {copy.experience.moodBody}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="divide-y divide-cream/15 border-y border-cream/15 bg-navy/90">
            {experienceFeatures.map((feature, index) => (
              <Reveal key={feature.number} delay={index * 90}>
                <article className="grid gap-4 px-2 py-8 sm:grid-cols-[5rem_1fr] sm:px-6 lg:py-12">
                  <div className="flex flex-col">
                    <span className="font-display text-4xl font-semibold text-amber">
                      {feature.number}
                    </span>
                    <span className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-cream/70">
                      GATE 79
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-3xl font-semibold uppercase tracking-wide text-cream sm:text-4xl lg:text-5xl">
                      {copy.experience.features[index].title}
                    </h3>
                    <p className="mt-4 max-w-xl text-base leading-8 text-cream/80">
                      {copy.experience.features[index].copy}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}

            <Reveal delay={240}>
              <div className="grid grid-cols-3 gap-px bg-cream/15">
                {serviceHighlights.map(({ label, Icon }, index) => (
                  <div
                    key={label}
                    className="bg-navy px-3 py-6 text-center"
                  >
                    <Icon className="mx-auto size-5 text-amber" aria-hidden="true" />
                    <span className="mt-3 block text-xs font-bold uppercase tracking-[.12em] text-cream/85">
                      {copy.experience.highlights[index]}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
