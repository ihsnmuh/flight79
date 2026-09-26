import Image from "next/image";
import {
  ArrowDownRight,
  ArrowRight,
  CalendarDays,
  Clock3,
  Coffee,
  Mail,
  MapPin,
  Phone,
  Radio,
  Users,
  UtensilsCrossed,
} from "lucide-react";
import { AnalyticsEvents } from "@/components/analytics-events";
import { BrandLogo } from "@/components/brand-logo";
import { EventSlider } from "@/components/event-slider";
import { MenuExplorer } from "@/components/menu-explorer";
import { ReviewSlider } from "@/components/review-slider";
import { ReservationForm } from "@/components/reservation-form";
import { SiteHeader } from "@/components/site-header";
import {
  contact,
  eventSlides,
  events,
  experienceFeatures,
} from "@/data/flight79";

type GalleryItem = {
  src: string;
  alt: string;
  className: string;
  imageClassName?: string;
  sizes: string;
};

const gallery: GalleryItem[] = [
  {
    src: "/flight79-first.jpg",
    alt: "Area duduk Flight 79 dengan mural peta dunia dan deretan lampu gantung",
    className: "md:col-span-7 md:row-span-2",
    imageClassName: "object-center",
    sizes: "(min-width: 768px) 58vw, 100vw",
  },
  {
    src: "/flight79-coffee-machine.jpg",
    alt: "Mesin espresso Flight 79 dengan secangkir kopi yang baru diseduh",
    className: "!min-h-[24rem] md:col-span-5 md:row-span-2 md:!min-h-0",
    imageClassName: "object-center",
    sizes: "(min-width: 768px) 42vw, 100vw",
  },
  {
    src: "/flight79-third.jpg",
    alt: "Area makan Flight 79 dengan tanaman rambat dan pencahayaan alami",
    className: "md:col-span-8 md:row-span-2",
    imageClassName: "object-center",
    sizes: "(min-width: 768px) 66vw, 100vw",
  },
  {
    src: "/flight79-second-plane.jpg",
    alt: "Koleksi miniatur pesawat yang memperkuat tema aviasi Flight 79",
    className: "md:col-span-4",
    imageClassName: "object-center",
    sizes: "(min-width: 768px) 34vw, 100vw",
  },
  {
    src: "/flight79-second-logo.jpg",
    alt: "Logo Flight 79 dengan iluminasi hangat pada dinding interior",
    className: "hidden md:col-span-4 md:block",
    imageClassName: "object-center",
    sizes: "(min-width: 768px) 34vw, 100vw",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-cream text-ink">
      <AnalyticsEvents />
      <SiteHeader whatsappUrl={contact.whatsappUrl} />

      <section
        id="home"
        className="relative isolate min-h-[100svh] overflow-hidden bg-navy text-cream"
      >
        <Image
          src="/flight79-hero.jpg"
          alt="Hidangan nasi goreng dan kopi di interior bergaya airport lounge"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,18,29,.96)_0%,rgba(5,18,29,.82)_38%,rgba(5,18,29,.2)_72%,rgba(5,18,29,.12)_100%)]" />
        <div className="runway-line absolute inset-x-0 bottom-14 z-10 opacity-70" />
        <div className="relative z-20 mx-auto flex min-h-[100svh] max-w-[1440px] flex-col justify-end px-5 pb-24 pt-36 sm:px-8 lg:px-14 lg:pb-16">
          <div className="max-w-3xl animate-entrance">
            <p className="eyebrow mb-6 flex items-center gap-3 text-amber">
              <Radio className="size-4" />
              Now boarding · Kota Baru Parahyangan
            </p>
            <h1 className="font-display text-[clamp(4.2rem,10vw,9rem)] font-semibold uppercase leading-[.8] tracking-[-.035em]">
              First-Class<span className="block text-outline">Flavor.</span>On
              the Ground.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg">
              Coffee & eatery bertema aviasi untuk sarapan, makan bersama, dan
              jeda yang terasa seperti perjalanan istimewa.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={contact.whatsappUrl}
                data-track="whatsapp_reservation"
                className="button-primary group"
                target="_blank"
                rel="noreferrer"
              >
                Reserve Your Seat
                <ArrowDownRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
              </a>
              <a href="#menu" className="button-ghost">
                Explore Our Menu
              </a>
            </div>
          </div>
          <div className="mt-14 grid max-w-3xl gap-px border-y border-cream/20 bg-cream/20 sm:grid-cols-3">
            <div className="bg-navy/80 px-4 py-4 backdrop-blur-sm">
              <span className="eyebrow text-cream/45">Flight</span>
              <strong className="mt-1 block font-display text-2xl tracking-wide">
                F79
              </strong>
            </div>
            <div className="bg-navy/80 px-4 py-4 backdrop-blur-sm">
              <span className="eyebrow text-cream/45">Destination</span>
              <strong className="mt-1 flex items-center gap-2 font-display text-xl tracking-wide">
                <MapPin className="size-4 text-amber" /> KBP
              </strong>
            </div>
            <div className="bg-navy/80 px-4 py-4 backdrop-blur-sm">
              <span className="eyebrow text-cream/45">Service</span>
              <strong className="mt-1 block font-display text-xl tracking-wide">
                ALL DAY DINING
              </strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell relative overflow-hidden py-24 lg:py-36">
        <div className="absolute -right-8 top-8 font-display text-[18rem] font-bold leading-none text-navy/[.035]">
          79
        </div>
        <div className="grid items-start gap-16 lg:grid-cols-[.72fr_1.28fr]">
          <div>
            <p className="eyebrow text-coffee">Welcome aboard</p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink/55">
              Bukan sekadar tempat singgah. Flight 79 adalah tujuan untuk
              menikmati rasa, suasana, dan waktu bersama.
            </p>
          </div>
          <div className="relative">
            <span className="absolute -left-6 top-1 hidden h-24 w-px bg-amber lg:block" />
            <h2 className="section-title max-w-5xl">
              Satu destinasi untuk{" "}
              <span className="text-coffee">kopi yang serius</span>, makanan
              yang familiar, dan pengalaman yang tak biasa.
            </h2>
            <div className="mt-10 grid gap-8 border-t border-ink/15 pt-8 md:grid-cols-2">
              <p className="text-base leading-8 text-ink/70">
                Terinspirasi oleh rasa antusias sebelum perjalanan dimulai, kami
                memadukan hangatnya coffee house dengan detail airport lounge
                yang modern dan elegan.
              </p>
              <p className="text-base leading-8 text-ink/70">
                Datang untuk quick coffee, tinggal lebih lama untuk makan
                bersama. Setiap kunjungan dirancang terasa ramah, effortless,
                dan layak dikenang.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="bg-[#e8e2d7] py-24 lg:py-32">
        <div className="section-shell">
          <div className="mb-14 grid items-end gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="eyebrow text-coffee">In-flight selection</p>
              <h2 className="section-title mt-4">Signature Flights</h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink/65">
                Dari first bite hingga sweet landing—pilihan rasa untuk setiap
                waktu dan setiap penumpang.
              </p>
            </div>
            <a
              href={contact.menuUrl}
              data-track="view_full_menu"
              className="text-link"
              target="_blank"
              rel="noreferrer"
            >
              View Full Menu <ArrowRight className="size-4" />
            </a>
          </div>
          <MenuExplorer />
          <p className="mt-8 text-xs leading-relaxed text-ink/45">
            Foto digunakan sebagai visual kategori, bukan representasi setiap
            item. Harga ditulis dalam ribuan rupiah dan dapat berubah; lihat
            menu lengkap untuk pilihan dan informasi terbaru.
          </p>
        </div>
      </section>

      <section
        id="experience"
        className="relative overflow-hidden bg-navy py-24 text-cream lg:py-36"
      >
        <div className="absolute inset-y-0 right-0 w-1/3 border-l border-cream/10 bg-cream/[.02]" />
        <div className="section-shell relative">
          <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="eyebrow text-amber">The Flight 79 experience</p>
              <h2 className="section-title mt-5 text-cream">
                Setiap kunjungan adalah bagian dari perjalanan.
              </h2>
              <div className="relative mt-8 aspect-[3/2] w-full max-w-[34rem] overflow-hidden lg:mt-10">
                <Image
                  src="/flight79-second.jpg"
                  alt="Interior hangat Flight 79 untuk keluarga dan profesional"
                  fill
                  sizes="(min-width: 1280px) 34rem, (min-width: 1024px) 42vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/55 to-transparent" />
                <div className="absolute bottom-5 left-5 border-l-2 border-amber pl-4">
                  <p className="eyebrow text-amber">Cabin mood</p>
                  <p className="mt-1 text-sm text-cream/70">
                    Premium, relaxed, welcoming.
                  </p>
                </div>
              </div>
            </div>
            <div className="divide-y divide-cream/15 border-y border-cream/15">
              {experienceFeatures.map((feature) => (
                <article
                  key={feature.number}
                  className="grid gap-5 py-10 sm:grid-cols-[4rem_1fr] lg:py-14"
                >
                  <span className="font-display text-3xl text-amber">
                    {feature.number}
                  </span>
                  <div>
                    <h3 className="font-display text-4xl font-semibold uppercase tracking-wide lg:text-5xl">
                      {feature.title}
                    </h3>
                    <p className="mt-5 max-w-xl text-base leading-8 text-cream/60">
                      {feature.copy}
                    </p>
                  </div>
                </article>
              ))}
              <div className="grid grid-cols-3 gap-px bg-cream/15">
                {[
                  ["Breakfast", Coffee],
                  ["All-day menu", UtensilsCrossed],
                  ["Groups", Users],
                ].map(([label, Icon]) => {
                  const FeatureIcon = Icon as typeof Coffee;
                  return (
                    <div
                      key={label as string}
                      className="bg-navy px-3 py-6 text-center"
                    >
                      <FeatureIcon className="mx-auto size-5 text-amber" />
                      <span className="mt-3 block text-[.65rem] font-bold uppercase tracking-[.12em] text-cream/60">
                        {label as string}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="gallery-title" className="py-24 lg:py-32">
        <div className="section-shell">
          <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow text-coffee">Window seat view</p>
              <h2 id="gallery-title" className="section-title mt-4">
                A Glimpse On Board
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-ink/55">
              Suasana, rasa, dan detail yang membuat setiap kunjungan terasa
              seperti destinasi baru.
            </p>
          </div>
          <div className="gallery-grid">
            {gallery.map((item, index) => (
              <figure
                key={`${item.alt}-${index}`}
                className={`gallery-item group ${item.className}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes={item.sizes}
                  className={`object-cover transition duration-700 group-hover:scale-[1.025] group-hover:brightness-110 ${item.imageClassName ?? ""}`}
                />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-navy/80 px-4 py-3 text-xs uppercase tracking-[.12em] text-cream backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-0">
                  {item.alt}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-5 text-xs uppercase tracking-[.12em] text-ink/40">
            Flight 79 · Kota Baru Parahyangan
          </p>
        </div>
      </section>

      <section id="location" className="bg-coffee text-cream">
        <div className="grid lg:grid-cols-[.82fr_1.18fr]">
          <div className="px-5 py-20 sm:px-8 lg:px-14 lg:py-24 xl:pl-[max(3.5rem,calc((100vw-1440px)/2+3.5rem))]">
            <p className="eyebrow text-amber">Arrival information</p>
            <h2 className="section-title mt-5 max-w-xl text-cream">
              Your next flavor destination.
            </h2>
            <div className="mt-10 space-y-8">
              <div className="flex gap-4">
                <MapPin className="mt-1 size-5 shrink-0 text-amber" />
                <div>
                  <p className="eyebrow text-cream/40">Address</p>
                  <p className="mt-2 max-w-sm text-base leading-relaxed">
                    {contact.address}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock3 className="mt-1 size-5 shrink-0 text-amber" />
                <div>
                  <p className="eyebrow text-cream/40">Opening hours</p>
                  <p className="mt-2 text-base">{contact.openingHours}</p>
                </div>
              </div>
              <div className="border-t border-cream/20 pt-6 text-sm leading-7 text-cream/60">
                <p>
                  <strong className="text-cream">Parking:</strong>{" "}
                  {contact.parking}
                </p>
              </div>
            </div>
            <a
              href={contact.mapsUrl}
              target="_blank"
              rel="noreferrer"
              data-track="get_directions"
              className="button-primary mt-10"
            >
              Get Directions <ArrowRight className="size-4" />
            </a>
          </div>
          <div className="relative min-h-[460px] bg-navy">
            <iframe
              title="Peta lokasi Flight 79"
              src="https://www.google.com/maps?q=Ruko%20Sasakirana%2079%2C%20Kota%20Baru%20Parahyangan&output=embed"
              className="absolute inset-0 h-full w-full border-0 grayscale-[.15] contrast-[1.05]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section
        aria-labelledby="reviews-title"
        className="bg-[#e8e2d7] py-24 lg:py-32"
      >
        <div className="section-shell">
          <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="eyebrow text-coffee">Passenger reviews</p>
              <h2 id="reviews-title" className="section-title mt-4">
                What Our Guests Say
              </h2>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink/55">
                Dengarkan pengalaman tamu langsung melalui listing resmi
                Flight 79 di Google Maps.
              </p>
            </div>
            <a
              href={contact.mapsUrl}
              target="_blank"
              rel="noreferrer"
              data-track="google_reviews"
              className="button-primary w-fit"
            >
              View All Reviews
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </div>

          <ReviewSlider />
        </div>
      </section>

      <section
        aria-labelledby="events-title"
        className="relative overflow-hidden py-24 lg:py-32"
      >
        <div className="absolute bottom-0 right-0 h-1/2 w-1/3 bg-amber" />
        <div className="section-shell relative">
          <div className="grid overflow-hidden bg-navy text-cream lg:grid-cols-[1.15fr_.85fr]">
            <EventSlider slides={eventSlides} />
            <div className="p-7 sm:p-10 lg:p-12">
              <p className="eyebrow text-amber">Special occasions</p>
              <h2
                id="events-title"
                className="mt-4 font-display text-5xl font-semibold uppercase leading-[.95] tracking-tight sm:text-6xl"
              >
                Plan Your Event
              </h2>
              <p className="mt-5 text-sm leading-7 text-cream/60">
                Bawa orang-orang favorit Anda. Kami siap membantu menyiapkan
                suasana yang pas untuk momen penting.
              </p>
              <ul className="mt-8 divide-y divide-cream/15 border-y border-cream/15">
                {events.map((event) => (
                  <li
                    key={event}
                    className="flex items-center gap-3 py-3 text-sm"
                  >
                    <span className="size-1.5 bg-amber" />
                    {event}
                  </li>
                ))}
              </ul>
              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                data-track="plan_event"
                className="button-primary mt-8"
              >
                Plan Your Event <CalendarDays className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-navy py-24 text-cream lg:py-36">
        <div className="section-shell">
          <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="eyebrow text-amber">Final call</p>
              <h2 className="mt-4 font-display text-[clamp(4rem,9vw,8.5rem)] font-semibold uppercase leading-[.78] tracking-[-.035em]">
                Ready for
                <br />
                <span className="text-outline">Take-Off?</span>
              </h2>
            </div>
            <p className="max-w-md text-base leading-8 text-cream/60">
              Reservasi meja untuk sarapan, makan bersama, meeting, atau
              perayaan. Isi detail di bawah dan lanjutkan lewat WhatsApp.
            </p>
          </div>
          <div className="grid gap-12 border-t border-cream/15 pt-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
            <div className="space-y-7">
              <a
                href={contact.phoneHref}
                data-track="phone_click"
                className="contact-link"
              >
                <Phone className="size-5 text-amber" />
                <span>
                  <small>Phone / WhatsApp</small>
                  {contact.phoneDisplay}
                </span>
              </a>
              <a
                href={`mailto:${contact.email}`}
                data-track="email_click"
                className="contact-link"
              >
                <Mail className="size-5 text-amber" />
                <span>
                  <small>Email</small>
                  {contact.email}
                </span>
              </a>
              <div className="contact-link">
                <MapPin className="size-5 text-amber" />
                <span>
                  <small>Destination</small>
                  {contact.address}
                </span>
              </div>
            </div>
            <ReservationForm />
          </div>
        </div>
      </section>

      <footer className="border-t border-cream/15 bg-navy pb-24 pt-16 text-cream sm:pb-10">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr_.8fr]">
            <div>
              <a
                href="#home"
                aria-label="Flight 79 — kembali ke beranda"
                className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
              >
                <BrandLogo className="size-28 text-amber" />
              </a>
              <p className="mt-3 max-w-md text-sm leading-7 text-cream/50">
                First-class flavor on every plate. Sebuah destinasi rasa dan
                suasana bertema aviasi di Kota Baru Parahyangan.
              </p>
            </div>
            <div>
              <p className="eyebrow text-amber">Quick links</p>
              <nav className="mt-5 grid gap-3 text-sm text-cream/65">
                {[
                  ["Home", "#home"],
                  ["Menu", "#menu"],
                  ["Experience", "#experience"],
                  ["Location", "#location"],
                  ["Contact", "#contact"],
                ].map(([label, href]) => (
                  <a key={href} href={href} className="hover:text-amber">
                    {label}
                  </a>
                ))}
              </nav>
            </div>
            <div>
              <p className="eyebrow text-amber">Stay connected</p>
              <div className="mt-5 grid gap-3 text-sm text-cream/65">
                <a
                  href={contact.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber"
                >
                  Google Maps
                </a>
                <span>Instagram · coming soon</span>
                <span>TikTok · coming soon</span>
              </div>
            </div>
          </div>
          <div className="mt-14 flex flex-col justify-between gap-3 border-t border-cream/15 pt-6 text-xs uppercase tracking-[.12em] text-cream/35 sm:flex-row">
            <p>© {new Date().getFullYear()} Flight 79. All rights reserved.</p>
            <p>Ruko Sasakirana 79 · Kota Baru Parahyangan</p>
          </div>
        </div>
      </footer>

      <a
        href={contact.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        data-track="whatsapp_reservation"
        className="fixed inset-x-4 bottom-4 z-40 flex min-h-14 items-center justify-center gap-3 bg-amber px-5 text-xs font-extrabold uppercase tracking-[.12em] text-navy shadow-[0_12px_32px_rgba(7,24,39,.28)] sm:hidden"
      >
        Reserve via WhatsApp <ArrowRight className="size-4" />
      </a>
    </main>
  );
}
