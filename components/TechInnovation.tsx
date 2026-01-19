
import React from 'react';
import { Database, Smartphone } from 'lucide-react';

export const TechInnovation: React.FC = () => {
  return (
    <section id="tech" className="py-24 sm:py-32 bg-white">
      <div className="container mx-auto px-[30px]">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-[#D30000] font-black tracking-[0.4em] uppercase text-xs mb-4 block">Future Proof</span>
            <h2 className="text-4xl sm:text-6xl font-black text-black mt-3 mb-10 uppercase tracking-tighter leading-tight">Intelligence <br />Integrated</h2>
            <p className="text-black/60 text-lg mb-12 font-medium leading-relaxed">
              We leverage Artificial Intelligence and Big Data to predict threats before they materialize. Our ecosystem integrates human intelligence with digital precision for 360-degree awareness.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="p-8 bg-[#F5F5F5] border-l-4 border-[#D30000]">
                <Smartphone className="text-[#D30000] mb-6 w-10 h-10" />
                <h4 className="font-black text-black mb-3 uppercase tracking-tight text-xl">Real-time GPS</h4>
                <p className="text-black/60 text-sm font-bold">Live patrol tracking and instant cloud reporting.</p>
              </div>
              <div className="p-8 bg-[#F5F5F5] border-l-4 border-[#D30000]">
                <Database className="text-[#D30000] mb-6 w-10 h-10" />
                <h4 className="font-black text-black mb-3 uppercase tracking-tight text-xl">AI Analytics</h4>
                <p className="text-black/60 text-sm font-bold">Advanced threat modeling for proactive defense.</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="overflow-hidden shadow-[30px_-30px_0px_0px_rgba(211,0,0,1)] border-8 border-white">
              <img src="https://picsum.photos/seed/tech/800/800" alt="Tech" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
