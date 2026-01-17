
import React from 'react';
import { Briefcase, ArrowRight } from 'lucide-react';

export const CareersCTA: React.FC = () => {
  return (
    <section id="careers" className="py-20 bg-[#e63946]">
      <div className="container mx-auto px-6">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 md:p-16 border border-white/20 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-1 rounded-full text-xs font-bold uppercase mb-6">
              <Briefcase className="w-4 h-4" /> We are Hiring
            </div>
            <h2 className="text-4xl font-extrabold mb-4">Join India's Most Trusted Security Force</h2>
            <p className="text-white/80 text-lg">
              We're looking for passionate individuals to join our mission of protecting assets and people. Build a career with purpose, growth, and excellence.
            </p>
          </div>
          <div className="flex-shrink-0">
            <button className="bg-white text-[#e63946] px-10 py-5 rounded-2xl font-bold text-lg hover:bg-[#0a1d37] hover:text-white transition-all shadow-xl flex items-center gap-3">
              Apply Now <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
