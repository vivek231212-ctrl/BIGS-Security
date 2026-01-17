
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
    <div className="text-center p-8 bg-white rounded-2xl shadow-lg border-b-4 border-[#e63946] hover:-translate-y-2 transition-transform">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 text-[#e63946] rounded-full mb-6">
        <Icon className="w-8 h-8" />
      </div>
      <div className="text-4xl font-extrabold text-[#0a1d37] mb-2">{count}{suffix}</div>
      <div className="text-slate-500 font-semibold uppercase tracking-wider text-xs">{label}</div>
    </div>
  );
};

export const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-slate-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard icon={Users} value={45000} label="Security Professionals" suffix="+" />
          <StatCard icon={Building} value={1200} label="Corporate Clients" suffix="+" />
          <StatCard icon={Globe} value={28} label="States Presence" suffix="" />
          <StatCard icon={Award} value={15} label="National Awards" suffix="+" />
        </div>
      </div>
    </section>
  );
};
