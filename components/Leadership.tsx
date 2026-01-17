import React from 'react';

const leaders = [
  { name: 'Arjun Singhania', role: 'Founder & Chairman', img: 'https://picsum.photos/seed/ceo/400/500' },
  { name: 'Vikram Mehta', role: 'Managing Director', img: 'https://picsum.photos/seed/md/400/500' },
  { name: 'Dr. Sarah Joseph', role: 'Chief HR Officer', img: 'https://picsum.photos/seed/hr/400/500' },
  { name: 'Col. Rajesh Verma', role: 'Director - Operations', img: 'https://picsum.photos/seed/ops/400/500' },
];

export const Leadership: React.FC = () => {
  return (
    <section className="py-[25px] bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-[#e63946] font-bold tracking-widest uppercase text-sm">The Visionaries</span>
            <h2 className="text-4xl font-extrabold text-[#0a1d37] mt-3">Leadership Team</h2>
            <p className="text-slate-500 mt-4">
              Guided by veterans of the security industry and corporate stalwarts.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, i) => (
            <div key={i} className="group">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-6">
                <img src={leader.img} alt={leader.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110" />
              </div>
              <h3 className="text-xl font-bold text-[#0a1d37] mb-1">{leader.name}</h3>
              <p className="text-[#e63946] font-semibold text-sm uppercase tracking-wider">{leader.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};