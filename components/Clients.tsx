
import React from 'react';

export const ClientLogos: React.FC = () => {
  const clients = ['Google', 'Amazon', 'Tata', 'Reliance', 'ICICI Bank', 'HDFC', 'Wipro', 'Infosys', 'Adani', 'Mahindra'];
  
  return (
    <section className="py-24 bg-white border-y border-slate-100 overflow-hidden">
      <div className="container mx-auto px-[30px] mb-16 text-center">
        <span className="text-[#D30000] font-black tracking-[0.4em] uppercase text-xs mb-4 block">Enterprise Trust</span>
        <h2 className="text-2xl font-black text-black uppercase tracking-widest">Partnering with Leaders</h2>
      </div>
      
      <div className="relative">
        <div className="animate-scroll">
          {[...clients, ...clients].map((client, i) => (
            <div key={i} className="flex-shrink-0 px-16 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer">
              <span className="text-4xl font-black text-black tracking-tighter uppercase">{client}</span>
            </div>
          ))}
        </div>
        
        {/* Gradients to fade edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
      </div>
    </section>
  );
};
