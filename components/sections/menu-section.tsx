"use client";

import { ArrowRight } from "lucide-react";
import { MenuExplorer } from "@/components/menu-explorer";
import { contact } from "@/data/flight79";
import { useLanguage } from "@/components/language-provider";

export function MenuSection() {
  const { copy } = useLanguage();
  return (
    <section id="menu" className="bg-[#e8e2d7] py-24 lg:py-32">
      <div className="section-shell">
        <div className="mb-14 grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <div><p className="eyebrow text-coffee">{copy.menu.eyebrow}</p><h2 className="section-title mt-4">{copy.menu.title}</h2><p className="mt-5 max-w-2xl text-base leading-relaxed text-ink/65">{copy.menu.body}</p></div>
          <a href={contact.menuUrl} data-track="view_full_menu" className="text-link" target="_blank" rel="noreferrer">{copy.menu.full} <ArrowRight className="size-4" /></a>
        </div>
        <MenuExplorer />
        <p className="mt-8 text-xs leading-relaxed text-ink/45">{copy.menu.note}</p>
      </div>
    </section>
  );
}
