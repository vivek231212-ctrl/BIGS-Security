
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Shield, CheckCircle, ChevronRight, Zap, Award, Microscope, Users, BookOpen } from 'lucide-react';

const serviceDetails: Record<string, any> = {
  'physical-guarding': {
    title: 'Physical Guarding Solutions',
    tagline: 'Elite Personnel for Total Ground Security',
    icon: Shield,
    img: 'https://scontent.fstv8-2.fna.fbcdn.net/v/t39.30808-6/614388964_921705314365677_8961878546008505667_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e1afaa&_nc_ohc=cWiVWoZCdHsQ7kNvwElTFxd&_nc_oc=Adlp6YtjKjtXDOWbod_fQyGG3oWSeZPSuRjXCam6B1nygyt4Z5tklBnFkxdzwCao5sdNO26XGtvsfx3cplrtab3k&_nc_zt=23&_nc_ht=scontent.fstv8-2.fna&_nc_gid=4a2GgXkafCbnMGOD8GRuEA&oh=00_AfpluZ5c4rScUVHEyzxOdZEAU0vCuqLBvij5dwn-7nDO9Q&oe=69713DB9',
    features: ['Armed & Unarmed Guarding', 'Mobile Patrol Units', 'Crowd Management', 'Emergency Response'],
    scope: 'Our guarding services go beyond simple presence. We deploy SIA-compliant, physically fit, and mentally agile professionals trained in conflict resolution and high-stakes surveillance.',
    benefits: ['Reduced liability and insurance costs', '24/7 visibility and deterrence', 'Integrated reporting and analytics'],
    tech: 'Guard monitoring via real-time GPS tracking apps and QR-coded patrol points.'
  },
  'corporate-consulting': {
    title: 'Corporate Security Consulting',
    tagline: 'Strategic Risk Assessment & Mitigation',
    icon: Award,
    img: 'https://scontent.fstv8-2.fna.fbcdn.net/v/t39.30808-6/614388964_921705314365677_8961878546008505667_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e1afaa&_nc_ohc=cWiVWoZCdHsQ7kNvwElTFxd&_nc_oc=Adlp6YtjKjtXDOWbod_fQyGG3oWSeZPSuRjXCam6B1nygyt4Z5tklBnFkxdzwCao5sdNO26XGtvsfx3cplrtab3k&_nc_zt=23&_nc_ht=scontent.fstv8-2.fna&_nc_gid=4a2GgXkafCbnMGOD8GRuEA&oh=00_AfpluZ5c4rScUVHEyzxOdZEAU0vCuqLBvij5dwn-7nDO9Q&oe=69713DB9',
    features: ['Threat Vulnerability Assessment', 'Security Audits', 'Loss Prevention Strategies', 'Crisis Management Plans'],
    scope: 'We partner with boardrooms to identify structural and operational security gaps, providing data-backed blueprints for robust corporate resilience.',
    benefits: ['Proactive threat identification', 'Regulatory compliance assurance', 'Optimized security spending'],
    tech: 'Advanced risk modeling software and forensic data analysis.'
  },
  'command-centre': {
    title: 'Command Centre Solutions',
    tagline: '24/7 Remote Monitoring & Intelligence',
    icon: Microscope,
    img: 'https://scontent.fstv8-2.fna.fbcdn.net/v/t39.30808-6/614388964_921705314365677_8961878546008505667_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e1afaa&_nc_ohc=cWiVWoZCdHsQ7kNvwElTFxd&_nc_oc=Adlp6YtjKjtXDOWbod_fQyGG3oWSeZPSuRjXCam6B1nygyt4Z5tklBnFkxdzwCao5sdNO26XGtvsfx3cplrtab3k&_nc_zt=23&_nc_ht=scontent.fstv8-2.fna&_nc_gid=4a2GgXkafCbnMGOD8GRuEA&oh=00_AfpluZ5c4rScUVHEyzxOdZEAU0vCuqLBvij5dwn-7nDO9Q&oe=69713DB9',
    features: ['Video Surveillance Management', 'Intrusion Detection Monitoring', 'Vehicle Tracking (GPS)', 'Incident Management'],
    scope: 'Our state-of-the-art Command Centre acts as the "Central Brain" for all operations, utilizing AI-driven video analytics to detect anomalies instantly.',
    benefits: ['Immediate incident escalation', 'Centralized data logging', 'Cost-effective surveillance'],
    tech: 'Integration with major VMS platforms and AI-based facial/license plate recognition.'
  },
  'integrated-facility': {
    title: 'Integrated Facility Management',
    tagline: 'Seamless Soft & Hard Services',
    icon: Users,
    img: 'https://scontent.fstv8-2.fna.fbcdn.net/v/t39.30808-6/614388964_921705314365677_8961878546008505667_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e1afaa&_nc_ohc=cWiVWoZCdHsQ7YWbod_fQyGG3oWSeZPSuRjXCam6B1nygyt4Z5tklBnFkxdzwCao5sdNO26XGtvsfx3cplrtab3k&_nc_zt=23&_nc_ht=scontent.fstv8-2.fna&_nc_gid=4a2GgXkafCbnMGOD8GRuEA&oh=00_AfpluZ5c4rScUVHEyzxOdZEAU0vCuqLBvij5dwn-7nDO9Q&oe=69713DB9',
    features: ['Corporate Housekeeping', 'Electrical & Mechanical Maint.', 'Pest Control', 'Vendor Management'],
    scope: 'A one-stop solution for maintaining high-standard corporate environments, allowing you to focus on your core business goals.',
    benefits: ['Enhanced asset lifecycle', 'Consistent cleanliness standards', 'Simplified vendor billing'],
    tech: 'CAFM (Computer-Aided Facility Management) systems for ticket tracking.'
  },
  'cyber-security': {
    title: 'Cyber Security Solutions',
    tagline: 'Defending Your Digital Frontier',
    icon: Zap,
    img: 'https://scontent.fstv8-2.fna.fbcdn.net/v/t39.30808-6/614388964_921705314365677_8961878546008505667_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e1afaa&_nc_ohc=cWiVWoZCdHsQ7kNvwElTFxd&_nc_oc=Adlp6YtjKjtXDOWbod_fQyGG3oWSeZPSuRjXCam6B1nygyt4Z5tklBnFkxdzwCao5sdNO26XGtvsfx3cplrtab3k&_nc_zt=23&_nc_ht=scontent.fstv8-2.fna&_nc_gid=4a2GgXkafCbnMGOD8GRuEA&oh=00_AfpluZ5c4rScUVHEyzxOdZEAU0vCuqLBvij5dwn-7nDO9Q&oe=69713DB9',
    features: ['Vulnerability Assessment (VAPT)', 'Endpoint Protection', 'Firewall Management', 'Cyber Incident Response'],
    scope: 'In an era of digital warfare, we provide comprehensive defensive layers to protect your sensitive corporate data and IT infrastructure.',
    benefits: ['Protection against data breaches', 'Business continuity assurance', 'Compliance with data laws'],
    tech: 'Next-Gen Firewalls (NGFW) and SIEM (Security Information and Event Management).'
  },
  'electronic-security': {
    title: 'Electronic Security Solutions',
    tagline: 'Cutting-edge Hardware Integration',
    icon: BookOpen,
    img: 'https://scontent.fstv8-2.fna.fbcdn.net/v/t39.30808-6/614388964_921705314365677_8961878546008505667_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e1afaa&_nc_ohc=cWiVWoZCdHsQ7kNvwElTFxd&_nc_oc=Adlp6YtjKjtXDOWbod_fQyGG3oWSeZPSuRjXCam6B1nygyt4Z5tklBnFkxdzwCao5sdNO26XGtvsfx3cplrtab3k&_nc_zt=23&_nc_ht=scontent.fstv8-2.fna&_nc_gid=4a2GgXkafCbnMGOD8GRuEA&oh=00_AfpluZ5c4rScUVHEyzxOdZEAU0vCuqLBvij5dwn-7nDO9Q&oe=69713DB9',
    features: ['Biometric Access Control', 'Advanced IP CCTV Systems', 'Perimeter Intrusion Detection', 'BMS Integration'],
    scope: 'We design and install complex electronic security ecosystems tailored to the unique geometry and risk profile of your premises.',
    benefits: ['Elimination of unauthorized entry', 'High-definition evidence logs', 'Automated building safety'],
    tech: 'Smart IP-based cameras with thermal imaging and laser-based perimeter sensors.'
  }
};

