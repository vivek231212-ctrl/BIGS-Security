
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, FileText, Globe, Lock } from 'lucide-react';

export const CertificationsPage: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Hero Banner */}
      <section className="relative py-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url('https://scontent.fstv8-2.fna.fbcdn.net/o1/v/t0/f2/m340/AQNPQ6zGdT-Xsh22JLtg9uXEGW6ifJ-XEyj6a9Az5iFY5eslxMFLsc81MtKbzGMUQdIRKbATg8_6DDMQG9_sFOniwyIb-B2FwctsbOTGqlcxXB2GjUwKu0OIyzYA2UyAoaSRcJtlyrC36-rv55xlsrERrjn5gw.jpeg?_nc_ht=scontent.fstv8-2.fna.fbcdn.net&_nc_gid=_mWePih3sRlTuOtdfVRvXA&_nc_cat=107&_nc_oc=AdkyIQh5whkLKEzOWvzcJybZ5lVohmaGNqpehl2Q_VObhdkhhY4BWVRe6pxFMgvepyfzpEyWwGYic3ognv9MgZeV&ccb=9-4&oh=00_Afr1k4MH4oqI8mKvfmTgxDPLOwy1XelfzOLNAFdJqk_nIA&oe=696D74E2&_nc_sid=5b3566')` }} />
        <div className="container mx-auto px-[30px] relative z-10 text-center text-white">
          <h2 className="text-4xl sm:text-5xl font-black mb-6 uppercase tracking-tighter">Compliance</h2>
          <div className="flex items-center justify-center gap-2 text-slate-300 font-black uppercase text-xs tracking-widest">
            <Link to="/" className="hover:text-[#D30000]">Home</Link> <span>/</span> <span className="text-white">Certifications</span>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-[30px]">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <ShieldCheck className="w-16 h-16 text-[#D30000] mx-auto mb-6" />
            <span className="text-[#D30000] font-black tracking-[0.4em] uppercase text-xs mb-4 block">Quality Standards</span>
            <h2 className="text-4xl sm:text-6xl font-black text-black mb-6 uppercase tracking-tighter">Our Commitment</h2>
            <p className="text-black/60 text-lg leading-relaxed font-medium">
              At BIGS Support Services, we adhere to the highest international and national standards. Our certifications are a testament to our rigorous operational protocols and ethical standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'ISO 9001:2015', sub: 'Quality Management', desc: 'Standardized delivery processes across all service lines.', icon: FileText },
              { title: 'PSARA License', sub: 'PSAR Act 2005', desc: 'Full compliance with Home Ministry regulations in all states.', icon: Lock },
              { title: 'OHSAS 18001', sub: 'Health & Safety', desc: 'Ensuring the welfare of our 45,000+ member workforce.', icon: ShieldCheck },
              { title: 'ISO 14001', sub: 'Environmental', desc: 'Sustainable facility management practices for a greener future.', icon: Globe },
              { title: 'MSME Certified', sub: 'Govt. of India', desc: 'Recognized partner for government projects and initiatives.', icon: FileText },
              { title: 'CAPSI Member', sub: 'Industry Assoc.', desc: 'Active contribution to national security standards and advocacy.', icon: ShieldCheck },
            ].map((cert, i) => (
              <div key={i} className="p-12 bg-[#F5F5F5] border-b-8 border-transparent hover:border-[#D30000] transition-all group">
                <cert.icon className="w-12 h-12 text-black group-hover:text-[#D30000] mb-8 transition-colors" />
                <h4 className="text-2xl font-black text-black mb-2 uppercase tracking-tight">{cert.title}</h4>
                <p className="text-[#D30000] font-black text-[10px] uppercase tracking-[0.2em] mb-6">{cert.sub}</p>
                <p className="text-black/60 leading-relaxed font-medium">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-[30px] text-center">
          <h3 className="text-3xl font-black text-black mb-12 uppercase tracking-tight">Statutory Compliance Statement</h3>
          <div className="max-w-4xl mx-auto bg-white p-16 border-l-8 border-[#D30000] shadow-2xl">
            <p className="text-black text-xl italic font-medium leading-relaxed mb-8">
              "We strictly maintain all statutory requirements including PF, ESI, Minimum Wages Act, and Professional Tax compliance. BIGS Support Services operates with 100% transparency, ensuring that our clients are protected from any legal liabilities related to manpower outsourcing."
            </p>
            <div className="font-black text-black uppercase tracking-[0.3em] text-xs">Compliance Audit Division, BIGS Corporate</div>
          </div>
        </div>
      </section>
    </div>
  );
};
