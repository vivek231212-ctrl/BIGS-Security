
import React from 'react';
import { Phone, Mail, Clock, Send } from 'lucide-react';

export const ContactCTA: React.FC = () => {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-white">
      <div className="container mx-auto px-[30px]">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <span className="text-[#D30000] font-black tracking-[0.4em] uppercase text-xs mb-6 block">Inquiry</span>
            <h2 className="text-4xl sm:text-6xl font-black text-black mt-3 mb-8 uppercase tracking-tighter">Connect with <br />Expertise</h2>
            <p className="text-black/60 mb-12 text-lg leading-relaxed font-medium">
              Ready to secure your operations? Consult with our security strategists for a tailored enterprise solution.
            </p>
            
            <div className="space-y-10">
              <div className="flex gap-8 group">
                <div className="flex-shrink-0 w-16 h-16 bg-[#F5F5F5] text-black group-hover:bg-[#D30000] group-hover:text-white rounded-md flex items-center justify-center transition-all">
                  <Phone className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-black text-black uppercase tracking-widest text-sm mb-1">Direct Line</h4>
                  <p className="text-black text-xl font-black">+91 261 2278091</p>
                </div>
              </div>
              
              <div className="flex gap-8 group">
                <div className="flex-shrink-0 w-16 h-16 bg-[#F5F5F5] text-black group-hover:bg-[#D30000] group-hover:text-white rounded-md flex items-center justify-center transition-all">
                  <Mail className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-black text-black uppercase tracking-widest text-sm mb-1">Electronic Mail</h4>
                  <p className="text-black text-xl font-black">ho.surat@bigs.in</p>
                </div>
              </div>

              <div className="flex gap-8 group">
                <div className="flex-shrink-0 w-16 h-16 bg-[#F5F5F5] text-black group-hover:bg-[#D30000] group-hover:text-white rounded-md flex items-center justify-center transition-all">
                  <Clock className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-black text-black uppercase tracking-widest text-sm mb-1">Working Hours</h4>
                  <p className="text-black text-xl font-black">Mon – Fri: 9:00 AM – 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-[#F5F5F5] p-10 sm:p-14 border border-slate-200">
            <h3 className="text-2xl font-black text-black mb-10 uppercase tracking-tight">Request Audit</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <input type="text" className="w-full px-6 py-4 bg-white border-2 border-transparent focus:border-[#D30000] outline-none transition-all font-bold" placeholder="NAME" />
                <input type="text" className="w-full px-6 py-4 bg-white border-2 border-transparent focus:border-[#D30000] outline-none transition-all font-bold" placeholder="ORGANIZATION" />
              </div>
              <input type="email" className="w-full px-6 py-4 bg-white border-2 border-transparent focus:border-[#D30000] outline-none transition-all font-bold" placeholder="EMAIL" />
              <select className="w-full px-6 py-4 bg-white border-2 border-transparent focus:border-[#D30000] outline-none transition-all font-bold appearance-none">
                <option>SELECT SERVICE</option>
                <option>SECURITY GUARDING</option>
                <option>FACILITY MGMT</option>
                <option>TECH SURVEILLANCE</option>
              </select>
              <textarea rows={4} className="w-full px-6 py-4 bg-white border-2 border-transparent focus:border-[#D30000] outline-none transition-all font-bold" placeholder="REQUIRMENTS"></textarea>
              <button className="w-full bg-[#D30000] text-white py-5 font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-black transition-all shadow-xl">
                SEND REQUEST <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
