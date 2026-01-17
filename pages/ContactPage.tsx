
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Headset, Share2 } from 'lucide-react';
import { ContactCTA } from '../components/ContactCTA.tsx';

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-24">
      <section className="relative py-[25px] bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url('https://scontent.fstv8-2.fna.fbcdn.net/o1/v/t0/f2/m340/AQPZsZyv8hW8iA6x2oub_tYSLGimXq63xYIfeq3u6cVWcAFkkqB2rkvMBvUXFk0BeQrwfMmJgITsFYkOV0Ji-Xwo7iHRdHQe4ofuHIlwYju0Nu3835oEkgIFTG-uZ4ljpSIzz1KTRYsUJB_jxvtBROSp1cWE7Q.jpeg?_nc_ht=scontent.fstv8-2.fna.fbcdn.net&_nc_gid=_mWePih3sRlTuOtdfVRvXA&_nc_cat=109&_nc_oc=AdmnuyiFYJ4p-HhUMbMrUtmFKm_HKbTlc5IL1pnLlo5d2KMMMbb9Cud5c1q2HjuxIiq_WCEm8FkTgLnOXQojrN4y&ccb=9-4&oh=00_AfoqC3zyGItJuFXS8fXeEhUW63-ZHfGVVNIqxruXFSy_7g&oe=696D6CEC&_nc_sid=5b3566')` }} />
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <h1 className="text-5xl font-extrabold mb-6">Contact Us</h1>
          <div className="flex items-center justify-center gap-2 text-slate-300 font-medium">
            <Link to="/" className="hover:text-white">Home</Link> <span>/</span> <span className="text-white">Contact</span>
          </div>
        </div>
      </section>

      <section className="py-[25px] bg-white">
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

      {/* Interactive Google Map Section */}
      <section className="h-[500px] w-full relative overflow-hidden">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m13!1d3721.1444393282496!2d72.83151807503468!3d21.146654580532296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0502123f85021%3A0x673966089304380!2sBIGS%20Support%20Services%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1715856424032!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="BIGS Support Services Location"
          className="grayscale contrast-125"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
           <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl text-center border border-white/20 max-w-sm">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-[#e63946]" />
              </div>
              <p className="text-[#0a1d37] text-2xl font-black mb-2 uppercase tracking-tight">Visit Headquarters</p>
              <p className="text-slate-600 font-bold leading-relaxed">
                102, Western Plaza, Udhna Main Road, Surat, Gujarat 394210
              </p>
              <div className="mt-6">
                <a 
                  href="https://maps.app.goo.gl/FRL5ocm1CH2ChjTcA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-[#0a1d37] text-white px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-widest hover:bg-[#e63946] transition-all pointer-events-auto"
                >
                  Get Directions
                </a>
              </div>
           </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
};
