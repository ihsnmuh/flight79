import Image from "next/image";
import { galleryItems } from "@/data/flight79";

export function GallerySection() {
  return (
    <section aria-labelledby="gallery-title" className="py-24 lg:py-32">
      <div className="section-shell">
        <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="eyebrow text-coffee">Window seat view</p><h2 id="gallery-title" className="section-title mt-4">A Glimpse On Board</h2></div><p className="max-w-md text-sm leading-relaxed text-ink/55">Suasana, rasa, dan detail yang membuat setiap kunjungan terasa seperti destinasi baru.</p></div>
        <div className="gallery-grid">{galleryItems.map((item) => <figure key={item.src} className={`gallery-item group ${item.className}`}><Image src={item.src} alt={item.alt} fill sizes={item.sizes} className={`object-cover transition duration-700 group-hover:scale-[1.025] group-hover:brightness-110 ${item.imageClassName}`} /><figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-navy/80 px-4 py-3 text-xs uppercase tracking-[.12em] text-cream backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-0">{item.alt}</figcaption></figure>)}</div>
        <p className="mt-5 text-xs uppercase tracking-[.12em] text-ink/40">Flight 79 · Kota Baru Parahyangan</p>
      </div>
    </section>
  );
}
