"use client";

import Image from "next/image";
import { type KeyboardEvent, useRef, useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { SplitFlapText } from "@/components/motion/split-flap";
import { menuCategories, menuEnglish, menuItems } from "@/data/flight79";

export function MenuExplorer() {
  const { language, copy } = useLanguage();
  const [activeCategoryId, setActiveCategoryId] = useState<
    (typeof menuCategories)[number]["id"]
  >(menuCategories[0].id);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeCategory =
    menuCategories.find((category) => category.id === activeCategoryId) ??
    menuCategories[0];
  const activeItems = menuItems.filter(
    (item) => item.categoryId === activeCategory.id,
  );

  const handleTabKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    let nextIndex = index;

    if (event.key === "ArrowRight")
      nextIndex = (index + 1) % menuCategories.length;
    else if (event.key === "ArrowLeft") {
      nextIndex = (index - 1 + menuCategories.length) % menuCategories.length;
    } else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = menuCategories.length - 1;
    else return;

    event.preventDefault();
    setActiveCategoryId(menuCategories[nextIndex].id);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <div className="border border-ink/20 bg-cream">
      {/* Departure-board category strip */}
      <div
        className="flex overflow-x-auto border-b border-cream/20 bg-navy text-cream"
        role="tablist"
        aria-label={copy.menu.tabLabel}
      >
        {menuCategories.map((category, index) => {
          const isActive = category.id === activeCategory.id;

          return (
            <button
              key={category.id}
              ref={(element) => {
                tabRefs.current[index] = element;
              }}
              type="button"
              role="tab"
              id={`menu-tab-${category.id}`}
              aria-controls="menu-panel"
              aria-selected={isActive}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveCategoryId(category.id)}
              onKeyDown={(event) => handleTabKeyDown(event, index)}
              className={`relative min-h-16 shrink-0 border-r border-cream/15 px-5 py-4 text-left transition-colors duration-300 last:border-r-0 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-amber sm:flex-1 sm:px-6 ${
                isActive
                  ? "bg-[#0e263d] text-cream"
                  : "text-cream/70 hover:bg-cream/[0.06] hover:text-cream"
              }`}
            >
              <span
                className={`block text-[0.68rem] font-bold uppercase tracking-[.18em] ${
                  isActive ? "text-amber" : "text-cream/65"
                }`}
              >
                FL-{category.number}
              </span>
              <span className="mt-1 block font-display text-xl font-semibold uppercase tracking-wide sm:text-2xl">
                {copy.menu.categoryLabels[category.id]}
              </span>
              <span
                className={`absolute inset-x-0 bottom-0 h-[3px] origin-left bg-amber transition-transform duration-500 ${
                  isActive ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </button>
          );
        })}
      </div>

      <div
        key={activeCategory.id}
        id="menu-panel"
        role="tabpanel"
        aria-labelledby={`menu-tab-${activeCategory.id}`}
        className="grid lg:grid-cols-[.9fr_1.1fr]"
      >
        <div className="relative min-h-[280px] overflow-hidden bg-navy sm:min-h-[380px] lg:min-h-[520px]">
          <Image
            src={activeCategory.image.src}
            alt={activeCategory.image.alt}
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="animate-ken-burns object-cover motion-reduce:animate-none"
            style={{ objectPosition: activeCategory.image.position }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-navy/30" />
          <div className="absolute left-5 top-5 border border-cream/25 bg-navy/90 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-amber sm:left-7 sm:top-7">
            <SplitFlapText text={`FL-${activeCategory.number}`} />
          </div>
          <p className="absolute bottom-5 left-5 right-5 text-xs font-semibold uppercase tracking-[.12em] text-cream sm:bottom-7 sm:left-7">
            {copy.menu.visual} · {copy.menu.categoryLabels[activeCategory.id]}
          </p>
        </div>

        <div className="bg-cream p-6 sm:p-9 lg:p-12">
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-ink/20 pb-5">
            <div>
              <p className="eyebrow text-coffee">
                {copy.menu.category} {activeCategory.number}
              </p>
              <h3 className="mt-2 font-display text-4xl font-semibold uppercase tracking-wide text-navy sm:text-5xl">
                <SplitFlapText
                  text={copy.menu.categoryLabels[activeCategory.id]}
                />
              </h3>
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-coffee">
              {activeItems.length} ITEM
            </span>
          </div>

          <p className="mt-5 max-w-lg text-sm leading-7 text-[#524d45]">
            {language === "en"
              ? menuEnglish.categoryDescriptions[activeCategory.id]
              : activeCategory.description}
          </p>

          <ul className="mt-6 divide-y divide-ink/15 border-t border-ink/20">
            {activeItems.map((item, idx) => (
              <li key={item.name} className="py-5">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-sm font-bold tracking-widest text-coffee">
                    0{idx + 1}
                  </span>
                  <h4 className="font-display text-2xl font-semibold uppercase leading-tight tracking-wide text-navy sm:text-3xl">
                    {item.name}
                  </h4>
                </div>
                <p className="mt-1.5 pl-6 text-sm leading-6 text-[#524d45]">
                  {language === "en"
                    ? menuEnglish.itemDescriptions[item.name]
                    : item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
