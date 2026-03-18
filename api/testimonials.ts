import type { VercelRequest, VercelResponse } from '@vercel/node';
import { kv } from '@vercel/kv';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    if (req.method === 'GET') {
      const testimonials: any[] = await kv.get('testimonials') || [];
      const { status } = req.query;
      
      let filteredTestimonials = testimonials;
      if (status) {
        filteredTestimonials = testimonials.filter((t: any) => t.status === status);
      }
      
      return res.status(200).json({ testimonials: filteredTestimonials });
    }

    if (req.method === 'POST') {
      const { name, email, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({ error: 'Name, email, and message are required' });
      }

      const newTestimonial = {
        id: Date.now().toString(),
        name,
        email,
        message,
        status: 'pending',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };

      const existing: any[] = await kv.get('testimonials') || [];
      const updated = [...existing, newTestimonial];
      await kv.set('testimonials', updated);

      console.log('New testimonial submitted:', newTestimonial);

      return res.status(200).json({ success: true, testimonial: newTestimonial });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (err) {
    console.error('API ERROR:', err);
    return res.status(500).json({ error: 'Server error' });
  }
}
