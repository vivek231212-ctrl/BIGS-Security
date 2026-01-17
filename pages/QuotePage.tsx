
import React from 'react';
import { Shield, Send, CheckCircle } from 'lucide-react';

export const QuotePage: React.FC = () => {
  return (
    <div className="pt-24 bg-slate-50 min-h-screen pb-24">
      <section className="py-20 bg-[#0a1d37] text-white">
        <div className="container mx-auto px-6 text-center">
          <Shield className="w-16 h-16 text-[#e63946] mx-auto mb-6" />
          <h1 className="text-5xl font-extrabold mb-6">Get a Custom Quote</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Tell us about your requirements and our security experts will design a tailored solution for your enterprise.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 -mt-20 relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
          <div className="grid md:grid-cols-3">
            <div className="md:col-span-1 bg-slate-900 p-10 text-white">
              <h3 className="text-2xl font-bold mb-8">What happens next?</h3>
              <div className="space-y-10">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#e63946] flex items-center justify-center font-bold">1</div>
                  <div>
                    <h5 className="font-bold mb-1">Requirement Analysis</h5>
                    <p className="text-slate-400 text-sm">We analyze your inputs within 4 hours.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#e63946] flex items-center justify-center font-bold">2</div>
                  <div>
                    <h5 className="font-bold mb-1">Expert Consultation</h5>
                    <p className="text-slate-400 text-sm">A security manager calls for deep assessment.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#e63946] flex items-center justify-center font-bold">3</div>
                  <div>
                    <h5 className="font-bold mb-1">Final Quote</h5>
                    <p className="text-slate-400 text-sm">Receive a transparent commercial proposal.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-20 pt-10 border-t border-white/10">
                 <p className="text-sm font-medium text-slate-500 mb-2">Need immediate help?</p>
                 <p className="text-lg font-bold">+91 261 2278091</p>
              </div>
            </div>

            <div className="md:col-span-2 p-12">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-3">Your Name *</label>
                    <input type="text" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#e63946] outline-none transition-all" placeholder="Johnathan Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-3">Corporate Email *</label>
                    <input type="email" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#e63946] outline-none transition-all" placeholder="john@company.com" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-3">Company Name *</label>
                    <input type="text" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#e63946] outline-none transition-all" placeholder="Enter Company" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-3">Location *</label>
                    <input type="text" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#e63946] outline-none transition-all" placeholder="City, State" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3">Service Interest *</label>
                  <div className="grid grid-cols-2 gap-4">
                    {['Physical Guarding', 'Facility Management', 'Cyber Security', 'E-Security'].map(s => (
                      <label key={s} className="flex items-center gap-3 p-4 border border-slate-200 rounded-xl cursor-pointer hover:border-[#e63946] transition-colors">
                        <input type="checkbox" className="w-4 h-4 accent-[#e63946]" />
                        <span className="text-sm font-medium text-slate-600">{s}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3">Expected Manpower / Scale</label>
                  <textarea rows={4} className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#e63946] outline-none transition-all" placeholder="Briefly describe your site size or required number of personnel..."></textarea>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl flex items-start gap-4">
                   <CheckCircle className="text-emerald-500 w-5 h-5 flex-shrink-0 mt-1" />
                   <p className="text-xs text-slate-500 leading-relaxed">
                     By submitting this form, you agree to our privacy policy and consent to receiving a commercial proposal via email/phone.
                   </p>
                </div>

                <button className="w-full bg-[#e63946] text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-[#0a1d37] transition-all shadow-xl text-lg group">
                  Send Proposal Request <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
