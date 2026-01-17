
import React from 'react';
import { Shield, Cctv, Truck, Building2, UserCheck, Search, ChevronRight } from 'lucide-react';

const serviceData = [
  {
    title: 'Security Guarding',
    desc: 'Elite personnel trained in defensive tactics, customer service, and emergency response.',
    icon: Shield,
    color: 'bg-blue-500'
  },
  {
    title: 'Electronic Surveillance',
    desc: 'Smart CCTV integration, AI-driven motion detection, and 24/7 command center monitoring.',
    icon: Cctv,
    color: 'bg-emerald-500'
  },
  {
    title: 'Facility Management',
    desc: 'Comprehensive soft and hard services to keep your infrastructure running flawlessly.',
    icon: Building2,
    color: 'bg-amber-500'
  },
  {
    title: 'Cash Logistics',
    desc: 'Secure transit of valuables with armored vehicles and highly vetted armed escorts.',
    icon: Truck,
    color: 'bg-purple-500'
  },
  {
    title: 'Executive Protection',
    desc: 'Discreet and highly professional VIP security for high-net-worth individuals.',
    icon: UserCheck,
    color: 'bg-rose-500'
  },
  {
    title: 'Investigations',
    desc: 'Corporate due diligence, fraud detection, and specialized risk assessments.',
    icon: Search,
    color: 'bg-sky-500'
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#e63946] font-bold tracking-widest uppercase text-sm">Our Expertise</span>
          <h2 className="text-4xl font-extrabold text-[#0a1d37] mt-3">Integrated Security Solutions</h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            We offer a broad spectrum of services designed to meet the complex needs of modern enterprises.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.map((service, i) => (
            <div key={i} className="group p-8 rounded-2xl border border-slate-100 hover:border-[#e63946]/30 hover:shadow-2xl transition-all duration-300">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-white ${service.color} transition-transform group-hover:scale-110`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-extrabold text-[#0a1d37] mb-4 group-hover:text-[#e63946] transition-colors">{service.title}</h3>
              <p className="text-slate-500 mb-6 leading-relaxed">
                {service.desc}
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-[#0a1d37] hover:gap-3 transition-all">
                Learn More <ChevronRight className="w-4 h-4 text-[#e63946]" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
