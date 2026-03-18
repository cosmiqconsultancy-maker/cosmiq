import type { VercelRequest, VercelResponse } from '@vercel/node';
import { updateTestimonial, deleteTestimonial } from '../../src/lib/file-storage.js';

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
        const testimonial = await updateTestimonial(testimonialId, { status: 'approved' });
        if (testimonial) {
          console.log(`Testimonial ${testimonialId} approved`);
          return res.status(200).json({ success: true, testimonial });
        }
      }

      if (action === 'reject') {
        const testimonial = await updateTestimonial(testimonialId, { status: 'rejected' });
        if (testimonial) {
          console.log(`Testimonial ${testimonialId} rejected`);
          return res.status(200).json({ success: true, testimonial });
        }
      }

      return res.status(400).json({ error: 'Invalid action. Use "approve" or "reject"' });
    } catch (error) {
      console.error('Error updating testimonial:', error);
      return res.status(500).json({ error: 'Failed to update testimonial' });
    }
  }

  if (req.method === 'DELETE') {
    try {
      const success = await deleteTestimonial(testimonialId);
      if (success) {
        console.log(`Testimonial ${testimonialId} deleted`);
        return res.status(200).json({ success: true });
      } else {
        return res.status(404).json({ error: 'Testimonial not found' });
      }
    } catch (error) {
      console.error('Error deleting testimonial:', error);
      return res.status(500).json({ error: 'Failed to delete testimonial' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
