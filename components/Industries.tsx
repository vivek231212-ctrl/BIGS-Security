
import React from 'react';

const industries = [
  { name: 'Banking & BFSI', img: 'https://picsum.photos/seed/bank/400/300' },
  { name: 'E-commerce & Retail', img: 'https://picsum.photos/seed/retail/400/300' },
  { name: 'Healthcare & Pharma', img: 'https://picsum.photos/seed/health/400/300' },
  { name: 'IT & ITES', img: 'https://picsum.photos/seed/it/400/300' },
  { name: 'Manufacturing', img: 'https://picsum.photos/seed/factory/400/300' },
  { name: 'Education', img: 'https://picsum.photos/seed/edu/400/300' },
];

export const Industries: React.FC = () => {
  return (
    <section id="industries" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-[#e63946] font-bold tracking-widest uppercase text-sm">Global Impact</span>
            <h2 className="text-4xl font-extrabold mt-3">Sectors We Empower</h2>
            <p className="text-slate-400 mt-4">
              Providing specialized security and facility protocols tailored for distinct industrial requirements.
            </p>
          </div>
          <button className="bg-white text-slate-900 px-8 py-3 rounded-lg font-bold hover:bg-[#e63946] hover:text-white transition-all">
            View All Sectors
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((item, i) => (
            <div key={i} className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer">
              <img 
                src={item.img} 
                alt={item.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <div className="h-1 w-0 group-hover:w-full bg-[#e63946] transition-all duration-300 mt-2"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
