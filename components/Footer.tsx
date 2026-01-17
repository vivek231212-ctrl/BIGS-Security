
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a1d37] text-white pt-24 pb-12 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-16 mb-20">
          <div>
            <div className="flex items-center gap-2 mb-8">
              <div className="bg-[#e63946] p-2 rounded-lg">
                <Shield className="text-white w-6 h-6" />
              </div>
              <div>
                <h1 className="font-bold text-2xl leading-none">BIGS</h1>
                <p className="text-[10px] font-medium tracking-widest text-slate-400">SUPPORT SERVICES</p>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed mb-4">
              Protecting progress through excellence in security and facility management solutions across India since 1998.
            </p>
            <p className="text-[10px] font-semibold text-slate-500 mb-8 uppercase tracking-widest">CIN: U74920GJ2007PTC050129</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#e63946] transition-all"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#e63946] transition-all"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#e63946] transition-all"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#e63946] transition-all"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8">Company</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors">Our Gallery</Link></li>
              <li><Link to="/certifications" className="hover:text-white transition-colors">Certifications</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/get-quote" className="hover:text-white transition-colors">Get a Quote</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8">Specialized Services</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/services/physical-guarding" className="hover:text-white transition-colors">Physical Guarding</Link></li>
              <li><Link to="/services/command-centre" className="hover:text-white transition-colors">Command Centre</Link></li>
              <li><Link to="/services/integrated-facility" className="hover:text-white transition-colors">Facility Management</Link></li>
              <li><Link to="/services/cyber-security" className="hover:text-white transition-colors">Cyber Security</Link></li>
              <li><Link to="/services/electronic-security" className="hover:text-white transition-colors">Electronic Security</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8">Head Office</h4>
            <p className="text-slate-400 mb-2">Udhna Main Road,</p>
            <p className="text-slate-400 mb-6">Surat, Gujarat, India</p>
            <p className="text-slate-400 mb-2">T: +91 261 2278091</p>
            <p className="text-slate-400">E: ho.surat@bigs.in</p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-center">
          <p className="text-slate-500 text-sm">
            © 2024 BIGS Support Services Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      <button onClick={scrollToTop} className="absolute -top-6 right-10 bg-[#e63946] text-white p-4 rounded-2xl shadow-2xl hover:-translate-y-2 transition-all group">
        <ArrowUp className="w-6 h-6 group-hover:animate-bounce" />
      </button>
    </footer>
  );
};
