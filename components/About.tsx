
import React from 'react';
import { ShieldCheck, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-12 sm:py-[25px] bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative mb-12 lg:mb-0">
            <div className="rounded-3xl sm:rounded-[40px] overflow-hidden shadow-2xl border-4 sm:border-8 border-slate-50">
              <img src="https://scontent.fstv8-2.fna.fbcdn.net/o1/v/t0/f2/m421/AQNKl6KWFqpNqKN8aKf9sgtgWbUvMLes9sz851cOfObSCzWIJNVXmaMCprrfHNB9tO7NXjV01_ij-tf0V6iHB7wFyUYwW_Djl980Nr7hp2oQzg_4e6a8un9NO2sMfdQW45kwzWJuJNP0_bG4u1sykChAyT2d.jpeg?stp=s600x337&_nc_ht=scontent.fstv8-2.fna.fbcdn.net&_nc_gid=zMGZlZaotLrA0G4Z20-z9w&_nc_cat=104&_nc_oc=Adkwg608n8giViMrSkMLOk9xcCIXN_hKmvBN7zzPNDIaI_yFydiJXUWwkTt387T-y9s_pFqKhpgYyf6bPETUme40&ccb=9-4&oh=00_AfqWTJKhFqY_q28jqxlYW5AQsFw_IsnB9sX_y4cgLGcLYQ&oe=696D60D7&_nc_sid=5b3566" alt="About BIGS" className="w-full h-auto object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-2 sm:-bottom-10 sm:-right-10 bg-white p-6 sm:p-12 rounded-2xl sm:rounded-[32px] shadow-2xl border border-slate-100 max-w-[200px] sm:max-w-[280px]">
              <div className="text-4xl sm:text-6xl font-black text-[#e63946] mb-2">25+</div>
              <div className="text-black font-black uppercase tracking-[0.2em] text-[8px] sm:text-[10px] leading-tight">Years of Unmatched Security Excellence</div>
            </div>
          </div>
          
          <div>
            <div className="w-16 h-1 bg-[#e63946] mb-6 sm:mb-8"></div>
            <span className="text-black font-black tracking-[0.3em] uppercase text-[10px] sm:text-xs mb-4 block">Our Legacy</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black mt-3 mb-6 sm:mb-8 leading-tight sm:leading-[1.1]">
              Pioneering Security <br className="hidden sm:block" />& Facility Solutions <br className="hidden sm:block" />Since 1998
            </h2>
            <p className="text-black text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 font-medium">
              At BIGS Support Services, we don't just provide security; we offer peace of mind. As a premier partner for India's leading corporations, we've spent over two decades refining our methodologies and training a workforce that stands as a pillar of reliability.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <div className="group">
                <div className="flex-shrink-0 bg-red-50 p-3 sm:p-4 rounded-2xl mb-4 group-hover:bg-[#e63946] transition-colors w-fit">
                  <ShieldCheck className="text-[#e63946] group-hover:text-white w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h4 className="font-black text-black text-base sm:text-lg mb-2 uppercase tracking-tight">Quality Guaranteed</h4>
                <p className="text-black/60 text-xs sm:text-sm font-bold">ISO certified processes ensuring high-standard delivery.</p>
              </div>
              <div className="group">
                <div className="flex-shrink-0 bg-red-50 p-3 sm:p-4 rounded-2xl mb-4 group-hover:bg-[#e63946] transition-colors w-fit">
                  <Target className="text-[#e63946] group-hover:text-white w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h4 className="font-black text-black text-base sm:text-lg mb-2 uppercase tracking-tight">Integrated Model</h4>
                <p className="text-black/60 text-xs sm:text-sm font-bold">One-stop-shop for manpower and technology.</p>
              </div>
            </div>
            
            <Link to="/about" className="inline-flex items-center justify-center gap-4 bg-black text-white px-8 py-4 sm:px-10 sm:py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-[#e63946] transition-all group w-full sm:w-auto">
              Learn More <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
