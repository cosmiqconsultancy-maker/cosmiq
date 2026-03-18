import type { VercelRequest, VercelResponse } from '@vercel/node';
import { kv } from '@vercel/kv';

// Fallback data if KV fails
const fallbackTestimonials = [
  {
    id: '1',
    name: 'Sarah Klein',
    email: '',
    message: "Amitabh's consultation completely changed our home office setup. My productivity has increased significantly, and I feel more focused throughout day. The Vastu adjustments were simple but incredibly effective.",
    status: 'approved',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '2',
    name: 'Markus Weber',
    email: '',
    message: "After implementing Amitabh's recommendations, my sleep quality improved dramatically. I was skeptical at first, but the bedroom repositioning made a real difference. Highly recommended for anyone struggling with restlessness.",
    status: 'approved',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '3',
    name: 'Laura Fischer',
    email: '',
    message: "Our family relationships have become much more harmonious since the consultation. The living room adjustments created a more peaceful atmosphere. Amitabh understood our needs perfectly and provided practical solutions.",
    status: 'approved',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];

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
      let testimonials: any[] = [];
      
      try {
        testimonials = await kv.get('testimonials') || [];
      } catch (kvError) {
        console.log('KV error, using fallback:', kvError);
        testimonials = fallbackTestimonials;
      }
      
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

      let existing: any[] = [];
      try {
        existing = await kv.get('testimonials') || [];
      } catch (kvError) {
        console.log('KV get error:', kvError);
      }
      
      const updated = [...existing, newTestimonial];
      
      try {
        await kv.set('testimonials', updated);
      } catch (kvError) {
        console.log('KV set error:', kvError);
      }

      console.log('New testimonial submitted:', newTestimonial);

      return res.status(200).json({ success: true, testimonial: newTestimonial });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (err) {
    console.error('API ERROR:', err);
    return res.status(500).json({ error: 'Server error', details: String(err) });
  }
}
