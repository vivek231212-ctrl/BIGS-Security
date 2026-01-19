
import React from 'react';

const industries = [
  { name: 'Banking & BFSI', img: 'https://picsum.photos/seed/bank/600/600' },
  { name: 'Retail', img: 'https://picsum.photos/seed/retail/600/600' },
  { name: 'Healthcare', img: 'https://picsum.photos/seed/health/600/600' },
  { name: 'IT & ITES', img: 'https://picsum.photos/seed/it/600/600' },
  { name: 'Manufacturing', img: 'https://picsum.photos/seed/factory/600/600' },
  { name: 'Education', img: 'https://picsum.photos/seed/edu/600/600' },
];

export const Industries: React.FC = () => {
  return (
    <section id="industries" className="py-24 sm:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-24">
          <span className="text-[#D30000] font-black tracking-[0.4em] uppercase text-xs mb-4 block">Sector Expertise</span>
          <h2 className="text-4xl sm:text-6xl font-black text-black uppercase tracking-tighter">Market Segments</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((item, i) => (
            <div key={i} className="group relative h-80 overflow-hidden cursor-pointer shadow-lg border border-slate-100">
              <img 
                src={item.img} 
                alt={item.name} 
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-all duration-500"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-10">
                <h3 className="text-2xl font-black text-white uppercase tracking-tight">{item.name}</h3>
                <div className="h-2 w-12 bg-[#D30000] transition-all duration-500 group-hover:w-full mt-4"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};