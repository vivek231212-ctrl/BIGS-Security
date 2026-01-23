
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Shield, CheckCircle, ChevronRight, Zap, Award, Microscope, Users, BookOpen } from 'lucide-react';

const serviceDetails: Record<string, any> = {
  'physical-guarding': {
    title: 'Physical Guarding Solutions',
    tagline: 'Elite Personnel for Total Ground Security',
    icon: Shield,
    features: ['Armed & Unarmed Guarding', 'Mobile Patrol Units', 'Crowd Management', 'Emergency Response'],
    scope: 'Our guarding services go beyond simple presence. We deploy SIA-compliant, physically fit, and mentally agile professionals trained in conflict resolution and high-stakes surveillance.',
    benefits: ['Reduced liability and insurance costs', '24/7 visibility and deterrence', 'Integrated reporting and analytics'],
    tech: 'Guard monitoring via real-time GPS tracking apps and QR-coded patrol points.'
  },
  'corporate-consulting': {
    title: 'Corporate Security Consulting',
    tagline: 'Strategic Risk Assessment & Mitigation',
    icon: Award,
    features: ['Threat Vulnerability Assessment', 'Security Audits', 'Loss Prevention Strategies', 'Crisis Management Plans'],
    scope: 'We partner with boardrooms to identify structural and operational security gaps, providing data-backed blueprints for robust corporate resilience.',
    benefits: ['Proactive threat identification', 'Regulatory compliance assurance', 'Optimized security spending'],
    tech: 'Advanced risk modeling software and forensic data analysis.'
  },
  'command-centre': {
    title: 'Command Centre Solutions',
    tagline: '24/7 Remote Monitoring & Intelligence',
    icon: Microscope,
    features: ['Video Surveillance Management', 'Intrusion Detection Monitoring', 'Vehicle Tracking (GPS)', 'Incident Management'],
    scope: 'Our state-of-the-art Command Centre acts as the "Central Brain" for all operations, utilizing AI-driven video analytics to detect anomalies instantly.',
    benefits: ['Immediate incident escalation', 'Centralized data logging', 'Cost-effective surveillance'],
    tech: 'Integration with major VMS platforms and AI-based facial/license plate recognition.'
  },
  'integrated-facility': {
    title: 'Integrated Facility Management',
    tagline: 'Seamless Soft & Hard Services',
    icon: Users,
    features: ['Corporate Housekeeping', 'Electrical & Mechanical Maint.', 'Pest Control', 'Vendor Management'],
    scope: 'A one-stop solution for maintaining high-standard corporate environments, allowing you to focus on your core business goals.',
    benefits: ['Enhanced asset lifecycle', 'Consistent cleanliness standards', 'Simplified vendor billing'],
    tech: 'CAFM (Computer-Aided Facility Management) systems for ticket tracking.'
  },
  'cyber-security': {
    title: 'Cyber Security Solutions',
    tagline: 'Defending Your Digital Frontier',
    icon: Zap,
    features: ['Vulnerability Assessment (VAPT)', 'Endpoint Protection', 'Firewall Management', 'Cyber Incident Response'],
    scope: 'In an era of digital warfare, we provide comprehensive defensive layers to protect your sensitive corporate data and IT infrastructure.',
    benefits: ['Protection against data breaches', 'Business continuity assurance', 'Compliance with data laws'],
    tech: 'Next-Gen Firewalls (NGFW) and SIEM (Security Information and Event Management).'
  },
  'electronic-security': {
    title: 'Electronic Security Solutions',
    tagline: 'Cutting-edge Hardware Integration',
    icon: BookOpen,
    features: ['Biometric Access Control', 'Advanced IP CCTV Systems', 'Perimeter Intrusion Detection', 'BMS Integration'],
    scope: 'We design and install complex electronic security ecosystems tailored to the unique geometry and risk profile of your premises.',
    benefits: ['Elimination of unauthorized entry', 'High-definition evidence logs', 'Automated building safety'],
    tech: 'Smart IP-based cameras with thermal imaging and laser-based perimeter sensors.'
  }
};