export const ServicePage: React.FC = () => {
  const { serviceId } = useParams();
  const service = serviceId ? serviceDetails[serviceId] : null;

  if (!service) return <div className="pt-32 text-center h-screen">Service Not Found</div>;

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://scontent.fstv8-2.fna.fbcdn.net/v/t39.30808-6/614388964_921705314365677_8961878546008505667_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e1afaa&_nc_ohc=cWiVWoZCdHsQ7kNvwElTFxd&_nc_oc=Adlp6YtjKjtXDOWbod_fQyGG3oWSeZPSuRjXCam6B1nygyt4Z5tklBnFkxdzwCao5sdNO26XGtvsfx3cplrtab3k&_nc_zt=23&_nc_ht=scontent.fstv8-2.fna&_nc_gid=4a2GgXkafCbnMGOD8GRuEA&oh=00_AfpluZ5c4rScUVHEyzxOdZEAU0vCuqLBvij5dwn-7nDO9Q&oe=69713DB9')` }} />
        <div className="absolute inset-0 bg-[#0a1d37]/70" />
        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="flex items-center gap-2 mb-6 text-[#e63946] font-bold">
             <Link to="/" className="hover:text-white">Home</Link> <span>/</span> <span>Services</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4">{service.title}</h1>
          <p className="text-xl text-slate-300 max-w-2xl">{service.tagline}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-extrabold text-[#0a1d37] mb-8">Service Overview</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-10">{service.scope}</p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {service.features.map((f: string, i: number) => (
                  <div key={i} className="flex gap-4 p-6 bg-slate-50 rounded-2xl">
                    <CheckCircle className="text-[#e63946] flex-shrink-0" />
                    <span className="font-bold text-[#0a1d37]">{f}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-extrabold text-[#0a1d37] mb-8">Technology & Tools</h2>
              <div className="p-10 bg-[#0a1d37] text-white rounded-3xl mb-16">
                <Zap className="w-12 h-12 text-[#e63946] mb-6" />
                <p className="text-xl leading-relaxed">{service.tech}</p>
              </div>

              <h2 className="text-3xl font-extrabold text-[#0a1d37] mb-8">Benefits & Value Proposition</h2>
              <div className="space-y-6">
                {service.benefits.map((b: string, i: number) => (
                  <div key={i} className="flex items-center gap-4 text-slate-600">
                    <div className="w-2 h-2 rounded-full bg-[#e63946]" />
                    <span className="text-lg">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-10">
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
                <h3 className="text-xl font-extrabold text-[#0a1d37] mb-6">Our Services</h3>
                <div className="space-y-3">
                  {Object.entries(serviceDetails).map(([id, s]) => (
                    <Link 
                      key={id} 
                      to={`/services/${id}`}
                      className={`flex items-center justify-between p-4 rounded-xl font-bold transition-all ${serviceId === id ? 'bg-[#e63946] text-white' : 'bg-white hover:bg-slate-100 text-slate-700'}`}
                    >
                      {s.title.split(' ')[0]} {s.title.split(' ')[1]} <ChevronRight className="w-4 h-4" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-[#e63946] p-10 rounded-3xl text-white text-center">
                <h3 className="text-2xl font-extrabold mb-4">Ready for a Security Audit?</h3>
                <p className="mb-8 text-white/80">Get a specialized consultation for your specific needs.</p>
                <Link to="/get-quote" className="block w-full bg-[#0a1d37] text-white py-4 rounded-xl font-bold hover:bg-white hover:text-[#0a1d37] transition-all">
                  Request Audit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
