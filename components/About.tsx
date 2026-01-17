
import React from 'react';
import { Award, ShieldCheck, Target } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://picsum.photos/seed/about/800/600" alt="About BIGS" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl max-w-[240px]">
              <div className="text-4xl font-extrabold text-[#e63946] mb-1">25+</div>
              <div className="text-slate-600 font-bold uppercase tracking-wider text-sm">Years of Trust & Excellence</div>
            </div>
          </div>
          
          <div>
            <span className="text-[#e63946] font-bold tracking-widest uppercase text-sm">Our Legacy</span>
            <h2 className="text-4xl font-extrabold text-[#0a1d37] mt-3 mb-6 leading-tight">
              Pioneering Security & Facility <br />Solutions Since 1998
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              At BIGS Support Services, we don't just provide security; we offer peace of mind. As a premier partner for India's leading corporations, we've spent over two decades refining our methodologies, integrating cutting-edge technology, and training a workforce that stands as a pillar of reliability.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="flex-shrink-0 bg-blue-50 p-3 rounded-lg">
                  <ShieldCheck className="text-blue-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0a1d37] text-lg">Quality Guaranteed</h4>
                  <p className="text-slate-500 text-sm">ISO certified processes ensuring high-standard service delivery across all sectors.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 bg-orange-50 p-3 rounded-lg">
                  <Target className="text-orange-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0a1d37] text-lg">Integrated Solutions</h4>
                  <p className="text-slate-500 text-sm">One-stop-shop for manpower, technology, and facility management requirements.</p>
                </div>
              </div>
            </div>
            
            <button className="border-2 border-[#0a1d37] text-[#0a1d37] px-8 py-3 rounded-lg font-bold hover:bg-[#0a1d37] hover:text-white transition-all">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
