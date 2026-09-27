import { AnalyticsEvents } from "@/components/analytics-events";
import { LanguageProvider } from "@/components/language-provider";
import { LocalBusinessJsonLd } from "@/components/local-business-json-ld";
import { SiteHeader } from "@/components/site-header";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { EventsSection } from "@/components/sections/events-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { HeroSection } from "@/components/sections/hero-section";
import { LocationSection } from "@/components/sections/location-section";
import { MenuSection } from "@/components/sections/menu-section";
import { MobileReservationCta } from "@/components/sections/mobile-reservation-cta";
import { ReviewsSection } from "@/components/sections/reviews-section";
import { SiteFooter } from "@/components/sections/site-footer";
import { contact } from "@/data/flight79";

export default function Home() {
  return (
    <>
      <LocalBusinessJsonLd />
      <LanguageProvider>
        <main className="min-h-screen overflow-x-hidden bg-cream text-ink">
          <AnalyticsEvents />
          <SiteHeader whatsappUrl={contact.whatsappUrl} />
          <HeroSection />
          <AboutSection />
          <MenuSection />
          <ExperienceSection />
          <GallerySection />
          <LocationSection />
          <ReviewsSection />
          <EventsSection />
          <ContactSection />
          <SiteFooter />
          <MobileReservationCta />
        </main>
      </LanguageProvider>
    </>
  );
}
