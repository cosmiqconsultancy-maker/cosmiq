import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'testimonials.json');

export interface Testimonial {
  id: number;
  name: string;
  email: string;
  message: string;
  status: 'pending' | 'approved' | 'rejected';
  created_at: string;
  updated_at: string;
}

// Ensure data directory exists
try {
  if (!fs.existsSync(path.dirname(DATA_FILE))) {
    fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
  }
} catch (error) {
  console.error('Error creating data directory:', error);
}

export const getTestimonials = async (status?: string): Promise<Testimonial[]> => {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      return [];
    }
    
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    const testimonials: Testimonial[] = JSON.parse(data);
    
    if (status) {
      return testimonials.filter(t => t.status === status);
    }
    
    return testimonials;
  } catch (error) {
    console.error('Error reading testimonials:', error);
    return [];
  }
};

export const addTestimonial = async (name: string, email: string, message: string): Promise<Testimonial> => {
  try {
    const testimonials = await getTestimonials();
    const newTestimonial: Testimonial = {
      id: Date.now(),
      name,
      email,
      message,
      status: 'pending',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
    
    testimonials.push(newTestimonial);
    fs.writeFileSync(DATA_FILE, JSON.stringify(testimonials, null, 2));
    
    return newTestimonial;
  } catch (error) {
    console.error('Error adding testimonial:', error);
    throw error;
  }
};

export const updateTestimonial = async (id: number, updates: Partial<Testimonial>): Promise<Testimonial | null> => {
  try {
    const testimonials = await getTestimonials();
    const index = testimonials.findIndex(t => t.id === id);
    
    if (index === -1) return null;
    
    testimonials[index] = { ...testimonials[index], ...updates, updated_at: new Date().toISOString() };
    fs.writeFileSync(DATA_FILE, JSON.stringify(testimonials, null, 2));
    
    return testimonials[index];
  } catch (error) {
    console.error('Error updating testimonial:', error);
    throw error;
  }
};

export const deleteTestimonial = async (id: number): Promise<boolean> => {
  try {
    const testimonials = await getTestimonials();
    const filtered = testimonials.filter(t => t.id !== id);
    
    if (filtered.length === testimonials.length) return false;
    
    fs.writeFileSync(DATA_FILE, JSON.stringify(filtered, null, 2));
    return true;
  } catch (error) {
    console.error('Error deleting testimonial:', error);
    throw error;
  }
};
