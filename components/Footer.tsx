
import React from 'react';
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
            <p className="text-slate-400 leading-relaxed mb-8">
              Protecting progress through excellence in security and facility management solutions across India since 1998.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#e63946] transition-all"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#e63946] transition-all"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#e63946] transition-all"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#e63946] transition-all"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#about" className="hover:text-white transition-colors">About Company</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">Sectors Served</a></li>
              <li><a href="#tech" className="hover:text-white transition-colors">Technology</a></li>
              <li><a href="#careers" className="hover:text-white transition-colors">Career Opportunities</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8">Specialized Services</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Cash Logistics</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Electronic Security</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Facility Management</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Executive Protection</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Investigations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8">Newsletter</h4>
            <p className="text-slate-400 mb-6">Subscribe for security insights and company updates.</p>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <input type="email" className="w-full bg-white/10 border border-white/20 px-6 py-4 rounded-xl focus:outline-none focus:border-[#e63946]" placeholder="Your email" />
              <button className="absolute right-2 top-2 bottom-2 bg-[#e63946] px-4 rounded-lg hover:bg-[#c32f3a] transition-all">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © 2024 BIGS Support Services Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>

      <button 
        onClick={scrollToTop}
        className="absolute -top-6 right-10 bg-[#e63946] text-white p-4 rounded-2xl shadow-2xl hover:-translate-y-2 transition-all group"
      >
        <ArrowUp className="w-6 h-6 group-hover:animate-bounce" />
      </button>
    </footer>
  );
};
