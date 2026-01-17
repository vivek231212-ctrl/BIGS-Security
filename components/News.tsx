import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const articles = [
  {
    date: 'Oct 24, 2024',
    category: 'Security Insights',
    title: 'How AI is changing the landscape of corporate physical security.',
    excerpt: 'Deep dive into the integration of neural networks in motion detection...'
  },
  {
    date: 'Oct 15, 2024',
    category: 'Company News',
    title: 'BIGS wins "Best Security Partner" award at BFSI Summit 2024.',
    excerpt: 'Celebrating our commitment to excellence in the banking and finance sector...'
  },
  {
    date: 'Oct 02, 2024',
    category: 'Safety Protocols',
    title: 'Essential fire safety measures for modern high-rise complexes.',
    excerpt: 'A comprehensive guide for facility managers and property owners...'
  }
];

export const News: React.FC = () => {
  return (
    <section className="py-[25px] bg-white">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-[#e63946] font-bold tracking-widest uppercase text-sm">Media Center</span>
            <h2 className="text-4xl font-extrabold text-[#0a1d37] mt-3">Latest News & Insights</h2>
          </div>
          <button className="hidden md:flex items-center gap-2 font-bold text-[#0a1d37] hover:text-[#e63946] transition-colors">
            View All News <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-video rounded-2xl overflow-hidden mb-6">
                <img src={`https://picsum.photos/seed/news${i}/800/600`} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" />
              </div>
              <div className="flex items-center gap-4 text-sm text-slate-500 font-semibold mb-4">
                <span className="text-[#e63946] uppercase">{article.category}</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {article.date}</span>
              </div>
              <h3 className="text-xl font-bold text-[#0a1d37] mb-4 group-hover:text-[#e63946] transition-colors line-clamp-2">{article.title}</h3>
              <p className="text-slate-500 mb-6 line-clamp-2">{article.excerpt}</p>
              <button className="text-[#0a1d37] font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                Read Article <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};