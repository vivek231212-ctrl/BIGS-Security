
import React from 'react';
import { ShieldCheck, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-slate-50">
              <img src="https://picsum.photos/seed/about/800/800" alt="About BIGS" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-white p-12 rounded-[32px] shadow-2xl border border-slate-100 max-w-[280px]">
              <div className="text-6xl font-black text-[#e63946] mb-2">25+</div>
              <div className="text-black font-black uppercase tracking-[0.2em] text-[10px] leading-tight">Years of Unmatched Security Excellence</div>
            </div>
          </div>
          
          <div>
            <div className="w-20 h-1 bg-[#e63946] mb-8"></div>
            <span className="text-black font-black tracking-[0.3em] uppercase text-xs mb-4 block">Our Legacy</span>
            <h2 className="text-5xl font-black text-black mt-3 mb-8 leading-[1.1]">
              Pioneering Security <br />& Facility Solutions <br />Since 1998
            </h2>
            <p className="text-black text-lg leading-relaxed mb-10 font-medium">
              At BIGS Support Services, we don't just provide security; we offer peace of mind. As a premier partner for India's leading corporations, we've spent over two decades refining our methodologies and training a workforce that stands as a pillar of reliability.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              <div className="group">
                <div className="flex-shrink-0 bg-red-50 p-4 rounded-2xl mb-4 group-hover:bg-[#e63946] transition-colors">
                  <ShieldCheck className="text-[#e63946] group-hover:text-white w-8 h-8" />
                </div>
                <h4 className="font-black text-black text-lg mb-2 uppercase tracking-tight">Quality Guaranteed</h4>
                <p className="text-black/60 text-sm font-bold">ISO certified processes ensuring high-standard delivery.</p>
              </div>
              <div className="group">
                <div className="flex-shrink-0 bg-red-50 p-4 rounded-2xl mb-4 group-hover:bg-[#e63946] transition-colors">
                  <Target className="text-[#e63946] group-hover:text-white w-8 h-8" />
                </div>
                <h4 className="font-black text-black text-lg mb-2 uppercase tracking-tight">Integrated Model</h4>
                <p className="text-black/60 text-sm font-bold">One-stop-shop for manpower and technology.</p>
              </div>
            </div>
            
            <Link to="/about" className="inline-flex items-center gap-4 bg-black text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-[#e63946] transition-all group">
              Learn More <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
