import Image from "next/image";
import { Coffee, Users, UtensilsCrossed } from "lucide-react";
import { experienceFeatures } from "@/data/flight79";

const serviceHighlights = [
  { label: "Breakfast", Icon: Coffee },
  { label: "All-day menu", Icon: UtensilsCrossed },
  { label: "Groups", Icon: Users },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="relative overflow-hidden bg-navy py-24 text-cream lg:py-36">
      <div className="absolute inset-y-0 right-0 w-1/3 border-l border-cream/10 bg-cream/[.02]" />
      <div className="section-shell relative"><div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow text-amber">The Flight 79 experience</p><h2 className="section-title mt-5 text-cream">Setiap kunjungan adalah bagian dari perjalanan.</h2>
          <div className="relative mt-8 aspect-[3/2] w-full max-w-[34rem] overflow-hidden lg:mt-10"><Image src="/flight79-second.jpg" alt="Interior hangat Flight 79 untuk keluarga dan profesional" fill sizes="(min-width: 1280px) 34rem, (min-width: 1024px) 42vw, 100vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-navy/55 to-transparent" /><div className="absolute bottom-5 left-5 border-l-2 border-amber pl-4"><p className="eyebrow text-amber">Cabin mood</p><p className="mt-1 text-sm text-cream/70">Premium, relaxed, welcoming.</p></div></div>
        </div>
        <div className="divide-y divide-cream/15 border-y border-cream/15">
          {experienceFeatures.map((feature) => <article key={feature.number} className="grid gap-5 py-10 sm:grid-cols-[4rem_1fr] lg:py-14"><span className="font-display text-3xl text-amber">{feature.number}</span><div><h3 className="font-display text-4xl font-semibold uppercase tracking-wide lg:text-5xl">{feature.title}</h3><p className="mt-5 max-w-xl text-base leading-8 text-cream/60">{feature.copy}</p></div></article>)}
          <div className="grid grid-cols-3 gap-px bg-cream/15">{serviceHighlights.map(({ label, Icon }) => <div key={label} className="bg-navy px-3 py-6 text-center"><Icon className="mx-auto size-5 text-amber" /><span className="mt-3 block text-[.65rem] font-bold uppercase tracking-[.12em] text-cream/60">{label}</span></div>)}</div>
        </div>
      </div></div>
    </section>
  );
}
