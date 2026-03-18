import React, { useState, useEffect } from 'react';
import type { Testimonial } from '../lib/testimonials';

export const AdminTestimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('all');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      fetchTestimonials();
    }
  }, [isAuthenticated, filter]);

  const fetchTestimonials = async () => {
    setLoading(true);
    try {
      const statusParam = filter !== 'all' ? `?status=${filter}` : '';
      const response = await fetch(`/api/testimonials${statusParam}`);
      const data = await response.json();
      setTestimonials(data.testimonials);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAction = async (id: number, action: 'approve' | 'reject') => {
    try {
      const response = await fetch(`/api/testimonials/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${password}`
        },
        body: JSON.stringify({ action })
      });

      if (response.ok) {
        fetchTestimonials();
      } else {
        alert('Failed to update testimonial');
      }
    } catch (error) {
      console.error('Error updating testimonial:', error);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this testimonial?')) return;

    try {
      const response = await fetch(`/api/testimonials/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${password}`
        }
      });

      if (response.ok) {
        fetchTestimonials();
      } else {
        alert('Failed to delete testimonial');
      }
    } catch (error) {
      console.error('Error deleting testimonial:', error);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="pt-32 pb-32 max-w-md mx-auto px-6">
        <h1 className="text-3xl font-display font-medium mb-8">Admin Login</h1>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-charcoal/20 rounded-lg mb-4"
          />
          <button
            onClick={() => setIsAuthenticated(true)}
            className="w-full px-4 py-2 bg-bronze text-white rounded-lg hover:bg-bronze/90"
          >
            Login
          </button>
          <p className="text-sm text-charcoal/60 mt-2">
            Password will be validated on actions
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-display font-medium">Manage Testimonials</h1>
          <select
            value={filter}
            onChange={e => setFilter(e.target.value as any)}
            className="px-4 py-2 border border-charcoal/20 rounded-lg"
          >
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>

        {loading ? (
          <p className="text-center py-8">Loading...</p>
        ) : testimonials.length === 0 ? (
          <p className="text-center py-8 text-charcoal/60">No testimonials found</p>
        ) : (
          <div className="space-y-4">
            {testimonials.map(t => (
              <div key={t.id} className="bg-white p-6 rounded-xl shadow-sm border border-charcoal/10">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-medium">{t.name}</span>
                      <span className={`px-2 py-1 rounded text-xs ${
                        t.status === 'approved' ? 'bg-green-100 text-green-700' :
                        t.status === 'rejected' ? 'bg-red-100 text-red-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {t.status}
                      </span>
                    </div>
                    <p className="text-charcoal/70 mb-2">{t.email}</p>
                    <p className="text-charcoal/80">{t.message}</p>
                    <p className="text-sm text-charcoal/50 mt-2">
                      Submitted: {new Date(t.created_at).toLocaleDateString()}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 ml-4">
                    {t.status === 'pending' && (
                      <>
                        <button
                          onClick={() => handleAction(t.id, 'approve')}
                          className="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleAction(t.id, 'reject')}
                          className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600"
                        >
                          Reject
                        </button>
                      </>
                    )}
                    <button
                      onClick={() => handleDelete(t.id)}
                      className="px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
