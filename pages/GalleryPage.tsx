
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const categories = ['All', 'Operations', 'Training', 'Events', 'Awards'];

const galleryItems = [
  { id: 1, cat: 'Operations', img: 'https://scontent.fstv8-2.fna.fbcdn.net/o1/v/t0/f2/m340/AQNES8Jzbl8FVSTzyUNvW06wq3IovY2FmpmXEREtXg7cYFU7c0RbayfcFnrXyDubcnTd4WXFUET7z12cFRFgK9R0WKCqAr6fz461uul3NPQGneRMzRH6rwFCCH0FvTPWqAD7F56RkP3dSQSWBS7KTVuwoZlT5g.jpeg?_nc_ht=scontent.fstv8-2.fna.fbcdn.net&_nc_gid=_mWePih3sRlTuOtdfVRvXA&_nc_cat=111&_nc_oc=AdmZV33x7IYuSi6JiZjHOMA34RZ7ed1giXLFIBD3C2iR7vM6vD-8i7dd5RBPtPitCKV6-wBt_fWCve3H_7SUcEcL&ccb=9-4&oh=00_AfoPr6NBpolTb27hfVlbPY5sCUI1iForgME4TRD8uKbLyA&oe=696D6776&_nc_sid=5b3566', title: 'Industrial Guarding' },
  { id: 2, cat: 'Training', img: 'https://scontent.fstv8-2.fna.fbcdn.net/o1/v/t0/f2/m340/AQNPQ6zGdT-Xsh22JLtg9uXEGW6ifJ-XEyj6a9Az5iFY5eslxMFLsc81MtKbzGMUQdIRKbATg8_6DDMQG9_sFOniwyIb-B2FwctsbOTGqlcxXB2GjUwKu0OIyzYA2UyAoaSRcJtlyrC36-rv55xlsrERrjn5gw.jpeg?_nc_ht=scontent.fstv8-2.fna.fbcdn.net&_nc_gid=_mWePih3sRlTuOtdfVRvXA&_nc_cat=107&_nc_oc=AdkyIQh5whkLKEzOWvzcJybZ5lVohmaGNqpehl2Q_VObhdkhhY4BWVRe6pxFMgvepyfzpEyWwGYic3ognv9MgZeV&ccb=9-4&oh=00_Afr1k4MH4oqI8mKvfmTgxDPLOwy1XelfzOLNAFdJqk_nIA&oe=696D74E2&_nc_sid=5b3566', title: 'Defensive Drills' },
  { id: 3, cat: 'Events', img: 'https://scontent.fstv8-2.fna.fbcdn.net/o1/v/t0/f2/m340/AQPZsZyv8hW8iA6x2oub_tYSLGimXq63xYIfeq3u6cVWcAFkkqB2rkvMBvUXFk0BeQrwfMmJgITsFYkOV0Ji-Xwo7iHRdHQe4ofuHIlwYju0Nu3835oEkgIFTG-uZ4ljpSIzz1KTRYsUJB_jxvtBROSp1cWE7Q.jpeg?_nc_ht=scontent.fstv8-2.fna.fbcdn.net&_nc_gid=_mWePih3sRlTuOtdfVRvXA&_nc_cat=109&_nc_oc=AdmnuyiFYJ4p-HhUMbMrUtmFKm_HKbTlc5IL1pnLlo5d2KMMMbb9Cud5c1q2HjuxIiq_WCEm8FkTgLnOXQojrN4y&ccb=9-4&oh=00_AfoHmm1XBZWDEH_hT0dS5wu35i1C4F0udLcBhWMoErfEKQ&oe=696D6CEC&_nc_sid=5b3566', title: 'Corporate Summit' },
  { id: 4, cat: 'Awards', img: 'https://scontent.fstv8-2.fna.fbcdn.net/o1/v/t0/f2/m421/AQML7EW-7MKTAo64I-PueLkP0A6Vq9aZV-7UAXplKMrOR_8Kv-ix1UxWyx3pix4CE81yDBx0bEDxtdCULlMLXv0EjB1hj6F4OhD7f2_906RIV7c5sqCI_Ue-Eqb8z-g_Wfs0xf3u0T5NaJ0wYk28nV2JHUZ_Rg.jpeg?stp=s600x337&_nc_ht=scontent.fstv8-2.fna.fbcdn.net&_nc_gid=zMGZlZaotLrA0G4Z20-z9w&_nc_cat=109&_nc_oc=AdmHc7R1R4CwMoCMkClbYxe8nFHR3kWg67tvwzyZPLIJAEUcFi41aMEJak6dAGqjwUgIzjttVMr895ycDk2wBg3y&ccb=9-4&oh=00_Afrwh_V-m9dXz3VNcjCWDk2jL3F8SBlcD9wU1kbF9M0DKg&oe=696D5D84&_nc_sid=5b3566', title: 'Best Partner 2024' },
];

