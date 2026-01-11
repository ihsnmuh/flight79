
import { buttonVariants } from '../ui/Button';
import { cn } from '../../lib/utils';
import { MapPin, Clock, MessageCircle, Phone, Map } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="py-12 bg-white border-y border-gray-100">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 flex flex-col gap-6">
            <h2 className="text-3xl font-recoleta font-medium">Your Destination Awaits</h2>
            
            <div className="flex items-start gap-4 p-4 rounded-xl bg-brand-bg border border-gray-100">
              <div className="bg-white p-2 rounded-full shadow-sm text-brand-primary">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="font-bold text-brand-text">Flight 79 Coffee & Eatery</h4>
                <p className="text-sm text-brand-muted mt-1">Ruko Sasakirana Kota Baru Parahyangan, Jl. Sasakirana No.79, Padalarang, Kabupaten Bandung Barat, Jawa Barat 40553</p>
                <a href="https://maps.app.goo.gl/BNt7Nq3xUir6KhbP9" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-brand-primary mt-2 inline-block hover:underline">View on Google Maps</a>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 rounded-xl bg-brand-bg border border-gray-100">
              <div className="bg-white p-2 rounded-full shadow-sm text-brand-primary">
                <Clock size={20} />
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
                <MessageCircle size={20} className="mr-2" /> WhatsApp
              </a>
              <a href="/" className={cn(buttonVariants({ variant: 'secondary' }), "w-12 h-12 p-0 flex items-center justify-center")}>
                <Phone size={20} />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-7 h-[400px] rounded-3xl overflow-hidden shadow-lg border-4 border-white relative">
            <a 
              href="https://maps.app.goo.gl/BNt7Nq3xUir6KhbP9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors group"
            >
              <div className="bg-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 group-hover:scale-105 transition-transform">
<Map className="text-brand-primary" size={20} />
                 <span className="font-bold text-brand-text">Navigate to Our Location</span>
              </div>
            </a>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4162.340002712486!2d107.45112867524593!3d-6.868299367200709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68fb4917e68887%3A0x9626388983f4cbc2!2sFlight%2079%20Coffee%20%26%20Eatery!5e1!3m2!1sen!2sid!4v1767866046842!5m2!1sen!2sid" 
                width="600" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
