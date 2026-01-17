
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-black pt-24 pb-12 relative border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-16 mb-20">
          <div>
            <div className="flex items-center gap-2 mb-8">
              <div className="bg-[#e63946] p-2 rounded-lg">
                <Shield className="text-white w-6 h-6" />
              </div>
              <div>
                <h1 className="font-black text-2xl leading-none text-black">BIGS</h1>
                <p className="text-[10px] font-bold tracking-widest text-black/40">SUPPORT SERVICES</p>
              </div>
            </div>
            <p className="text-black leading-relaxed mb-6 font-medium">
              Protecting progress through excellence in security and facility management solutions across India since 1998.
            </p>
            <p className="text-[10px] font-black text-[#e63946] mb-8 uppercase tracking-widest">CIN: U74920GJ2007PTC050129</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-100 text-[#e63946] rounded-full flex items-center justify-center hover:bg-[#e63946] hover:text-white transition-all"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 bg-slate-100 text-[#e63946] rounded-full flex items-center justify-center hover:bg-[#e63946] hover:text-white transition-all"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 bg-slate-100 text-[#e63946] rounded-full flex items-center justify-center hover:bg-[#e63946] hover:text-white transition-all"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 bg-slate-100 text-[#e63946] rounded-full flex items-center justify-center hover:bg-[#e63946] hover:text-white transition-all"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-black mb-8 uppercase tracking-wider">Company</h4>
            <ul className="space-y-4 font-bold">
              <li><Link to="/about" className="text-black/60 hover:text-[#e63946] transition-colors">About Us</Link></li>
              <li><Link to="/gallery" className="text-black/60 hover:text-[#e63946] transition-colors">Our Gallery</Link></li>
              <li><Link to="/certifications" className="text-black/60 hover:text-[#e63946] transition-colors">Certifications</Link></li>
              <li><Link to="/contact" className="text-black/60 hover:text-[#e63946] transition-colors">Contact Us</Link></li>
              <li><Link to="/get-quote" className="text-black/60 hover:text-[#e63946] transition-colors">Get a Quote</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-black mb-8 uppercase tracking-wider">Services</h4>
            <ul className="space-y-4 font-bold">
              <li><Link to="/services/physical-guarding" className="text-black/60 hover:text-[#e63946] transition-colors">Physical Guarding</Link></li>
              <li><Link to="/services/command-centre" className="text-black/60 hover:text-[#e63946] transition-colors">Command Centre</Link></li>
              <li><Link to="/services/integrated-facility" className="text-black/60 hover:text-[#e63946] transition-colors">Facility Management</Link></li>
              <li><Link to="/services/cyber-security" className="text-black/60 hover:text-[#e63946] transition-colors">Cyber Security</Link></li>
              <li><Link to="/services/electronic-security" className="text-black/60 hover:text-[#e63946] transition-colors">Electronic Security</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-black mb-8 uppercase tracking-wider">Head Office</h4>
            <div className="font-bold space-y-4">
              <p className="text-black">Udhna Main Road,<br />Surat, Gujarat, India</p>
              <div className="space-y-1">
                <p className="text-black/60">T: <span className="text-black">+91 261 2278091</span></p>
                <p className="text-black/60">E: <span className="text-black">ho.surat@bigs.in</span></p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-center">
          <p className="text-black/40 text-xs font-bold uppercase tracking-widest">
            © 2024 BIGS Support Services Pvt. Ltd.
          </p>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-black/40">
            <a href="#" className="hover:text-[#e63946] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#e63946] transition-colors">Terms</a>
          </div>
        </div>
      </div>

      <button onClick={scrollToTop} className="absolute -top-8 right-10 bg-black text-white p-5 rounded-2xl shadow-2xl hover:bg-[#e63946] hover:-translate-y-2 transition-all group">
        <ArrowUp className="w-6 h-6 group-hover:animate-bounce" />
      </button>
    </footer>
  );
};
