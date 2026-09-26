export function AboutSection() {
  return (
    <section className="section-shell relative overflow-hidden py-24 lg:py-36">
      <div className="absolute -right-8 top-8 font-display text-[18rem] font-bold leading-none text-navy/[.035]">79</div>
      <div className="grid items-start gap-16 lg:grid-cols-[.72fr_1.28fr]">
        <div>
          <p className="eyebrow text-coffee">Welcome aboard</p>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink/55">Bukan sekadar tempat singgah. Flight 79 adalah tujuan untuk menikmati rasa, suasana, dan waktu bersama.</p>
        </div>
        <div className="relative">
          <span className="absolute -left-6 top-1 hidden h-24 w-px bg-amber lg:block" />
          <h2 className="section-title max-w-5xl">Satu destinasi untuk <span className="text-coffee">kopi yang serius</span>, makanan yang familiar, dan pengalaman yang tak biasa.</h2>
          <div className="mt-10 grid gap-8 border-t border-ink/15 pt-8 md:grid-cols-2">
            <p className="text-base leading-8 text-ink/70">Terinspirasi oleh rasa antusias sebelum perjalanan dimulai, kami memadukan hangatnya coffee house dengan detail airport lounge yang modern dan elegan.</p>
            <p className="text-base leading-8 text-ink/70">Datang untuk quick coffee, tinggal lebih lama untuk makan bersama. Setiap kunjungan dirancang terasa ramah, effortless, dan layak dikenang.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
