
import React from 'react';
import { ShieldCheck, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-32 bg-white">
      <div className="container mx-auto px-[30px]">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative">
            <div className="overflow-hidden shadow-[30px_30px_0px_0px_rgba(211,0,0,1)] border-8 border-white">
              <img src="https://scontent.fstv8-2.fna.fbcdn.net/o1/v/t0/f2/m421/AQNKl6KWFqpNqKN8aKf9sgtgWbUvMLes9sz851cOfObSCzWIJNVXmaMCprrfHNB9tO7NXjV01_ij-tf0V6iHB7wFyUYwW_Djl980Nr7hp2oQzg_4e6a8un9NO2sMfdQW45kwzWJuJNP0_bG4u1sykChAyT2d.jpeg?stp=s600x337&_nc_ht=scontent.fstv8-2.fna.fbcdn.net&_nc_gid=zMGZlZaotLrA0G4Z20-z9w&_nc_cat=104&_nc_oc=Adkwg608n8giViMrSkMLOk9xcCIXN_hKmvBN7zzPNDIaI_yFydiJXUWwkTt387T-y9s_pFqKhpgYyf6bPETUme40&ccb=9-4&oh=00_AfqWTJKhFqY_q28jqxlYW5AQsFw_IsnB9sX_y4cgLGcLYQ&oe=696D60D7&_nc_sid=5b3566" alt="About BIGS" className="w-full h-auto object-cover" />
            </div>
          </div>
          
          <div>
            <span className="text-[#D30000] font-black tracking-[0.4em] uppercase text-xs mb-6 block">Company Profile</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black mt-3 mb-8 leading-[1.1] uppercase tracking-tighter">
              Legacy of <br />Safety & <br />Reliability
            </h2>
            <p className="text-black text-lg leading-relaxed mb-10 font-medium">
              Since 1998, BIGS Support Services has been the vanguard of security excellence in India. We specialize in integrated manpower and technology solutions that safeguard assets and empower businesses.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              <div className="border-l-4 border-[#D30000] pl-6 py-2">
                <ShieldCheck className="text-[#D30000] w-10 h-10 mb-4" />
                <h4 className="font-black text-black text-lg mb-2 uppercase tracking-tight">ISO Certified</h4>
                <p className="text-black/60 text-sm font-bold">Adhering to global quality benchmarks.</p>
              </div>
              <div className="border-l-4 border-[#D30000] pl-6 py-2">
                <Target className="text-[#D30000] w-10 h-10 mb-4" />
                <h4 className="font-black text-black text-lg mb-2 uppercase tracking-tight">Pan-India</h4>
                <p className="text-black/60 text-sm font-bold">Presence in 28 states across the nation.</p>
              </div>
            </div>
            
            <Link to="/about" className="inline-flex items-center justify-center gap-4 bg-black text-white px-12 py-5 rounded-md font-black uppercase tracking-widest hover:bg-[#D30000] transition-all group w-full sm:w-auto">
              Read Our Full Story <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