export const ServicePage: React.FC = () => {
  const { serviceId } = useParams();
  const service = serviceId ? serviceDetails[serviceId] : null;

  if (!service) return <div className="pt-32 text-center h-screen font-black uppercase tracking-widest">Service Not Found</div>;

  const ServiceIcon = service.icon;

  return (
    <div className="pt-24 bg-white min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[40vh] md:h-[55vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://scontent.fstv8-2.fna.fbcdn.net/o1/v/t0/f2/m421/AQPnLVtCLiTgPB6enunIRQBAEKe3jToOyr-PtEtjWaEXIFgMykFIvWmsIa-0wnMJ3XrgfFNSSB6vY3maguxsOlmhWiSBBVX7Ul7lQrKaFKgIzkIViArQ2ol1rpqQ3zV72xALYmVRSonDdew6Fww-Qdgzh4DM7w.jpeg?stp=s600x337&_nc_ht=scontent.fstv8-2.fna.fbcdn.net&_nc_gid=zMGZlZaotLrA0G4Z20-z9w&_nc_cat=103&_nc_oc=AdmVwSKb_XkyNAD7PaWfj1Tl_8M7TL1arY5eD-oJYtUatrvxXeiq61VKdEo-WtBvFMeBZHE2aosrUIkQKOiH780E&ccb=9-4&oh=00_AfoHyzOhOEebQfBO2-yb9CLNqs2lG_eXKmzZQK01EsbcDw&oe=696D566A&_nc_sid=5b3566')` }} />
        <div className="absolute inset-0 bg-black/80 md:bg-black/70" />
        <div className="w-full px-6 sm:px-[30px] relative z-10 text-white py-12">
          <div className="flex items-center gap-2 mb-6 text-[#D30000] font-black uppercase text-[10px] tracking-widest">
             <Link to="/" className="hover:text-white transition-colors">Home</Link> <span>/</span> <span>Services</span>
          </div>
          <div className="flex items-center gap-6 mb-8">
            <div className="hidden sm:flex w-20 h-20 bg-[#D30000] items-center justify-center rounded-2xl shadow-2xl">
              <ServiceIcon className="w-10 h-10 text-white" />
            </div>
            <div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-2 uppercase tracking-tighter leading-none">{service.title}</h2>
              <p className="text-base sm:text-xl md:text-2xl text-white/70 max-w-2xl font-medium tracking-tight">{service.tagline}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-24">
        <div className="w-full px-6 sm:px-[30px]">
          <div className="grid lg:grid-cols-3 gap-16 md:gap-20">
            <div className="lg:col-span-2">
              <div className="mb-12">
                <span className="text-[#D30000] font-black tracking-[0.4em] uppercase text-xs mb-4 block">Strategic Deployment</span>
                <h2 className="text-3xl sm:text-4xl font-black text-black mb-8 uppercase tracking-tighter">Operational Scope</h2>
                <p className="text-black/70 text-lg sm:text-xl leading-relaxed mb-10 font-medium">{service.scope}</p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mb-16">
                {service.features.map((f: string, i: number) => (
                  <div key={i} className="flex gap-5 p-6 md:p-8 bg-[#F8FAFC] border-l-4 border-[#D30000] items-center hover:bg-red-50 transition-colors group">
                    <CheckCircle className="text-[#D30000] flex-shrink-0 w-6 h-6 group-hover:scale-110 transition-transform" />
                    <span className="font-black text-black uppercase tracking-tight text-xs sm:text-sm">{f}</span>
                  </div>
                ))}
              </div>

              <div className="mb-16">
                <h2 className="text-3xl font-black text-black mb-8 uppercase tracking-tighter">Technology & Innovation</h2>
                <div className="p-8 sm:p-12 bg-black text-white rounded-3xl border-b-[12px] border-[#D30000] shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:rotate-12 transition-transform">
                    <Zap className="w-32 h-32" />
                  </div>
                  <div className="relative z-10">
                    <Zap className="w-12 h-12 text-[#D30000] mb-8" />
                    <p className="text-xl sm:text-2xl leading-relaxed font-bold tracking-tight">{service.tech}</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-black text-black mb-8 uppercase tracking-tighter">Why Choose BIGS?</h2>
                <div className="grid gap-4">
                  {service.benefits.map((b: string, i: number) => (
                    <div key={i} className="flex items-center gap-6 text-black py-6 border-b border-slate-100 hover:pl-4 transition-all group">
                      <div className="w-3 h-3 rounded-full bg-[#D30000] group-hover:scale-150 transition-transform" />
                      <span className="text-lg sm:text-xl font-black uppercase tracking-tight">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-12">
              <div className="bg-[#F8FAFC] p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm">
                <h3 className="text-xs font-black text-[#D30000] mb-8 uppercase tracking-[0.4em] border-b border-red-100 pb-4">Our Service Portfolio</h3>
                <div className="flex flex-col gap-3">
                  {Object.entries(serviceDetails).map(([id, s]) => (
                    <Link 
                      key={id} 
                      to={`/services/${id}`}
                      className={`flex items-center justify-between p-5 font-black uppercase text-[10px] tracking-widest transition-all rounded-xl ${serviceId === id ? 'bg-[#D30000] text-white shadow-xl scale-[1.02]' : 'bg-white hover:bg-black hover:text-white text-black shadow-sm border border-slate-50'}`}
                    >
                      {s.title} <ChevronRight className={`w-4 h-4 ${serviceId === id ? 'translate-x-1' : ''}`} />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-black p-10 md:p-14 text-white text-center rounded-3xl shadow-2xl border-t-[8px] border-[#D30000] relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-black mb-6 uppercase tracking-tighter">Strategic Audit</h3>
                  <p className="mb-10 text-white/70 font-medium text-base leading-relaxed">Schedule an expert consultation to evaluate your current security infrastructure and risks.</p>
                  <Link to="/get-quote" className="inline-flex items-center justify-center w-full bg-[#D30000] text-white py-5 rounded-xl font-black uppercase text-xs tracking-[0.2em] hover:bg-white hover:text-black transition-all shadow-xl group">
                    Request Consultation <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
