import type { VercelRequest, VercelResponse } from '@vercel/node';
import { kv } from '@vercel/kv';

type Blog = {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  imageUrl: string;
  created_at: string;
  updated_at: string;
};

const BLOGS_KEY = 'cosmiq_blogs';
const ADMIN_PASSWORD = 'Cosmiq@consultancy.pass';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { id } = req.query;
  
  if (!id || typeof id !== 'string') {
    return res.status(400).json({ error: 'Blog ID required' });
  }

  if (req.method === 'PUT') {
    try {
      // Check authorization
      const authHeader = req.headers.authorization;
      if (authHeader !== `Bearer ${ADMIN_PASSWORD}`) {
        return res.status(403).json({ error: 'Unauthorized' });
      }

      const { title, subtitle, content, imageUrl } = req.body;
      
      if (!title || !content) {
        return res.status(400).json({ error: 'Title and content are required' });
      }

      const existingBlogs = await kv.get<Blog[]>(BLOGS_KEY) || [];
      const blogIndex = existingBlogs.findIndex(blog => blog.id === id);
      
      if (blogIndex === -1) {
        return res.status(404).json({ error: 'Blog not found' });
      }

      // Update the blog
      existingBlogs[blogIndex] = {
        ...existingBlogs[blogIndex],
        title,
        subtitle: subtitle || '',
        content,
        imageUrl: imageUrl || '',
        updated_at: new Date().toISOString()
      };
      
      await kv.set(BLOGS_KEY, existingBlogs);
      return res.status(200).json({ success: true, blog: existingBlogs[blogIndex] });
    } catch (error) {
      console.error('KV update error:', error);
      return res.status(500).json({ error: 'Failed to update blog' });
    }
  }

  if (req.method === 'DELETE') {
    try {
      // Check authorization
      const authHeader = req.headers.authorization;
      
      if (authHeader !== `Bearer ${ADMIN_PASSWORD}`) {
        console.log('Auth failed:', authHeader, 'Expected:', `Bearer ${ADMIN_PASSWORD}`);
        return res.status(403).json({ error: 'Unauthorized' });
      }

      const existingBlogs = await kv.get<Blog[]>(BLOGS_KEY) || [];
      const updatedBlogs = existingBlogs.filter(blog => blog.id !== id);
      
      await kv.set(BLOGS_KEY, updatedBlogs);
      return res.status(200).json({ success: true, blogs: updatedBlogs });
    } catch (error) {
      console.error('KV delete error:', error);
      return res.status(500).json({ error: 'Failed to delete blog' });
    }
  }

  if (req.method === 'GET') {
    try {
      const blogs = await kv.get<Blog[]>(BLOGS_KEY) || [];
      const blog = blogs.find(b => b.id === id);
      
      if (!blog) {
        return res.status(404).json({ error: 'Blog not found' });
      }
      
      return res.status(200).json({ blog });
    } catch (error) {
      console.error('KV get error:', error);
      return res.status(500).json({ error: 'Failed to fetch blog' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
