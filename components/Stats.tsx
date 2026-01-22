
import React, { useEffect, useState } from 'react';
import { Users, Building, ShieldCheck, Target, Calendar } from 'lucide-react';

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
    <div className="p-8 sm:p-10 bg-[#F5F5F5] border-b-8 border-transparent hover:border-[#D30000] transition-all group text-center h-full flex flex-col items-center justify-center">
      <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 text-[#D30000] mb-6 transition-transform group-hover:scale-110">
        <Icon className="w-full h-full" />
      </div>
      <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-black mb-2 tracking-tighter whitespace-nowrap">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-black font-black uppercase tracking-[0.2em] text-[10px] sm:text-[11px] opacity-40 leading-tight">
        {label}
      </div>
    </div>
  );
};

export const Stats: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-t border-slate-100">
      <div className="w-full px-[30px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8">
          <div className="h-full">
            <StatCard icon={Users} value={4500} label="Workforce" suffix="+" />
          </div>
          <div className="h-full">
            <StatCard icon={Building} value={140} label="Active Clients" suffix="+" />
          </div>
          <div className="h-full">
            <StatCard icon={ShieldCheck} value={8} label="States PSARA Certified" suffix="+" />
          </div>
          <div className="h-full">
            <StatCard icon={Target} value={20} label="Industries Served" suffix="+" />
          </div>
          <div className="h-full sm:col-span-2 lg:col-span-2 xl:col-span-1">
            <StatCard icon={Calendar} value={2007} label="Established" suffix="" />
          </div>
        </div>
      </div>
    </section>
  );
};
