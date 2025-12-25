import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-brand-bg pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-brand-primary" style={{ fontSize: "24px" }}>flight_takeoff</span>
              <h3 className="text-lg font-bold font-serif">Flight 79 Coffee and Eatery</h3>
            </div>
            <p className="text-brand-muted text-sm max-w-xs mb-6">A unique aviation-themed cafe offering both expertly crafted coffee and a diverse global menu.</p>
            <div className="flex gap-4">
              <a href="/" className="text-brand-text hover:text-brand-primary transition-colors"><span className="material-symbols-outlined">public</span></a>
              <a href="/" className="text-brand-text hover:text-brand-primary transition-colors"><span className="material-symbols-outlined">videocam</span></a>
              <a href="/" className="text-brand-text hover:text-brand-primary transition-colors"><span className="material-symbols-outlined">mail</span></a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm text-brand-muted">
              <li><a href="/" className="hover:text-brand-primary">About Us</a></li>
              <li><a href="/" className="hover:text-brand-primary">Careers</a></li>
              <li><a href="/" className="hover:text-brand-primary">Blog</a></li>
              <li><a href="/" className="hover:text-brand-primary">Press</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-4 uppercase tracking-wider">Support</h4>
            <ul className="space-y-2 text-sm text-brand-muted">
              <li><a href="/" className="hover:text-brand-primary">Contact Us</a></li>
              <li><a href="/" className="hover:text-brand-primary">FAQ</a></li>
              <li><a href="/" className="hover:text-brand-primary">Terms & Conditions</a></li>
              <li><a href="/" className="hover:text-brand-primary">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-4 uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm text-brand-muted">
              <li><a href="/" className="hover:text-brand-primary">Delivery</a></li>
              <li><a href="/" className="hover:text-brand-primary">Membership</a></li>
              <li><a href="/" className="hover:text-brand-primary">Gift Card</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-brand-muted">© 2023 Flight 79 Coffee and Eatery. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-brand-muted">
            <a href="/" className="hover:text-brand-primary">Privacy Policy</a>
            <a href="/" className="hover:text-brand-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
