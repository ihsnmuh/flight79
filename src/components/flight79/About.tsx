import React from 'react';
import { Button } from '../ui/Button';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-serif font-medium mb-3 text-brand-text">Why Flight 79?</h2>
            <p className="text-brand-muted">Expertly crafted coffee and a diverse global menu featuring Western, Indonesian, and Italian cuisine.</p>
          </div>
          <div className="flex gap-2">
            <Button size="icon" variant="outline" rounded="full">
              <span className="material-symbols-outlined text-sm">arrow_back</span>
            </Button>
            <Button size="icon" variant="outline" rounded="full">
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Cards */}
            {[
                {
                    title: "Global Origins",
                    subtitle: "Beans sourced from world's best regions",
                    icon: "flight_class",
                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIyarbloU3rOV6M0iCwHSAG_7E6_DCjM7mXTa7LuBLruxnbj5nT4m3d94oQtjxhccZHKMksq1oua_fOKDg70W-7ipTxgGvPRBO9cXeN8tbLm8ZFEqvctoiTjH_1c38g2c__txyIMYxuxWRe8e-ZaQorpGHuKBg3abRm5-Gqr8hchRFpasV2_9FCZPNslCybXVbcYCwvhpW5k5CWpUQCRCv1bTtAjgugixDAWA60QLDXu1h96Ryhf1j7NwQQ7L0ThNzdLTcyZCa3nGN"
                },
                {
                    title: "First Class Lounge",
                    subtitle: "High-speed WiFi & cozy seating",
                    icon: "wifi",
                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVvASRki8D3mFGKEtgUDH36IbG6OpnBAn0C-mfmI_8-Dvi7NyW9l3gW4O1XMLdIE2Ndh-Mcr5AuKFNAgZdpsYIycRFxL0w5XeHg5-RzMCOZCGiA6bYlK_Tib7cXG-N34MUEaujJW_pl02DwBlX_kRw_QmYM_-8nssVtm5IcSR7-OK1Owo-Y_vUXBTAY6_usomTPs2AerojRhn4CoP4pn_ldfAMm1tO70wtQOe7fJIT0KPPL_0MdMb3YDLMROjfXTigZwFDAIJz96jo"
                },
                {
                    title: "Diverse Menu",
                    subtitle: "Western, Indonesian, and Italian dishes",
                    icon: "restaurant_menu",
                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDppE5I30uJvDPUFQisoGCyx6X10C3xkWl6drsvBnK4Ce69ZxH-6Q3P8ZR7Rhc7LLZ9xXH6MApf0SGmL2UNZOWyUQc6Hdz6IVOaw3s9cAr3zgeyQay1iOuf0uqG8Y4vNzOygvLc4CvI37veXdLesKcMH2NnEDwILqMSVnd-PuRxyO0BxpHkreRF1xTWWSugc2ZVWtYdGwARVD-jEmV0O02PYYc1x8i7HSXkLUdWkvt-O-9XW8EzypPbuxN0mZfaSpYd2ZraCdsqDL_n"
                },
                {
                    title: "In-Flight Entertainment",
                    subtitle: "Live acoustic sessions every weekend",
                    icon: "music_note",
                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBw8nFsq5xvsnWbubpEbvBKU2f8QEuqhFIyF1yQB-mCCkS0TKKANyNXTvblzA59XSAJFN2Q1xJK24udJo1KdiEZQt745ak6waj9hX0Ca5F0JftSjYo-905_U-r67grnp0XXhrjgE2FzM1Wa6aAQUpTVduXVjMp0Yu5FtxBlqEb3iirdou4mF5wvJRn3r0BYUl9TBs-GemTBYLD-9e4LzT64YM4TYSJH9oCX6U2U4zgYBvyid669QC70kTH0SGOVF2BpqLhW3bqSaOsg"
                }

            ].map((item, index) => (
                <div key={index} className="group cursor-pointer">
                    <div className="h-64 rounded-3xl overflow-hidden mb-4 relative">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                        <img alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={item.image} />
                        <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-sm text-brand-primary">
                            <span className="material-symbols-outlined text-xl">{item.icon}</span>
                        </div>
                    </div>
                    <h3 className="font-bold text-lg text-brand-text">{item.title}</h3>
                    <p className="text-sm text-brand-muted mt-1">{item.subtitle}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
