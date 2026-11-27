"use client";

import { BrandLogo } from "@/components/brand-logo";
import { useLanguage } from "@/components/language-provider";
import { contact, social } from "@/data/flight79";

export function SiteFooter() {
  const { copy } = useLanguage();
  const quickLinks = [
    [copy.nav.home, "#home"],
    [copy.nav.menu, "#menu"],
    [copy.nav.experience, "#experience"],
    [copy.nav.location, "#location"],
    [copy.nav.contact, "#contact"],
  ] as const;

  return (
    <footer className="border-t border-cream/20 bg-[#04101b] pb-28 pt-14 text-cream sm:pb-10 sm:pt-16">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr_.8fr]">
          <div>
            <a
              href="#home"
              aria-label={copy.footer.homeLabel}
              className="inline-block focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-amber"
            >
              <BrandLogo className="size-24 text-amber" />
            </a>
            <p className="mt-4 max-w-md text-sm leading-7 text-cream/80">
              {copy.footer.body}
            </p>
          </div>

          <div>
            <p className="eyebrow text-amber">{copy.footer.quick}</p>
            <nav
              aria-label={copy.footer.nav}
              className="mt-4 grid gap-1 text-sm text-cream/85"
            >
              {quickLinks.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="inline-flex min-h-11 w-fit items-center transition-colors hover:text-amber focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="eyebrow text-amber">{copy.footer.connected}</p>
            <div className="mt-4 grid gap-1 text-sm text-cream/85">
              <a
                href={contact.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 w-fit items-center transition-colors hover:text-amber focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
              >
                Google Maps
              </a>
              <a
                href={social.instagramUrl}
                target="_blank"
                rel="noreferrer"
                data-track="instagram_click"
                className="inline-flex min-h-11 w-fit items-center transition-colors hover:text-amber focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
              >
                Instagram · {social.handle}
              </a>
              <a
                href={social.tiktokUrl}
                target="_blank"
                rel="noreferrer"
                data-track="tiktok_click"
                className="inline-flex min-h-11 w-fit items-center transition-colors hover:text-amber focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
              >
                TikTok · {social.handle}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-cream/20 pt-6 text-xs uppercase tracking-[.12em] text-cream/75 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Flight 79. {copy.footer.rights}
          </p>
          <p>Ruko Sasakirana 79 · Kota Baru Parahyangan</p>
        </div>
      </div>
    </footer>
  );
}
