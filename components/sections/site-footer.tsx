"use client";

import { BrandLogo } from "@/components/brand-logo";
import { contact, social } from "@/data/flight79";
import { useLanguage } from "@/components/language-provider";

export function SiteFooter() {
  const { copy } = useLanguage();
  const quickLinks = [[copy.nav.home, "#home"], [copy.nav.menu, "#menu"], [copy.nav.experience, "#experience"], [copy.nav.location, "#location"], [copy.nav.contact, "#contact"]] as const;
  return (
    <footer className="border-t border-cream/15 bg-navy pb-24 pt-16 text-cream sm:pb-10"><div className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr_.8fr]">
        <div><a href="#home" aria-label={copy.footer.homeLabel} className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"><BrandLogo className="size-28 text-amber" /></a><p className="mt-3 max-w-md text-sm leading-7 text-cream/50">{copy.footer.body}</p></div>
        <div><p className="eyebrow text-amber">{copy.footer.quick}</p><nav aria-label={copy.footer.nav} className="mt-5 grid gap-3 text-sm text-cream/65">{quickLinks.map(([label, href]) => <a key={href} href={href} className="hover:text-amber">{label}</a>)}</nav></div>
        <div><p className="eyebrow text-amber">{copy.footer.connected}</p><div className="mt-5 grid gap-3 text-sm text-cream/65"><a href={contact.mapsUrl} target="_blank" rel="noreferrer" className="hover:text-amber">Google Maps</a><a href={social.instagramUrl} target="_blank" rel="noreferrer" data-track="instagram_click" className="hover:text-amber">Instagram · {social.handle}</a><a href={social.tiktokUrl} target="_blank" rel="noreferrer" data-track="tiktok_click" className="hover:text-amber">TikTok · {social.handle}</a></div></div>
      </div>
      <div className="mt-14 flex flex-col justify-between gap-3 border-t border-cream/15 pt-6 text-xs uppercase tracking-[.12em] text-cream/35 sm:flex-row"><p>© {new Date().getFullYear()} Flight 79. {copy.footer.rights}</p><p>Ruko Sasakirana 79 · Kota Baru Parahyangan</p></div>
    </div></footer>
  );
}
