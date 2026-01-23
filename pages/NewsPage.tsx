
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Newspaper, Bookmark, Search } from 'lucide-react';

const allArticles = [
  {
    id: 1,
    date: 'Oct 24, 2024',
    category: 'Security Insights',
    title: 'AI Integration in Physical Security Frameworks.',
    excerpt: 'Deep dive into the synergy between neural networks and ground operations. How BIGS is leading the tech revolution.',
    img: 'https://picsum.photos/seed/news1/800/600'
  },
  {
    id: 2,
    date: 'Oct 15, 2024',
    category: 'Accolades',
    title: 'Best Security Partner Award - BFSI Summit.',
    excerpt: 'Recognizing excellence in the banking and finance security landscape at the 2024 Mumbai Financial Summit.',
    img: 'https://picsum.photos/seed/news2/800/600'
  },
  {
    id: 3,
    date: 'Oct 02, 2024',
    category: 'Operations',
    title: 'Modern Protocols for High-Rise Complex Safety.',
    excerpt: 'Advanced facility management and fire safety for modern infrastructure in rapid-growth urban centers.',
    img: 'https://picsum.photos/seed/news3/800/600'
  },
  {
    id: 4,
    date: 'Sep 20, 2024',
    category: 'Expansion',
    title: 'New Regional Command Center in Hyderabad.',
    excerpt: 'Expanding our footprint to provide 24/7 localized monitoring for Southern India enterprise clients.',
    img: 'https://picsum.photos/seed/news4/800/600'
  },
  {
    id: 5,
    date: 'Sep 05, 2024',
    category: 'Corporate',
    title: 'ESG Reporting: Our Sustainability Milestone.',
    excerpt: 'How BIGS is implementing green facility management practices to reduce carbon footprints for our partners.',
    img: 'https://picsum.photos/seed/news5/800/600'
  },
  {
    id: 6,
    date: 'Aug 28, 2024',
    category: 'Training',
    title: 'Advanced VIP Protection Certification Program.',
    excerpt: 'Elite training modules for our Close Protection Officers (CPO) involving tactical driving and emergency medicine.',
    img: 'https://picsum.photos/seed/news6/800/600'
  }
];

export const NewsPage: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Hero Banner */}
      <section className="relative py-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url('https://scontent.fstv8-2.fna.fbcdn.net/o1/v/t0/f2/m340/AQNES8Jzbl8FVSTzyUNvW06wq3IovY2FmpmXEREtXg7cYFU7c0RbayfcFnrXyDubcnTd4WXFUET7z12cFRFgK9R0WKCqAr6fz461uul3NPQGneRMzRH6rwFCCH0FvTPWqAD7F56RkP3dSQSWBS7KTVuwoZlT5g.jpeg?_nc_ht=scontent.fstv8-2.fna.fbcdn.net&_nc_gid=_mWePih3sRlTuOtdfVRvXA&_nc_cat=111&_nc_oc=AdmZV33x7IYuSi6JiZjHOMA34RZ7ed1giXLFIBD3C2iR7vM6vD-8i7dd5RBPtPitCKV6-wBt_fWCve3H_7SUcEcL&ccb=9-4&oh=00_AfoPr6NBpolTb27hfVlbPY5sCUI1iForgME4TRD8uKbLyA&oe=696D6776&_nc_sid=5b3566')` }} />
        <div className="container mx-auto px-[30px] relative z-10 text-center text-white">
          <h2 className="text-4xl sm:text-5xl font-black mb-6 uppercase tracking-tighter">Media Hub</h2>
          <div className="flex items-center justify-center gap-2 text-slate-300 font-black uppercase text-xs tracking-widest">
            <Link to="/" className="hover:text-[#D30000]">Home</Link> <span>/</span> <span className="text-white">News & Insights</span>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-[30px]">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <div className="grid sm:grid-cols-2 gap-8">
                {allArticles.map((article) => (
                  <div key={article.id} className="group bg-[#F5F5F5] overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={article.img} 
                        alt={article.title} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                      />
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="flex items-center gap-4 text-[9px] text-black/40 font-black uppercase tracking-widest mb-4">
                        <span className="text-[#D30000]">{article.category}</span>
                        <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {article.date}</span>
                      </div>
                      <h3 className="text-xl font-black text-black mb-4 group-hover:text-[#D30000] transition-colors uppercase tracking-tight line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-black/60 font-medium leading-relaxed line-clamp-3 text-sm flex-grow">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-16 flex justify-center gap-4">
                <button className="w-12 h-12 flex items-center justify-center bg-black text-white font-black hover:bg-[#D30000] transition-all">1</button>
                <button className="w-12 h-12 flex items-center justify-center bg-[#F5F5F5] text-black font-black hover:bg-black hover:text-white transition-all">2</button>
                <button className="w-12 h-12 flex items-center justify-center bg-[#F5F5F5] text-black font-black hover:bg-black hover:text-white transition-all">3</button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-12">
              <div className="bg-[#F5F5F5] p-10">
                <h4 className="text-sm font-black mb-8 uppercase tracking-[0.3em] text-black flex items-center gap-3">
                  <Search className="w-4 h-4 text-[#D30000]" /> Search Press
                </h4>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Keywords..." 
                    className="w-full px-6 py-4 bg-white border-2 border-transparent focus:border-[#D30000] outline-none font-bold uppercase text-xs tracking-widest"
                  />
                </div>
              </div>

              <div className="bg-[#F5F5F5] p-10">
                <h4 className="text-sm font-black mb-8 uppercase tracking-[0.3em] text-black flex items-center gap-3">
                  <Bookmark className="w-4 h-4 text-[#D30000]" /> Categories
                </h4>
                <ul className="space-y-4">
                  {['Security Insights', 'Accolades', 'Operations', 'Expansion', 'Corporate', 'Training'].map(cat => (
                    <li key={cat}>
                      <button className="w-full text-left font-black uppercase text-[10px] tracking-widest text-black/60 hover:text-[#D30000] hover:pl-2 transition-all flex justify-between items-center">
                        {cat} <span className="text-[8px] bg-black/5 px-2 py-1">12</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-black p-10 text-white">
                <Newspaper className="w-12 h-12 text-[#D30000] mb-6" />
                <h4 className="text-2xl font-black mb-4 uppercase tracking-tighter">Newsletter</h4>
                <p className="text-white/60 text-sm font-medium mb-8 leading-relaxed">Get the latest security briefings and company updates delivered to your inbox.</p>
                <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                  <input 
                    type="email" 
                    placeholder="EMAIL ADDRESS" 
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 focus:border-[#D30000] outline-none font-bold text-xs"
                  />
                  <button className="w-full bg-[#D30000] text-white py-4 font-black uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
