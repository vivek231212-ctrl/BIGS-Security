
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Play } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000 scale-105"
        style={{ backgroundImage: `url('https://scontent.fstv8-2.fna.fbcdn.net/v/t39.30808-6/614388964_921705314365677_8961878546008505667_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=e1afaa&_nc_ohc=cWiVWoZCdHsQ7kNvwElTFxd&_nc_oc=Adlp6YtjKjtXDOWbod_fQyGG3oWSeZPSuRjXCam6B1nygyt4Z5tklBnFkxdzwCao5sdNO26XGtvsfx3cplrtab3k&_nc_zt=23&_nc_ht=scontent.fstv8-2.fna&_nc_gid=zMGZlZaotLrA0G4Z20-z9w&oh=00_AfoHmm1XBZWDEH_hT0dS5wu35i1C4F0udLcBhWMoErfEKQ&oe=69713DB9')` }}
      />
      <div className="absolute inset-0 hero-overlay" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-24 sm:pt-32 pb-20">
        <div className="max-w-4xl">
          <h4 className="text-[#D30000] font-black tracking-[0.4em] uppercase text-xs sm:text-sm mb-6 animate-in fade-in slide-in-from-left duration-700">
            India's Leading Security Solutions
          </h4>
          <h1 className="text-white text-5xl sm:text-6xl md:text-8xl font-black leading-[1.05] mb-8 animate-in fade-in slide-in-from-left duration-1000 uppercase tracking-tighter">
            Total Protection <br className="hidden sm:block" /> 
            <span className="text-white border-b-8 border-[#D30000]">
              Unmatched Trust
            </span>
          </h1>
          <p className="text-white text-lg sm:text-xl md:text-2xl mb-12 max-w-2xl font-medium leading-relaxed opacity-90 animate-in fade-in slide-in-from-left duration-1200">
            BIGS Support Services: World-class security guarding and facility management for India's leading enterprises.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 animate-in fade-in slide-in-from-bottom duration-1000">
            <Link to="/about" className="bg-[#D30000] text-white px-10 py-5 rounded-md font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white hover:text-[#D30000] transition-all group shadow-2xl">
              Our Services
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/gallery" className="bg-transparent text-white border-2 border-white px-10 py-5 rounded-md font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white hover:text-black transition-all">
              <Play className="w-5 h-5 fill-current" />
              Watch Video
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Shape - Sharp Corporate Edge */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-full h-[40px] sm:h-[60px] text-white fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
           <path d="M0,0V120H1200V0C1000,80 200,80 0,0Z"></path>
        </svg>
      </div>
    </section>
  );
};
