import React from 'react';
import { Badge } from '../ui/Badge';

export default function Atmosphere() {
  return (
    <section id="atmosphere" className="py-20 bg-brand-bg">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10">
          <h2 className="text-3xl font-serif font-medium">Atmosphere & Facilities</h2>
          <div className="flex gap-4 text-sm font-bold text-brand-muted">
            <span className="text-brand-primary border-b-2 border-brand-primary pb-1">Interior</span>
            <span className="hover:text-brand-text cursor-pointer pb-1">Exterior</span>
            <span className="hover:text-brand-text cursor-pointer pb-1">Facilities</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[500px]">
          <div className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden group">
            <img alt="Main Interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyzY8FwnLLT-C6aDLlV17OPZQZ5mHmJb9SNsfaAJSglXKKfV21Q3-9PNOvHxy0G1JqeVm4k75DoQhOENhGWRDzyfbvu6TX3i3o_Uj3jdBFHMMhCaD9cEHlaQ8KAheqIhEauhlxr-4RHzDju741qwXL8-7Qs5DpU7d0LuRzjWIgx3AiPrziJBbGQshaZySWWOi2tJxgS9vMpJ3UC6yoa2UxFlmEZbeo1bumlHQ7BmU-Y1rZ9u2Jk6c4H0SXx4bsBKdXwjPwX-Uov4Ax" />
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-sm">
              <h4 className="font-bold text-sm">Spacious Cabin</h4>
              <p className="text-xs text-brand-muted">Comfortable for work</p>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden group">
            <img alt="Open Bar" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCovXIBhWvw26KyC2GWxMCDIO32E4SLm254ay9BuERjzrLsqmXKYGU0rIPNTT0ewXZ0qom6pu1_xaLofYlUsrfhcvoTyY7lzWFRRo4i1gOewYb1ZYx1t4SOZT5Yfhd0oo__SO4tmBWwvtlNb_sDcxYHyZi2kYwoyytlO5owSiqetNX6Or18uQ7mEmg5X8HeiH8dIk5taEJ9E7_d-9APJC9gr7efj8dAU1ES9-8YvRXgMbvI5kczIRAQ3KV-DxBXOJtqUpjLoR__fpMs" />
            <div className="absolute bottom-4 left-4">
              <Badge variant="secondary" className="bg-black/60 text-white border-none">Open Bar</Badge>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden group">
            <img alt="Outdoor Area" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4LAe3RCipM8_beVKSp3TipIN7UJFPthdOviM6amScN8QXpSLXJ7UA8cC5Z2eKzCVVttZccKlK_x4iKCFu318Q_1LsosGTLx_-HEID5YuSa6xdS694GP6WlUWSjgxI6NfrNTtSe09QbF3oUGACqE7DTLh5UiphwgzrO-P9CSFcwEWd3qZs3mrHhzkQ7jaLiZ5iuK-FAs8A9yVbZa5kt9STeXPlP_yUm4WJQEtkZ2YL7BAqMOrOeKSDCYcEyd-R1I1aRcX1ilNTW24e" />
            <div className="absolute bottom-4 left-4">
             <Badge variant="secondary" className="bg-black/60 text-white border-none">Outdoor Area</Badge>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 mt-10 text-brand-muted">
            {[
                { icon: "wifi", text: "High Speed WiFi" },
                { icon: "power", text: "Power Outlets" },
                { icon: "mosque", text: "Prayer Room" },
                { icon: "local_parking", text: "Spacious Parking" },
                { icon: "meeting_room", text: "Meeting Room" },
            ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-brand-primary">{item.icon}</span>
                    <span className="text-sm font-medium">{item.text}</span>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
