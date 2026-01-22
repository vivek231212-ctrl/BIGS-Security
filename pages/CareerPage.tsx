
import React from 'react';
import { Link } from 'react-router-dom';
import { UserPlus, Upload, Send, Briefcase, GraduationCap, Users } from 'lucide-react';

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

      {/* Application Portal Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="w-full px-6 sm:px-[30px]">
          <div id="application-portal" className="max-w-7xl mx-auto scroll-mt-32">
            <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
              <div className="text-center md:text-left">
                <span className="text-[#D30000] font-black tracking-[0.4em] uppercase text-[10px] mb-2 block">HR Management</span>
                <h3 className="text-3xl sm:text-5xl font-black text-black uppercase tracking-tighter">Application Portal</h3>
              </div>
              <div className="flex items-center gap-4 bg-[#F5F5F5] px-6 py-4 rounded-lg">
                <UserPlus className="text-[#D30000] w-6 h-6" />
                <span className="text-xs font-black uppercase tracking-widest text-black">New Personnel Registration</span>
              </div>
            </div>

            <div className="bg-white border border-slate-200 shadow-2xl overflow-hidden">
              <form onSubmit={e => e.preventDefault()}>
                {/* Responsive Table Header (Hidden on Mobile) */}
                <div className="hidden lg:grid grid-cols-12 gap-0 bg-black text-white py-6 px-8 text-[10px] font-black uppercase tracking-widest">
                  <div className="col-span-3">Applicant Name</div>
                  <div className="col-span-2">Mobile Number</div>
                  <div className="col-span-2">Email Address</div>
                  <div className="col-span-2">Select Role</div>
                  <div className="col-span-2 text-center">Documentation</div>
                  <div className="col-span-1 text-right">Action</div>
                </div>

                {/* Table Row / Form Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 p-8 lg:p-0 items-center lg:border-b lg:border-slate-100">
                  <div className="lg:col-span-3 lg:p-6 lg:border-r border-slate-100">
                    <label className="lg:hidden text-[9px] font-black uppercase text-[#D30000] mb-2 block tracking-widest">Applicant Name</label>
                    <input 
                      type="text" 
                      placeholder="ENTER FULL NAME"
                      className="w-full px-4 py-3 bg-[#F5F5F5] lg:bg-transparent border-2 border-transparent focus:border-[#D30000] outline-none font-bold uppercase text-xs tracking-tight transition-all"
                    />
                  </div>
                  <div className="lg:col-span-2 lg:p-6 lg:border-r border-slate-100">
                    <label className="lg:hidden text-[9px] font-black uppercase text-[#D30000] mb-2 block tracking-widest">Mobile Number</label>
                    <input 
                      type="tel" 
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3 bg-[#F5F5F5] lg:bg-transparent border-2 border-transparent focus:border-[#D30000] outline-none font-bold uppercase text-xs tracking-tight transition-all"
                    />
                  </div>
                  <div className="lg:col-span-2 lg:p-6 lg:border-r border-slate-100">
                    <label className="lg:hidden text-[9px] font-black uppercase text-[#D30000] mb-2 block tracking-widest">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="EMAIL@EXAMPLE.COM"
                      className="w-full px-4 py-3 bg-[#F5F5F5] lg:bg-transparent border-2 border-transparent focus:border-[#D30000] outline-none font-bold uppercase text-xs tracking-tight transition-all"
                    />
                  </div>
                  <div className="lg:col-span-2 lg:p-6 lg:border-r border-slate-100">
                    <label className="lg:hidden text-[9px] font-black uppercase text-[#D30000] mb-2 block tracking-widest">Select Role</label>
                    <select className="w-full px-4 py-3 bg-[#F5F5F5] lg:bg-transparent border-2 border-transparent focus:border-[#D30000] outline-none font-bold uppercase text-xs tracking-tight transition-all appearance-none">
                      <option value="">CHOOSE ROLE</option>
                      <option value="guard">Security Guard</option>
                      <option value="housekeeping">Housekeeping</option>
                      <option value="manpower">Industrial Manpower</option>
                    </select>
                  </div>
                  <div className="lg:col-span-2 lg:p-6 lg:border-r border-slate-100 text-center">
                    <label className="lg:hidden text-[9px] font-black uppercase text-[#D30000] mb-2 block tracking-widest">Documentation</label>
                    <label className="flex items-center justify-center gap-2 bg-[#F5F5F5] hover:bg-black hover:text-white transition-all py-3 px-4 rounded cursor-pointer text-[10px] font-black uppercase tracking-widest">
                      <Upload className="w-4 h-4" />
                      <span>ATTACH FILE</span>
                      <input type="file" className="hidden" />
                    </label>
                  </div>
                  <div className="lg:col-span-1 lg:p-6 text-right">
                    <button className="w-full lg:w-auto bg-[#D30000] text-white p-4 lg:p-5 hover:bg-black transition-all shadow-xl group flex items-center justify-center">
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      <span className="lg:hidden ml-4 font-black uppercase tracking-widest text-sm">Submit Application</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <p className="mt-6 text-center text-black/40 text-[9px] font-black uppercase tracking-[0.2em]">
              Note: Uploaded documents must be in PDF or Image format and under 5MB.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F5F5F5]">
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
