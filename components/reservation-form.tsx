"use client";

import { type FormEvent, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ReservationForm() {
  const [submitted, setSubmitted] = useState(false);
  const { language, copy } = useLanguage();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const values = { name: form.get("name"), whatsapp: form.get("whatsapp"), date: form.get("date"), time: form.get("time"), guests: form.get("guests"), request: form.get("request") || "-" };
    const message = language === "id"
      ? ["Halo Flight 79, saya ingin reservasi meja.", `Nama: ${values.name}`, `Nomor WhatsApp: ${values.whatsapp}`, `Tanggal: ${values.date}`, `Waktu: ${values.time}`, `Jumlah tamu: ${values.guests}`, `Permintaan khusus: ${values.request}`]
      : ["Hello Flight 79, I would like to reserve a table.", `Name: ${values.name}`, `WhatsApp number: ${values.whatsapp}`, `Date: ${values.date}`, `Time: ${values.time}`, `Number of guests: ${values.guests}`, `Special request: ${values.request}`];

    setSubmitted(true);
    window.open(`https://wa.me/6285121306972?text=${encodeURIComponent(message.join("\n"))}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2" aria-label={copy.form.label}>
      <label className="field-label">{copy.form.name}<Input name="name" required autoComplete="name" placeholder={copy.form.namePlaceholder} className="reservation-input" /></label>
      <label className="field-label">{copy.form.whatsapp}<Input name="whatsapp" required inputMode="tel" autoComplete="tel" placeholder="+62..." className="reservation-input" /></label>
      <label className="field-label">{copy.form.date}<Input name="date" required type="date" className="reservation-input" /></label>
      <label className="field-label">{copy.form.time}<Input name="time" required type="time" className="reservation-input" /></label>
      <label className="field-label sm:col-span-2">{copy.form.guests}<Input name="guests" required type="number" min="1" max="30" placeholder="2" className="reservation-input" /></label>
      <label className="field-label sm:col-span-2">{copy.form.request}<Textarea name="request" placeholder={copy.form.requestPlaceholder} className="reservation-input min-h-28 resize-y" /></label>
      <button type="submit" data-track="whatsapp_reservation" className="button-primary group mt-2 sm:col-span-2">{copy.form.submit}<Send className="size-4 transition-transform group-hover:translate-x-1" /></button>
      {submitted ? <p role="status" className="flex items-center gap-2 border border-amber/35 bg-amber/10 p-4 text-sm text-cream sm:col-span-2"><CheckCircle2 className="size-5 text-amber" />{copy.form.success}</p> : null}
    </form>
  );
}
