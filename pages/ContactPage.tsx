
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Headset, Share2 } from 'lucide-react';
import { ContactCTA } from '../components/ContactCTA.tsx';

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-24">
      <section className="relative py-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url('https://scontent.fstv8-2.fna.fbcdn.net/o1/v/t0/f2/m340/AQPZsZyv8hW8iA6x2oub_tYSLGimXq63xYIfeq3u6cVWcAFkkqB2rkvMBvUXFk0BeQrwfMmJgITsFYkOV0Ji-Xwo7iHRdHQe4ofuHIlwYju0Nu3835oEkgIFTG-uZ4ljpSIzz1KTRYsUJB_jxvtBROSp1cWE7Q.jpeg?_nc_ht=scontent.fstv8-2.fna.fbcdn.net&_nc_gid=_mWePih3sRlTuOtdfVRvXA&_nc_cat=109&_nc_oc=AdmnuyiFYJ4p-HhUMbMrUtmFKm_HKbTlc5IL1pnLlo5d2KMMMbb9Cud5c1q2HjuxIiq_WCEm8FkTgLnOXQojrN4y&ccb=9-4&oh=00_AfoqC3zyGItJuFXS8fXeEhUW63-ZHfGVVNIqxruXFSy_7g&oe=696D6CEC&_nc_sid=5b3566')` }} />
        <div className="container mx-auto px-[30px] relative z-10 text-center text-white">
          <h2 className="text-4xl sm:text-5xl font-black mb-6 uppercase tracking-tighter">Contact</h2>
          <div className="flex items-center justify-center gap-2 text-slate-300 font-black uppercase text-xs tracking-widest">
            <Link to="/" className="hover:text-[#D30000]">Home</Link> <span>/</span> <span className="text-white">Contact</span>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-[30px]">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-[#F5F5F5] p-12 border-b-8 border-transparent hover:border-[#D30000] transition-all group">
              <Headset className="w-12 h-12 text-black group-hover:text-[#D30000] mb-10 transition-colors" />
              <h4 className="text-2xl font-black text-black mb-6 uppercase tracking-tight">Support</h4>
              <p className="text-black/60 mb-8 font-medium">Our help desk is available for instant operational support across India.</p>
              <div className="space-y-4">
                <a href="tel:+912612278091" className="flex items-center gap-4 font-black text-black hover:text-[#D30000] uppercase text-xs tracking-widest">
                   <Phone className="w-5 h-5 text-[#D30000]" /> +91 261 2278091
                </a>
                <a href="mailto:ho.surat@bigs.in" className="flex items-center gap-4 font-black text-black hover:text-[#D30000] uppercase text-xs tracking-widest">
                   <Mail className="w-5 h-5 text-[#D30000]" /> ho.surat@bigs.in
                </a>
              </div>
            </div>

            <div className="bg-[#F5F5F5] p-12 border-b-8 border-transparent hover:border-[#D30000] transition-all group">
              <Clock className="w-12 h-12 text-black group-hover:text-[#D30000] mb-10 transition-colors" />
              <h4 className="text-2xl font-black text-black mb-6 uppercase tracking-tight">Hours</h4>
              <p className="text-black/60 mb-8 font-medium">Standard corporate operating hours at our Gujarat headquarters.</p>
              <div className="space-y-3 text-black font-black uppercase text-[10px] tracking-widest">
                <p>MON - FRI: 09:00 - 18:00</p>
                <p>SATURDAY: 10:00 - 14:00</p>
                <p className="text-[#D30000]">24/7 COMMAND OPS ACTIVE</p>
              </div>
            </div>

            <div className="bg-[#F5F5F5] p-12 border-b-8 border-transparent hover:border-[#D30000] transition-all group">
              <Share2 className="w-12 h-12 text-black group-hover:text-[#D30000] mb-10 transition-colors" />
              <h4 className="text-2xl font-black text-black mb-6 uppercase tracking-tight">Media</h4>
              <p className="text-black/60 mb-8 font-medium">Stay updated with our latest deployments and security insights.</p>
              <div className="flex gap-4">
                {['FB', 'TW', 'LI', 'IG'].map(s => (
                  <button key={s} className="w-12 h-12 bg-black text-white font-black text-[10px] tracking-widest hover:bg-[#D30000] transition-all shadow-lg">
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="h-[600px] w-full relative overflow-hidden">
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none w-full px-6">
           <div className="bg-white p-12 shadow-2xl text-center border-l-8 border-[#D30000] max-w-md mx-auto">
              <div className="w-16 h-16 bg-[#F5F5F5] text-[#D30000] rounded-md flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8" />
              </div>
              <p className="text-black text-2xl font-black mb-4 uppercase tracking-tighter">Visit Headquarters</p>
              <p className="text-black/60 font-bold leading-relaxed mb-10 uppercase text-[10px] tracking-widest">
                102, Western Plaza, Udhna Main Road, Surat, Gujarat 394210, India
              </p>
              <div className="pointer-events-auto">
                <a 
                  href="https://maps.app.goo.gl/FRL5ocm1CH2ChjTcA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-black text-white px-10 py-5 font-black uppercase text-xs tracking-widest hover:bg-[#D30000] transition-all shadow-xl"
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
