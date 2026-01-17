import React from 'react';
import { Shield, Cctv, Truck, Building2, UserCheck, Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const serviceData = [
  { id: 'physical-guarding', title: 'Security Guarding', desc: 'Elite personnel trained in defensive tactics and emergency response.', icon: Shield },
  { id: 'electronic-security', title: 'E-Surveillance', desc: 'Smart CCTV integration, AI-driven motion detection, and monitoring.', icon: Cctv },
  { id: 'integrated-facility', title: 'Facility Management', desc: 'Comprehensive soft and hard services for your infrastructure.', icon: Building2 },
  { id: 'physical-guarding', title: 'Cash Logistics', desc: 'Secure transit of valuables with armored vehicles and escorts.', icon: Truck },
  { id: 'physical-guarding', title: 'VIP Protection', desc: 'Discreet and professional security for high-profile individuals.', icon: UserCheck },
  { id: 'corporate-consulting', title: 'Investigations', desc: 'Corporate due diligence, fraud detection, and risk assessments.', icon: Search }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-[25px] bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <span className="text-[#e63946] font-black tracking-[0.3em] uppercase text-xs mb-4 block">Our Expertise</span>
            <h2 className="text-5xl font-black text-black leading-tight">Integrated <br />Security Solutions</h2>
          </div>
          <Link to="/gallery" className="font-black text-black uppercase tracking-widest text-sm hover:text-[#e63946] transition-colors flex items-center gap-2 group">
            All Services <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {serviceData.map((service, i) => (
            <Link 
              key={i} 
              to={`/services/${service.id}`}
              className="group p-12 rounded-[40px] bg-white border border-slate-100 hover:border-[#e63946] hover:shadow-[0_20px_60px_-15px_rgba(230,57,70,0.15)] transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-[20px] flex items-center justify-center mb-8 bg-slate-50 text-[#e63946] group-hover:bg-[#e63946] group-hover:text-white transition-all">
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-black mb-4 uppercase tracking-tight">{service.title}</h3>
              <p className="text-black/60 mb-8 font-medium leading-relaxed">
                {service.desc}
              </p>
              <div className="w-12 h-1 bg-slate-100 group-hover:w-full group-hover:bg-[#e63946] transition-all duration-500"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};