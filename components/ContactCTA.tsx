import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export const ContactCTA: React.FC = () => {
  return (
    <section id="contact" className="py-[25px] bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-[#e63946] font-bold tracking-widest uppercase text-sm">Get In Touch</span>
            <h2 className="text-4xl font-extrabold text-[#0a1d37] mt-3 mb-6">Let's Secure Your Business Together</h2>
            <p className="text-slate-500 mb-10 text-lg leading-relaxed">
              Have questions about our services or need a customized security assessment? Our experts are ready to help.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-[#e63946]">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0a1d37] mb-1">Call Us Directly</h4>
                  <p className="text-slate-500 font-medium">+91 261 2278091</p>
                  <p className="text-slate-500 font-medium">24/7 Support Available</p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-[#e63946]">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0a1d37] mb-1">Email Support</h4>
                  <p className="text-slate-500 font-medium">ho.surat@bigs.in</p>
                  <p className="text-slate-500 font-medium">inquiry@bigs.in</p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-[#e63946]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0a1d37] mb-1">Head Office</h4>
                  <p className="text-slate-500 font-medium">Udhna Main Road, Surat, Gujarat - 394210</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 shadow-xl">
            <h3 className="text-2xl font-bold text-[#0a1d37] mb-8">Request a Free Audit</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                  <input type="text" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#e63946] focus:border-transparent transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Company Name</label>
                  <input type="text" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#e63946] focus:border-transparent transition-all" placeholder="Tech Corp" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                <input type="email" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#e63946] focus:border-transparent transition-all" placeholder="john@example.com" />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Interested Service</label>
                <select className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#e63946] focus:border-transparent transition-all appearance-none bg-white">
                  <option>Security Guarding</option>
                  <option>Electronic Surveillance</option>
                  <option>Facility Management</option>
                  <option>Executive Protection</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Brief Message</label>
                <textarea rows={4} className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#e63946] focus:border-transparent transition-all" placeholder="Tell us about your requirements..."></textarea>
              </div>
              
              <button className="w-full bg-[#0a1d37] text-white py-5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#e63946] transition-all shadow-lg group">
                Submit Request <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};