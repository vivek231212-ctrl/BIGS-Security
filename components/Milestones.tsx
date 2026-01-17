
import React from 'react';

const milestones = [
  { year: '1998', title: 'The Genesis', desc: 'Started with 10 guards in a small office in Mumbai.' },
  { year: '2005', title: 'National Expansion', desc: 'Crossed the milestone of 5,000 employees and presence in 5 states.' },
  { year: '2012', title: 'Tech Integration', desc: 'Launched our first e-surveillance and 24/7 Command Center.' },
  { year: '2018', title: 'IPO Listing', desc: 'Successfully listed on the National Stock Exchange.' },
  { year: '2024', title: 'Global Outlook', desc: 'Expanded facility management services to UAE and Singapore.' },
];

export const Milestones: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-[#e63946] font-bold tracking-widest uppercase text-sm">Our Journey</span>
          <h2 className="text-4xl font-extrabold mt-3">Facts & Milestones</h2>
        </div>

        <div className="max-w-5xl mx-auto">
          {milestones.map((item, i) => (
            <div key={i} className="flex gap-8 md:gap-16 mb-12 last:mb-0 relative">
              <div className="hidden md:flex flex-col items-end w-1/4 pt-2">
                <span className="text-3xl font-extrabold text-[#e63946]">{item.year}</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 rounded-full border-4 border-[#e63946] bg-slate-900 z-10" />
                <div className="w-0.5 h-full bg-slate-700 absolute top-6" />
              </div>
              
              <div className="flex-1 pb-10">
                <span className="md:hidden text-xl font-extrabold text-[#e63946] block mb-2">{item.year}</span>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-400 max-w-xl leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
