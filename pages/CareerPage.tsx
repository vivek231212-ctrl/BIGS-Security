
import React from 'react';
import { Link } from 'react-router-dom';
import { Upload, Send, Briefcase, GraduationCap, Users } from 'lucide-react';

export const CareerPage: React.FC = () => {
  return (
    <div className="pt-24 bg-white">
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
      <section className="py-20 bg-white">
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

      {/* Application Portal Section - Updated font color to black for inputs */}
      <section className="py-24 bg-white">
        <div className="w-full px-6 sm:px-[30px] overflow-x-auto">
          <div className="max-w-7xl mx-auto min-w-[1000px] shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
            {/* Table Header - Solid Black */}
            <div className="bg-black text-white grid grid-cols-12 items-center">
              <div className="col-span-3 py-6 px-10 text-[10px] font-black uppercase tracking-widest text-left">Applicant Name</div>
              <div className="col-span-2 py-6 px-4 text-[10px] font-black uppercase tracking-widest text-center">Mobile Number</div>
              <div className="col-span-2 py-6 px-4 text-[10px] font-black uppercase tracking-widest text-center">Email Address</div>
              <div className="col-span-2 py-6 px-4 text-[10px] font-black uppercase tracking-widest text-center">Select Role</div>
              <div className="col-span-2 py-6 px-4 text-[10px] font-black uppercase tracking-widest text-center">Documentation</div>
              <div className="col-span-1 py-6 px-4 text-[10px] font-black uppercase tracking-widest text-center">Action</div>
            </div>

            {/* Table Body Row - White with Gray Dividers */}
            <form onSubmit={e => e.preventDefault()} className="bg-white grid grid-cols-12 items-center border border-slate-100">
              {/* Name Field */}
              <div className="col-span-3 h-36 flex items-center px-10 border-r border-slate-100">
                <input 
                  type="text" 
                  placeholder="ENTER FULL NAME"
                  className="w-full bg-transparent outline-none font-black text-black text-[11px] placeholder:text-[#A0AEC0] tracking-tight uppercase"
                />
              </div>

              {/* Mobile Field */}
              <div className="col-span-2 h-36 flex items-center px-4 border-r border-slate-100 justify-center">
                <input 
                  type="tel" 
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full bg-transparent outline-none font-black text-black text-[11px] text-center placeholder:text-[#A0AEC0] tracking-tight uppercase"
                />
              </div>

              {/* Email Field */}
              <div className="col-span-2 h-36 flex items-center px-4 border-r border-slate-100 justify-center">
                <input 
                  type="email" 
                  placeholder="EMAIL@EXAMPLE.C"
                  className="w-full bg-transparent outline-none font-black text-black text-[11px] text-center placeholder:text-[#A0AEC0] tracking-tight uppercase"
                />
              </div>

              {/* Role Field */}
              <div className="col-span-2 h-36 flex items-center px-4 border-r border-slate-100 justify-center">
                <div className="relative w-full text-center">
                  <select className="bg-transparent outline-none font-black text-black text-[12px] appearance-none cursor-pointer w-full text-center uppercase tracking-tight">
                    <option value="">CHOOSE ROLE</option>
                    <option value="guard">Security Specialist</option>
                    <option value="supervisor">Operations Supervisor</option>
                    <option value="manager">Facility Manager</option>
                  </select>
                </div>
              </div>

              {/* Documentation Button */}
              <div className="col-span-2 h-36 flex items-center justify-center px-8 border-r border-slate-100">
                <label className="flex items-center justify-center gap-2 bg-[#F7F8F9] hover:bg-[#EDF2F7] transition-colors py-4 px-6 rounded-md cursor-pointer w-full group">
                  <Upload className="w-4 h-4 text-black" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-black">Attach File</span>
                  <input type="file" className="hidden" />
                </label>
              </div>

              {/* Red Action Button */}
              <div className="col-span-1 h-36 flex items-center justify-center px-4">
                <button className="bg-[#D30000] text-white w-14 h-14 rounded-md shadow-[0_4px_20px_rgba(211,0,0,0.3)] flex items-center justify-center hover:bg-black transition-all group">
                  <Send className="w-6 h-6 rotate-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>

          <div className="max-w-7xl mx-auto mt-10 text-center">
            <p className="text-[#A0AEC0] text-[10px] font-black uppercase tracking-[0.25em]">
              Note: Uploaded documents must be in PDF or Image format and under 5MB.
            </p>
          </div>
        </div>
      </section>

      {/* Recruitment Ethics Section */}
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
