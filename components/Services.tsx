
import React from 'react';
import { Shield, Cctv, Truck, Building2, UserCheck, Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const serviceData = [
  { id: 'physical-guarding', title: 'Manpower Guarding', desc: 'SIA-compliant elite personnel trained in defensive tactics and risk mitigation.', icon: Shield },
  { id: 'electronic-security', title: 'Tech Surveillance', desc: 'AI-driven monitoring systems and centralized command center solutions.', icon: Cctv },
  { id: 'integrated-facility', title: 'Facility Mgmt', desc: 'Comprehensive maintenance, housekeeping, and soft services for infrastructure.', icon: Building2 },
  { id: 'physical-guarding', title: 'Logistics Security', desc: 'High-risk transit and armored vehicle protection for valuables.', icon: Truck },
  { id: 'physical-guarding', title: 'VIP Protection', desc: 'Elite executive protection for dignitaries and high-profile figures.', icon: UserCheck },
  { id: 'corporate-consulting', title: 'Risk Advisory', desc: 'Corporate investigations, fraud detection, and specialized security audits.', icon: Search }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 sm:py-32 bg-[#F5F5F5]">
      <div className="container mx-auto px-[30px]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div className="max-w-xl">
            <span className="text-[#D30000] font-black tracking-[0.4em] uppercase text-xs mb-4 block">Our Solutions</span>
            <h2 className="text-4xl sm:text-6xl font-black text-black leading-tight uppercase tracking-tighter">Integrated <br />Services</h2>
          </div>
          <Link to="/gallery" className="font-black text-black uppercase tracking-widest text-sm hover:text-[#D30000] transition-colors flex items-center gap-2 group border-b-4 border-[#D30000] pb-2">
            Explore All <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.map((service, i) => (
            <Link 
              key={i} 
              to={`/services/${service.id}`}
              className="group p-10 bg-white border border-slate-100 hover:shadow-2xl transition-all duration-500 flex flex-col items-start"
            >
              <div className="w-16 h-16 flex items-center justify-center mb-8 bg-black text-white group-hover:bg-[#D30000] transition-all">
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-black mb-4 uppercase tracking-tight">{service.title}</h3>
              <p className="text-black/60 mb-8 font-medium leading-relaxed">
                {service.desc}
              </p>
              <span className="mt-auto text-[#D30000] font-black uppercase text-xs tracking-widest group-hover:pl-4 transition-all flex items-center gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
