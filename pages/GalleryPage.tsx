import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const categories = ['All', 'Operations', 'Training', 'Events', 'Awards'];

const galleryItems = [
  { id: 1, cat: 'Operations', img: 'https://picsum.photos/seed/gal1/800/600', title: 'Industrial Guarding' },
  { id: 2, cat: 'Training', img: 'https://picsum.photos/seed/gal2/600/800', title: 'Defensive Drills' },
  { id: 3, cat: 'Events', img: 'https://picsum.photos/seed/gal3/800/800', title: 'Corporate Summit' },
  { id: 4, cat: 'Awards', img: 'https://picsum.photos/seed/gal4/800/600', title: 'Best Partner 2024' },
  { id: 5, cat: 'Operations', img: 'https://picsum.photos/seed/gal5/800/800', title: 'Mobile Patrol' },
  { id: 6, cat: 'Training', img: 'https://picsum.photos/seed/gal6/800/600', title: 'Fire Safety Training' },
];

export const GalleryPage: React.FC = () => {
  const [activeCat, setActiveCat] = useState('All');

  const filteredItems = activeCat === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.cat === activeCat);

  return (
    <div className="pt-24">
      <section className="relative py-[25px] bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url('https://scontent.fstv8-2.fna.fbcdn.net/v/t39.30808-6/614388964_921705314365677_8961878546008505667_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e1afaa&_nc_ohc=cWiVWoZCdHsQ7YWbod_fQyGG3oWSeZPSuRjXCam6B1nygyt4Z5tklBnFkxdzwCao5sdNO26XGtvsfx3cplrtab3k&_nc_zt=23&_nc_ht=scontent.fstv8-2.fna&_nc_gid=4a2GgXkafCbnMGOD8GRuEA&oh=00_AfpluZ5c4rScUVHEyzxOdZEAU0vCuqLBvij5dwn-7nDO9Q&oe=69713DB9')` }} />
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <h1 className="text-5xl font-extrabold mb-6">Operations Gallery</h1>
          <div className="flex items-center justify-center gap-2 text-slate-300 font-medium">
            <Link to="/" className="hover:text-white">Home</Link> <span>/</span> <span className="text-white">Gallery</span>
          </div>
        </div>
      </section>

      <section className="py-[25px] bg-white">
        <div className="container mx-auto px-6">
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`px-8 py-3 rounded-full font-bold transition-all ${activeCat === cat ? 'bg-[#e63946] text-white shadow-lg' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
            {filteredItems.map(item => (
              <div key={item.id} className="relative group overflow-hidden rounded-2xl cursor-pointer break-inside-avoid">
                <img src={item.img} alt={item.title} className="w-full h-auto transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                  <div className="text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[#e63946] font-bold text-xs uppercase tracking-widest mb-2 block">{item.cat}</span>
                    <h4 className="text-xl font-bold">{item.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};