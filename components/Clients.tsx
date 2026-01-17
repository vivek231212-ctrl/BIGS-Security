
import React from 'react';

export const ClientLogos: React.FC = () => {
  // Mock client names for logos
  const clients = ['Google', 'Amazon', 'Tata', 'Reliance', 'ICICI Bank', 'HDFC', 'Wipro', 'Infosys', 'Adani', 'Mahindra'];
  
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-100 overflow-hidden">
      <div className="container mx-auto px-6 mb-10 text-center">
        <span className="text-slate-400 font-bold tracking-widest uppercase text-xs">Trusted By Fortune 500 Companies</span>
      </div>
      
      <div className="relative">
        <div className="animate-scroll">
          {[...clients, ...clients].map((client, i) => (
            <div key={i} className="flex-shrink-0 px-12 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
              <span className="text-3xl font-black text-[#0a1d37] italic tracking-tighter">{client}</span>
            </div>
          ))}
        </div>
        
        {/* Gradients to fade edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10" />
      </div>
    </section>
  );
};
