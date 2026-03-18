import type { VercelRequest, VercelResponse } from '@vercel/node';
import { testimonials, type Testimonial } from './shared-storage.js';

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
      let filteredTestimonials = testimonials;
      
      if (status) {
        filteredTestimonials = testimonials.filter(t => t.status === status);
      }
      
      return res.status(200).json({ testimonials: filteredTestimonials });
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

      const newTestimonial: Testimonial = {
        id: Date.now(),
        name,
        email,
        message,
        status: 'pending',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };

      testimonials.push(newTestimonial);
      console.log('New testimonial submitted:', newTestimonial);

      return res.status(200).json({ success: true, testimonial: newTestimonial });
    } catch (error) {
      console.error('Error creating testimonial:', error);
      return res.status(500).json({ error: 'Failed to submit testimonial' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
