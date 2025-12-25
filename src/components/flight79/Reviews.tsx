import React from 'react';
import { Button } from '../ui/Button';

export default function Reviews() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
        <div className="flex items-center gap-2 mb-8">
          <h2 className="text-3xl font-serif font-medium">Passenger Reviews</h2>
          <div className="h-px bg-gray-200 flex-1 ml-4"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gray-100 bg-cover border border-gray-200" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCOfJJari55uUwLEAnAkbFk5bCl2lN7i4AYmrra7B8T053syMBVTjMks2U8eWqOcuZ0jFF-T8FI_lMOhtU4hS5CgfSvANG-Dt6ZpD0h80RnbUud4RA3T5iMHuoDGZpEgRL_1cDOgPfHR-15ZilYuaOjjD6tqwksW2b82VODeqiClUeCR7oHDcN1x84YahbFTw7DjAYLxFjI9xm_mk-7oUt8hLyfe2zze3zjejfNrG7IoJPTjkNiG_hfdFCFHTaqIisbYL2AHnSGi2n1")' }}></div>
              <div>
                <h4 className="font-bold text-sm">Sarah A.</h4>
                <p className="text-xs text-brand-muted">Local Guide</p>
              </div>
            </div>
            <div className="flex text-yellow-400 text-sm">
                {[1,2,3,4,5].map(i => (
                    <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", fontSize: "18px" }}>star</span>
                ))}
            </div>
            <h3 className="text-xl font-bold leading-snug">"The aviation theme is super cozy for WFC. Flight 79's Signature Latte is delicious, and the staff are incredibly friendly. Definitely coming back!"</h3>
            <p className="text-brand-muted text-sm leading-relaxed">
              A calm and comfortable atmosphere that makes you want to stay for hours. Complete facilities and very satisfying first-class service.
            </p>
            <div className="mt-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-50 text-yellow-800 text-xs font-bold rounded-md border border-yellow-100">
                <span className="material-symbols-outlined text-[16px]">star</span>
                4.8/5 from 320+ reviews at Flight 79 Coffee and Eatery
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative rounded-2xl overflow-hidden h-64 group cursor-pointer">
              <img alt="Reviewer Budi" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBefPoPtx6bys3xivJazwBdccJWnxn7eKr1BoDPR_g70AmNo50jUmFv06S38ze9OU5yu3r--0XpxTC2Bw3s6x8f9hPYiFa4-FEezWjOBUvroz17cXijPvA8zKxV9i1ZDsuyavZ2sPKy3AprJz9U00erChn-32VMAkv-8ZVDQzeIPlKov653xpcYkjJMRFhXTLAIJWttcROLiw00z3jdwmbkUvHdEJDBBPsPjbm6RBFZbK9x9bD5knZzWkG4qL2WMs0xXbqC56SRGSqQ" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
                <div className="flex text-yellow-400 mb-2">
                     {[1,2,3,4,5].map(i => (
                        <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", fontSize: "16px" }}>star</span>
                    ))}
                </div>
                <p className="text-white text-sm font-medium italic mb-2">"The Italian pasta is a winner! Authentic taste in a cool hangar vibe."</p>
                <p className="text-white/80 text-xs font-bold">- Budi P.</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-64 group cursor-pointer">
              <img alt="Reviewer Dian" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNPYbC5r_kp4c3Lswg_xmg6RZEJBZqHnNwC3NtC7G5-KZUtWJsuI0O1yepbmvVZU-sryxx2Xm8jDLt3f5vz0r3ZeNnM88o05xCz5HRbGsX2VoSFC4L5Qj_Ggc6r1dt5TBU6opweJbf63_-T07lPKUxFswZJ83jld56HPwSqJxulMWgqN0Z1hcaYwUH7M4EExMucYEugYeApqQh4fAz3D-rhUaqYqE8qnDQQWFm6AXY6aJcRx0G9DuBj91Wl4JPoRcLPM13yH3GEzx7" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
                <div className="flex text-yellow-400 mb-2">
                     {[1,2,3,4,4.5].map((i, idx) => (
                        <span key={idx} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", fontSize: "16px" }}>
                            {i === 4.5 ? 'star_half' : 'star'}
                        </span>
                    ))}
                </div>
                <p className="text-white text-sm font-medium italic mb-2">"Love the playlist, feels like a first class lounge."</p>
                <p className="text-white/80 text-xs font-bold">- Dian S.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Button 
            variant="outline" 
            rounded="full" 
            className="px-6 py-3 h-auto text-sm font-bold text-brand-text hover:bg-gray-50 inline-flex items-center gap-2"
          >
            See all reviews
            <span className="material-symbols-outlined text-sm">open_in_new</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
