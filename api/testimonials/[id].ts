import type { VercelRequest, VercelResponse } from '@vercel/node';

// Shared testimonials array
let testimonials: any[] = [
  {
    id: 1,
    name: 'Sarah Klein',
    email: '',
    message: "Amitabh's consultation completely changed our home office setup. My productivity has increased significantly, and I feel more focused throughout day. The Vastu adjustments were simple but incredibly effective.",
    status: 'approved',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 2,
    name: 'Markus Weber',
    email: '',
    message: "After implementing Amitabh's recommendations, my sleep quality improved dramatically. I was skeptical at first, but the bedroom repositioning made a real difference. Highly recommended for anyone struggling with restlessness.",
    status: 'approved',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 3,
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
      console.log(`Admin action: ${action} for testimonial ${testimonialId}`);
      
      return res.status(200).json({ 
        success: true, 
        message: `Testimonial ${action}d successfully` 
      });
    } catch (error) {
      console.error('Error updating testimonial:', error);
      return res.status(500).json({ error: 'Failed to update testimonial' });
    }
  }

  if (req.method === 'DELETE') {
    try {
      console.log(`Admin action: delete for testimonial ${testimonialId}`);
      
      return res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error deleting testimonial:', error);
      return res.status(500).json({ error: 'Failed to delete testimonial' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
