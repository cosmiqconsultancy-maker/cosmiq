import express from 'express';
import cors from 'cors';
import { getStoredTestimonials, addTestimonial, updateTestimonial, deleteTestimonial } from './src/lib/storage.js';

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Testimonials API
app.get('/api/testimonials', (req, res) => {
  const { status } = req.query;
  let testimonials = getStoredTestimonials();
  
  if (status) {
    testimonials = testimonials.filter(t => t.status === status);
  }
  
  res.json({ testimonials });
});

app.post('/api/testimonials', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' });
  }

  const testimonial = addTestimonial({ name, email, message });
  console.log('New testimonial submitted:', testimonial);
  
  res.status(200).json({ success: true, testimonial });
});

// Admin API
app.post('/api/testimonials/:id', (req, res) => {
  const { id } = req.params;
  const { action } = req.body;
  const authHeader = req.headers.authorization;
  const adminPassword = 'Cosmiq@consultancy.pass'; // Same as Vercel env
  
  if (!adminPassword || authHeader !== `Bearer ${adminPassword}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const testimonialId = parseInt(id, 10);
  
  if (action === 'approve') {
    const testimonial = updateTestimonial(testimonialId, { status: 'approved' });
    if (testimonial) {
      console.log(`Testimonial ${testimonialId} approved`);
      res.status(200).json({ success: true, testimonial });
    } else {
      res.status(404).json({ error: 'Testimonial not found' });
    }
  } else if (action === 'reject') {
    const testimonial = updateTestimonial(testimonialId, { status: 'rejected' });
    if (testimonial) {
      console.log(`Testimonial ${testimonialId} rejected`);
      res.status(200).json({ success: true, testimonial });
    } else {
      res.status(404).json({ error: 'Testimonial not found' });
    }
  } else {
    res.status(400).json({ error: 'Invalid action' });
  }
});

app.delete('/api/testimonials/:id', (req, res) => {
  const { id } = req.params;
  const authHeader = req.headers.authorization;
  const adminPassword = 'Cosmiq@consultancy.pass';
  
  if (!adminPassword || authHeader !== `Bearer ${adminPassword}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const testimonialId = parseInt(id, 10);
  const success = deleteTestimonial(testimonialId);
  
  if (success) {
    console.log(`Testimonial ${testimonialId} deleted`);
    res.status(200).json({ success: true });
  } else {
    res.status(404).json({ error: 'Testimonial not found' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Local API server running on http://localhost:${PORT}`);
  console.log(`📝 Testimonials API: http://localhost:${PORT}/api/testimonials`);
  console.log(`👤 Admin panel: http://localhost:3000/admin/testimonials`);
});
