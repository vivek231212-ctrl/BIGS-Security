
import React from 'react';
import { GraduationCap, BookOpen, Users2 } from 'lucide-react';

export const Training: React.FC = () => {
  return (
    <section className="py-[7.5px] bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#e63946] font-bold tracking-widest uppercase text-sm">Quality Workforce</span>
          <h2 className="text-4xl font-extrabold text-[#0a1d37] mt-3">World-Class Training Centers</h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            Our professionals undergo rigorous residential training at our specialized academies, ensuring they are prepared for any scenario.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              title: 'Standard Guarding Training', 
              icon: GraduationCap, 
              desc: 'Physical fitness, basic security drills, fire safety, and first-aid certification.' 
            },
            { 
              title: 'Soft Skills & Etiquette', 
              icon: Users2, 
              desc: 'Customer interaction, grooming, communication, and situational awareness.' 
            },
            { 
              title: 'Specialized Defense', 
              icon: BookOpen, 
              desc: 'Advanced combat training, crowd management, and modern weaponry handling for elite units.' 
            },
          ].map((item, i) => (
            <div key={i} className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-xl transition-all">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-50 text-[#0a1d37] rounded-full mb-8">
                <item.icon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-[#0a1d37] mb-4">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};