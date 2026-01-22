
import React from 'react';
import { Link } from 'react-router-dom';
import { UserPlus, Upload, Send, Briefcase, GraduationCap, Users, User, Phone, Mail, ChevronDown, FileText } from 'lucide-react';

export const CareerPage: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Hero Banner */}
      <section className="relative py-16 sm:py-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url('https://scontent.fstv8-2.fna.fbcdn.net/o1/v/t0/f2/m421/AQNES8Jzbl8FVSTzyUNvW06wq3IovY2FmpmXEREtXg7cYFU7c0RbayfcFnrXyDubcnTd4WXFUET7z12cFRFgK9R0WKCqAr6fz461uul3NPQGneRMzRH6rwFCCH0FvTPWqAD7F56RkP3dSQSWBS7KTVuwoZlT5g.jpeg?stp=s600x337&_nc_ht=scontent.fstv8-2.fna.fbcdn.net&_nc_gid=zMGZlZaotLrA0G4Z20-z9w&_nc_cat=109&_nc_oc=AdmHc7R1R4CwMoCMkClbYxe8nFHR3kWg67tvwzyZPLIJAEUcFi41aMEJak6dAGqjwUgIzjttVMr895ycDk2wBg3y&ccb=9-4&oh=00_Afrwh_V-m9dXz3VNcjCWDk2jL3F8SBlcD9wU1kbF9M0DKg&oe=696D5D84&_nc_sid=5b3566')` }} />
        <div className="w-full px-6 sm:px-[30px] relative z-10 text-center text-white">
          <h2 className="text-3xl sm:text-5xl font-black mb-4 sm:mb-6 uppercase tracking-tighter">Careers</h2>
          <div className="flex items-center justify-center gap-2 text-slate-300 font-black uppercase text-[10px] tracking-widest">
            <Link to="/" className="hover:text-[#D30000]">Home</Link> <span>/</span> <span className="text-white">Join the Force</span>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-24 bg-white">
        <div className="w-full px-6 sm:px-[30px]">
          <div className="text-center mb-16">
            <span className="text-[#D30000] font-black tracking-[0.4em] uppercase text-xs mb-4 block">Our Culture</span>
            <h2 className="text-4xl sm:text-6xl font-black text-black uppercase tracking-tighter">Grow With BIGS</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="p-10 bg-[#F5F5F5] border-l-4 border-[#D30000]">
              <GraduationCap className="w-12 h-12 text-[#D30000] mb-6" />
              <h4 className="text-xl font-black uppercase tracking-tight mb-4">Training Excellence</h4>
              <p className="text-black/60 font-medium">Professional development through our residential academies and modern tactical modules.</p>
            </div>
            <div className="p-10 bg-[#F5F5F5] border-l-4 border-[#D30000]">
              <Briefcase className="w-12 h-12 text-[#D30000] mb-6" />
              <h4 className="text-xl font-black uppercase tracking-tight mb-4">Career Stability</h4>
              <p className="text-black/60 font-medium">Long-term opportunities with competitive benefits and a culture of performance recognition.</p>
            </div>
            <div className="p-10 bg-[#F5F5F5] border-l-4 border-[#D30000]">
              <Users className="w-12 h-12 text-[#D30000] mb-6" />
              <h4 className="text-xl font-black uppercase tracking-tight mb-4">Pan-India Network</h4>
              <p className="text-black/60 font-medium">Opportunity to serve across 28 states with the most respected enterprise clients in India.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Redesigned Application Portal Section */}
      <section className="py-24 bg-[#F8FAFC] border-y border-slate-200">
        <div className="w-full px-6 sm:px-[30px]">
          <div id="application-portal" className="max-w-7xl mx-auto scroll-mt-32">
            <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
              <div className="text-left">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-1 bg-[#D30000]"></div>
                  <span className="text-[#D30000] font-black tracking-[0.4em] uppercase text-[11px]">Recruitment 2024</span>
                </div>
                <h3 className="text-4xl sm:text-6xl font-black text-black uppercase tracking-tighter leading-none">Application Dossier</h3>
                <p className="text-slate-500 font-medium mt-6 max-w-xl">Complete your operational profile below. Our HR division reviews submissions within 48 business hours.</p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Portal Status</span>
                <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full border border-emerald-100">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-[10px] font-black uppercase tracking-widest">Accepting Responses</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] overflow-hidden border border-slate-200">
              <form onSubmit={e => e.preventDefault()}>
                {/* Modern Table Header */}
                <div className="hidden lg:grid grid-cols-12 gap-0 bg-slate-50 border-b border-slate-100 py-8 px-10 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                  <div className="col-span-3 flex items-center gap-2"><User className="w-3.5 h-3.5" /> Full Identity</div>
                  <div className="col-span-2 flex items-center gap-2"><Phone className="w-3.5 h-3.5" /> Contact Line</div>
                  <div className="col-span-2 flex items-center gap-2"><Mail className="w-3.5 h-3.5" /> Digital Mail</div>
                  <div className="col-span-2 flex items-center gap-2"><Briefcase className="w-3.5 h-3.5" /> Target Role</div>
                  <div className="col-span-2 text-center flex items-center justify-center gap-2"><FileText className="w-3.5 h-3.5" /> Documents</div>
                  <div className="col-span-1 text-right">Commit</div>
                </div>

                {/* Table Body / Entry Row */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 p-4 lg:p-0 group hover:bg-slate-50 transition-colors duration-500">
                  {/* Name Field */}
                  <div className="lg:col-span-3 lg:p-10 lg:border-r border-slate-100 relative">
                    <label className="lg:hidden text-[9px] font-black uppercase text-slate-400 mb-2 block tracking-widest">Applicant Name</label>
                    <div className="relative group/input">
                      <User className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within/input:text-[#D30000] transition-colors" />
                      <input 
                        type="text" 
                        placeholder="LEGAL NAME"
                        className="w-full pl-8 pr-4 py-3 bg-transparent border-b border-slate-200 focus:border-[#D30000] outline-none font-black uppercase text-sm tracking-tight transition-all placeholder:text-slate-300"
                      />
                    </div>
                  </div>

                  {/* Mobile Field */}
                  <div className="lg:col-span-2 lg:p-10 lg:border-r border-slate-100">
                    <label className="lg:hidden text-[9px] font-black uppercase text-slate-400 mt-8 mb-2 block tracking-widest">Contact Line</label>
                    <div className="relative group/input">
                      <Phone className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within/input:text-[#D30000] transition-colors" />
                      <input 
                        type="tel" 
                        placeholder="+91 MOBILE"
                        className="w-full pl-8 pr-4 py-3 bg-transparent border-b border-slate-200 focus:border-[#D30000] outline-none font-black uppercase text-sm tracking-tight transition-all placeholder:text-slate-300"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="lg:col-span-2 lg:p-10 lg:border-r border-slate-100">
                    <label className="lg:hidden text-[9px] font-black uppercase text-slate-400 mt-8 mb-2 block tracking-widest">Digital Mail</label>
                    <div className="relative group/input">
                      <Mail className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within/input:text-[#D30000] transition-colors" />
                      <input 
                        type="email" 
                        placeholder="OFFICIAL EMAIL"
                        className="w-full pl-8 pr-4 py-3 bg-transparent border-b border-slate-200 focus:border-[#D30000] outline-none font-black uppercase text-sm tracking-tight transition-all placeholder:text-slate-300"
                      />
                    </div>
                  </div>

                  {/* Role Field */}
                  <div className="lg:col-span-2 lg:p-10 lg:border-r border-slate-100 relative">
                    <label className="lg:hidden text-[9px] font-black uppercase text-slate-400 mt-8 mb-2 block tracking-widest">Target Role</label>
                    <div className="relative group/input">
                      <Briefcase className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within/input:text-[#D30000] transition-colors pointer-events-none" />
                      <select className="w-full pl-8 pr-8 py-3 bg-transparent border-b border-slate-200 focus:border-[#D30000] outline-none font-black uppercase text-sm tracking-tight transition-all appearance-none cursor-pointer">
                        <option value="">CHOOSE POSITION</option>
                        <option value="guard">Security Specialist</option>
                        <option value="supervisor">Field Supervisor</option>
                        <option value="ops">Ops Manager</option>
                        <option value="facility">Facility Lead</option>
                      </select>
                      <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within/input:text-[#D30000] transition-colors pointer-events-none" />
                    </div>
                  </div>

                  {/* Documentation Field */}
                  <div className="lg:col-span-2 lg:p-10 lg:border-r border-slate-100 text-center flex items-center justify-center">
                    <label className="lg:hidden text-[9px] font-black uppercase text-slate-400 mt-8 mb-4 block tracking-widest">Identity Proof</label>
                    <label className="flex items-center justify-center gap-3 bg-slate-900 text-white hover:bg-[#D30000] transition-all py-4 px-6 rounded-xl cursor-pointer text-[9px] font-black uppercase tracking-[0.2em] w-full shadow-lg group/upload">
                      <Upload className="w-3.5 h-3.5 group-hover/upload:-translate-y-0.5 transition-transform" />
                      <span>UPLOAD CV</span>
                      <input type="file" className="hidden" />
                    </label>
                  </div>

                  {/* Final Submit Field */}
                  <div className="lg:col-span-1 flex items-center justify-center p-6 lg:p-0">
                    <button className="w-full lg:h-full bg-white lg:bg-transparent text-black hover:bg-[#D30000] hover:text-white transition-all duration-300 group/btn flex items-center justify-center py-6 lg:py-0 border-t lg:border-t-0 border-slate-100">
                      <div className="flex flex-col items-center gap-1">
                        <Send className="w-6 h-6 lg:w-8 lg:h-8 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        <span className="lg:hidden font-black uppercase tracking-widest text-[11px] mt-2">Submit File</span>
                      </div>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 px-4">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                      <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="user" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
                  +240 applicants joined this week
                </p>
              </div>
              <p className="text-slate-400 text-[9px] font-black uppercase tracking-[0.2em] max-w-xs text-center sm:text-right">
                All data is encrypted. We comply with GDPR & Indian Information Technology Act standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="w-full px-6 sm:px-[30px] text-center">
          <h3 className="text-2xl sm:text-3xl font-black text-black mb-10 sm:mb-12 uppercase tracking-tight">Recruitment Ethics</h3>
          <div className="max-w-4xl mx-auto bg-white p-8 sm:p-16 border-l-8 border-[#D30000] shadow-2xl">
            <p className="text-black text-lg sm:text-xl italic font-medium leading-relaxed mb-6 sm:mb-8">
              "BIGS Support Services is an equal opportunity employer. We maintain a zero-tolerance policy towards recruitment fees and middlemen. All our recruitment processes are direct, transparent, and based solely on merit."
            </p>
            <div className="font-black text-black uppercase tracking-[0.3em] text-[10px] sm:text-xs">Human Resources Division, BIGS Corporate</div>
          </div>
        </div>
      </section>
    </div>
  );
};
