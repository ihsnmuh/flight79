"use client";

import Image from "next/image";
import { ArrowDownRight, Compass, MapPin, Plane } from "lucide-react";
import { FlightRadarCanvas } from "@/components/canvas/flight-radar-canvas";
import { useLanguage } from "@/components/language-provider";
import { SplitFlapText } from "@/components/motion/split-flap";
import { contact } from "@/data/flight79";

export function HeroSection() {
  const { copy } = useLanguage();

  return (
    <section
      id="home"
      className="relative isolate min-h-[88svh] overflow-hidden bg-navy text-cream lg:min-h-[100svh]"
    >
      <Image
        src="/flight79-hero.jpg"
        alt="Hidangan nasi goreng dan kopi di interior bergaya airport lounge"
        fill
        priority
        sizes="100vw"
        className="animate-ken-burns object-cover object-center"
      />

      {/* Strong dark scrim on the text column so WCAG AA contrast passes across the entire hero */}
      <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(4,16,27,.96)_0%,rgba(7,24,39,.86)_44%,rgba(7,24,39,.42)_74%,rgba(4,16,27,.62)_100%)]" />

      {/* Interactive HTML5 Aviation Radar + Coffee Crema Particle Canvas */}
      <div className="absolute inset-0 z-10">
        <FlightRadarCanvas />
      </div>

      {/* Static Runway Centerline Identity Motif */}
      <div className="runway-line absolute inset-x-0 bottom-8 z-20 opacity-80" />

      <div className="relative z-20 mx-auto flex min-h-[88svh] max-w-[1440px] flex-col justify-end px-5 pb-16 pt-28 sm:px-8 lg:min-h-[100svh] lg:px-14 lg:pb-16 lg:pt-32">
        <div className="grid items-end gap-8 lg:grid-cols-[1.15fr_.85fr] lg:gap-10">
          <div>
            <p className="eyebrow animate-entrance mb-5 text-amber">
              {copy.hero.eyebrow}
            </p>

            <h1 className="animate-entrance font-display text-[clamp(3.6rem,9.2vw,8.4rem)] font-semibold uppercase leading-[.84] tracking-[-.035em] [animation-delay:60ms]">
              {copy.hero.title1}
              <span className="block text-outline">{copy.hero.title2}</span>
              {copy.hero.title3}
            </h1>

            <p className="animate-entrance mt-6 max-w-xl text-base leading-relaxed text-cream/85 [animation-delay:120ms] sm:text-lg">
              {copy.hero.body}
            </p>

            <div className="animate-entrance mt-8 flex flex-col gap-3 [animation-delay:180ms] sm:flex-row">
              <a
                href={contact.whatsappUrl}
                data-track="whatsapp_reservation"
                className="button-primary group"
                target="_blank"
                rel="noreferrer"
              >
                {copy.nav.reserve}
                <ArrowDownRight
                  className="size-4 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] [@media(hover:hover)_and_(pointer:fine)]:group-hover:translate-x-0.5 [@media(hover:hover)_and_(pointer:fine)]:group-hover:translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
              <a href="#menu" className="button-ghost">
                {copy.hero.menu}
              </a>
            </div>
          </div>

          {/* Right-hand First-Class Boarding Pass Telemetry Panel */}
          <div className="boarding-pass animate-entrance-card [animation-delay:240ms]">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-cream/20 px-5 py-3.5">
              <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-amber">
                <Plane className="size-3.5" aria-hidden="true" />
                FIRST-CLASS LOUNGE PASS
              </span>
              <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-cream/80">
                <Compass className="size-3.5 text-amber" aria-hidden="true" />
                {contact.openingHours}
              </span>
            </div>

            <div className="grid grid-cols-1 divide-y divide-cream/15 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              <div className="px-5 py-4">
                <span className="eyebrow text-[0.68rem] text-cream/70">
                  {copy.hero.flight}
                </span>
                <strong className="mt-1.5 block font-display text-3xl tracking-wide text-amber">
                  <SplitFlapText text="F79" />
                </strong>
              </div>
              <div className="px-5 py-4">
                <span className="eyebrow text-[0.68rem] text-cream/70">
                  {copy.hero.destination}
                </span>
                <strong className="mt-1.5 flex items-center gap-1.5 font-display text-3xl tracking-wide text-cream">
                  <MapPin
                    className="size-4 shrink-0 text-amber"
                    aria-hidden="true"
                  />
                  <SplitFlapText text="KBP" />
                </strong>
              </div>
              <div className="px-5 py-4">
                <span className="eyebrow text-[0.68rem] text-cream/70">
                  {copy.hero.service}
                </span>
                <strong className="mt-1.5 block font-display text-xl leading-tight tracking-wide text-cream">
                  <SplitFlapText text={copy.hero.serviceValue} />
                </strong>
              </div>
            </div>

            <div className="boarding-pass-perforation flex items-center justify-between gap-4 px-5 py-3.5">
              <div className="min-w-0">
                <span className="block text-[0.68rem] font-bold uppercase tracking-[0.14em] text-cream/70">
                  TERMINAL · RUKO SASAKIRANA 79
                </span>
                <span className="mt-0.5 block truncate text-xs text-cream/85">
                  Kota Baru Parahyangan
                </span>
              </div>
              <div
                aria-hidden="true"
                className="boarding-barcode w-24 shrink-0 opacity-85"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
