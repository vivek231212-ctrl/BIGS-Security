
import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Eye, Shield, Award, Users, MapPin, CheckCircle, Map } from 'lucide-react';
import { Leadership } from '../components/Leadership.tsx';

export const AboutPage: React.FC = () => {
  const coverageStates = [
    { name: 'Gujarat', region: 'West' },
    { name: 'Maharashtra', region: 'West' },
    { name: 'Rajasthan', region: 'North' },
    { name: 'Madhya Pradesh', region: 'Central' },
    { name: 'Chhattisgarh', region: 'Central' },
    { name: 'Uttar Pradesh', region: 'North' },
    { name: 'Delhi', region: 'North' },
    { name: 'DNH & Daman', region: 'UT' },
  ];

  return (
    <div className="pt-24">
      {/* Hero Banner */}
      <section className="relative py-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url('https://scontent.fstv8-2.fna.fbcdn.net/o1/v/t0/f2/m421/AQP0ROyxzy-Wol3hJbnb_GiwdHqO1MAMyilYNxpVhSZUZGsHa3y5n2wKdqClmj6AunWN8uu9x7wm-phFwtnSCDr6z4NS5IjvAahR9ZSKaGkTfujAh74z5VXuwPuVZe8KVNpr0JgiWyp0SfAgCTGFMxlYSE-hpQ.jpeg?stp=s600x337&_nc_ht=scontent.fstv8-2.fna.fbcdn.net&_nc_gid=zMGZlZaotLrA0G4Z20-z9w&_nc_cat=102&_nc_oc=AdnVifxNCZgM8FaJsCcRmcSkG2ru3pMasRbvYff39-5Si4h9ju6Rm96zb7qXz-9CJyYXVa-ElvOfWDZBBVz1Q06v&ccb=9-4&oh=00_AfpbiyTOzVVTxP4Ft3uDy1GyV9UvvN91XRU71O7jKiHvfw&oe=696D6F85&_nc_sid=5b3566')` }} />
        <div className="container mx-auto px-[30px] relative z-10 text-center text-white">
          <h2 className="text-4xl sm:text-5xl font-black mb-6 uppercase tracking-tighter">About Us</h2>
          <div className="flex items-center justify-center gap-2 text-slate-300 font-black uppercase text-xs tracking-widest">
            <Link to="/" className="hover:text-[#D30000]">Home</Link>
            <span>/</span>
            <span className="text-white">About Us</span>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-[30px]">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#D30000] font-black tracking-[0.4em] uppercase text-xs mb-4 block">Our Essence</span>
              <h2 className="text-4xl sm:text-5xl font-black text-black mt-3 mb-8 uppercase tracking-tighter leading-tight">India's Premier Protection Partner</h2>
              <p className="text-black/60 leading-relaxed mb-6 font-medium text-lg">
                Founded in 1998, BIGS Support Services has evolved from a local guarding agency in Surat into a national powerhouse in security and facility management. We believe that security is the bedrock of progress.
              </p>
              <p className="text-black/60 leading-relaxed mb-10 font-medium text-lg">
                With our headquarters in Gujarat and a footprint across 28 states, we serve as the invisible shield behind some of the most critical infrastructures in India.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  'ISO 9001:2015 Certified',
                  'PAN India Presence',
                  'Ex-Military Leadership',
                  'Tech-Enabled Operations'
                ].map((text, i) => (
                  <div key={i} className="flex gap-4 items-center">
                    <CheckCircle className="text-[#D30000] flex-shrink-0 w-5 h-5" />
                    <span className="font-black text-black uppercase tracking-tight text-sm">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden shadow-[30px_30px_0px_0px_rgba(211,0,0,1)] border-8 border-white">
                <img src="https://scontent.fstv8-2.fna.fbcdn.net/o1/v/t0/f2/m421/AQNKl6KWFqpNqKN8aKf9sgtgWbUvMLes9sz851cOfObSCzWIJNVXmaMCprrfHNB9tO7NXjV01_ij-tf0V6iHB7wFyUYwW_Djl980Nr7hp2oQzg_4e6a8un9NO2sMfdQW45kwzWJuJNP0_bG4u1sykChAyT2d.jpeg?stp=s600x337&_nc_ht=scontent.fstv8-2.fna.fbcdn.net&_nc_gid=zMGZlZaotLrA0G4Z20-z9w&_nc_cat=104&_nc_oc=Adkwg608n8giViMrSkMLOk9xcCIXN_hKmvBN7zzPNDIaI_yFydiJXUWwkTt387T-y9s_pFqKhpgYyf6bPETUme40&ccb=9-4&oh=00_AfqWTJKhFqY_q28jqxlYW5AQsFw_IsnB9sX_y4cgLGcLYQ&oe=696D60D7&_nc_sid=5b3566" alt="Team" className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-black p-10 hidden md:block border-l-8 border-[#D30000]">
                <Shield className="text-[#D30000] w-12 h-12 mb-4" />
                <p className="text-white text-3xl font-black tracking-tighter">25+ Years</p>
                <p className="text-[#D30000] font-black uppercase tracking-[0.2em] text-[10px]">Industry Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-[30px]">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-12 hover:shadow-2xl transition-all border-b-8 border-transparent hover:border-[#D30000] group">
              <div className="w-16 h-16 bg-black text-white group-hover:bg-[#D30000] flex items-center justify-center mb-8 transition-colors">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-black text-black mb-6 uppercase tracking-tight">Our Mission</h3>
              <p className="text-black/60 leading-relaxed text-lg font-medium">
                To provide unparalleled security and facility solutions by blending human intelligence with cutting-edge technology, ensuring safety and efficiency for our clients nationwide.
              </p>
            </div>
            <div className="bg-white p-12 hover:shadow-2xl transition-all border-b-8 border-transparent hover:border-[#D30000] group">
              <div className="w-16 h-16 bg-black text-white group-hover:bg-[#D30000] flex items-center justify-center mb-8 transition-colors">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-black text-black mb-6 uppercase tracking-tight">Our Vision</h3>
              <p className="text-black/60 leading-relaxed text-lg font-medium">
                To be the most trusted and innovative integrated services provider in the world, empowering enterprises to focus on their core growth while we secure their environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Leadership />

      {/* Coverage Map Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-[30px]">
          <div className="text-center mb-16">
            <span className="text-[#D30000] font-black tracking-[0.4em] uppercase text-xs mb-4 block">National Presence</span>
            <h2 className="text-4xl sm:text-6xl font-black text-black uppercase tracking-tighter">Coverage Map</h2>
            <p className="text-black/60 mt-6 max-w-2xl mx-auto font-medium text-lg">
              Strategic deployment across key industrial and corporate hubs in India. Our centralized command operations support these major regions 24/7.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {coverageStates.map((state, i) => (
              <div key={i} className="bg-[#F5F5F5] p-8 sm:p-10 border-b-4 border-transparent hover:border-[#D30000] transition-all group flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-black text-white group-hover:bg-[#D30000] flex items-center justify-center rounded-lg mb-6 transition-colors">
                  <MapPin className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-black text-black uppercase tracking-tight mb-2">{state.name}</h4>
                <p className="text-[#D30000] font-black uppercase text-[10px] tracking-widest">{state.region} Region</p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-10 bg-black text-white rounded-2xl flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-[#D30000] rounded-full flex items-center justify-center shrink-0">
                <Map className="w-8 h-8 text-white" />
              </div>
              <div>
                <h5 className="text-2xl font-black uppercase tracking-tight leading-none mb-2">Centralized Command</h5>
                <p className="text-white/60 font-medium text-sm">Real-time monitoring and deployment across all states from our Gujarat HQ.</p>
              </div>
            </div>
            <Link to="/contact" className="bg-white text-black px-10 py-5 rounded-md font-black uppercase text-xs tracking-widest hover:bg-[#D30000] hover:text-white transition-all shrink-0">
              Locate Nearest Branch
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-[30px] text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-10 uppercase tracking-tighter">Partner with Excellence</h2>
          <Link to="/contact" className="inline-block bg-[#D30000] text-white px-16 py-5 rounded-md font-black text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all shadow-2xl">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};
