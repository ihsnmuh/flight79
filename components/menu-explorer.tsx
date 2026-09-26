"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { type KeyboardEvent, useRef, useState } from "react";
import { menuCategories, menuItems } from "@/data/flight79";

export function MenuExplorer() {
  const [activeCategoryId, setActiveCategoryId] = useState(
    menuCategories[0].id,
  );
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

    if (event.key === "ArrowRight") nextIndex = (index + 1) % menuCategories.length;
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
    <div>
      <div
        className="-mx-5 flex overflow-x-auto border-y border-ink/15 px-5 sm:mx-0 sm:px-0"
        role="tablist"
        aria-label="Kategori menu Flight 79"
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
              className={`relative shrink-0 px-5 py-5 text-left transition-colors duration-300 first:pl-0 sm:flex-1 sm:px-6 ${
                isActive ? "text-navy" : "text-ink/40 hover:text-coffee"
              }`}
            >
              <span className="block text-[.65rem] font-bold uppercase tracking-[.18em]">
                {category.number}
              </span>
              <span className="mt-2 block font-display text-xl font-semibold uppercase tracking-wide sm:text-2xl">
                {category.label}
              </span>
              <span
                className={`absolute inset-x-0 bottom-0 h-0.5 origin-left bg-amber transition-transform duration-500 ${
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
        className="grid border-b border-ink/15 lg:grid-cols-[.92fr_1.08fr]"
      >
        {"image" in activeCategory ? (
          <div className="relative min-h-[280px] overflow-hidden bg-navy sm:min-h-[380px] lg:min-h-[520px]">
            <Image
              src={activeCategory.image.src}
              alt={activeCategory.image.alt}
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover animate-entrance motion-reduce:animate-none"
              style={{ objectPosition: activeCategory.image.position }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/45 via-transparent to-transparent" />
            <p className="absolute bottom-5 left-5 border-l-2 border-amber pl-4 text-xs uppercase tracking-[.14em] text-cream sm:bottom-7 sm:left-7">
              Category visual · {activeCategory.label}
            </p>
          </div>
        ) : (
          <div className="relative flex min-h-[280px] overflow-hidden bg-navy p-7 text-cream sm:min-h-[380px] sm:p-10 lg:min-h-[520px]">
            <span className="absolute -right-4 -top-12 font-display text-[14rem] font-semibold leading-none text-cream/[.05] sm:text-[20rem]">
              {activeCategory.number}
            </span>
            <div className="relative mt-auto max-w-sm">
              <p className="eyebrow text-amber">No photograph needed</p>
              <p className="mt-4 font-display text-5xl font-semibold uppercase leading-none tracking-tight sm:text-6xl">
                A sweet finish.
              </p>
              <p className="mt-5 text-sm leading-7 text-cream/55">
                Tidak semua pilihan memerlukan foto untuk tetap menggugah selera.
              </p>
            </div>
          </div>
        )}

        <div className="bg-cream p-6 sm:p-9 lg:p-12">
          <p className="eyebrow text-coffee">Category {activeCategory.number}</p>
          <h3 className="mt-3 font-display text-4xl font-semibold uppercase tracking-wide text-navy sm:text-5xl">
            {activeCategory.label}
          </h3>
          <p className="mt-4 max-w-lg text-sm leading-7 text-ink/55">
            {activeCategory.description}
          </p>

          <ul className="mt-8 border-t border-ink/15">
            {activeItems.map((item) => (
              <li
                key={item.name}
                className="grid gap-3 border-b border-ink/15 py-6 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-8"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <h4 className="font-display text-2xl font-semibold uppercase leading-tight tracking-wide text-navy sm:text-3xl">
                      {item.name}
                    </h4>
                    <ArrowUpRight className="size-4 shrink-0 text-amber" aria-hidden="true" />
                  </div>
                  <p className="mt-2 text-sm leading-6 text-ink/55">
                    {item.description}
                  </p>
                </div>
                <span className="text-[.65rem] font-bold uppercase tracking-[.13em] text-ink/35 sm:pt-2">
                  Rp {item.price}K
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
