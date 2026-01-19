
import React, { useEffect, useState } from 'react';
import { Users, Globe, Building, Award } from 'lucide-react';

const StatCard = ({ icon: Icon, value, label, suffix }: any) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="p-10 bg-[#F5F5F5] border-b-8 border-transparent hover:border-[#D30000] transition-all group text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 text-[#D30000] mb-6">
        <Icon className="w-12 h-12" />
      </div>
      <div className="text-5xl font-black text-black mb-2 tracking-tighter">{count}{suffix}</div>
      <div className="text-black font-black uppercase tracking-[0.3em] text-[10px] opacity-40">{label}</div>
    </div>
  );
};

export const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="container mx-auto px-[30px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard icon={Users} value={45000} label="Force Strength" suffix="+" />
          <StatCard icon={Building} value={1200} label="Corporates" suffix="+" />
          <StatCard icon={Globe} value={28} label="States" suffix="" />
          <StatCard icon={Award} value={15} label="Excellence Awards" suffix="+" />
        </div>
      </div>
    </section>
  );
};
