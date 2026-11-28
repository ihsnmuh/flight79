"use client";

import Image from "next/image";
import { useLanguage } from "@/components/language-provider";
import { Reveal } from "@/components/motion/reveal";
import { galleryItems } from "@/data/flight79";

export function GallerySection() {
  const { copy } = useLanguage();

  return (
    <section
      aria-labelledby="gallery-title"
      className="py-16 sm:py-20 lg:py-28"
    >
      <div className="section-shell">
        <Reveal>
          <div className="mb-10 flex flex-col justify-between gap-5 sm:mb-12 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow text-coffee">{copy.gallery.eyebrow}</p>
              <h2 id="gallery-title" className="section-title mt-4 text-navy">
                {copy.gallery.title}
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-[#524d45]">
              {copy.gallery.body}
            </p>
          </div>
        </Reveal>

        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <figure
              key={item.src}
              className={`gallery-item group border border-ink/20 ${item.className}`}
            >
              <Image
                src={item.src}
                alt={copy.gallery.items[index]}
                fill
                sizes={item.sizes}
                className={`object-cover transition duration-700 group-hover:scale-[1.04] ${item.imageClassName}`}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/15 to-navy/25" />
              <span className="pointer-events-none absolute left-4 top-4 border border-cream/25 bg-navy/90 px-2.5 py-1 text-xs font-bold uppercase tracking-[0.16em] text-amber">
                WINDOW 0{index + 1}
              </span>
              {/* Always visible on touch/mobile; subtle lift on desktop hover */}
              <figcaption className="absolute inset-x-0 bottom-0 bg-navy/90 px-4 py-3 text-xs font-medium leading-snug tracking-[.06em] text-cream transition-transform duration-300 md:translate-y-1 md:group-hover:translate-y-0">
                {copy.gallery.items[index]}
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-6 text-xs font-semibold uppercase tracking-[.14em] text-[#524d45]">
          Flight 79 · Kota Baru Parahyangan
        </p>
      </div>
    </section>
  );
}
