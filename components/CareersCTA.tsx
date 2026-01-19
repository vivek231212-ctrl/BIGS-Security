
import React from 'react';
import { Briefcase, ArrowRight } from 'lucide-react';

export const CareersCTA: React.FC = () => {
  return (
    <section id="careers" className="py-8 sm:py-[25px] bg-white">
      <div className="container mx-auto px-[30px]">
        <div className="bg-white rounded-[32px] sm:rounded-[48px] p-8 sm:p-12 md:p-24 border border-slate-100 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] flex flex-col md:flex-row items-center justify-between gap-10 sm:gap-16 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          
          <div className="max-w-2xl relative z-10 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-[#e63946] text-white px-4 py-1.5 sm:px-6 sm:py-2 rounded-full text-[8px] sm:text-[10px] font-black uppercase tracking-widest mb-6 sm:mb-8 mx-auto md:mx-0">
              <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> We are Hiring
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-black mb-4 sm:mb-6 leading-tight">Join India's Most <br className="hidden sm:block" />Trusted Force</h2>
            <p className="text-black/60 text-base sm:text-xl font-medium leading-relaxed">
              We're looking for passionate individuals to join our mission of protecting assets and people. Build a career with growth and purpose.
            </p>
          </div>
          <div className="flex-shrink-0 relative z-10 w-full md:w-auto">
            <button className="bg-black text-white w-full md:w-auto px-8 py-5 sm:px-12 sm:py-6 rounded-2xl font-black text-base sm:text-lg uppercase tracking-widest hover:bg-[#e63946] transition-all shadow-2xl flex items-center justify-center gap-4 group">
              Apply Now <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
