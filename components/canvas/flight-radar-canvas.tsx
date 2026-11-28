"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  phase: number;
}

interface FlightArc {
  startX: number;
  startY: number;
  ctrlX: number;
  ctrlY: number;
  endX: number;
  endY: number;
  progress: number;
  speed: number;
  label: string;
}

export function FlightRadarCanvas({ className = "" }: { className?: string }) {
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
    let radarAngle = -Math.PI * 0.35;
    let lastTime = 0;
    let pointerX = 0.65;
    let pointerY = 0.42;
    let targetX = 0.65;
    let targetY = 0.42;

    const particles: Particle[] = [];
    const arcs: FlightArc[] = [
      {
        startX: 0.08,
        startY: 0.72,
        ctrlX: 0.36,
        ctrlY: 0.16,
        endX: 0.78,
        endY: 0.36,
        progress: 0.15,
        speed: 0.055,
        label: "F79 · KBP",
      },
      {
        startX: 0.22,
        startY: 0.88,
        ctrlX: 0.56,
        ctrlY: 0.32,
        endX: 0.92,
        endY: 0.22,
        progress: 0.62,
        speed: 0.042,
        label: "LOUNGE 79",
      },
    ];

    const seedParticles = () => {
      particles.length = 0;
      const count = width < 640 ? 22 : 42;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.18,
          vy: -(0.12 + Math.random() * 0.28),
          radius: 1 + Math.random() * 2.1,
          alpha: 0.14 + Math.random() * 0.32,
          phase: Math.random() * Math.PI * 2,
        });
      }
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seedParticles();
    };

    const drawQuadPoint = (
      t: number,
      p0x: number,
      p0y: number,
      p1x: number,
      p1y: number,
      p2x: number,
      p2y: number,
    ) => {
      const inv = 1 - t;
      return {
        x: inv * inv * p0x + 2 * inv * t * p1x + t * t * p2x,
        y: inv * inv * p0y + 2 * inv * t * p1y + t * t * p2y,
        dx: 2 * inv * (p1x - p0x) + 2 * t * (p2x - p1x),
        dy: 2 * inv * (p1y - p0y) + 2 * t * (p2y - p1y),
      };
    };

    const renderFrame = (time: number) => {
      const dt = lastTime ? Math.min(0.05, (time - lastTime) / 1000) : 0.016;
      lastTime = time;
      ctx.clearRect(0, 0, width, height);

      pointerX += (targetX - pointerX) * Math.min(1, dt * 4.5);
      pointerY += (targetY - pointerY) * Math.min(1, dt * 4.5);

      const cx = width * (0.72 + (pointerX - 0.5) * 0.05);
      const cy = height * (0.44 + (pointerY - 0.5) * 0.05);
      const maxRadius = Math.min(width, height) * 0.44;

      // Subtle compass & radar rings
      ctx.save();
      const ringRadii = [0.28, 0.52, 0.78, 1];
      ringRadii.forEach((factor, idx) => {
        ctx.beginPath();
        ctx.arc(cx, cy, maxRadius * factor, 0, Math.PI * 2);
        ctx.strokeStyle =
          idx === 2
            ? "rgba(237, 174, 59, 0.16)"
            : "rgba(244, 239, 228, 0.08)";
        ctx.lineWidth = 1;
        if (idx === 1) ctx.setLineDash([4, 8]);
        else ctx.setLineDash([]);
        ctx.stroke();
      });

      // Compass degree ticks on outer ring
      ctx.setLineDash([]);
      for (let deg = 0; deg < 360; deg += 15) {
        const rad = (deg * Math.PI) / 180;
        const inner = maxRadius * (deg % 45 === 0 ? 0.94 : 0.975);
        const outer = maxRadius;
        ctx.beginPath();
        ctx.moveTo(cx + Math.cos(rad) * inner, cy + Math.sin(rad) * inner);
        ctx.lineTo(cx + Math.cos(rad) * outer, cy + Math.sin(rad) * outer);
        ctx.strokeStyle =
          deg % 90 === 0
            ? "rgba(237, 174, 59, 0.34)"
            : "rgba(244, 239, 228, 0.12)";
        ctx.lineWidth = deg % 90 === 0 ? 1.2 : 0.8;
        ctx.stroke();
      }

      // Radar sweep cone
      if (!reducedMotion) {
        radarAngle = (radarAngle + dt * 0.34) % (Math.PI * 2);
      }
      const sweepSpan = 0.52;
      const sweepGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, maxRadius);
      sweepGrad.addColorStop(0, "rgba(237, 174, 59, 0.02)");
      sweepGrad.addColorStop(0.75, "rgba(237, 174, 59, 0.09)");
      sweepGrad.addColorStop(1, "rgba(237, 174, 59, 0.18)");
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, maxRadius, radarAngle - sweepSpan, radarAngle);
      ctx.closePath();
      ctx.fillStyle = sweepGrad;
      ctx.fill();

      // Leading radar arm
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(
        cx + Math.cos(radarAngle) * maxRadius,
        cy + Math.sin(radarAngle) * maxRadius,
      );
      ctx.strokeStyle = "rgba(237, 174, 59, 0.42)";
      ctx.lineWidth = 1.2;
      ctx.stroke();

      // Center KBP beacon
      const pulse = reducedMotion ? 0.5 : (Math.sin(time * 0.003) + 1) / 2;
      ctx.beginPath();
      ctx.arc(cx, cy, 3.5, 0, Math.PI * 2);
      ctx.fillStyle = "#edae3b";
      ctx.fill();
      ctx.beginPath();
      ctx.arc(cx, cy, 8 + pulse * 10, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(237, 174, 59, ${0.32 - pulse * 0.24})`;
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();

      // Great-circle flight paths + moving aircraft glyphs
      ctx.save();
      arcs.forEach((arc) => {
        const p0x = arc.startX * width;
        const p0y = arc.startY * height;
        const p1x = arc.ctrlX * width + (pointerX - 0.5) * 28;
        const p1y = arc.ctrlY * height + (pointerY - 0.5) * 20;
        const p2x = arc.endX * width;
        const p2y = arc.endY * height;

        // Dashed route curve
        ctx.beginPath();
        ctx.moveTo(p0x, p0y);
        ctx.quadraticCurveTo(p1x, p1y, p2x, p2y);
        ctx.setLineDash([5, 7]);
        ctx.strokeStyle = "rgba(244, 239, 228, 0.2)";
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.setLineDash([]);

        // Waypoint dots
        [
          [p0x, p0y],
          [p2x, p2y],
        ].forEach(([wx, wy]) => {
          ctx.beginPath();
          ctx.arc(wx, wy, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(237, 174, 59, 0.7)";
          ctx.fill();
        });

        if (!reducedMotion) {
          arc.progress = (arc.progress + arc.speed * dt) % 1;
        }

        // Smooth fade in/out near arc endpoints so loop reset never pops
        const edgeFade = Math.min(
          1,
          arc.progress * 10,
          (1 - arc.progress) * 10,
        );

        // Contrail highlight behind aircraft
        const trailStart = Math.max(0, arc.progress - 0.14);
        ctx.beginPath();
        const steps = 16;
        for (let s = 0; s <= steps; s++) {
          const tt = trailStart + ((arc.progress - trailStart) * s) / steps;
          const pt = drawQuadPoint(tt, p0x, p0y, p1x, p1y, p2x, p2y);
          if (s === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        }
        ctx.strokeStyle = `rgba(237, 174, 59, ${0.55 * edgeFade})`;
        ctx.lineWidth = 1.6;
        ctx.stroke();

        // Aircraft marker (top-down jet silhouette pointing along heading)
        const pos = drawQuadPoint(arc.progress, p0x, p0y, p1x, p1y, p2x, p2y);
        const heading = Math.atan2(pos.dy, pos.dx);

        ctx.save();
        ctx.globalAlpha = edgeFade;
        ctx.translate(pos.x, pos.y);
        ctx.rotate(heading);
        ctx.scale(1.55, 1.55);
        ctx.beginPath();
        // Nose -> upper wing -> tail -> lower wing -> nose
        ctx.moveTo(9, 0);
        ctx.lineTo(3, -1.2);
        ctx.lineTo(-1.5, -7.2);
        ctx.lineTo(-3.2, -7.2);
        ctx.lineTo(-1.2, -1.2);
        ctx.lineTo(-6.2, -1);
        ctx.lineTo(-8.2, -3.4);
        ctx.lineTo(-9.2, -3.4);
        ctx.lineTo(-7.8, 0);
        ctx.lineTo(-9.2, 3.4);
        ctx.lineTo(-8.2, 3.4);
        ctx.lineTo(-6.2, 1);
        ctx.lineTo(-1.2, 1.2);
        ctx.lineTo(-3.2, 7.2);
        ctx.lineTo(-1.5, 7.2);
        ctx.lineTo(3, 1.2);
        ctx.closePath();
        ctx.fillStyle = "#edae3b";
        ctx.fill();
        ctx.restore();

        // Crisp aviation callout next to marker
        if (width >= 640) {
          ctx.font = '600 10px "Manrope", sans-serif';
          ctx.fillStyle = `rgba(244, 239, 228, ${0.58 * edgeFade})`;
          ctx.fillText(arc.label, pos.x + 18, pos.y - 12);
        }
      });
      ctx.restore();

      // Warm floating crema / coffee-aroma particles
      ctx.save();
      particles.forEach((p) => {
        if (!reducedMotion) {
          p.x += p.vx + Math.sin(time * 0.0008 + p.phase) * 0.12;
          p.y += p.vy;
          if (p.y < -10) {
            p.y = height + 10;
            p.x = Math.random() * width;
          }
          if (p.x < -10) p.x = width + 10;
          if (p.x > width + 10) p.x = -10;
        }
        const glow = p.alpha * (0.75 + 0.25 * Math.sin(time * 0.002 + p.phase));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(237, 174, 59, ${glow})`;
        ctx.fill();
      });
      ctx.restore();
    };

    const tick = (time: number) => {
      if (isVisible && !document.hidden) {
        renderFrame(time);
      }
      if (!reducedMotion) {
        rafId = window.requestAnimationFrame(tick);
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      targetX = (event.clientX - rect.left) / rect.width;
      targetY = (event.clientY - rect.top) / rect.height;
    };

    resize();
    renderFrame(0);
    let startTimer = 0;
    if (!reducedMotion) {
      startTimer = window.setTimeout(() => {
        rafId = window.requestAnimationFrame(tick);
      }, 450);
    }

    const resizeObserver = new ResizeObserver(() => {
      resize();
      if (reducedMotion) renderFrame(0);
    });
    resizeObserver.observe(canvas);

    const visibilityObserver = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0]?.isIntersecting ?? true;
      },
      { threshold: 0.05 },
    );
    visibilityObserver.observe(canvas);

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    return () => {
      window.clearTimeout(startTimer);
      window.cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
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
