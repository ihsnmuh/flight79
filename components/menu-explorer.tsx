"use client";

import Image from "next/image";
import { type KeyboardEvent, useRef, useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { SplitFlapText } from "@/components/motion/split-flap";
import { type MenuItem, menuCategories, menuItems } from "@/data/flight79";

export function MenuExplorer() {
  const { language, copy } = useLanguage();
  const [activeCategoryId, setActiveCategoryId] = useState<
    (typeof menuCategories)[number]["id"]
  >(menuCategories[0].id);
  const [activeSubCategory, setActiveSubCategory] = useState<string | null>(
    null,
  );
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeCategory =
    menuCategories.find((category) => category.id === activeCategoryId) ??
    menuCategories[0];
  const activeItems = menuItems.filter(
    (item) => item.categoryId === activeCategory.id,
  );

  // Group items by subCategory while preserving official PDF order
  const groupedItems: Array<{ subCategory: string; items: MenuItem[] }> = [];
  for (const item of activeItems) {
    const existing = groupedItems.find(
      (group) => group.subCategory === item.subCategory,
    );
    if (existing) {
      existing.items.push(item);
    } else {
      groupedItems.push({ subCategory: item.subCategory, items: [item] });
    }
  }
  const hasMultipleSubCategories = groupedItems.length > 1;
  const visibleGroups =
    hasMultipleSubCategories && activeSubCategory
      ? groupedItems.filter((group) => group.subCategory === activeSubCategory)
      : groupedItems;

  const selectCategory = (id: (typeof menuCategories)[number]["id"]) => {
    setActiveCategoryId(id);
    setActiveSubCategory(null);
  };

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
    selectCategory(menuCategories[nextIndex].id);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <div className="border border-ink/20 bg-cream">
      {/* 2x4 departure-board destination matrix so all 8 categories stay visible without hidden horizontal scroll */}
      <div
        className="grid grid-cols-2 border-b border-cream/20 bg-navy text-cream sm:grid-cols-4"
        role="tablist"
        aria-label={copy.menu.tabLabel}
      >
        {menuCategories.map((category, index) => {
          const isActive = category.id === activeCategory.id;
          const itemCount = menuItems.filter(
            (item) => item.categoryId === category.id,
          ).length;

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
              onClick={() => selectCategory(category.id)}
              onKeyDown={(event) => handleTabKeyDown(event, index)}
              className={`relative min-h-16 border-b border-r border-cream/15 px-4 py-3.5 text-left transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-amber sm:px-5 sm:py-4 ${
                isActive
                  ? "bg-[#0e263d] text-cream"
                  : "text-cream/75 hover:bg-cream/[0.06] hover:text-cream"
              }`}
            >
              <span className="flex items-center justify-between gap-2">
                <span
                  className={`text-[0.68rem] font-bold uppercase tracking-[.18em] ${
                    isActive ? "text-amber" : "text-cream/65"
                  }`}
                >
                  FL-{category.number}
                </span>
                <span className="text-[0.68rem] font-semibold text-cream/60">
                  {itemCount}
                </span>
              </span>
              <span className="mt-1 block font-display text-lg font-semibold uppercase leading-tight tracking-wide sm:text-xl">
                {copy.menu.categoryLabels[category.id]}
              </span>
              <span
                aria-hidden="true"
                className={`absolute inset-x-0 bottom-0 h-[3px] origin-left bg-amber transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                  isActive ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* Asymmetric editorial menu board: full-bleed category photography + natural-flow printed menu */}
      <div
        key={activeCategory.id}
        id="menu-panel"
        role="tabpanel"
        aria-labelledby={`menu-tab-${activeCategory.id}`}
        className="grid lg:grid-cols-[.88fr_1.12fr]"
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-navy sm:aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[540px]">
          <Image
            src={activeCategory.image.src}
            alt={activeCategory.image.alt}
            fill
            sizes="(min-width: 1024px) 44vw, 100vw"
            className="object-cover"
            style={{ objectPosition: activeCategory.image.position }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/15 to-navy/25" />
          <div className="absolute left-5 top-5 border border-cream/25 bg-navy/90 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-amber sm:left-6 sm:top-6">
            <SplitFlapText text={`FL-${activeCategory.number}`} />
          </div>
          <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6">
            <p className="text-[0.7rem] font-bold uppercase tracking-[.16em] text-amber">
              {copy.menu.visual}
            </p>
            <p className="mt-1 font-display text-2xl font-semibold uppercase tracking-wide text-cream">
              {copy.menu.categoryLabels[activeCategory.id]}
            </p>
          </div>
        </div>

        <div className="bg-cream p-6 sm:p-9 lg:border-l lg:border-ink/15 lg:p-11">
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

          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#4a453e]">
            {language === "en"
              ? activeCategory.descriptionEn
              : activeCategory.description}
          </p>

          {hasMultipleSubCategories ? (
            <div
              className="mt-6 flex flex-wrap gap-2 border-b border-ink/15 pb-5"
              role="group"
              aria-label={copy.menu.categoryLabels[activeCategory.id]}
            >
              <button
                type="button"
                aria-pressed={activeSubCategory === null}
                onClick={() => setActiveSubCategory(null)}
                className={`min-h-11 border px-3.5 py-2 text-xs font-bold uppercase tracking-[0.12em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy ${
                  activeSubCategory === null
                    ? "border-navy bg-navy text-cream"
                    : "border-ink/20 bg-transparent text-navy hover:border-navy"
                }`}
              >
                {copy.menu.allSubCategories} ({activeItems.length})
              </button>
              {groupedItems.map((group) => {
                const isSelected = activeSubCategory === group.subCategory;

                return (
                  <button
                    key={group.subCategory}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => setActiveSubCategory(group.subCategory)}
                    className={`min-h-11 border px-3.5 py-2 text-xs font-bold uppercase tracking-[0.12em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy ${
                      isSelected
                        ? "border-navy bg-navy text-cream"
                        : "border-ink/20 bg-transparent text-navy hover:border-navy"
                    }`}
                  >
                    {group.subCategory} ({group.items.length})
                  </button>
                );
              })}
            </div>
          ) : null}

          <div className="mt-7 space-y-9">
            {visibleGroups.map((group) => (
              <div key={group.subCategory}>
                {hasMultipleSubCategories ? (
                  <div className="mb-4 flex items-baseline justify-between gap-4 border-b border-navy/25 pb-2">
                    <h4 className="font-display text-2xl font-semibold uppercase tracking-wide text-navy">
                      {group.subCategory}
                    </h4>
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-coffee">
                      {group.items.length} item
                    </span>
                  </div>
                ) : null}

                <ul className="grid gap-x-10 gap-y-1 md:grid-cols-2">
                  {group.items.map((item) => {
                    const ItemHeading = hasMultipleSubCategories ? "h5" : "h4";

                    return (
                      <li
                        key={item.name}
                        className="border-b border-ink/15 py-4"
                      >
                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                          <ItemHeading className="font-display text-2xl font-semibold uppercase leading-tight tracking-wide text-navy">
                            {item.name}
                          </ItemHeading>
                          {item.signature ? (
                            <span className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-coffee">
                              {copy.menu.signatureLabel}
                            </span>
                          ) : null}
                        </div>
                        <p className="mt-1.5 text-sm leading-6 text-[#4a453e]">
                          {language === "en"
                            ? item.descriptionEn
                            : item.description}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
