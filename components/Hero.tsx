
import React from 'react';
import { ChevronRight, Play } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000 scale-105"
        style={{ backgroundImage: `url('https://picsum.photos/seed/security1/1920/1080')` }}
      />
      <div className="absolute inset-0 hero-overlay" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h4 className="text-[#e63946] font-bold tracking-widest uppercase mb-4 animate-in fade-in slide-in-from-left duration-700">
            India's Leading Security Solutions
          </h4>
          <h1 className="text-white text-5xl md:text-7xl font-extrabold leading-tight mb-6 animate-in fade-in slide-in-from-left duration-1000">
            Unwavering Protection <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e63946] to-[#f4a261]">
              For What Matters Most
            </span>
          </h1>
          <p className="text-slate-300 text-lg mb-10 max-w-xl leading-relaxed animate-in fade-in slide-in-from-left duration-1200">
            BIGS Support Services provides world-class security guarding, facility management, and high-tech surveillance solutions for enterprises nationwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom duration-1000">
            <button className="bg-[#e63946] text-white px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-[#c32f3a] transition-all group">
              Explore Our Services
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-white/20 transition-all">
              <Play className="w-5 h-5 fill-white" />
              Watch Video
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Shape */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-full h-[50px] text-slate-50 fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </svg>
      </div>
    </section>
  );
};
