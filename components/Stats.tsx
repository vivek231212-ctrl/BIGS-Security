
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
    <div className="p-8 sm:p-12 bg-white rounded-3xl sm:rounded-[40px] shadow-2xl border border-slate-50 hover:border-[#e63946] transition-all group">
      <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-red-50 text-[#e63946] rounded-2xl sm:rounded-[24px] mb-6 sm:mb-8 group-hover:bg-[#e63946] group-hover:text-white transition-all">
        <Icon className="w-8 h-8 sm:w-10 sm:h-10" />
      </div>
      <div className="text-4xl sm:text-5xl font-black text-black mb-2 sm:mb-3">{count}{suffix}</div>
      <div className="text-black/40 font-black uppercase tracking-[0.2em] text-[9px] sm:text-[10px]">{label}</div>
    </div>
  );
};

export const Stats: React.FC = () => {
  return (
    <section className="py-8 sm:py-[25px] bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
          <StatCard icon={Users} value={45000} label="Security Pros" suffix="+" />
          <StatCard icon={Building} value={1200} label="Corp Clients" suffix="+" />
          <StatCard icon={Globe} value={28} label="States Presence" suffix="" />
          <StatCard icon={Award} value={15} label="Natl Awards" suffix="+" />
        </div>
      </div>
    </section>
  );
};
