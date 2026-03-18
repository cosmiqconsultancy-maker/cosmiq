import type { VercelRequest, VercelResponse } from '@vercel/node';
import { kv } from '@vercel/kv';

const ADMIN_PASS = 'Cosmiq@consultancy.pass';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  console.log('API HIT', req.method, req.url);

  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const { id } = req.query;

    // Auth check
    if (req.headers.authorization !== `Bearer ${ADMIN_PASS}`) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const testimonials: any[] = await kv.get('testimonials') || [];

    if (req.method === 'POST') {
      const { action } = req.body;
      console.log(`Admin action: ${action} for testimonial ${id}`);

      const updated = testimonials.map(t =>
        t.id === id ? { ...t, status: action, updated_at: new Date().toISOString() } : t
      );

      await kv.set('testimonials', updated);

      return res.status(200).json({ success: true, message: `Testimonial ${action}d` });
    }

    if (req.method === 'DELETE') {
      console.log(`Admin action: delete for testimonial ${id}`);

      const updated = testimonials.filter(t => t.id !== id);
      await kv.set('testimonials', updated);

      return res.status(200).json({ success: true });
    }

    return res.status(405).json({ error: 'Method not allowed' });

  } catch (err) {
    console.error('API ERROR:', err);
    return res.status(500).json({ error: 'Server error' });
  }
}
