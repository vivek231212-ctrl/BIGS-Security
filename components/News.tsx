
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';

const articles = [
  {
    date: 'Oct 24, 2024',
    category: 'Security Insights',
    title: 'AI Integration in Physical Security Frameworks.',
    excerpt: 'Deep dive into the synergy between neural networks and ground operations.'
  },
  {
    date: 'Oct 15, 2024',
    category: 'Accolades',
    title: 'Best Security Partner Award - BFSI Summit.',
    excerpt: 'Recognizing excellence in the banking and finance security landscape.'
  },
  {
    date: 'Oct 02, 2024',
    category: 'Operations',
    title: 'Modern Protocols for High-Rise Complex Safety.',
    excerpt: 'Advanced facility management and fire safety for modern infrastructure.'
  }
];

export const News: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#F5F5F5]">
      <div className="container mx-auto px-[30px]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div>
            <span className="text-[#D30000] font-black tracking-[0.4em] uppercase text-xs mb-4 block">Media Hub</span>
            <h2 className="text-4xl sm:text-6xl font-black text-black uppercase tracking-tighter">Latest News</h2>
          </div>
          <Link to="/news" className="font-black text-black uppercase tracking-widest text-sm hover:text-[#D30000] transition-colors flex items-center gap-2 group border-b-4 border-[#D30000] pb-2">
            View All Press <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <div key={i} className="group bg-white p-2 shadow-sm hover:shadow-2xl transition-all duration-500">
              <div className="aspect-video overflow-hidden mb-8">
                <img src={`https://picsum.photos/seed/news${i}/800/600`} alt={article.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
              </div>
              <div className="px-6 pb-8">
                <div className="flex items-center gap-4 text-[10px] text-black/40 font-black uppercase tracking-widest mb-4">
                  <span className="text-[#D30000]">{article.category}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {article.date}</span>
                </div>
                <h3 className="text-xl font-black text-black mb-4 group-hover:text-[#D30000] transition-colors line-clamp-2 uppercase tracking-tight">{article.title}</h3>
                <p className="text-black/60 mb-8 font-medium leading-relaxed line-clamp-2">{article.excerpt}</p>
                <button className="text-black font-black uppercase text-xs trackingest flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                  Read Full <ArrowRight className="w-4 h-4 text-[#D30000]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
