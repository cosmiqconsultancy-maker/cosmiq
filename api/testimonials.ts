import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getTestimonials, addTestimonial } from '../src/lib/file-storage.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    try {
      const { status } = req.query;
      const testimonials = await getTestimonials(status as string);
      return res.status(200).json({ testimonials });
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      return res.status(500).json({ error: 'Failed to fetch testimonials' });
    }
  }

  if (req.method === 'POST') {
    try {
      const { name, email, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({ error: 'Name, email, and message are required' });
      }

      const testimonial = await addTestimonial(name, email, message);
      console.log('New testimonial submitted:', testimonial);

      return res.status(200).json({ success: true, testimonial });
    } catch (error) {
      console.error('Error creating testimonial:', error);
      return res.status(500).json({ error: 'Failed to submit testimonial' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
