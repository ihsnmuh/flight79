import { BrandLogo } from "@/components/brand-logo";
import { contact } from "@/data/flight79";

const quickLinks = [["Home", "#home"], ["Menu", "#menu"], ["Experience", "#experience"], ["Location", "#location"], ["Contact", "#contact"]] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-cream/15 bg-navy pb-24 pt-16 text-cream sm:pb-10"><div className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr_.8fr]">
        <div><a href="#home" aria-label="Flight 79 — kembali ke beranda" className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"><BrandLogo className="size-28 text-amber" /></a><p className="mt-3 max-w-md text-sm leading-7 text-cream/50">First-class flavor on every plate. Sebuah destinasi rasa dan suasana bertema aviasi di Kota Baru Parahyangan.</p></div>
        <div><p className="eyebrow text-amber">Quick links</p><nav aria-label="Navigasi footer" className="mt-5 grid gap-3 text-sm text-cream/65">{quickLinks.map(([label, href]) => <a key={href} href={href} className="hover:text-amber">{label}</a>)}</nav></div>
        <div><p className="eyebrow text-amber">Stay connected</p><div className="mt-5 grid gap-3 text-sm text-cream/65"><a href={contact.mapsUrl} target="_blank" rel="noreferrer" className="hover:text-amber">Google Maps</a><span>Instagram · coming soon</span><span>TikTok · coming soon</span></div></div>
      </div>
      <div className="mt-14 flex flex-col justify-between gap-3 border-t border-cream/15 pt-6 text-xs uppercase tracking-[.12em] text-cream/35 sm:flex-row"><p>© {new Date().getFullYear()} Flight 79. All rights reserved.</p><p>Ruko Sasakirana 79 · Kota Baru Parahyangan</p></div>
    </div></footer>
  );
}
