"use client";

import { ArrowUpRight, Clock3, ShoppingBag, UtensilsCrossed } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { Reveal } from "@/components/motion/reveal";
import { contact } from "@/data/flight79";

export function OrderOnlineSection() {
  const { copy } = useLanguage();

  return (
    <section
      id="order-online"
      aria-labelledby="order-online-title"
      className="relative overflow-hidden bg-cream py-16 text-ink sm:py-20 lg:py-24"
    >
      <div className="section-shell">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
          <Reveal variant="left">
            <p className="eyebrow flex items-center gap-2.5 text-coffee">
              <ShoppingBag className="size-4 text-coffee" aria-hidden="true" />
              {copy.delivery.eyebrow}
            </p>
            <h2
              id="order-online-title"
              className="section-title mt-4 max-w-xl text-navy"
            >
              {copy.delivery.title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#524d45] sm:text-lg">
              {copy.delivery.body}
            </p>
            <p className="mt-6 max-w-xl border-t border-ink/15 pt-5 text-sm font-medium text-coffee">
              {copy.delivery.availabilityNote}
            </p>
          </Reveal>

          <Reveal variant="right" delay={80}>
            <div className="boarding-pass p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-cream/20 pb-4">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-amber">
                  {copy.delivery.passLabel}
                </span>
                <span className="inline-flex items-center gap-2 border border-amber/40 bg-amber/15 px-2.5 py-1 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-amber">
                  <span
                    aria-hidden="true"
                    className="size-1.5 rounded-full bg-amber"
                  />
                  {copy.delivery.status}
                </span>
              </div>

              <div className="py-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cream/70">
                  {copy.delivery.partnerLabel}
                </p>
                <div className="mt-3 flex items-center gap-3.5">
                  <svg
                    viewBox="0 0 40 40"
                    className="size-11 shrink-0"
                    role="img"
                    aria-label="GoFood"
                  >
                    <circle cx="20" cy="20" r="20" fill="#EE2737" />
                    <g fill="#FFFFFF">
                      <rect x="11.6" y="10.8" width="1.6" height="7.4" rx="0.8" />
                      <rect x="14.2" y="10.8" width="1.6" height="7.4" rx="0.8" />
                      <rect x="16.8" y="10.8" width="1.6" height="7.4" rx="0.8" />
                      <path d="M11.6 16.8h6.8v1.2a3.4 3.4 0 0 1-6.8 0v-1.2z" />
                      <rect x="13.8" y="19.6" width="2.4" height="9.8" rx="1.2" />
                      <ellipse cx="25.4" cy="15.4" rx="3.4" ry="4.8" />
                      <rect x="24.2" y="19.6" width="2.4" height="9.8" rx="1.2" />
                    </g>
                  </svg>
                  <span className="font-body text-3xl font-extrabold tracking-tight text-cream sm:text-4xl">
                    gofood
                  </span>
                </div>
                <p className="mt-2.5 text-sm text-cream/80">
                  {copy.delivery.outletName}
                </p>
              </div>

              <div className="grid grid-cols-2 divide-x divide-cream/15 border-y border-cream/15 py-4">
                <div className="pr-4">
                  <span className="flex items-center gap-1.5 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-cream/70">
                    <UtensilsCrossed className="size-3.5 text-amber" aria-hidden="true" />
                    {copy.delivery.serviceLabel}
                  </span>
                  <strong className="mt-1 block font-display text-xl uppercase tracking-wide text-cream">
                    {copy.delivery.serviceValue}
                  </strong>
                </div>
                <div className="pl-4">
                  <span className="flex items-center gap-1.5 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-cream/70">
                    <Clock3 className="size-3.5 text-amber" aria-hidden="true" />
                    {copy.delivery.hoursLabel}
                  </span>
                  <strong className="mt-1 block font-display text-xl uppercase tracking-wide text-cream">
                    {copy.delivery.hoursValue}
                  </strong>
                </div>
              </div>

              <div className="boarding-pass-perforation mt-5 flex flex-wrap items-center justify-between gap-4 pt-5">
                <a
                  href={contact.gofoodUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-track="gofood_order"
                  className="button-primary group w-full sm:w-auto"
                >
                  {copy.delivery.cta}
                  <ArrowUpRight
                    className="size-4 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] [@media(hover:hover)_and_(pointer:fine)]:group-hover:translate-x-0.5 [@media(hover:hover)_and_(pointer:fine)]:group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
                <div
                  aria-hidden="true"
                  className="boarding-barcode hidden w-24 shrink-0 opacity-85 sm:block"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
