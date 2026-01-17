
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
    <section id="industries" className="py-12 sm:py-[25px] bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-20">
          <span className="text-[#e63946] font-black tracking-[0.3em] uppercase text-[10px] sm:text-xs mb-4 block">Market Segments</span>
          <h2 className="text-3xl sm:text-5xl font-black text-black uppercase tracking-tight">Sectors We Empower</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
          {industries.map((item, i) => (
            <div key={i} className="group relative h-72 sm:h-96 rounded-3xl sm:rounded-[48px] overflow-hidden cursor-pointer shadow-xl">
              <img 
                src={item.img} 
                alt={item.name} 
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-8 sm:p-12">
                <span className="text-white/60 text-[8px] sm:text-[10px] font-black uppercase tracking-[0.3em] mb-2">Industry Solutions</span>
                <h3 className="text-xl sm:text-2xl font-black text-white uppercase">{item.name}</h3>
                <div className="h-1.5 w-0 group-hover:w-full bg-[#e63946] transition-all duration-500 mt-4"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
