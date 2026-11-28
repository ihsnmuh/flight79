"use client";

import { useEffect, useRef } from "react";

function JetSilhouette({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      {/* Top-down commercial aircraft pointing directly right (0 deg) */}
      <path d="M22.2 12c0 .75-.95 1.35-2.65 1.5l-5.05.35-4.3 6.85h-2.1l2.15-6.75-4.85.15-1.85 2.65H2l.85-3.65L2 9.45h1.55l1.85 2.65 4.85.15L8.1 5.5h2.1l4.3 6.85 5.05.35c1.7.15 2.65.75 2.65 1.5z" />
    </svg>
  );
}

export function FlightProgressBar() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const fillRef = useRef<HTMLDivElement | null>(null);
  const planeRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    const fill = fillRef.current;
    const plane = planeRef.current;
    if (!track || !fill || !plane) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let target = 0;
    let current = 0;
    let tilt = 0;
    let rafId = 0;
    let running = false;

    const getScrollRatio = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return 0;
      return Math.min(1, Math.max(0, window.scrollY / scrollable));
    };

    const applyTransform = (ratio: number, bankDeg: number) => {
      const trackWidth = track.clientWidth;
      const edgePad = 22;
      const travel = Math.max(0, trackWidth - edgePad * 2);
      const x = edgePad + ratio * travel;

      // Keep the progress line aligned exactly to the aircraft tail
      const fillRatio = trackWidth > 0 ? Math.min(1, x / trackWidth) : ratio;
      fill.style.transform = `scaleX(${fillRatio})`;
      plane.style.transform = `translate3d(${x}px, -50%, 0) translateX(-50%) rotate(${bankDeg}deg)`;
    };

    const step = () => {
      const diff = target - current;
      current += diff * 0.14;

      // Subtle pitch tilt during scroll, returning smoothly to 0 deg horizontal flight
      const targetTilt = Math.max(-7, Math.min(7, diff * 110));
      tilt += (targetTilt - tilt) * 0.16;

      if (Math.abs(diff) < 0.0004 && Math.abs(tilt) < 0.05) {
        current = target;
        tilt = 0;
        applyTransform(current, 0);
        running = false;
        return;
      }

      applyTransform(current, tilt);
      rafId = window.requestAnimationFrame(step);
    };

    const schedule = () => {
      target = getScrollRatio();
      if (reducedMotion) {
        current = target;
        applyTransform(current, 0);
        return;
      }
      if (!running) {
        running = true;
        rafId = window.requestAnimationFrame(step);
      }
    };

    target = getScrollRatio();
    current = target;
    applyTransform(current, 0);

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <div
      ref={trackRef}
      aria-hidden="true"
      className="pointer-events-none relative h-[3px] w-full bg-cream/20"
    >
      {/* Always-visible dashed flight route line across the entire width */}
      <div
        className="absolute inset-0 opacity-65"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(244,239,228,0.45) 0 10px, transparent 10px 18px)",
        }}
      />
      {/* Solid amber contrail line behind the aircraft */}
      <div
        ref={fillRef}
        className="relative h-full w-full origin-left bg-amber will-change-transform"
        style={{ transform: "scaleX(0.01)" }}
      />
      {/* Sleek top-down jet pointing directly right along the line */}
      <span
        ref={planeRef}
        className="absolute left-0 top-1/2 text-amber will-change-transform"
        style={{
          transform: "translate3d(22px, -50%, 0) translateX(-50%) rotate(0deg)",
        }}
      >
        <JetSilhouette className="size-7" />
      </span>
    </div>
  );
}
