
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
    <div className="p-12 bg-white rounded-[40px] shadow-2xl border border-slate-50 hover:border-[#e63946] transition-all group">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-red-50 text-[#e63946] rounded-[24px] mb-8 group-hover:bg-[#e63946] group-hover:text-white transition-all">
        <Icon className="w-10 h-10" />
      </div>
      <div className="text-5xl font-black text-black mb-3">{count}{suffix}</div>
      <div className="text-black/40 font-black uppercase tracking-[0.2em] text-[10px]">{label}</div>
    </div>
  );
};

export const Stats: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <StatCard icon={Users} value={45000} label="Security Pros" suffix="+" />
          <StatCard icon={Building} value={1200} label="Corp Clients" suffix="+" />
          <StatCard icon={Globe} value={28} label="States Presence" suffix="" />
          <StatCard icon={Award} value={15} label="Natl Awards" suffix="+" />
        </div>
      </div>
    </section>
  );
};
