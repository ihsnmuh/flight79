"use client";

import Image from "next/image";
import { ArrowDownRight, MapPin, Radio } from "lucide-react";
import { contact } from "@/data/flight79";
import { useLanguage } from "@/components/language-provider";

export function HeroSection() {
  const { copy } = useLanguage();
  return (
    <section id="home" className="relative isolate min-h-[100svh] overflow-hidden bg-navy text-cream">
      <Image src="/flight79-hero.jpg" alt="Hidangan nasi goreng dan kopi di interior bergaya airport lounge" fill priority sizes="100vw" className="object-cover object-center" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,18,29,.96)_0%,rgba(5,18,29,.82)_38%,rgba(5,18,29,.2)_72%,rgba(5,18,29,.12)_100%)]" />
      <div className="runway-line absolute inset-x-0 bottom-14 z-10 opacity-70" />
      <div className="relative z-20 mx-auto flex min-h-[100svh] max-w-[1440px] flex-col justify-end px-5 pb-24 pt-36 sm:px-8 lg:px-14 lg:pb-16">
        <div className="max-w-3xl animate-entrance">
          <p className="eyebrow mb-6 flex items-center gap-3 text-amber"><Radio className="size-4" />{copy.hero.eyebrow}</p>
          <h1 className="font-display text-[clamp(4.2rem,10vw,9rem)] font-semibold uppercase leading-[.8] tracking-[-.035em]">{copy.hero.title1}<span className="block text-outline">{copy.hero.title2}</span>{copy.hero.title3}</h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg">{copy.hero.body}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={contact.whatsappUrl} data-track="whatsapp_reservation" className="button-primary group" target="_blank" rel="noreferrer">{copy.nav.reserve}<ArrowDownRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" /></a>
            <a href="#menu" className="button-ghost">{copy.hero.menu}</a>
          </div>
        </div>
        <div className="mt-14 grid max-w-3xl gap-px border-y border-cream/20 bg-cream/20 sm:grid-cols-3">
          <div className="bg-navy/80 px-4 py-4 backdrop-blur-sm"><span className="eyebrow text-cream/45">{copy.hero.flight}</span><strong className="mt-1 block font-display text-2xl tracking-wide">F79</strong></div>
          <div className="bg-navy/80 px-4 py-4 backdrop-blur-sm"><span className="eyebrow text-cream/45">{copy.hero.destination}</span><strong className="mt-1 flex items-center gap-2 font-display text-xl tracking-wide"><MapPin className="size-4 text-amber" /> KBP</strong></div>
          <div className="bg-navy/80 px-4 py-4 backdrop-blur-sm"><span className="eyebrow text-cream/45">{copy.hero.service}</span><strong className="mt-1 block font-display text-xl tracking-wide">{copy.hero.serviceValue}</strong></div>
        </div>
      </div>
    </section>
  );
}
