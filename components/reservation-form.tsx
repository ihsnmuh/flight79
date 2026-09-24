"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ReservationForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = [
      "Halo Flight 79, saya ingin reservasi meja.",
      `Nama: ${form.get("name")}`,
      `Nomor WhatsApp: ${form.get("whatsapp")}`,
      `Tanggal: ${form.get("date")}`,
      `Waktu: ${form.get("time")}`,
      `Jumlah tamu: ${form.get("guests")}`,
      `Permintaan khusus: ${form.get("request") || "-"}`,
    ].join("\n");

    setSubmitted(true);
    window.open(`https://wa.me/6285121306972?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2" aria-label="Form reservasi Flight 79">
      <label className="field-label">
        Nama
        <Input name="name" required autoComplete="name" placeholder="Nama lengkap" className="reservation-input" />
      </label>
      <label className="field-label">
        Nomor WhatsApp
        <Input name="whatsapp" required inputMode="tel" autoComplete="tel" placeholder="+62..." className="reservation-input" />
      </label>
      <label className="field-label">
        Tanggal
        <Input name="date" required type="date" className="reservation-input" />
      </label>
      <label className="field-label">
        Waktu
        <Input name="time" required type="time" className="reservation-input" />
      </label>
      <label className="field-label sm:col-span-2">
        Jumlah tamu
        <Input name="guests" required type="number" min="1" max="30" placeholder="2" className="reservation-input" />
      </label>
      <label className="field-label sm:col-span-2">
        Permintaan khusus
        <Textarea name="request" placeholder="Kursi anak, perayaan, area pilihan, atau informasi lain..." className="reservation-input min-h-28 resize-y" />
      </label>
      <button type="submit" data-track="whatsapp_reservation" className="button-primary group mt-2 sm:col-span-2">
        Kirim Reservasi via WhatsApp
        <Send className="size-4 transition-transform group-hover:translate-x-1" />
      </button>
      {submitted ? (
        <p role="status" className="flex items-center gap-2 border border-amber/35 bg-amber/10 p-4 text-sm text-cream sm:col-span-2">
          <CheckCircle2 className="size-5 text-amber" />
          Detail reservasi sudah disiapkan. Lanjutkan pengiriman di WhatsApp.
        </p>
      ) : null}
    </form>
  );
}
