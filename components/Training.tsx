
import React from 'react';
import { GraduationCap, BookOpen, Users2 } from 'lucide-react';

export const Training: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#F5F5F5]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-[#D30000] font-black tracking-[0.4em] uppercase text-xs mb-4 block">Force Quality</span>
          <h2 className="text-4xl sm:text-6xl font-black text-black uppercase tracking-tighter">Training Academies</h2>
          <p className="text-black/60 mt-6 max-w-2xl mx-auto font-medium text-lg">
            Residential training excellence ensuring our professionals are the best in the industry.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              title: 'Standard Guarding', 
              icon: GraduationCap, 
              desc: 'Physical endurance, fire safety protocols, and basic security drills.' 
            },
            { 
              title: 'Corporate Etiquette', 
              icon: Users2, 
              desc: 'Advanced communication, soft skills, and situational customer management.' 
            },
            { 
              title: 'Elite Defense', 
              icon: BookOpen, 
              desc: 'High-stakes combat tactics and modern surveillance hardware handling.' 
            },
          ].map((item, i) => (
            <div key={i} className="bg-white p-12 hover:shadow-2xl transition-all border-b-8 border-transparent hover:border-[#D30000] group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-black text-white group-hover:bg-[#D30000] mb-10 transition-colors">
                <item.icon className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black text-black mb-6 uppercase tracking-tight">{item.title}</h3>
              <p className="text-black/60 leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};