import { sql } from '@vercel/postgres';

export interface Testimonial {
  id: number;
  name: string;
  email: string;
  message: string;
  status: 'pending' | 'approved' | 'rejected';
  created_at: string;
  updated_at: string;
}

export async function initTestimonialsTable() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS testimonials (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        status VARCHAR(20) DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    console.log('Testimonials table created successfully');
  } catch (error) {
    console.error('Error creating testimonials table:', error);
  }
}

export async function createTestimonial(name: string, email: string, message: string) {
  const result = await sql`
    INSERT INTO testimonials (name, email, message, status)
    VALUES (${name}, ${email}, ${message}, 'pending')
    RETURNING *
  `;
  return result.rows[0] as Testimonial;
}

export async function getTestimonials(status?: string) {
  if (status) {
    const result = await sql`
      SELECT * FROM testimonials 
      WHERE status = ${status}
      ORDER BY created_at DESC
    `;
    return result.rows as Testimonial[];
  }
  const result = await sql`SELECT * FROM testimonials ORDER BY created_at DESC`;
  return result.rows as Testimonial[];
}

export async function approveTestimonial(id: number) {
  const result = await sql`
    UPDATE testimonials 
    SET status = 'approved', updated_at = CURRENT_TIMESTAMP
    WHERE id = ${id}
    RETURNING *
  `;
  return result.rows[0] as Testimonial;
}

export async function rejectTestimonial(id: number) {
  const result = await sql`
    UPDATE testimonials 
    SET status = 'rejected', updated_at = CURRENT_TIMESTAMP
    WHERE id = ${id}
    RETURNING *
  `;
  return result.rows[0] as Testimonial;
}

export async function deleteTestimonial(id: number) {
  await sql`DELETE FROM testimonials WHERE id = ${id}`;
}
