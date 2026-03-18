import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar } from 'lucide-react';
import type { Blog } from '../lib/blogs';

export const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/blogs')
      .then(res => res.json())
      .then(data => {
        const foundBlog = data.blogs?.find((b: Blog) => b.id === id);
        setBlog(foundBlog || null);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching blog:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="pt-32 pb-32 flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-bronze"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="pt-32 pb-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-display font-medium mb-4">Blog Not Found</h1>
          <p className="text-charcoal/60 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-bronze font-medium hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-charcoal/60 hover:text-bronze transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </Link>
        </motion.div>

        {/* Blog Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 text-sm text-charcoal/50 mb-4">
            <Calendar className="w-4 h-4" />
            {new Date(blog.created_at).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-medium mb-4">
            {blog.title}
          </h1>
          {blog.subtitle && (
            <p className="text-xl text-charcoal/60">{blog.subtitle}</p>
          )}
        </motion.div>

        {/* Featured Image */}
        {blog.imageUrl && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <img
              src={blog.imageUrl}
              alt={blog.title}
              className="w-full h-64 md:h-96 object-cover rounded-2xl"
            />
          </motion.div>
        )}

        {/* Blog Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="prose prose-lg max-w-none"
        >
          <div className="text-charcoal/80 leading-relaxed whitespace-pre-wrap">
            {blog.content}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPost;
