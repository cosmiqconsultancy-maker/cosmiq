import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createTestimonial, getTestimonials } from '../src/lib/testimonials.js';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    try {
      const { name, email, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({ error: 'Name, email, and message are required' });
      }

      const testimonial = await createTestimonial(name, email, message);

      await resend.emails.send({
        from: 'CosmiQ Consulting <onboarding@resend.dev>',
        to: 'amitabh@cosmiqconsulting.com',
        subject: 'New Testimonial Submission',
        html: `
          <h2>New Testimonial Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
          <hr>
          <p>Review and approve: <a href="https://cosmiqconsulting.com/admin/testimonials">Admin Panel</a></p>
        `
      });

      return res.status(200).json({ success: true, testimonial });
    } catch (error) {
      console.error('Error creating testimonial:', error);
      return res.status(500).json({ error: 'Failed to submit testimonial' });
    }
  }

  if (req.method === 'GET') {
    try {
      const { status } = req.query;
      const testimonials = await getTestimonials(status as string || undefined);
      return res.status(200).json({ testimonials });
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      return res.status(500).json({ error: 'Failed to fetch testimonials' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
