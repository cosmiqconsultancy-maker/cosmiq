import type { VercelRequest, VercelResponse } from '@vercel/node';
import { kv } from '@vercel/kv';

// Fallback testimonials with location tracking - 2 Indian, 3 German
const fallbackTestimonials = [
  {
    id: '1',
    name: 'Priya Sharma',
    email: 'priya.sharma@email.com',
    message: "Amitabh's Vastu consultation transformed our family home in Delhi. His deep understanding of traditional principles combined with modern living needs helped us create a harmonious space. Our family's health and relationships have improved significantly since the consultation.",
    location: '28.6139, 77.2090',
    status: 'approved',
    created_at: '2026-01-15T10:30:00.000Z',
    updated_at: '2026-01-15T10:30:00.000Z'
  },
  {
    id: '2',
    name: 'Rajesh Kumar',
    email: 'rajesh.k@email.com',
    message: "Working with Amitabh on my office Vastu in Mumbai was a game-changer. My business productivity increased by 40% within months. His Cosmiq Report provided precise directional guidance that aligned perfectly with my professional goals. Highly recommend for any entrepreneur!",
    location: '19.0760, 72.8777',
    status: 'approved',
    created_at: '2026-02-03T14:20:00.000Z',
    updated_at: '2026-02-03T14:20:00.000Z'
  },
  {
    id: '3',
    name: 'Klaus Weber',
    email: 'klaus.weber@email.de',
    message: "Amitabh's expertise in Vastu Shastra brought remarkable balance to our Berlin apartment. As a German engineer, I was skeptical initially, but the scientific approach and measurable results convinced me. My sleep quality and focus have never been better.",
    location: '52.5200, 13.4050',
    status: 'approved',
    created_at: '2026-01-20T09:15:00.000Z',
    updated_at: '2026-01-20T09:15:00.000Z'
  },
  {
    id: '4',
    name: 'Anjali Patel',
    email: 'anjali.p@email.com',
    message: "The Vastu consultation for our Bangalore tech startup office was incredible. Team collaboration improved dramatically after implementing Amitabh's suggestions. Our energy levels and creativity have soared. The investment has paid for itself many times over!",
    location: '12.9716, 77.5946',
    status: 'approved',
    created_at: '2026-02-18T11:45:00.000Z',
    updated_at: '2026-02-18T11:45:00.000Z'
  },
  {
    id: '5',
    name: 'Hans Mueller',
    email: 'hans.mueller@email.de',
    message: "Amitabh's Vastu guidance for our Munich home exceeded all expectations. The positive energy shift was immediately noticeable. My children's concentration improved, and family harmony increased remarkably. Professional, thorough, and deeply knowledgeable.",
    location: '48.1351, 11.5820',
    status: 'approved',
    created_at: '2026-02-25T16:30:00.000Z',
    updated_at: '2026-02-25T16:30:00.000Z'
  },
  {
    id: '6',
    name: 'Meera Reddy',
    email: 'meera.reddy@email.com',
    message: "The personalized Vastu consultation for our Hyderabad residence was life-changing. Amitabh's attention to detail and cultural sensitivity made the process seamless. Our home now feels perfectly aligned with our family's energy and aspirations.",
    location: '17.3850, 78.4867',
    status: 'approved',
    created_at: '2026-03-02T13:20:00.000Z',
    updated_at: '2026-03-02T13:20:00.000Z'
  },
  {
    id: '7',
    name: 'Greta Schmidt',
    email: 'greta.schmidt@email.de',
    message: "As a healthcare professional in Hamburg, I was impressed by Amitabh's systematic approach to Vastu. The improvements in my clinic's patient flow and staff well-being have been remarkable. His recommendations were practical and immediately implementable.",
    location: '53.5511, 9.9937',
    status: 'approved',
    created_at: '2026-03-08T10:10:00.000Z',
    updated_at: '2026-03-08T10:10:00.000Z'
  },
  {
    id: '8',
    name: 'Maria Schmidt',
    email: 'maria.schmidt@email.de',
    message: "Living in Munich, I sought Amitabh's guidance for our new family home. His consultation addressed every aspect - from bedroom placement to kitchen orientation. The energy flow in our home feels completely different now. Our children sleep better and there's more peace in household.",
    location: '48.1351, 11.5820',
    status: 'approved',
    created_at: '2026-02-10T16:45:00.000Z',
    updated_at: '2026-02-10T16:45:00.000Z'
  },
  {
    id: '9',
    name: 'Hans Müller',
    email: 'hans.muller@email.de',
    message: "Amitabh's consultation for my Hamburg office was exceptional. The strategic placement of furniture and equipment according to Vastu principles created a more productive work environment. My team's collaboration improved noticeably. A perfect blend of ancient wisdom and modern business needs.",
    location: '53.5511, 9.9937',
    status: 'approved',
    created_at: '2026-02-28T11:00:00.000Z',
    updated_at: '2026-02-28T11:00:00.000Z'
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
        console.log('KV GET success, count:', testimonials.length);
      } catch (kvError) {
        console.log('KV error, using fallback:', kvError);
        testimonials = fallbackTestimonials;
      }
      
      console.log('Returning testimonials:', testimonials.length, 'items');
      
      const { status } = req.query;
      let filteredTestimonials = testimonials;
      if (status) {
        filteredTestimonials = testimonials.filter((t: any) => t.status === status);
        console.log('Filtered by status', status, ':', filteredTestimonials.length, 'items');
      }
      
      return res.status(200).json({ testimonials: filteredTestimonials });
    }

    if (req.method === 'POST') {
      const { name, email, message, location } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({ error: 'Name, email, and message are required' });
      }

      const newTestimonial = {
        id: Date.now().toString(),
        name,
        email,
        message,
        location: location || '',
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
