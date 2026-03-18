import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Testimonials API
app.get('/api/testimonials', (req, res) => {
  const fallbackTestimonials = [
    {
      id: 1,
      name: 'Sarah Klein',
      email: '',
      message: "Amitabh's consultation completely changed our home office setup. My productivity has increased significantly, and I feel more focused throughout the day. The Vastu adjustments were simple but incredibly effective.",
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
    },
    {
      id: 4,
      name: 'Raj Patel',
      email: '',
      message: "As someone familiar with Vastu, I was impressed by Amitabh's modern approach. He blended traditional wisdom with contemporary living seamlessly. My business has seen noticeable growth since the office consultation.",
      status: 'approved',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      id: 5,
      name: 'Anita Sharma',
      email: '',
      message: "Amitabh's Cosmiq Report was incredibly detailed and accurate. The personalized blueprint helped me understand my strengths and challenges. His guidance on spatial alignment has brought clarity and balance to my life.",
      status: 'approved',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
  ];
  
  res.json({ testimonials: fallbackTestimonials });
});

app.post('/api/testimonials', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' });
  }

  // Log the testimonial for testing
  console.log('New testimonial submission:', { name, email, message });
  
  res.status(200).json({ success: true, message: 'Testimonial submitted successfully' });
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

  if (action === 'approve' || action === 'reject') {
    console.log(`Testimonial ${id} ${action}ed`);
    res.status(200).json({ 
      success: true, 
      message: `Testimonial ${action}d successfully` 
    });
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

  console.log(`Testimonial ${id} deleted`);
  res.status(200).json({ success: true });
});

app.listen(PORT, () => {
  console.log(`🚀 Local API server running on http://localhost:${PORT}`);
  console.log(`📝 Testimonials API: http://localhost:${PORT}/api/testimonials`);
  console.log(`👤 Admin panel: http://localhost:3000/admin/testimonials`);
});
