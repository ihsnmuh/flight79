"use client";

import { type FormEvent, useState } from "react";
import { AlertCircle, CheckCircle2, Plane, Send } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ReservationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [preview, setPreview] = useState({
    name: "",
    date: "",
    time: "",
    guests: "",
  });
  const { language, copy } = useLanguage();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const values = {
      name: String(form.get("name") ?? "").trim(),
      whatsapp: String(form.get("whatsapp") ?? "").trim(),
      date: String(form.get("date") ?? "").trim(),
      time: String(form.get("time") ?? "").trim(),
      guests: String(form.get("guests") ?? "").trim(),
      request: String(form.get("request") ?? "").trim() || "-",
    };

    if (!values.name || !values.whatsapp || !values.date || !values.time || !values.guests) {
      setSubmitted(false);
      setErrorMessage(
        language === "id"
          ? "Masih ada kolom wajib yang kosong. Isi nama, nomor WhatsApp, tanggal, waktu, dan jumlah tamu untuk melanjutkan."
          : "Please complete your name, WhatsApp number, date, time, and guest count first.",
      );
      return;
    }

    setErrorMessage(null);
    const message =
      language === "id"
        ? [
            "Halo Flight 79, saya ingin reservasi meja.",
            `Nama: ${values.name}`,
            `Nomor WhatsApp: ${values.whatsapp}`,
            `Tanggal: ${values.date}`,
            `Waktu: ${values.time}`,
            `Jumlah tamu: ${values.guests}`,
            `Permintaan khusus: ${values.request}`,
          ]
        : [
            "Hello Flight 79, I would like to reserve a table.",
            `Name: ${values.name}`,
            `WhatsApp number: ${values.whatsapp}`,
            `Date: ${values.date}`,
            `Time: ${values.time}`,
            `Number of guests: ${values.guests}`,
            `Special request: ${values.request}`,
          ];

    setSubmitted(true);
    window.open(
      `https://wa.me/6285121306972?text=${encodeURIComponent(message.join("\n"))}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <div className="boarding-pass p-5 sm:p-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-cream/20 pb-5">
        <div className="flex items-center gap-3">
          <span className="grid size-9 place-items-center bg-amber text-navy">
            <Plane className="size-4" aria-hidden="true" />
          </span>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-amber">
              BOARDING PASS · RESERVATION
            </p>
            <p className="font-display text-2xl font-semibold uppercase tracking-wide text-cream">
              FLIGHT F79 · KBP LOUNGE
            </p>
          </div>
        </div>
        <div className="text-left sm:text-right">
          <span className="block text-xs font-bold uppercase tracking-[0.14em] text-cream/70">
            PASSENGER
          </span>
          <span className="font-display text-xl uppercase tracking-wider text-amber">
            {preview.name.trim() || "GUEST 79"}
          </span>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="grid gap-4 sm:grid-cols-2"
        aria-label={copy.form.label}
        toolname="reserve_table"
        tooldescription="Prepare a table reservation message for Flight 79 at Ruko Sasakirana 79, Kota Baru Parahyangan (open daily 08:00-21:00) and open WhatsApp for the guest to confirm."
      >
        <label className="field-label">
          {copy.form.name}
          <Input
            name="name"
            required
            autoComplete="name"
            placeholder={copy.form.namePlaceholder}
            toolparamdescription="Guest full name for the table reservation."
            className="reservation-input"
            onChange={(e) =>
              setPreview((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </label>
        <label className="field-label">
          {copy.form.whatsapp}
          <Input
            name="whatsapp"
            required
            inputMode="tel"
            autoComplete="tel"
            placeholder="+62..."
            toolparamdescription="Active WhatsApp phone number including country code, for example +628123456789."
            className="reservation-input"
          />
        </label>
        <label className="field-label">
          {copy.form.date}
          <Input
            name="date"
            required
            type="date"
            toolparamdescription="Preferred reservation date in YYYY-MM-DD format."
            className="reservation-input"
            onChange={(e) =>
              setPreview((prev) => ({ ...prev, date: e.target.value }))
            }
          />
        </label>
        <label className="field-label">
          {copy.form.time}
          <Input
            name="time"
            required
            type="time"
            toolparamdescription="Preferred arrival time in 24-hour HH:MM format during opening hours (08:00 to 21:00)."
            className="reservation-input"
            onChange={(e) =>
              setPreview((prev) => ({ ...prev, time: e.target.value }))
            }
          />
        </label>
        <label className="field-label sm:col-span-2">
          {copy.form.guests}
          <Input
            name="guests"
            required
            type="number"
            min="1"
            max="30"
            placeholder="2"
            toolparamdescription="Number of guests in the party, from 1 to 30."
            className="reservation-input"
            onChange={(e) =>
              setPreview((prev) => ({ ...prev, guests: e.target.value }))
            }
          />
        </label>
        <label className="field-label sm:col-span-2">
          {copy.form.request}
          <Textarea
            name="request"
            placeholder={copy.form.requestPlaceholder}
            toolparamdescription="Optional special requests such as seating area, birthday setup, or dietary notes."
            className="reservation-input min-h-24 resize-y"
          />
        </label>

        {/* Perforated Live Stub Summary */}
        <div className="boarding-pass-perforation mt-2 flex flex-wrap items-center justify-between gap-4 pt-5 sm:col-span-2">
          <div className="flex flex-wrap gap-6 text-xs">
            <div>
              <span className="block text-[0.68rem] font-bold uppercase tracking-[0.14em] text-cream/70">
                DATE
              </span>
              <strong className="font-display text-lg tracking-wider text-cream">
                {preview.date || "TBD"}
              </strong>
            </div>
            <div>
              <span className="block text-[0.68rem] font-bold uppercase tracking-[0.14em] text-cream/70">
                TIME
              </span>
              <strong className="font-display text-lg tracking-wider text-cream">
                {preview.time || "--:--"}
              </strong>
            </div>
            <div>
              <span className="block text-[0.68rem] font-bold uppercase tracking-[0.14em] text-cream/70">
                SEATS
              </span>
              <strong className="font-display text-lg tracking-wider text-amber">
                {preview.guests ? `${preview.guests} PAX` : "2 PAX"}
              </strong>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="boarding-barcode hidden w-28 opacity-85 sm:block"
          />
        </div>

        <button
          type="submit"
          data-track="whatsapp_reservation"
          className="button-primary group mt-2 sm:col-span-2"
        >
          {copy.form.submit}
          <Send className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </button>

        {errorMessage ? (
          <p
            role="alert"
            className="flex items-center gap-2 border border-amber bg-navy p-4 text-sm text-cream sm:col-span-2"
          >
            <AlertCircle className="size-5 shrink-0 text-amber" aria-hidden="true" />
            {errorMessage}
          </p>
        ) : null}

        {submitted ? (
          <p
            role="status"
            className="flex items-center gap-2 border border-amber/50 bg-amber/15 p-4 text-sm text-cream sm:col-span-2"
          >
            <CheckCircle2 className="size-5 shrink-0 text-amber" aria-hidden="true" />
            {copy.form.success}
          </p>
        ) : null}
      </form>
    </div>
  );
}
