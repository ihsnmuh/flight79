import React from 'react';
import { buttonVariants } from '../ui/Button';
import { cn } from '../../lib/utils';

export default function Location() {
  return (
    <section id="location" className="py-12 bg-white border-y border-gray-100">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 flex flex-col gap-6">
            <h2 className="text-3xl font-serif font-medium">Visit Flight 79</h2>
            
            <div className="flex items-start gap-4 p-4 rounded-xl bg-brand-bg border border-gray-100">
              <div className="bg-white p-2 rounded-full shadow-sm text-brand-primary">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <div>
                <h4 className="font-bold text-brand-text">Flight 79 Coffee & Eatery</h4>
                <p className="text-sm text-brand-muted mt-1">Jl. Contoh Raya No. 123, Jakarta</p>
                <a href="/" className="text-xs font-bold text-brand-primary mt-2 inline-block hover:underline">View on Google Maps</a>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 rounded-xl bg-brand-bg border border-gray-100">
              <div className="bg-white p-2 rounded-full shadow-sm text-brand-primary">
                <span className="material-symbols-outlined">schedule</span>
              </div>
              <div className="w-full">
                <h4 className="font-bold text-brand-text mb-1">Operating Hours</h4>
                <div className="flex justify-between text-sm text-brand-muted border-b border-gray-200 border-dashed pb-1 mb-1">
                  <span>Mon - Fri</span>
                  <span>07:00 - 22:00</span>
                </div>
                <div className="flex justify-between text-sm text-brand-muted">
                  <span>Sat - Sun</span>
                  <span>08:00 - 23:00</span>
                </div>
              </div>
            </div>
            
            <div className="flex gap-3">
              <a href="/" className={cn(buttonVariants({ variant: 'default' }), "flex-1 bg-green-500 hover:bg-green-600 text-white font-bold h-auto py-3")}>
                <span className="material-symbols-outlined text-lg mr-2">chat</span> WhatsApp
              </a>
              <a href="/" className={cn(buttonVariants({ variant: 'secondary' }), "w-12 h-12 p-0 flex items-center justify-center")}>
                <span className="material-symbols-outlined">call</span>
              </a>
            </div>
          </div>
          
          <div className="md:col-span-7 h-[400px] rounded-3xl overflow-hidden shadow-lg border-4 border-white">
            <iframe 
                allowFullScreen 
                height="100%" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126919.86377771746!2d106.75887258017578!3d-6.229386740698716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%2C%20Special%20Capital%20Region%20of%20Jakarta!5e0!3m2!1sen!2sid!4v1684820241032!5m2!1sen!2sid" 
                style={{ border: 0 }} 
                width="100%"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
