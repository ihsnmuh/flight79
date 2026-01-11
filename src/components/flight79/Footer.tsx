import Flight79Logo from "../ui/logos/flight79";

export default function Footer() {
  return (
    <footer className="bg-brand-bg pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="flex flex-col items-center lg:items-start space-y-3 lg:space-y-4 text-center lg:text-left">
            <Flight79Logo className="w-24 lg:w-32 h-auto" />
            <p className="text-brand-muted text-xs sm:text-sm max-w-xs">
              Where every visit is a journey worth remembering.
            </p>
          </div>
          
          {/* Navigation & Hours Combined for Mobile */}
          <div className="lg:hidden space-y-6">
            <div>
              <h4 className="font-bold text-brand-text mb-3">Quick Links</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <a href="#about" className="block text-brand-muted hover:text-brand-primary transition-colors">About</a>
                <a href="#menu" className="block text-brand-muted hover:text-brand-primary transition-colors">Menu</a>
                <a href="#atmosphere" className="block text-brand-muted hover:text-brand-primary transition-colors">Ambiance</a>
                <a href="#reviews" className="block text-brand-muted hover:text-brand-primary transition-colors">Reviews</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-brand-text mb-3">Hours</h4>
              <div className="text-brand-muted text-sm">
                <p>Mon-Fri: 08:00 - 22:00</p>
                <p>Sat-Sun: 07:00 - 23:00</p>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex lg:flex-row lg:justify-between lg:gap-12">
            {/* Navigation */}
            <div className="text-center lg:text-left">
              <h4 className="font-bold text-brand-text mb-4">Discover</h4>
              <div className="space-y-2 text-sm">
                <a href="#about" className="block text-brand-muted hover:text-brand-primary transition-colors">Our Story</a>
                <a href="#menu" className="block text-brand-muted hover:text-brand-primary transition-colors">Menu Journey</a>
                <a href="#atmosphere" className="block text-brand-muted hover:text-brand-primary transition-colors">Ambiance</a>
                <a href="#reviews" className="block text-brand-muted hover:text-brand-primary transition-colors">Testimonials</a>
                <a href="#location" className="block text-brand-muted hover:text-brand-primary transition-colors">Find Us</a>
              </div>
            </div>
            
            {/* Hours */}
            <div className="text-center lg:text-left">
              <h4 className="font-bold text-brand-text mb-4">Flight Schedule</h4>
              <div className="text-brand-muted text-sm space-y-1">
                <p>Mon-Fri: 08:00 - 22:00</p>
                <p>Sat-Sun: 07:00 - 23:00</p>
              </div>
            </div>
            
            {/* Contact */}
            <div className="text-center lg:text-left">
              <h4 className="font-bold text-brand-text mb-4">Contact Tower</h4>
              <div className="text-brand-muted text-sm space-y-1">
                <a href="#location" className="block hover:text-brand-primary transition-colors">Get Directions</a>
                <a href="tel:+628123456789" className="block hover:text-brand-primary transition-colors">Call Us</a>
                <a href="mailto:info@flight79.com" className="block hover:text-brand-primary transition-colors">Send Message</a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-200 pt-6 mt-12 text-center">
          <p className="text-brand-muted text-xs">
            &copy; 2024 Flight 79 Coffee and Eatery. Your journey begins here.
          </p>
        </div>
      </div>
    </footer>
  );
}