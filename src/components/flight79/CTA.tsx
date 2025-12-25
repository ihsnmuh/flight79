import React from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

export default function CTA() {
  return (
    <section className="relative h-[400px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img alt="Background CTA" className="w-full h-full object-cover object-center" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3ZFarcAUNKSWaXrH_T0PgMLMO7m0oF8ULyQbiAL4s4BOtTfWD4Q3Wi9rmTW-680YwufvaeujQrgx7QJ630035w25pB8MJWPLWMwkh79_rqjB3b8_xKxrhWL5hp8ljVm7SE1DztXyLhiQaERGRiPDrHCfHI4IUJLWWFtccUmGdtCsw3zPBOvpnzWljaPmM-3TKVD496I4WL6W4Hw62bvX1NhR3vHthw22CwVmfdQBH1BsshJrAbanM6eNrOFVGqYmZOphLo4yidjvE" />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-10 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6">Ready for takeoff at Flight 79?</h2>
        <p className="text-white/80 max-w-xl mx-auto mb-8 text-lg">A unique aviation-themed cafe offering both expertly crafted coffee and a diverse global menu. Enjoy Western, Indonesian, and Italian cuisine in a first-class atmosphere. The perfect spot for any craving, from espresso to full meals.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
          <Input 
            className="w-full sm:w-auto flex-1 h-12 rounded-full px-6 text-brand-text border-none bg-white" 
            placeholder="Enter your name..." 
            type="text" 
          />
          <Button 
            variant="flight-primary" 
            size="lg" 
            rounded="full"
            className="w-full sm:w-auto shadow-lg shadow-brand-primary/30"
          >
            Reserve a Table
          </Button>
        </div>
        <p className="mt-4 text-xs text-white/50">*Reservations valid for min. 4 people</p>
      </div>
    </section>
  );
}
