
import React from 'react';

const leaders = [
  { name: 'Arjun Singhania', role: 'Founder & Chairman', img: 'https://picsum.photos/seed/ceo/400/500' },
  { name: 'Vikram Mehta', role: 'Managing Director', img: 'https://picsum.photos/seed/md/400/500' },
  { name: 'Dr. Sarah Joseph', role: 'Chief HR Officer', img: 'https://picsum.photos/seed/hr/400/500' },
  { name: 'Col. Rajesh Verma', role: 'Director - Operations', img: 'https://picsum.photos/seed/ops/400/500' },
];

export const Leadership: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-[#D30000] font-black tracking-[0.4em] uppercase text-xs mb-4 block">Our Pillars</span>
          <h2 className="text-4xl sm:text-6xl font-black text-black uppercase tracking-tighter">Strategic Leadership</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {leaders.map((leader, i) => (
            <div key={i} className="group">
              <div className="aspect-[3/4] overflow-hidden mb-8 border-b-8 border-transparent group-hover:border-[#D30000] transition-all">
                <img src={leader.img} alt={leader.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              </div>
              <h3 className="text-xl font-black text-black mb-1 uppercase tracking-tight">{leader.name}</h3>
              <p className="text-[#D30000] font-black text-[10px] uppercase tracking-widest">{leader.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};