"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function AnalyticsEvents() {
  useEffect(() => {
    function trackClick(event: MouseEvent) {
      const target = (event.target as HTMLElement).closest<HTMLElement>("[data-track]");
      if (!target) return;
      window.dataLayer?.push({
        event: "flight79_click",
        action: target.dataset.track,
        label: target.textContent?.trim(),
      });
    }

    document.addEventListener("click", trackClick);
    return () => document.removeEventListener("click", trackClick);
  }, []);

  return null;
}
