"use client";

import { useEffect, useRef, useState } from "react";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789·-";

export function SplitFlapText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const [display, setDisplay] = useState(text);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(text);
      return;
    }

    const target = text.toUpperCase();
    const totalFrames = 14;
    let step = 0;

    const tick = () => {
      step += 1;
      const next = target
        .split("")
        .map((char, index) => {
          if (char === " ") return " ";
          const threshold =
            Math.floor((index / Math.max(1, target.length)) * 8) + 4;
          if (step >= threshold) return char;
          return ALPHABET[(step * 7 + index * 3) % ALPHABET.length];
        })
        .join("");

      setDisplay(next);

      if (step < totalFrames) {
        frameRef.current = window.setTimeout(tick, 32);
      } else {
        setDisplay(text);
      }
    };

    tick();

    return () => {
      if (frameRef.current !== null) {
        window.clearTimeout(frameRef.current);
      }
    };
  }, [text]);

  return (
    <span className={`split-flap ${className}`}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">{display}</span>
    </span>
  );
}
