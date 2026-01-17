
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, FileText, Globe, Lock } from 'lucide-react';

export const CertificationsPage: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Hero Banner */}
      <section className="relative py-[7.5px] bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url('https://scontent.fstv8-2.fna.fbcdn.net/v/t39.30808-6/614388964_921705314365677_8961878546008505667_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e1afaa&_nc_ohc=cWiVWoZCdHsQ7YWbod_fQyGG3oWSeZPSuRjXCam6B1nygyt4Z5tklBnFkxdzwCao5sdNO26XGtvsfx3cplrtab3k&_nc_zt=23&_nc_ht=scontent.fstv8-2.fna&_nc_gid=4a2GgXkafCbnMGOD8GRuEA&oh=00_AfpluZ5c4rScUVHEyzxOdZEAU0vCuqLBvij5dwn-7nDO9Q&oe=69713DB9')` }} />
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <h1 className="text-5xl font-extrabold mb-6">Compliance & Certifications</h1>
          <div className="flex items-center justify-center gap-2 text-slate-300 font-medium">
            <Link to="/" className="hover:text-white">Home</Link> <span>/</span> <span className="text-white">Certifications</span>
          </div>
        </div>
      </section>

      <section className="py-[7.5px] bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <ShieldCheck className="w-16 h-16 text-[#e63946] mx-auto mb-6" />
            <h2 className="text-4xl font-extrabold text-[#0a1d37] mb-6">Our Commitment to Quality</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              At BIGS Support Services, we adhere to the highest international and national standards. Our certifications are a testament to our rigorous operational protocols and ethical standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { title: 'ISO 9001:2015', sub: 'Quality Management Systems', desc: 'Standardized delivery processes across all service lines.', icon: FileText },
              { title: 'PSARA License', sub: 'Private Security Agency Regulation', desc: 'Full compliance with Home Ministry regulations in all 28 states.', icon: Lock },
              { title: 'OHSAS 18001', sub: 'Health & Safety Standard', desc: 'Ensuring the welfare of our 45,000+ member workforce.', icon: ShieldCheck },
              { title: 'ISO 14001', sub: 'Environmental Management', desc: 'Sustainable facility management practices for a greener future.', icon: Globe },
              { title: 'MSME Certified', sub: 'Govt. of India', desc: 'Recognized partner for government projects and initiatives.', icon: FileText },
              { title: 'CAPSI Member', sub: 'Central Assoc. of Private Security', desc: 'Active contribution to industry standards and advocacy.', icon: ShieldCheck },
            ].map((cert, i) => (
              <div key={i} className="p-10 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-2xl hover:bg-white transition-all">
                <cert.icon className="w-10 h-10 text-[#e63946] mb-6" />
                <h4 className="text-2xl font-extrabold text-[#0a1d37] mb-2">{cert.title}</h4>
                <p className="text-[#e63946] font-bold text-sm uppercase tracking-widest mb-4">{cert.sub}</p>
                <p className="text-slate-500 leading-relaxed">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[7.5px] bg-[#f8fafc]">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-extrabold text-[#0a1d37] mb-12">Regulatory Compliance Statement</h3>
          <div className="max-w-4xl mx-auto bg-white p-12 rounded-3xl shadow-xl border border-slate-200">
            <p className="text-slate-600 text-lg leading-relaxed mb-8 italic">
              "We strictly maintain all statutory requirements including PF, ESI, Minimum Wages Act, and Professional Tax compliance. BIGS Support Services operates with 100% transparency, ensuring that our clients are protected from any legal liabilities related to manpower outsourcing."
            </p>
            <div className="font-bold text-[#0a1d37] uppercase tracking-widest">Compliance Audit Team, BIGS</div>
          </div>
        </div>
      </section>
    </div>
  );
};