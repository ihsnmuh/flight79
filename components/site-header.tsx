"use client";

import { Menu } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
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

const links = [
  ["Home", "#home"],
  ["Menu", "#menu"],
  ["Experience", "#experience"],
  ["Location", "#location"],
  ["Contact", "#contact"],
] as const;

export function SiteHeader({ whatsappUrl }: { whatsappUrl: string }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-cream/15 bg-navy/88 text-cream backdrop-blur-xl">
      <div className="mx-auto flex h-[78px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-14">
        <a
          href="#home"
          aria-label="Flight 79 — kembali ke beranda"
          className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
        >
          <BrandLogo className="size-[52px] text-amber transition-opacity group-hover:opacity-80" />
        </a>

        <nav
          aria-label="Navigasi utama"
          className="hidden items-center gap-8 lg:flex"
        >
          {links.map(([label, href]) => (
            <a key={href} href={href} className="nav-link">
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={whatsappUrl}
            data-track="whatsapp_reservation"
            target="_blank"
            rel="noreferrer"
            className="button-primary !min-h-11"
          >
            Reserve Your Seat
          </a>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon-lg"
              aria-label="Buka menu navigasi"
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
                Your next flavor destination.
              </SheetDescription>
            </SheetHeader>
            <nav
              aria-label="Navigasi mobile"
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
            <div className="mt-auto p-5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="button-primary w-full"
                data-track="whatsapp_reservation"
              >
                Reserve via WhatsApp
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
