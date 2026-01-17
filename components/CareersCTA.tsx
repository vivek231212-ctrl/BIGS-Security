
import React from 'react';
import { Briefcase, ArrowRight } from 'lucide-react';

export const CareersCTA: React.FC = () => {
  return (
    <section id="careers" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-[48px] p-12 md:p-24 border border-slate-100 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] flex flex-col md:flex-row items-center justify-between gap-16 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          
          <div className="max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#e63946] text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-8">
              <Briefcase className="w-4 h-4" /> We are Hiring
            </div>
            <h2 className="text-5xl font-black text-black mb-6 leading-tight">Join India's Most <br />Trusted Force</h2>
            <p className="text-black/60 text-xl font-medium leading-relaxed">
              We're looking for passionate individuals to join our mission of protecting assets and people. Build a career with growth and purpose.
            </p>
          </div>
          <div className="flex-shrink-0 relative z-10">
            <button className="bg-black text-white px-12 py-6 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-[#e63946] transition-all shadow-2xl flex items-center gap-4 group">
              Apply Now <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
