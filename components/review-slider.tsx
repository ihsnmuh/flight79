"use client";

import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";
import { reviews } from "@/data/flight79";
import { useLanguage } from "@/components/language-provider";

const VISIBLE_REVIEW_COUNT = 3;

export function ReviewSlider() {
  const { copy } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"previous" | "next" | null>(null);
  const visibleReviews = Array.from(
    { length: Math.min(VISIBLE_REVIEW_COUNT, reviews.length) },
    (_, offset) => reviews[(activeIndex + offset) % reviews.length],
  );

  const showPrevious = () => {
    setDirection("previous");
    setActiveIndex((current) => (current - 1 + reviews.length) % reviews.length);
  };

  const showNext = () => {
    setDirection("next");
    setActiveIndex((current) => (current + 1) % reviews.length);
  };

  return (
    <div aria-roledescription="carousel" aria-label={copy.reviews.carousel}>
      <div
        key={`${activeIndex}-${direction ?? "initial"}`}
        className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ${
          direction ? `review-slide review-slide--${direction}` : ""
        }`}
        aria-live="polite"
      >
        {visibleReviews.map((review, index) => (
          <article
            key={review.author}
            className={`flex min-h-60 flex-col border border-ink/15 bg-cream p-5 sm:p-6 ${
              index === 1 ? "hidden sm:flex" : ""
            } ${index === 2 ? "hidden lg:flex" : ""}`}
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex min-w-0 items-center gap-3">
                <span
                  className="grid size-9 shrink-0 place-items-center rounded-full bg-navy text-[.65rem] font-extrabold tracking-wide text-cream"
                  aria-hidden="true"
                >
                  {review.initials}
                </span>
                <div className="min-w-0">
                  <h3 className="truncate text-sm font-bold capitalize text-ink">
                    {review.author}
                  </h3>
                  <p className="mt-0.5 text-[.7rem] text-ink/40">{review.date}</p>
                </div>
              </div>
              <span className="shrink-0 text-[.6rem] font-bold uppercase tracking-[.12em] text-coffee/60">
                Google
              </span>
            </div>

            <div
              className="mt-5 flex gap-1 text-amber"
              aria-label={`${review.rating} ${copy.reviews.stars}`}
            >
              {Array.from({ length: review.rating }, (_, starIndex) => (
                <Star
                  key={starIndex}
                  className="size-3.5 fill-current"
                  aria-hidden="true"
                />
              ))}
            </div>

            <blockquote className="mt-4 text-sm leading-6 text-ink/65">
              “{review.text}”
            </blockquote>

            <footer className="mt-auto border-t border-ink/10 pt-4 text-[.6rem] font-bold uppercase tracking-[.13em] text-ink/30">
              {copy.reviews.selected}
            </footer>
          </article>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-ink/15 pt-5">
        <p className="text-[.65rem] font-bold uppercase tracking-[.15em] text-ink/40">
          {String(activeIndex + 1).padStart(2, "0")} / {String(reviews.length).padStart(2, "0")}
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={showPrevious}
            className="grid size-10 place-items-center border border-ink/20 text-ink transition-colors duration-300 hover:border-coffee hover:text-coffee focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
            aria-label={copy.reviews.previous}
          >
            <ChevronLeft className="size-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={showNext}
            className="grid size-10 place-items-center border border-ink/20 text-ink transition-colors duration-300 hover:border-coffee hover:text-coffee focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
            aria-label={copy.reviews.next}
          >
            <ChevronRight className="size-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
