import type { VercelRequest, VercelResponse } from '@vercel/node';
import { kv } from '@vercel/kv';
// Blog type definition inline to avoid import issues
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

// Fallback blogs
const fallbackBlogs: Blog[] = [
  {
    id: '1',
    title: 'Understanding Vastu Shastra for Modern Homes',
    subtitle: 'Ancient wisdom meets contemporary living spaces',
    content: 'Vastu Shastra, the ancient Indian science of architecture and spatial arrangement, offers timeless principles that can transform modern living spaces. By understanding the five elements and their optimal placement, homeowners can create environments that promote health, prosperity, and harmony. This guide explores practical applications of Vastu principles in contemporary home design.',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
    created_at: '2026-03-01T10:00:00.000Z',
    updated_at: '2026-03-01T10:00:00.000Z'
  },
  {
    id: '2',
    title: 'The Power of Directional Energy in Your Workspace',
    subtitle: 'How orientation affects productivity and success',
    content: 'The direction your workspace faces can significantly impact your professional success and mental clarity. North and east-facing offices are traditionally considered most auspicious, promoting clarity of thought and business growth. Learn how to optimize your workspace orientation and layout for maximum productivity.',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
    created_at: '2026-03-10T14:30:00.000Z',
    updated_at: '2026-03-10T14:30:00.000Z'
  }
];

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    try {
      const blogs = await kv.get<Blog[]>(BLOGS_KEY);
      if (blogs && blogs.length > 0) {
        return res.status(200).json({ blogs });
      }
      return res.status(200).json({ blogs: fallbackBlogs });
    } catch (error) {
      console.error('KV get error:', error);
      return res.status(200).json({ blogs: fallbackBlogs });
    }
  }

  if (req.method === 'POST') {
    try {
      const { title, subtitle, content, imageUrl } = req.body;
      
      if (!title || !content) {
        return res.status(400).json({ error: 'Title and content are required' });
      }

      const newBlog: Blog = {
        id: Date.now().toString(),
        title,
        subtitle: subtitle || '',
        content,
        imageUrl: imageUrl || '',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };

      // Try to get existing blogs, fallback to current fallbackBlogs if KV fails
      let existingBlogs: Blog[] = [];
      try {
        const stored = await kv.get<Blog[]>(BLOGS_KEY);
        if (stored && stored.length > 0) {
          existingBlogs = stored;
        } else {
          // If no stored blogs, use fallback blogs as base
          existingBlogs = fallbackBlogs;
        }
      } catch (e) {
        // If KV fails, use fallback blogs
        existingBlogs = fallbackBlogs;
      }
      
      const updatedBlogs = [newBlog, ...existingBlogs];
      
      await kv.set(BLOGS_KEY, updatedBlogs);
      return res.status(200).json({ success: true, blog: newBlog, blogs: updatedBlogs });
    } catch (error) {
      console.error('KV set error:', error);
      return res.status(500).json({ error: 'Failed to create blog' });
    }
  }

  if (req.method === 'DELETE') {
    try {
      // Check authorization
      const authHeader = req.headers.authorization;
      const ADMIN_PASSWORD = 'Cosmiq@consultancy.pass';
      
      if (authHeader !== `Bearer ${ADMIN_PASSWORD}`) {
        return res.status(403).json({ error: 'Unauthorized' });
      }

      const { id } = req.query;
      if (!id) {
        return res.status(400).json({ error: 'Blog ID required' });
      }

      const existingBlogs = await kv.get<Blog[]>(BLOGS_KEY) || [];
      const updatedBlogs = existingBlogs.filter(blog => blog.id !== id);
      
      await kv.set(BLOGS_KEY, updatedBlogs);
      return res.status(200).json({ success: true });
    } catch (error) {
      console.error('KV delete error:', error);
      return res.status(500).json({ error: 'Failed to delete blog' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
