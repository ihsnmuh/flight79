"use client";

import { ArrowRight, PlaneTakeoff } from "lucide-react";
import { MenuExplorer } from "@/components/menu-explorer";
import { useLanguage } from "@/components/language-provider";
import { Reveal } from "@/components/motion/reveal";
import { contact } from "@/data/flight79";

export function MenuSection() {
  const { copy } = useLanguage();

  return (
    <section
      id="menu"
      className="relative overflow-x-clip border-y border-ink/15 bg-[#e8e2d7] py-16 sm:py-20 lg:py-28"
    >
      <div className="section-shell">
        <Reveal>
          <div className="mb-10 grid items-end gap-6 sm:mb-14 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="eyebrow flex items-center gap-2.5 text-coffee">
                <PlaneTakeoff className="size-4 text-coffee" aria-hidden="true" />
                {copy.menu.eyebrow}
              </p>
              <h2 className="section-title mt-4 text-navy">{copy.menu.title}</h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#524d45]">
                {copy.menu.body}
              </p>
            </div>
            <a
              href={contact.menuUrl}
              data-track="view_full_menu"
              className="text-link"
              target="_blank"
              rel="noreferrer"
            >
              {copy.menu.full} <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <MenuExplorer />
        </Reveal>

        <p className="mt-6 text-xs leading-relaxed text-[#524d45]">
          {copy.menu.note}
        </p>
      </div>
    </section>
  );
}
