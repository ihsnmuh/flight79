"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type EventSlide = {
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
};

type EventSliderProps = {
  slides: readonly EventSlide[];
};

const AUTOPLAY_DELAY = 5500;
const SWIPE_THRESHOLD = 45;

export function EventSlider({ slides }: EventSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (isPaused || prefersReducedMotion || slides.length < 2) return;

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, AUTOPLAY_DELAY);

    return () => window.clearInterval(intervalId);
  }, [isPaused, prefersReducedMotion, slides.length]);

  if (slides.length === 0) return null;

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % slides.length);
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;

    const distance = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(distance) < SWIPE_THRESHOLD) return;
    if (distance > 0) showPrevious();
    else showNext();
  };

  return (
    <div
      className="group relative aspect-[4/3] min-h-[320px] overflow-hidden bg-coffee sm:min-h-[420px] lg:aspect-auto lg:min-h-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
      onTouchStart={(event) => {
        touchStartX.current = event.touches[0].clientX;
        setIsPaused(true);
      }}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="Pilihan suasana untuk acara di Flight 79"
    >
      {slides.map((slide, index) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={index === activeIndex ? slide.alt : ""}
          fill
          sizes="(min-width: 1024px) 55vw, 100vw"
          className={`object-cover transition-[opacity,transform] duration-1000 ease-out motion-reduce:transition-none ${
            index === activeIndex
              ? "scale-100 opacity-100"
              : "pointer-events-none scale-[1.015] opacity-0"
          }`}
          aria-hidden={index !== activeIndex}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/5 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-5 sm:p-7">
        <div
          className="max-w-md"
          aria-live={isPaused ? "polite" : "off"}
          aria-atomic="true"
        >
          <p className="eyebrow text-amber">{slides[activeIndex].eyebrow}</p>
          <p className="mt-2 font-display text-2xl font-semibold uppercase leading-tight tracking-wide text-cream sm:text-3xl">
            {slides[activeIndex].title}
          </p>
        </div>

        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={showPrevious}
            className="grid size-11 place-items-center border border-cream/35 bg-navy/35 text-cream backdrop-blur-sm transition-colors duration-300 hover:border-amber hover:text-amber focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
            aria-label="Foto acara sebelumnya"
          >
            <ChevronLeft className="size-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={showNext}
            className="grid size-11 place-items-center border border-cream/35 bg-navy/35 text-cream backdrop-blur-sm transition-colors duration-300 hover:border-amber hover:text-amber focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
            aria-label="Foto acara berikutnya"
          >
            <ChevronRight className="size-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="absolute left-5 top-5 flex items-center gap-2 sm:left-7 sm:top-7">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`h-1 transition-[width,background-color] duration-500 motion-reduce:transition-none ${
              index === activeIndex ? "w-10 bg-amber" : "w-5 bg-cream/45"
            }`}
            aria-label={`Tampilkan foto ${index + 1}: ${slide.title}`}
            aria-current={index === activeIndex ? "true" : undefined}
          />
        ))}
      </div>
    </div>
  );
}
