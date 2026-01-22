
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, FileText, Globe, Lock, Download, UserPlus, Upload, Send } from 'lucide-react';

export const CertificationsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    role: '',
  });

  const handleDownload = (certTitle: string) => {
    const content = `Certification: ${certTitle}\nIssued to: BIGS Support Services Pvt. Ltd.\nStatus: Valid & Verified`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${certTitle.replace(/\s+/g, '_')}_Certificate.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const certifications = [
    { title: 'ISO 9001:2015', sub: 'Quality Management', desc: 'Standardized delivery processes across all service lines.', icon: FileText },
    { title: 'PSARA License', sub: 'PSAR Act 2005', desc: 'Full compliance with Home Ministry regulations in all states.', icon: Lock },
    { title: 'OHSAS 18001', sub: 'Health & Safety', desc: 'Ensuring the welfare of our 45,000+ member workforce.', icon: ShieldCheck },
    { title: 'ISO 14001', sub: 'Environmental', desc: 'Sustainable facility management practices for a greener future.', icon: Globe },
    { title: 'MSME Certified', sub: 'Govt. of India', desc: 'Recognized partner for government projects and initiatives.', icon: FileText },
    { title: 'CAPSI Member', sub: 'Industry Assoc.', desc: 'Active contribution to national security standards and advocacy.', icon: ShieldCheck },
  ];

  return (
    <div className="pt-24">
      {/* Hero Banner */}
      <section className="relative py-16 sm:py-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url('https://scontent.fstv8-2.fna.fbcdn.net/o1/v/t0/f2/m340/AQNPQ6zGdT-Xsh22JLtg9uXEGW6ifJ-XEyj6a9Az5iFY5eslxMFLsc81MtKbzGMUQdIRKbATg8_6DDMQG9_sFOniwyIb-B2FwctsbOTGqlcxXB2GjUwKu0OIyzYA2UyAoaSRcJtlyrC36-rv55xlsrERrjn5gw.jpeg?_nc_ht=scontent.fstv8-2.fna.fbcdn.net&_nc_gid=_mWePih3sRlTuOtdfVRvXA&_nc_cat=107&_nc_oc=AdkyIQh5whkLKEzOWvzcJybZ5lVohmaGNqpehl2Q_VObhdkhhY4BWVRe6pxFMgvepyfzpEyWwGYic3ognv9MgZeV&ccb=9-4&oh=00_Afr1k4MH4oqI8mKvfmTgxDPLOwy1XelfzOLNAFdJqk_nIA&oe=696D74E2&_nc_sid=5b3566')` }} />
        <div className="w-full px-6 sm:px-[30px] relative z-10 text-center text-white">
          <h2 className="text-3xl sm:text-5xl font-black mb-4 sm:mb-6 uppercase tracking-tighter">Compliance</h2>
          <div className="flex items-center justify-center gap-2 text-slate-300 font-black uppercase text-[10px] tracking-widest">
            <Link to="/" className="hover:text-[#D30000]">Home</Link> <span>/</span> <span className="text-white">Certifications</span>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="w-full px-6 sm:px-[30px]">
          <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
            <ShieldCheck className="w-12 h-12 sm:w-16 sm:h-16 text-[#D30000] mx-auto mb-6" />
            <span className="text-[#D30000] font-black tracking-[0.4em] uppercase text-xs mb-4 block">Quality Standards</span>
            <h2 className="text-3xl sm:text-6xl font-black text-black mb-6 uppercase tracking-tighter">Our Commitment</h2>
            <p className="text-black/60 text-base sm:text-lg leading-relaxed font-medium">
              At BIGS Support Services, we adhere to the highest international and national standards. Our certifications are a testament to our rigorous operational protocols and ethical standards.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
            {certifications.map((cert, i) => (
              <div key={i} className="p-8 sm:p-12 bg-[#F5F5F5] border-b-8 border-transparent hover:border-[#D30000] transition-all group flex flex-col">
                <cert.icon className="w-10 h-10 sm:w-12 sm:h-12 text-black group-hover:text-[#D30000] mb-6 sm:mb-8 transition-colors" />
                <h4 className="text-xl sm:text-2xl font-black text-black mb-2 uppercase tracking-tight">{cert.title}</h4>
                <p className="text-[#D30000] font-black text-[9px] uppercase tracking-[0.2em] mb-4 sm:mb-6">{cert.sub}</p>
                <p className="text-black/60 leading-relaxed font-medium mb-8 sm:mb-10 flex-grow text-sm sm:text-base">{cert.desc}</p>
                
                <button 
                  onClick={() => handleDownload(cert.title)}
                  className="flex items-center justify-center gap-3 bg-black text-white px-5 sm:px-6 py-4 rounded-md font-black uppercase text-[9px] sm:text-[10px] tracking-widest hover:bg-[#D30000] transition-all shadow-lg mt-auto"
                >
                  <Download className="w-4 h-4" />
                  Download Certificate
                </button>
              </div>
            ))}
          </div>

          {/* New Application Portal Section */}
          <div className="max-w-7xl mx-auto border-t border-slate-100 pt-20">
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

      <section className="py-16 sm:py-24 bg-[#F5F5F5]">
        <div className="w-full px-6 sm:px-[30px] text-center">
          <h3 className="text-2xl sm:text-3xl font-black text-black mb-10 sm:mb-12 uppercase tracking-tight">Statutory Compliance Statement</h3>
          <div className="max-w-4xl mx-auto bg-white p-8 sm:p-16 border-l-8 border-[#D30000] shadow-2xl">
            <p className="text-black text-lg sm:text-xl italic font-medium leading-relaxed mb-6 sm:mb-8">
              "We strictly maintain all statutory requirements including PF, ESI, Minimum Wages Act, and Professional Tax compliance. BIGS Support Services operates with 100% transparency, ensuring that our clients are protected from any legal liabilities related to manpower outsourcing."
            </p>
            <div className="font-black text-black uppercase tracking-[0.3em] text-[10px] sm:text-xs">Compliance Audit Division, BIGS Corporate</div>
          </div>
        </div>
      </section>
    </div>
  );
};
