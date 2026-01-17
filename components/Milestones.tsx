
import React from 'react';

const milestones = [
  { year: '1998', title: 'The Genesis', desc: 'Started with 10 guards in a small office in Surat, Gujarat.' },
  { year: '2005', title: 'National Expansion', desc: 'Crossed the milestone of 5,000 employees across 5 states.' },
  { year: '2012', title: 'Tech Integration', desc: 'Launched our first e-surveillance and 24/7 Command Center.' },
  { year: '2018', title: 'IPO Listing', desc: 'Successfully listed as a premier Gujarat-based service provider.' },
  { year: '2024', title: 'Global Outlook', desc: 'Expanded services to UAE while strengthening our Surat HQ.' },
];

export const Milestones: React.FC = () => {
  return (
    <section className="py-12 sm:py-[25px] bg-white text-black">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 sm:mb-24">
          <span className="text-[#e63946] font-black tracking-[0.3em] uppercase text-[10px] sm:text-xs mb-4 block">Our Journey</span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">Facts & Milestones</h2>
        </div>

        <div className="max-w-6xl mx-auto">
          {milestones.map((item, i) => (
            <div key={i} className="flex gap-6 sm:gap-12 md:gap-24 mb-12 sm:mb-20 last:mb-0 relative group">
              <div className="hidden md:flex flex-col items-end w-1/4 pt-1">
                <span className="text-4xl lg:text-5xl font-black text-black/10 group-hover:text-[#e63946] transition-colors">{item.year}</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-4 sm:border-8 border-white bg-black group-hover:bg-[#e63946] transition-all z-10 shadow-xl" />
                <div className="w-1 h-full bg-slate-100 absolute top-8 sm:top-10" />
              </div>
              
              <div className="flex-1 pb-6 sm:pb-10">
                <span className="md:hidden text-xl sm:text-2xl font-black text-[#e63946] block mb-2">{item.year}</span>
                <h3 className="text-2xl sm:text-3xl font-black mb-4 sm:mb-6 uppercase tracking-tight">{item.title}</h3>
                <p className="text-black/60 max-w-2xl leading-relaxed text-base sm:text-lg font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
