import type { VercelRequest, VercelResponse } from '@vercel/node';

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
      let filteredTestimonials = [
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
      
      if (status) {
        filteredTestimonials = filteredTestimonials.filter(t => t.status === status);
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

      const newTestimonial = {
        id: Date.now(),
        name,
        email,
        message,
        status: 'pending',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };

      console.log('New testimonial submitted:', newTestimonial);

      return res.status(200).json({ success: true, testimonial: newTestimonial });
    } catch (error) {
      console.error('Error creating testimonial:', error);
      return res.status(500).json({ error: 'Failed to submit testimonial' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
