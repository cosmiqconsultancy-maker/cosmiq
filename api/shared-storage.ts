// Shared in-memory storage for Vercel
export let testimonials = [];

// Initialize with some sample data
testimonials = [
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
