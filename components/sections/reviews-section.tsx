import { ArrowRight } from "lucide-react";
import { ReviewSlider } from "@/components/review-slider";
import { contact } from "@/data/flight79";

export function ReviewsSection() {
  return (
    <section aria-labelledby="reviews-title" className="bg-[#e8e2d7] py-24 lg:py-32"><div className="section-shell">
      <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="eyebrow text-coffee">Passenger reviews</p><h2 id="reviews-title" className="section-title mt-4">What Our Guests Say</h2><p className="mt-5 max-w-sm text-sm leading-relaxed text-ink/55">Dengarkan pengalaman tamu langsung melalui listing resmi Flight 79 di Google Maps.</p></div><a href={contact.mapsUrl} target="_blank" rel="noreferrer" data-track="google_reviews" className="button-primary w-fit">View All Reviews<ArrowRight className="size-4" aria-hidden="true" /></a></div>
      <ReviewSlider />
    </div></section>
  );
}
