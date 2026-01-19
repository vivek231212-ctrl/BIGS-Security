
import React from 'react';

const milestones = [
  { year: '1998', title: 'The Genesis', desc: 'Commenced operations with specialized focus on Gujarat industrial belts.' },
  { year: '2005', title: 'National Expansion', desc: 'Strategic footprint established across major Indian metropolitan cities.' },
  { year: '2012', title: 'Tech Revolution', desc: 'Inauguration of centralized 24/7 AI-driven command center.' },
  { year: '2018', title: 'IPO Readiness', desc: 'Transitioned to enterprise-grade compliance and operational standards.' },
  { year: '2024', title: 'Global Outlook', desc: 'Strategic international expansion while solidifying national leadership.' },
];

export const Milestones: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-white text-black">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-24">
          <span className="text-[#D30000] font-black tracking-[0.4em] uppercase text-xs mb-4 block">Chronicle</span>
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter">Major Milestones</h2>
        </div>

        <div className="max-w-6xl mx-auto">
          {milestones.map((item, i) => (
            <div key={i} className="flex gap-10 md:gap-24 mb-20 last:mb-0 relative group">
              <div className="hidden md:flex flex-col items-end w-1/4 pt-1">
                <span className="text-5xl lg:text-7xl font-black text-black/5 group-hover:text-[#D30000] transition-colors">{item.year}</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-black group-hover:bg-[#D30000] transition-all z-10" />
                <div className="w-1 h-full bg-slate-100 absolute top-6" />
              </div>
              
              <div className="flex-1 pb-10 border-b border-slate-100">
                <span className="md:hidden text-2xl font-black text-[#D30000] block mb-2">{item.year}</span>
                <h3 className="text-2xl sm:text-3xl font-black mb-4 uppercase tracking-tight">{item.title}</h3>
                <p className="text-black/60 max-w-2xl leading-relaxed text-lg font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
