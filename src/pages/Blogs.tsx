import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Blog } from '../lib/blogs';

export const Blogs: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/blogs')
      .then(res => res.json())
      .then(data => {
        setBlogs(data.blogs || []);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching blogs:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="pt-32 pb-32 flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-bronze"></div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-display font-medium mb-6">Our Blog</h1>
          <p className="text-charcoal/60 text-lg max-w-2xl mx-auto">
            Insights on Vastu Shastra, spatial harmony, and creating balanced living spaces
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {blog.imageUrl ? (
                <img
                  src={blog.imageUrl}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="w-full h-48 bg-bronze/10 flex items-center justify-center">
                  <span className="text-bronze text-4xl font-display">C</span>
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-charcoal/50 mb-3">
                  <Calendar className="w-4 h-4" />
                  {new Date(blog.created_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <h2 className="text-xl font-display font-medium mb-2 line-clamp-2">
                  {blog.title}
                </h2>
                <p className="text-charcoal/60 text-sm mb-4 line-clamp-2">
                  {blog.subtitle}
                </p>
                <p className="text-charcoal/70 text-sm line-clamp-3 mb-4">
                  {blog.content}
                </p>
                <Link
                  to={`/blog/${blog.id}`}
                  className="inline-flex items-center gap-2 text-bronze font-medium text-sm hover:gap-3 transition-all"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {blogs.length === 0 && (
          <div className="text-center py-16">
            <p className="text-charcoal/60 text-lg">No blogs published yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
