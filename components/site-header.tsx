"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, Plane, X } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { useLanguage } from "@/components/language-provider";
import { FlightProgressBar } from "@/components/motion/flight-progress";

export function SiteHeader({ whatsappUrl }: { whatsappUrl: string }) {
  const { language, setLanguage, copy } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
        triggerRef.current?.focus();
      }
    };

    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const links = [
    [copy.nav.home, "#home"],
    [copy.nav.menu, "#menu"],
    [copy.nav.experience, "#experience"],
    [copy.nav.location, "#location"],
    [copy.nav.contact, "#contact"],
  ] as const;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b text-cream backdrop-blur-md transition-[background-color,border-color,box-shadow] duration-200 ease-out ${
          scrolled
            ? "border-cream/20 bg-navy/95 shadow-[0_10px_30px_rgba(4,16,27,0.38)]"
            : "border-cream/12 bg-navy/82"
        }`}
      >
        <div className="mx-auto flex h-[70px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-14">
          <div className="flex items-center gap-3">
            <a
              href="#home"
              aria-label={copy.footer.homeLabel}
              className="group flex min-h-11 min-w-11 items-center focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-amber"
            >
              <BrandLogo className="size-[44px] text-amber transition-transform duration-300 group-hover:scale-105" />
            </a>
            <div
              aria-hidden="true"
              className="hidden border-l border-cream/25 pl-3 sm:block"
            >
              <span className="block text-[0.65rem] font-bold uppercase tracking-[0.18em] text-amber">
                GATE 79 · KBP
              </span>
              <span className="mt-0.5 block font-display text-sm font-semibold uppercase tracking-[0.14em] text-cream/90">
                COFFEE &amp; EATERY
              </span>
            </div>
          </div>

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
                  className={`min-h-11 min-w-11 cursor-pointer px-3 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber ${
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

          <button
            ref={triggerRef}
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            aria-label={copy.nav.open}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
            className="inline-flex min-h-11 cursor-pointer touch-manipulation items-center justify-center gap-2 border border-cream/25 bg-transparent px-3.5 text-xs font-bold uppercase tracking-[0.14em] text-cream transition-colors hover:bg-cream hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber lg:hidden"
          >
            <Menu className="size-4 shrink-0" aria-hidden="true" />
            <span>{copy.nav.menu}</span>
          </button>
        </div>
        <FlightProgressBar />
      </header>

      {mobileMenuOpen ? (
        <div
          className="fixed inset-0 z-[60] lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-nav-title"
          aria-describedby="mobile-nav-description"
          id="mobile-nav-drawer"
        >
          <button
            type="button"
            aria-label={copy.nav.close}
            onClick={closeMobileMenu}
            className="fixed inset-0 cursor-pointer bg-navy/70 backdrop-blur-[2px]"
          />

          <div className="fixed inset-y-0 right-0 z-[70] flex h-dvh w-[min(86vw,24rem)] flex-col overflow-y-auto border-l border-cream/15 bg-navy px-2 text-cream shadow-2xl">
            <div className="relative border-b border-cream/15 px-5 py-7 text-left">
              <h2 id="mobile-nav-title" className="sr-only">
                Menu Flight 79
              </h2>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => {
                  closeMobileMenu();
                  triggerRef.current?.focus();
                }}
                aria-label={copy.nav.close}
                className="absolute right-4 top-4 inline-flex min-h-11 min-w-11 cursor-pointer touch-manipulation items-center justify-center border border-cream/25 text-cream transition-colors hover:bg-cream hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
              <BrandLogo className="size-20 text-amber" />
              <p
                id="mobile-nav-description"
                className="mt-2 text-sm text-cream/75"
              >
                {copy.location.title}
              </p>
            </div>

            <nav
              aria-label={copy.nav.mobile}
              className="flex flex-col px-5 py-6"
            >
              {links.map(([label, href], index) => (
                <a
                  key={href}
                  href={href}
                  onClick={closeMobileMenu}
                  className="flex min-h-12 items-center justify-between border-b border-cream/15 py-4 font-display text-3xl uppercase tracking-wide transition-colors hover:text-amber focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
                >
                  <span>{label}</span>
                  <span className="font-body text-xs text-amber">
                    FL-0{index + 1}
                  </span>
                </a>
              ))}
            </nav>

            <div className="mx-5 flex border border-cream/25 text-xs font-bold uppercase tracking-[.12em]">
              {(["id", "en"] as const).map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setLanguage(option)}
                  aria-pressed={language === option}
                  className={`min-h-11 flex-1 cursor-pointer px-4 py-3 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber ${
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
                onClick={closeMobileMenu}
                className="button-primary w-full"
                data-track="whatsapp_reservation"
              >
                {copy.nav.reserveWhatsapp}
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
