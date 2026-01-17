
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Headset, Share2 } from 'lucide-react';
import { ContactCTA } from '../components/ContactCTA.tsx';

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-24">
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url('https://picsum.photos/seed/contact-bg/1920/600')` }} />
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <h1 className="text-5xl font-extrabold mb-6">Contact Us</h1>
          <div className="flex items-center justify-center gap-2 text-slate-300 font-medium">
            <Link to="/" className="hover:text-white">Home</Link> <span>/</span> <span className="text-white">Contact</span>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
              <Headset className="w-10 h-10 text-[#e63946] mb-6" />
              <h4 className="text-xl font-extrabold text-[#0a1d37] mb-4">Support & Inquiry</h4>
              <p className="text-slate-500 mb-6">Our help desk is available for instant operational support across Gujarat and India.</p>
              <div className="space-y-4">
                <a href="tel:+912612278091" className="flex items-center gap-3 font-bold text-[#0a1d37] hover:text-[#e63946]">
                   <Phone className="w-5 h-5" /> +91 261 2278091
                </a>
                <a href="mailto:ho.surat@bigs.in" className="flex items-center gap-3 font-bold text-[#0a1d37] hover:text-[#e63946]">
                   <Mail className="w-5 h-5" /> ho.surat@bigs.in
                </a>
              </div>
            </div>

            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
              <Clock className="w-10 h-10 text-[#e63946] mb-6" />
              <h4 className="text-xl font-extrabold text-[#0a1d37] mb-4">Office Hours</h4>
              <p className="text-slate-500 mb-6">Standard administrative and corporate operating hours at our Surat HQ.</p>
              <div className="space-y-2 text-slate-600 font-medium">
                <p>Monday - Friday: 09:00 - 18:00</p>
                <p>Saturday: 10:00 - 14:00</p>
                <p className="text-[#e63946] font-bold">24/7 Support Available</p>
              </div>
            </div>

            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
              <Share2 className="w-10 h-10 text-[#e63946] mb-6" />
              <h4 className="text-xl font-extrabold text-[#0a1d37] mb-4">Follow Us</h4>
              <p className="text-slate-500 mb-6">Stay updated with our latest deployments and security insights.</p>
              <div className="flex gap-4">
                {['FB', 'TW', 'LI', 'IG'].map(s => (
                  <button key={s} className="w-12 h-12 bg-white rounded-xl shadow-sm hover:bg-[#e63946] hover:text-white transition-all font-bold text-slate-400">
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[500px] w-full bg-slate-200 overflow-hidden relative">
        <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-bold z-10">
           <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl text-center">
              <MapPin className="w-10 h-10 text-[#e63946] mx-auto mb-4" />
              <p className="text-[#0a1d37] text-xl font-extrabold">Visit Our Headquarters</p>
              <p className="text-slate-600">Udhna Main Road, Surat, Gujarat</p>
           </div>
        </div>
        <img src="https://picsum.photos/seed/surat-map/1920/500" className="w-full h-full object-cover opacity-50 grayscale" alt="Map" />
      </section>

      <ContactCTA />
    </div>
  );
};
