import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type MenuCardProps = {
  item: {
    name: string;
    category: string;
    description: string;
    label: string;
    imagePosition: string;
  };
  index: number;
};

export function MenuCard({ item, index }: MenuCardProps) {
  return (
    <article className={`menu-card group ${index === 0 ? "lg:col-span-2" : ""}`}>
      <div className={`relative overflow-hidden bg-navy ${index === 0 ? "aspect-[16/8.5]" : "aspect-[4/3]"}`}>
        <Image
          src="/flight79-menu.jpg"
          alt={`Inspirasi penyajian ${item.name}`}
          fill
          sizes={index === 0 ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
          style={{ objectPosition: item.imagePosition }}
        />
        <span className="absolute left-4 top-4 bg-amber px-3 py-2 text-[.65rem] font-extrabold uppercase tracking-[.15em] text-navy">
          {item.label}
        </span>
      </div>
      <div className="border-x border-b border-ink/15 p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="eyebrow text-coffee">{item.category}</p>
            <h3 className="mt-2 font-display text-3xl font-semibold uppercase leading-none tracking-wide sm:text-4xl">{item.name}</h3>
          </div>
          <ArrowUpRight className="mt-1 size-5 shrink-0 text-amber" aria-hidden="true" />
        </div>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink/65">{item.description}</p>
        <p className="mt-5 border-t border-dashed border-ink/20 pt-4 text-xs font-bold uppercase tracking-[.14em] text-ink/45">
          Harga segera hadir
        </p>
      </div>
    </article>
  );
}
