"use client";

import { useLanguage } from "@/components/language-provider";

export function AboutSection() {
  const { copy } = useLanguage();
  return (
    <section className="section-shell relative overflow-hidden py-24 lg:py-36">
      <div className="absolute -right-8 top-8 font-display text-[18rem] font-bold leading-none text-navy/[.035]">79</div>
      <div className="grid items-start gap-16 lg:grid-cols-[.72fr_1.28fr]">
        <div>
          <p className="eyebrow text-coffee">{copy.about.eyebrow}</p>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink/55">{copy.about.intro}</p>
        </div>
        <div className="relative">
          <span className="absolute -left-6 top-1 hidden h-24 w-px bg-amber lg:block" />
          <h2 className="section-title max-w-5xl">{copy.about.title1} <span className="text-coffee">{copy.about.title2}</span>{copy.about.title3}</h2>
          <div className="mt-10 grid gap-8 border-t border-ink/15 pt-8 md:grid-cols-2">
            <p className="text-base leading-8 text-ink/70">{copy.about.body1}</p>
            <p className="text-base leading-8 text-ink/70">{copy.about.body2}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
