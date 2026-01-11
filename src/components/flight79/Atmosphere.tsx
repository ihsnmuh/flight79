import { Wifi, Home, Car, Users } from 'lucide-react';

export default function Atmosphere() {
  return (
    <section id="atmosphere" className="py-20 bg-brand-bg">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10">
          <h2 className="text-3xl font-recoleta font-medium">Experience First-Class Ambiance</h2>
          <div className="flex gap-4 text-sm font-bold text-brand-muted">
            <span className="text-brand-primary border-b-2 border-brand-primary pb-1">Interior</span>
            <span className="hover:text-brand-text cursor-pointer pb-1">Exterior</span>
            <span className="hover:text-brand-text cursor-pointer pb-1">Facilities</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 h-[400px] sm:h-[500px]">
          <div className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden group">
            <div 
              className="w-full h-full bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 flex items-center justify-center"
            >
              <div className="text-center px-4">
                <h4 className="font-bold text-lg sm:text-2xl mb-2">Spacious Cabin</h4>
                <p className="text-brand-muted text-sm sm:text-base">Perfect for work meetings or relaxation</p>
              </div>
            </div>
          </div>
          
          <div className="relative rounded-3xl overflow-hidden group">
            <div 
              className="w-full h-full bg-gradient-to-br from-amber-500/20 to-orange-600/20 flex items-center justify-center"
            >
              <div className="text-center px-4">
                <h4 className="font-bold text-base sm:text-xl mb-2">Premium Bar</h4>
                <p className="text-brand-muted text-sm sm:text-base">Crafted cocktails & specialty coffee</p>
              </div>
            </div>
          </div>
          
          <div className="relative rounded-3xl overflow-hidden group">
            <div 
              className="w-full h-full bg-gradient-to-br from-green-500/20 to-emerald-600/20 flex items-center justify-center"
            >
              <div className="text-center px-4">
                <h4 className="font-bold text-base sm:text-xl mb-2">Outdoor Lounge</h4>
                <p className="text-brand-muted text-sm sm:text-base">Fresh air with comfortable seating</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 mt-10 text-brand-muted">
          {[
            { icon: <Wifi size={20} />, text: "Lightning-Fast WiFi" },
            { icon: <Home size={20} />, text: "Comfortable Prayer Room" },
            { icon: <Car size={20} />, text: "Ample Parking Space" },
            { icon: <Users size={20} />, text: "Private Meeting Areas" },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="text-brand-primary">{item.icon}</div>
              <span className="text-sm font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
        </section>
  );
}