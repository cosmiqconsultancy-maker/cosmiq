import type { Testimonial } from '../lib/testimonials';

const STORAGE_KEY = 'cosmiq_testimonials';

export const getStoredTestimonials = (): Testimonial[] => {
  if (typeof window === 'undefined') return [];
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

export const addTestimonial = (testimonial: Omit<Testimonial, 'id' | 'created_at' | 'updated_at' | 'status'>): Testimonial => {
  const newTestimonial: Testimonial = {
    ...testimonial,
    id: Date.now(),
    status: 'pending',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };

  const testimonials = getStoredTestimonials();
  testimonials.push(newTestimonial);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(testimonials));
  
  return newTestimonial;
};

export const updateTestimonial = (id: number, updates: Partial<Testimonial>): Testimonial | null => {
  const testimonials = getStoredTestimonials();
  const index = testimonials.findIndex(t => t.id === id);
  
  if (index === -1) return null;
  
  testimonials[index] = { ...testimonials[index], ...updates, updated_at: new Date().toISOString() };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(testimonials));
  
  return testimonials[index];
};

export const deleteTestimonial = (id: number): boolean => {
  const testimonials = getStoredTestimonials();
  const filtered = testimonials.filter(t => t.id !== id);
  
  if (filtered.length === testimonials.length) return false;
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  return true;
};
