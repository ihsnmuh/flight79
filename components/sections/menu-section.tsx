import { ArrowRight } from "lucide-react";
import { MenuExplorer } from "@/components/menu-explorer";
import { contact } from "@/data/flight79";

export function MenuSection() {
  return (
    <section id="menu" className="bg-[#e8e2d7] py-24 lg:py-32">
      <div className="section-shell">
        <div className="mb-14 grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <div><p className="eyebrow text-coffee">In-flight selection</p><h2 className="section-title mt-4">Signature Flights</h2><p className="mt-5 max-w-2xl text-base leading-relaxed text-ink/65">Dari first bite hingga sweet landing—pilihan rasa untuk setiap waktu dan setiap penumpang.</p></div>
          <a href={contact.menuUrl} data-track="view_full_menu" className="text-link" target="_blank" rel="noreferrer">View Full Menu <ArrowRight className="size-4" /></a>
        </div>
        <MenuExplorer />
        <p className="mt-8 text-xs leading-relaxed text-ink/45">Foto digunakan sebagai visual kategori, bukan representasi setiap item. Lihat menu lengkap untuk pilihan dan informasi terbaru.</p>
      </div>
    </section>
  );
}
