
import React from 'react';
import { Shield, Send, CheckCircle } from 'lucide-react';

export const QuotePage: React.FC = () => {
  return (
    <div className="pt-24 bg-[#F5F5F5] min-h-screen pb-24">
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-[30px] text-center">
          <Shield className="w-16 h-16 text-[#D30000] mx-auto mb-8" />
          <h2 className="text-4xl sm:text-6xl font-black mb-6 uppercase tracking-tighter">Enterprise Quote</h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto font-medium">
            Tell us about your requirements and our security experts will design a tailored solution for your organization.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-[30px] -mt-24 relative z-10">
        <div className="max-w-5xl mx-auto bg-white shadow-2xl overflow-hidden border border-slate-200">
          <div className="grid md:grid-cols-3">
            <div className="md:col-span-1 bg-black p-12 text-white border-r border-white/10">
              <h3 className="text-sm font-black text-[#D30000] mb-12 uppercase tracking-[0.3em]">Next Steps</h3>
              <div className="space-y-12">
                {[
                  { n: '1', t: 'Analysis', d: 'We analyze your inputs within 4 hours.' },
                  { n: '2', t: 'Consultation', d: 'A security expert calls for assessment.' },
                  { n: '3', t: 'Proposal', d: 'Receive a transparent commercial offer.' },
                ].map((step, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#D30000] text-white flex items-center justify-center font-black text-lg">{step.n}</div>
                    <div>
                      <h5 className="font-black mb-1 uppercase tracking-tight">{step.t}</h5>
                      <p className="text-white/40 text-xs font-medium">{step.d}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-24 pt-12 border-t border-white/10">
                 <p className="text-[10px] font-black text-[#D30000] uppercase tracking-widest mb-4">Immediate Assistance</p>
                 <p className="text-2xl font-black">+91 261 2278091</p>
              </div>
            </div>

            <div className="md:col-span-2 p-12 sm:p-16">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-10">
                <div className="grid sm:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="block text-[10px] font-black text-black uppercase tracking-widest">Representative Name</label>
                    <input type="text" className="w-full px-6 py-5 bg-[#F5F5F5] border-2 border-transparent focus:border-[#D30000] outline-none transition-all font-bold" placeholder="FULL NAME" />
                  </div>
                  <div className="space-y-4">
                    <label className="block text-[10px] font-black text-black uppercase tracking-widest">Corporate Email</label>
                    <input type="email" className="w-full px-6 py-5 bg-[#F5F5F5] border-2 border-transparent focus:border-[#D30000] outline-none transition-all font-bold" placeholder="OFFICIAL EMAIL" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="block text-[10px] font-black text-black uppercase tracking-widest">Organization Name</label>
                    <input type="text" className="w-full px-6 py-5 bg-[#F5F5F5] border-2 border-transparent focus:border-[#D30000] outline-none transition-all font-bold" placeholder="COMPANY NAME" />
                  </div>
                  <div className="space-y-4">
                    <label className="block text-[10px] font-black text-black uppercase tracking-widest">Operating Region</label>
                    <input type="text" className="w-full px-6 py-5 bg-[#F5F5F5] border-2 border-transparent focus:border-[#D30000] outline-none transition-all font-bold" placeholder="CITY / STATE" />
                  </div>
                </div>

                <div className="space-y-6">
                  <label className="block text-[10px] font-black text-black uppercase tracking-widest">Solutions Required</label>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {['Guarding', 'Facility Mgmt', 'Cyber Security', 'Tech Solutions'].map(s => (
                      <label key={s} className="flex items-center gap-4 p-5 bg-[#F5F5F5] border-2 border-transparent hover:border-[#D30000] cursor-pointer transition-all">
                        <input type="checkbox" className="w-4 h-4 accent-[#D30000]" />
                        <span className="text-xs font-black uppercase tracking-widest text-black">{s}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="block text-[10px] font-black text-black uppercase tracking-widest">Scale & Scope</label>
                  <textarea rows={4} className="w-full px-6 py-5 bg-[#F5F5F5] border-2 border-transparent focus:border-[#D30000] outline-none transition-all font-bold" placeholder="BRIEF DESCRIPTION OF YOUR SITE OR REQUIREMENTS..."></textarea>
                </div>

                <div className="bg-[#F5F5F5] p-8 border-l-4 border-[#D30000] flex items-start gap-4">
                   <CheckCircle className="text-[#D30000] w-5 h-5 flex-shrink-0 mt-0.5" />
                   <p className="text-[10px] text-black font-bold leading-relaxed uppercase tracking-tight">
                     By submitting this inquiry, you agree to our privacy policy and consent to receiving a commercial proposal via official communication channels.
                   </p>
                </div>

                <button className="w-full bg-[#D30000] text-white py-6 font-black uppercase tracking-[0.2em] flex items-center justify-center gap-4 hover:bg-black transition-all shadow-2xl group">
                  Send Proposal Request <Send className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
