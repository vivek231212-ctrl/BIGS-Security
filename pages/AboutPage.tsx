
import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Eye, Shield, Award, Users, MapPin, CheckCircle } from 'lucide-react';
import { Leadership } from '../components/Leadership.tsx';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Hero Banner */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url('https://picsum.photos/seed/about-bg/1920/600')` }} />
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <h1 className="text-5xl font-extrabold mb-6">About Us</h1>
          <div className="flex items-center justify-center gap-2 text-slate-300 font-medium">
            <Link to="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">About Us</span>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#e63946] font-bold tracking-widest uppercase text-sm">Our Essence</span>
              <h2 className="text-4xl font-extrabold text-[#0a1d37] mt-3 mb-8">India's Premier Protection Partner</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Founded in 1998, BIGS Support Services has evolved from a local guarding agency in Surat into a national powerhouse in security and facility management. We believe that security is the bedrock of progress.
              </p>
              <p className="text-slate-600 leading-relaxed mb-10">
                With our headquarters in Gujarat and a footprint across 28 states, we serve as the invisible shield behind some of the most critical infrastructures in India.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <CheckCircle className="text-[#e63946] flex-shrink-0" />
                  <span className="font-bold text-[#0a1d37]">ISO 9001:2015 Certified</span>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="text-[#e63946] flex-shrink-0" />
                  <span className="font-bold text-[#0a1d37]">PAN India Presence</span>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="text-[#e63946] flex-shrink-0" />
                  <span className="font-bold text-[#0a1d37]">Ex-Military Leadership</span>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="text-[#e63946] flex-shrink-0" />
                  <span className="font-bold text-[#0a1d37]">Tech-Enabled Operations</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="https://picsum.photos/seed/about-team/800/800" alt="Team" className="rounded-2xl shadow-2xl" />
              <div className="absolute -bottom-10 -left-10 bg-[#e63946] p-10 rounded-2xl hidden md:block">
                <Shield className="text-white w-12 h-12 mb-4" />
                <p className="text-white text-3xl font-bold">25+ Years</p>
                <p className="text-white/80 font-semibold uppercase tracking-widest text-xs">Industry Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-3xl shadow-xl border border-slate-100 transform hover:-translate-y-2 transition-all">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-extrabold text-[#0a1d37] mb-6">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                To provide unparalleled security and facility solutions by blending human intelligence with cutting-edge technology, ensuring safety and efficiency for our clients nationwide.
              </p>
            </div>
            <div className="bg-[#0a1d37] p-12 rounded-3xl shadow-xl transform hover:-translate-y-2 transition-all text-white">
              <div className="w-16 h-16 bg-white/10 text-[#e63946] rounded-2xl flex items-center justify-center mb-8">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-extrabold mb-6">Our Vision</h3>
              <p className="text-slate-300 leading-relaxed text-lg">
                To be the most trusted and innovative integrated services provider in the world, empowering enterprises to focus on their core growth while we secure their environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-[#e63946] font-bold tracking-widest uppercase text-sm">The BIGS Way</span>
            <h2 className="text-4xl font-extrabold text-[#0a1d37] mt-3">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Integrity', desc: 'Uncompromising honesty in everything we do.', icon: Award },
              { title: 'Innovation', desc: 'Continuously evolving our methods and tools.', icon: Shield },
              { title: 'Resilience', desc: 'Standing strong during the most challenging times.', icon: Users },
              { title: 'Empathy', desc: 'Understanding the needs of our clients and workforce.', icon: MapPin },
            ].map((v, i) => (
              <div key={i} className="text-center p-8 rounded-2xl hover:bg-slate-50 transition-colors">
                <v.icon className="w-12 h-12 text-[#e63946] mx-auto mb-6" />
                <h4 className="text-xl font-bold text-[#0a1d37] mb-3">{v.title}</h4>
                <p className="text-slate-500">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Leadership />

      {/* CTA */}
      <section className="py-24 bg-[#0a1d37]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-8">Partner with Excellence</h2>
          <Link to="/contact" className="inline-block bg-[#e63946] text-white px-12 py-5 rounded-2xl font-bold text-lg hover:bg-[#c32f3a] transition-all">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};
