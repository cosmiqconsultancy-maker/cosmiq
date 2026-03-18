import type { VercelRequest, VercelResponse } from '@vercel/node';
import { approveTestimonial, rejectTestimonial, deleteTestimonial } from '../../src/lib/testimonials.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { id } = req.query;
  const testimonialId = parseInt(id as string, 10);

  if (isNaN(testimonialId)) {
    return res.status(400).json({ error: 'Invalid testimonial ID' });
  }

  const authHeader = req.headers.authorization;
  const adminPassword = process.env.ADMIN_PASSWORD;
  
  if (!adminPassword || authHeader !== `Bearer ${adminPassword}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (req.method === 'POST') {
    try {
      const { action } = req.body;

      if (action === 'approve') {
        const testimonial = await approveTestimonial(testimonialId);
        return res.status(200).json({ success: true, testimonial });
      }

      if (action === 'reject') {
        const testimonial = await rejectTestimonial(testimonialId);
        return res.status(200).json({ success: true, testimonial });
      }

      return res.status(400).json({ error: 'Invalid action. Use "approve" or "reject"' });
    } catch (error) {
      console.error('Error updating testimonial:', error);
      return res.status(500).json({ error: 'Failed to update testimonial' });
    }
  }

  if (req.method === 'DELETE') {
    try {
      await deleteTestimonial(testimonialId);
      return res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error deleting testimonial:', error);
      return res.status(500).json({ error: 'Failed to delete testimonial' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
