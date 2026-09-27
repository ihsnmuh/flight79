"use client";

import { Menu } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { useLanguage } from "@/components/language-provider";
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
  const links = [[copy.nav.home, "#home"], [copy.nav.menu, "#menu"], [copy.nav.experience, "#experience"], [copy.nav.location, "#location"], [copy.nav.contact, "#contact"]] as const;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-cream/15 bg-navy/88 text-cream backdrop-blur-xl">
      <div className="mx-auto flex h-[78px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-14">
        <a
          href="#home"
          aria-label={copy.footer.homeLabel}
          className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
        >
          <BrandLogo className="size-[52px] text-amber transition-opacity group-hover:opacity-80" />
        </a>

        <nav
          aria-label={copy.nav.main}
          className="hidden items-center gap-8 lg:flex"
        >
          {links.map(([label, href]) => (
            <a key={href} href={href} className="nav-link">
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <div className="flex border border-cream/20 text-[.65rem] font-bold uppercase tracking-[.12em]" aria-label={copy.nav.language}>
            {(["id", "en"] as const).map((option) => <button key={option} type="button" onClick={() => setLanguage(option)} aria-pressed={language === option} className={`px-3 py-2 transition-colors ${language === option ? "bg-amber text-navy" : "text-cream/60 hover:text-cream"}`}>{option}</button>)}
          </div>
          <a
            href={whatsappUrl}
            data-track="whatsapp_reservation"
            target="_blank"
            rel="noreferrer"
            className="button-primary !min-h-11"
          >
            {copy.nav.reserve}
          </a>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon-lg"
              aria-label={copy.nav.open}
              className="border border-cream/20 text-cream hover:bg-cream hover:text-navy lg:hidden"
            >
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            className="border-l-0 bg-navy px-2 text-cream"
            aria-describedby="mobile-nav-description"
          >
            <SheetHeader className="border-b border-cream/15 px-5 py-7 text-left">
              <SheetTitle className="sr-only">Menu Flight 79</SheetTitle>
              <BrandLogo className="size-24 text-amber" />
              <SheetDescription
                id="mobile-nav-description"
                className="text-cream/55"
              >
                {copy.location.title}
              </SheetDescription>
            </SheetHeader>
            <nav
              aria-label={copy.nav.mobile}
              className="flex flex-col px-5 py-8"
            >
              {links.map(([label, href], index) => (
                <SheetClose asChild key={href}>
                  <a
                    href={href}
                    className="flex items-center justify-between border-b border-cream/15 py-5 font-display text-3xl uppercase tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
                  >
                    <span>{label}</span>
                    <span className="font-body text-xs text-amber">
                      0{index + 1}
                    </span>
                  </a>
                </SheetClose>
              ))}
            </nav>
            <div className="mx-5 flex border border-cream/20 text-xs font-bold uppercase tracking-[.12em]">
              {(["id", "en"] as const).map((option) => <button key={option} type="button" onClick={() => setLanguage(option)} aria-pressed={language === option} className={`flex-1 px-4 py-3 ${language === option ? "bg-amber text-navy" : "text-cream/60"}`}>{option === "id" ? "Indonesia" : "English"}</button>)}
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
    </header>
  );
}
