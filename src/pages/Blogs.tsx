import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Calendar, ArrowRight } from 'lucide-react';

export const Blogs: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-display font-medium mb-8">{t.blogs.title}</h1>
          <div className="w-24 h-1 bg-bronze mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {t.blogs.posts.map((post, i) => (
            <article
              key={post.id}
              className="group bg-softwhite rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-charcoal/5 flex flex-col h-full"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  src={`https://picsum.photos/seed/blog-${post.id}/800/500`} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 space-y-4 flex flex-col flex-grow">
                <div className="flex items-center text-[10px] font-bold tracking-widest uppercase text-bronze">
                  <Calendar className="w-3 h-3 mr-2" />
                  {post.date}
                </div>
                <h2 className="text-xl font-display font-medium leading-tight group-hover:text-bronze transition-colors">
                  {post.title}
                </h2>
                <p className="text-charcoal/60 text-sm leading-relaxed flex-grow">
                  {post.excerpt}
                </p>
                <div className="pt-4">
                  <button className="inline-flex items-center text-xs font-bold tracking-widest uppercase text-charcoal group-hover:text-bronze transition-colors">
                    {t.blogs.readMore}
                    <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
