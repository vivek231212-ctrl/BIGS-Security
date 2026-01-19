
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-black pt-24 pb-12 relative border-t-8 border-[#D30000]">
      <div className="container mx-auto px-[30px]">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-16 mb-20">
          <div>
            <div className="flex items-center gap-3 mb-10">
              <img 
                src="https://bigs.in/lobo.jpeg" 
                alt="BIGS Logo" 
                className="h-14 w-auto object-contain"
              />
              <div className="flex flex-col">
                <h1 className="font-black text-2xl leading-none text-black uppercase tracking-tight">BIGS</h1>
                <p className="text-[10px] font-bold tracking-[0.2em] text-[#D30000]">SUPPORT SERVICES</p>
              </div>
            </div>
            <p className="text-black/60 leading-relaxed mb-8 font-medium">
              Protecting progress through excellence in security and facility management across the Indian subcontinent since 1998.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 bg-black text-white rounded-md flex items-center justify-center hover:bg-[#D30000] transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-black mb-10 uppercase tracking-[0.3em] text-[#D30000]">Company</h4>
            <ul className="space-y-4 font-black uppercase text-xs tracking-widest">
              <li><Link to="/about" className="hover:text-[#D30000] transition-colors">About Us</Link></li>
              <li><Link to="/gallery" className="hover:text-[#D30000] transition-colors">Gallery</Link></li>
              <li><Link to="/certifications" className="hover:text-[#D30000] transition-colors">Compliance</Link></li>
              <li><Link to="/contact" className="hover:text-[#D30000] transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black mb-10 uppercase tracking-[0.3em] text-[#D30000]">Divisions</h4>
            <ul className="space-y-4 font-black uppercase text-xs tracking-widest">
              <li><Link to="/services/physical-guarding" className="hover:text-[#D30000] transition-colors">Guarding</Link></li>
              <li><Link to="/services/command-centre" className="hover:text-[#D30000] transition-colors">Command Center</Link></li>
              <li><Link to="/services/integrated-facility" className="hover:text-[#D30000] transition-colors">Facility Mgmt</Link></li>
              <li><Link to="/services/electronic-security" className="hover:text-[#D30000] transition-colors">E-Surveillance</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black mb-10 uppercase tracking-[0.3em] text-[#D30000]">Headquarters</h4>
            <div className="font-bold space-y-6 text-sm">
              <p className="text-black">102, Western Plaza,<br />Udhna Main Road, Surat,<br />Gujarat, India - 394210</p>
              <div className="space-y-2">
                <p className="text-black/60 uppercase text-[10px] tracking-widest">Contact Lines</p>
                <p className="text-black font-black">+91 261 2278091</p>
                <p className="text-black font-black">ho.surat@bigs.in</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-black/40 text-[10px] font-black uppercase tracking-widest">
            © 2024 BIGS Support Services Pvt. Ltd. | All Rights Reserved
          </p>
          <div className="flex gap-10 text-[10px] font-black uppercase tracking-widest text-black/40">
            <a href="#" className="hover:text-[#D30000] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#D30000] transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>

      <button onClick={scrollToTop} className="absolute -top-6 right-10 bg-[#D30000] text-white p-4 rounded-md shadow-2xl hover:bg-black hover:-translate-y-2 transition-all group">
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
};
