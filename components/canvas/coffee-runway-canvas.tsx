"use client";

import { useEffect, useRef } from "react";

export function CoffeeRunwayCanvas({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let rafId = 0;
    let isVisible = true;
    let pointerInfluence = 0;
    let targetInfluence = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      pointerInfluence += (targetInfluence - pointerInfluence) * 0.05;
      const t = reducedMotion ? 0 : time * 0.00055;

      // Flowing coffee-aroma & jetstream contour ribbons
      const waves = [
        {
          amp: 26,
          freq: 0.0045,
          yBase: 0.28,
          color: "rgba(237, 174, 59, 0.16)",
          speed: 1.1,
        },
        {
          amp: 34,
          freq: 0.0032,
          yBase: 0.48,
          color: "rgba(244, 239, 228, 0.10)",
          speed: 0.8,
        },
        {
          amp: 22,
          freq: 0.0052,
          yBase: 0.68,
          color: "rgba(237, 174, 59, 0.11)",
          speed: 1.35,
        },
      ];

      waves.forEach((wave, index) => {
        ctx.beginPath();
        const baseY = height * wave.yBase;
        for (let x = 0; x <= width; x += 12) {
          const y =
            baseY +
            Math.sin(x * wave.freq + t * wave.speed + index * 1.4) *
              (wave.amp + pointerInfluence * 14) +
            Math.cos(x * wave.freq * 0.45 - t * 0.7) * 10;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = wave.color;
        ctx.lineWidth = 1.25;
        ctx.stroke();
      });

      // Subtle aviation altitude ticks along right edge
      const tickSpacing = 28;
      const offset = reducedMotion ? 0 : (time * 0.015) % tickSpacing;
      ctx.strokeStyle = "rgba(244, 239, 228, 0.12)";
      ctx.lineWidth = 1;
      for (let y = offset; y < height; y += tickSpacing) {
        const isMajor = Math.round((y - offset) / tickSpacing) % 4 === 0;
        const len = isMajor ? 22 : 10;
        ctx.beginPath();
        ctx.moveTo(width - len - 14, y);
        ctx.lineTo(width - 14, y);
        ctx.stroke();
      }
    };

    const loop = (time: number) => {
      if (isVisible && !document.hidden) {
        draw(time);
      }
      if (!reducedMotion) {
        rafId = window.requestAnimationFrame(loop);
      }
    };

    const handleMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (!rect.height) return;
      const rel = (event.clientY - rect.top) / rect.height;
      targetInfluence = Math.max(-1, Math.min(1, (rel - 0.5) * 2));
    };

    resize();
    draw(0);
    if (!reducedMotion) {
      rafId = window.requestAnimationFrame(loop);
    }

    const resizeObserver = new ResizeObserver(() => {
      resize();
      if (reducedMotion) draw(0);
    });
    resizeObserver.observe(canvas);

    const visibilityObserver = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0]?.isIntersecting ?? true;
      },
      { threshold: 0.05 },
    );
    visibilityObserver.observe(canvas);

    window.addEventListener("pointermove", handleMove, { passive: true });

    return () => {
      window.cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      window.removeEventListener("pointermove", handleMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none h-full w-full ${className}`}
    />
  );
}
