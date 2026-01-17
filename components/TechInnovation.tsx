import React from 'react';
import { Microscope, Zap, Database, Smartphone } from 'lucide-react';

export const TechInnovation: React.FC = () => {
  return (
    <section id="tech" className="py-[25px] bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-[#e63946] font-bold tracking-widest uppercase text-sm">The Next Generation</span>
            <h2 className="text-4xl font-extrabold text-[#0a1d37] mt-3 mb-6">Security Reimagined through Technology</h2>
            <p className="text-slate-600 mb-8">
              We leverage Artificial Intelligence and Big Data to predict threats before they materialize. Our "SmartGuard" ecosystem integrates human intelligence with digital precision.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="p-6 bg-slate-50 rounded-xl">
                <Smartphone className="text-[#e63946] mb-4 w-8 h-8" />
                <h4 className="font-bold text-[#0a1d37] mb-2">Real-time Tracking</h4>
                <p className="text-slate-500 text-sm">GPS-enabled patrolling and instant reporting via our proprietary app.</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-xl">
                <Database className="text-[#e63946] mb-4 w-8 h-8" />
                <h4 className="font-bold text-[#0a1d37] mb-2">AI Analytics</h4>
                <p className="text-slate-500 text-sm">Predictive modeling for crowd control and resource optimization.</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#e63946]/20 to-transparent rounded-full blur-3xl" />
            <img src="https://picsum.photos/seed/tech/800/800" alt="Tech" className="relative z-10 rounded-2xl shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};