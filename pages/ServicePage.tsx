
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

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative min-h-[40vh] sm:h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://scontent.fstv8-2.fna.fbcdn.net/o1/v/t0/f2/m421/AQPnLVtCLiTgPB6enunIRQBAEKe3jToOyr-PtEtjWaEXIFgMykFIvWmsIa-0wnMJ3XrgfFNSSB6vY3maguxsOlmhWiSBBVX7Ul7lQrKaFKgIzkIViArQ2ol1rpqQ3zV72xALYmVRSonDdew6Fww-Qdgzh4DM7w.jpeg?stp=s600x337&_nc_ht=scontent.fstv8-2.fna.fbcdn.net&_nc_gid=zMGZlZaotLrA0G4Z20-z9w&_nc_cat=103&_nc_oc=AdmVwSKb_XkyNAD7PaWfj1Tl_8M7TL1arY5eD-oJYtUatrvxXeiq61VKdEo-WtBvFMeBZHE2aosrUIkQKOiH780E&ccb=9-4&oh=00_AfoHyzOhOEebQfBO2-yb9CLNqs2lG_eXKmzZQK01EsbcDw&oe=696D566A&_nc_sid=5b3566')` }} />
        <div className="absolute inset-0 bg-black/75 sm:bg-black/70" />
        <div className="w-full px-6 sm:px-[30px] relative z-10 text-white">
          <div className="flex items-center gap-2 mb-6 text-[#D30000] font-black uppercase text-[10px] tracking-widest">
             <Link to="/" className="hover:text-white">Home</Link> <span>/</span> <span>Services</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black mb-4 uppercase tracking-tighter leading-none">{service.title}</h2>
          <p className="text-base sm:text-xl text-white/70 max-w-2xl font-medium">{service.tagline}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="w-full px-6 sm:px-[30px]">
          <div className="grid lg:grid-cols-3 gap-12 sm:gap-16">
            <div className="lg:col-span-2">
              <span className="text-[#D30000] font-black tracking-[0.4em] uppercase text-xs mb-4 block">Deployment</span>
              <h2 className="text-2xl sm:text-3xl font-black text-black mb-6 sm:mb-8 uppercase tracking-tight">Service Overview</h2>
              <p className="text-black/60 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 font-medium">{service.scope}</p>
              
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-8 mb-12 sm:mb-16">
                {service.features.map((f: string, i: number) => (
                  <div key={i} className="flex gap-4 p-6 sm:p-8 bg-[#F5F5F5] border-l-4 border-[#D30000] items-center">
                    <CheckCircle className="text-[#D30000] flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6" />
                    <span className="font-black text-black uppercase tracking-tight text-[10px] sm:text-sm">{f}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-black mb-6 sm:mb-8 uppercase tracking-tight">Technology & Tools</h2>
              <div className="p-8 sm:p-10 bg-black text-white rounded-md border-b-8 border-[#D30000] mb-12 sm:mb-16">
                <Zap className="w-10 h-10 sm:w-12 sm:h-12 text-[#D30000] mb-6" />
                <p className="text-lg sm:text-xl leading-relaxed font-medium">{service.tech}</p>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-black mb-6 sm:mb-8 uppercase tracking-tight">Core Value</h2>
              <div className="space-y-4 sm:space-y-6">
                {service.benefits.map((b: string, i: number) => (
                  <div key={i} className="flex items-center gap-4 text-black font-bold border-b border-slate-100 pb-4">
                    <div className="w-2 h-2 rounded-full bg-[#D30000]" />
                    <span className="text-base sm:text-lg uppercase tracking-tight">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8 sm:space-y-10">
              <div className="bg-[#F5F5F5] p-8 sm:p-10 border border-slate-200">
                <h3 className="text-[10px] font-black text-[#D30000] mb-6 sm:mb-8 uppercase tracking-[0.3em]">Our Services</h3>
                <div className="space-y-2">
                  {Object.entries(serviceDetails).map(([id, s]) => (
                    <Link 
                      key={id} 
                      to={`/services/${id}`}
                      className={`flex items-center justify-between p-4 font-black uppercase text-[9px] tracking-widest transition-all ${serviceId === id ? 'bg-[#D30000] text-white' : 'bg-white hover:bg-black hover:text-white text-black shadow-sm'}`}
                    >
                      {s.title} <ChevronRight className="w-4 h-4" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-[#D30000] p-10 sm:p-12 text-white text-center">
                <h3 className="text-xl sm:text-2xl font-black mb-4 uppercase tracking-tighter">Request Audit</h3>
                <p className="mb-8 sm:mb-10 text-white/80 font-medium text-sm">Get a specialized consultation for your specific security needs.</p>
                <Link to="/get-quote" className="block w-full bg-black text-white py-5 font-black uppercase text-[10px] tracking-widest hover:bg-white hover:text-black transition-all shadow-2xl">
                  Contact Specialist
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
