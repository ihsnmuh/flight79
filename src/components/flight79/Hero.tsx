import { Button } from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative h-[650px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          alt="Flight 79 Interior" 
          className="w-full h-full object-cover object-center" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCclOk8zzTnGwSLUjlNEid9zGdPOKZDE5Z23EPORRSjKhGBdjgSKvl2WXyXCI7jiH561MKKrc5kMoAZ6ue6pIHZ67PgBFAaZCKu9JUD_e8PbsJ5XcCY19E5WiAkAHnGG1zzPcSaTv71OHYJ5bOf0wnSGGy89jFdkqSVzpA6XyrYW0rk6HGANj9yFHPplqz2FWTq1vUtZjRKAfvkiOQJBZ6FOwfdoUAWll68IEmUtEtbV21i4P9rvbo0MJGSZDMwlP8JUkdZUsiac5Q6"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
      </div>
      
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10 w-full relative z-10">
        <div className="max-w-3xl flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 text-brand-primary font-bold text-sm tracking-widest uppercase">
            <span className="w-8 h-[1px] bg-brand-primary"></span>
            First Class Experience
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-medium leading-[1.1] text-white">
            Flight 79 Coffee <br/>
            <span className="text-brand-primary italic">& Eatery</span>
          </h1>
          
          <p className="text-white/90 text-lg leading-relaxed max-w-xl mt-2 font-light">
            A unique aviation-themed cafe offering both expertly crafted coffee and a diverse global menu. Enjoy Western, Indonesian, and Italian cuisine in a first-class atmosphere. The perfect spot for any craving, from espresso to full meals.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <Button 
                variant="default" 
                size="lg" 
                className="shadow-lg shadow-orange-900/30"
            >
              Board Now
            </Button>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white shadow-sm">
              <span className="material-symbols-outlined text-brand-primary text-sm">schedule</span>
              <span className="text-sm font-medium">07:00 - 22:00 Daily</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
