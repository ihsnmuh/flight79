"use client";

import { useEffect, useState } from "react";
import { Menu, Plane } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { useLanguage } from "@/components/language-provider";
import { FlightProgressBar } from "@/components/motion/flight-progress";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function SiteHeader({ whatsappUrl }: { whatsappUrl: string }) {
  const { language, setLanguage, copy } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    [copy.nav.home, "#home"],
    [copy.nav.menu, "#menu"],
    [copy.nav.experience, "#experience"],
    [copy.nav.location, "#location"],
    [copy.nav.contact, "#contact"],
  ] as const;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b text-cream backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? "border-cream/20 bg-navy/95 shadow-[0_10px_30px_rgba(4,16,27,0.38)]"
          : "border-cream/12 bg-navy/82"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1440px] items-center justify-between px-5 transition-[height] duration-300 sm:px-8 lg:px-14 ${
          scrolled ? "h-[64px]" : "h-[76px]"
        }`}
      >
        <a
          href="#home"
          aria-label={copy.footer.homeLabel}
          className="group flex min-h-11 items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-amber"
        >
          <BrandLogo className="size-[44px] text-amber transition-transform duration-300 group-hover:scale-105" />
          <div className="hidden border-l border-cream/25 pl-3 sm:block">
            <span className="block text-[0.65rem] font-bold uppercase tracking-[0.18em] text-amber">
              GATE 79 · KBP
            </span>
            <span className="mt-0.5 block font-display text-sm font-semibold uppercase tracking-[0.14em] text-cream/90">
              COFFEE &amp; EATERY
            </span>
          </div>
        </a>

        <nav
          aria-label={copy.nav.main}
          className="hidden items-center gap-7 lg:flex"
        >
          {links.map(([label, href]) => (
            <a key={href} href={href} className="nav-link">
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <div
            className="flex border border-cream/25 bg-navy text-xs font-bold uppercase tracking-[.12em]"
            aria-label={copy.nav.language}
          >
            {(["id", "en"] as const).map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setLanguage(option)}
                aria-pressed={language === option}
                className={`min-h-11 min-w-11 px-3 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber ${
                  language === option
                    ? "bg-amber text-navy"
                    : "text-cream/75 hover:text-cream"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          <a
            href={whatsappUrl}
            data-track="whatsapp_reservation"
            target="_blank"
            rel="noreferrer"
            className="button-primary !min-h-11"
          >
            <Plane className="size-3.5" aria-hidden="true" />
            {copy.nav.reserve}
          </a>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              aria-label={copy.nav.open}
              className="min-h-11 gap-2 rounded-none border border-cream/25 px-3.5 text-xs font-bold uppercase tracking-[0.14em] text-cream hover:bg-cream hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber lg:hidden"
            >
              <Menu className="size-4" aria-hidden="true" />
              <span>{copy.nav.menu}</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            className="border-l-0 bg-navy px-2 text-cream"
            aria-describedby="mobile-nav-description"
          >
            <SheetHeader className="border-b border-cream/15 px-5 py-7 text-left">
              <SheetTitle className="sr-only">Menu Flight 79</SheetTitle>
              <BrandLogo className="size-20 text-amber" />
              <SheetDescription
                id="mobile-nav-description"
                className="text-cream/75"
              >
                {copy.location.title}
              </SheetDescription>
            </SheetHeader>
            <nav
              aria-label={copy.nav.mobile}
              className="flex flex-col px-5 py-6"
            >
              {links.map(([label, href], index) => (
                <SheetClose asChild key={href}>
                  <a
                    href={href}
                    className="flex min-h-12 items-center justify-between border-b border-cream/15 py-4 font-display text-3xl uppercase tracking-wide transition-colors hover:text-amber focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
                  >
                    <span>{label}</span>
                    <span className="font-body text-xs text-amber">
                      FL-0{index + 1}
                    </span>
                  </a>
                </SheetClose>
              ))}
            </nav>
            <div className="mx-5 flex border border-cream/25 text-xs font-bold uppercase tracking-[.12em]">
              {(["id", "en"] as const).map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setLanguage(option)}
                  aria-pressed={language === option}
                  className={`min-h-11 flex-1 px-4 py-3 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber ${
                    language === option ? "bg-amber text-navy" : "text-cream/75"
                  }`}
                >
                  {option === "id" ? "Indonesia" : "English"}
                </button>
              ))}
            </div>
            <div className="mt-auto p-5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="button-primary w-full"
                data-track="whatsapp_reservation"
              >
                {copy.nav.reserveWhatsapp}
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <FlightProgressBar />
    </header>
  );
}