export const GalleryPage: React.FC = () => {
  const [activeCat, setActiveCat] = useState('All');

  const filteredItems = activeCat === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.cat === activeCat);

  return (
    <div className="pt-24">
      <section className="relative py-16 sm:py-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url('https://scontent.fstv8-2.fna.fbcdn.net/o1/v/t0/f2/m340/AQNES8Jzbl8FVSTzyUNvW06wq3IovY2FmpmXEREtXg7cYFU7c0RbayfcFnrXyDubcnTd4WXFUET7z12cFRFgK9R0WKCqAr6fz461uul3NPQGneRMzRH6rwFCCH0FvTPWqAD7F56RkP3dSQSWBS7KTVuwoZlT5g.jpeg?_nc_ht=scontent.fstv8-2.fna.fbcdn.net&_nc_gid=_mWePih3sRlTuOtdfVRvXA&_nc_cat=111&_nc_oc=AdmZV33x7IYuSi6JiZjHOMA34RZ7ed1giXLFIBD3C2iR7vM6vD-8i7dd5RBPtPitCKV6-wBt_fWCve3H_7SUcEcL&ccb=9-4&oh=00_AfoPr6NBpolTb27hfVlbPY5sCUI1iForgME4TRD8uKbLyA&oe=696D6776&_nc_sid=5b3566')` }} />
        <div className="w-full px-6 sm:px-[30px] relative z-10 text-center text-white">
          <h2 className="text-3xl sm:text-5xl font-black mb-4 sm:mb-6 uppercase tracking-tighter">Operational Gallery</h2>
          <div className="flex items-center justify-center gap-2 text-slate-300 font-black uppercase text-[10px] tracking-widest">
            <Link to="/" className="hover:text-[#D30000]">Home</Link> <span>/</span> <span className="text-white">Gallery</span>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="w-full px-6 sm:px-[30px]">
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 sm:mb-16">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`px-6 sm:px-10 py-2 sm:py-3 rounded-md font-black uppercase text-[9px] sm:text-xs tracking-widest transition-all ${activeCat === cat ? 'bg-[#D30000] text-white shadow-xl' : 'bg-[#F5F5F5] text-black hover:bg-black hover:text-white'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {filteredItems.map(item => (
              <div key={item.id} className="group bg-white border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col">
                <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                   <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" 
                  />
                </div>
                <div className="p-8 sm:p-10 text-center flex-grow flex flex-col justify-center">
                  <span className="text-[#D30000] font-black text-[10px] sm:text-[11px] uppercase tracking-[0.4em] mb-4 block">
                    {item.cat}
                  </span>
                  <h4 className="text-2xl sm:text-3xl font-black text-black uppercase tracking-tight leading-tight group-hover:text-[#D30000] transition-colors duration-300">
                    {item.title}
                  </h4>
                  <div className="h-1 w-12 bg-[#D30000] mx-auto mt-8 transition-all duration-500 group-hover:w-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
