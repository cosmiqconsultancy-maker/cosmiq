import React, { useState, useEffect } from 'react';
import { RefreshCw } from 'lucide-react';
import type { Testimonial } from '../lib/testimonials';

export const AdminTestimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('all');
  const [loading, setLoading] = useState(false);

  const ADMIN_PASSWORD = 'Cosmiq@consultancy.pass';

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setLoginError('');
    } else {
      setLoginError('Invalid password');
    }
  };

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
        await fetchTestimonials();
      } else {
        try {
          const error = await response.json();
          alert(`Failed to update testimonial: ${error.error || 'Unknown error'}`);
        } catch {
          alert('Failed to update testimonial: Server error');
        }
      }
    } catch (error) {
      console.error('Error updating testimonial:', error);
      alert('Failed to update testimonial');
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
        await fetchTestimonials();
      } else {
        try {
          const error = await response.json();
          alert(`Failed to delete testimonial: ${error.error || 'Unknown error'}`);
        } catch {
          alert('Failed to delete testimonial: Server error');
        }
      }
    } catch (error) {
      console.error('Error deleting testimonial:', error);
      alert('Failed to delete testimonial');
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
            onChange={e => {
              setPassword(e.target.value);
              setLoginError('');
            }}
            className="w-full px-4 py-2 border border-charcoal/20 rounded-lg mb-4"
          />
          {loginError && (
            <p className="text-red-500 text-sm mb-4">{loginError}</p>
          )}
          <button
            onClick={handleLogin}
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
        <div className="flex items-center justify-between mb-4">
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
        
        <button
          onClick={fetchTestimonials}
          disabled={loading}
          className="flex items-center gap-2 px-4 py-2 bg-bronze text-white rounded-lg hover:bg-bronze/90 mb-8 disabled:opacity-50"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          Refresh
        </button>

        {loading ? (
          <p className="text-center py-8">Loading...</p>
        ) : testimonials.length === 0 ? (
          <p className="text-center py-8 text-charcoal/60">No testimonials found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map(t => (
              <div key={t.id} className="bg-white p-6 rounded-xl shadow-sm border border-charcoal/10 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-medium truncate">{t.name}</span>
                  <span className={`px-2 py-1 rounded text-xs flex-shrink-0 ${
                    t.status === 'approved' ? 'bg-green-100 text-green-700' :
                    t.status === 'rejected' ? 'bg-red-100 text-red-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {t.status}
                  </span>
                </div>
                <p className="text-charcoal/70 text-sm mb-2 truncate">{t.email}</p>
                <p className="text-charcoal/80 text-sm flex-grow line-clamp-4">{t.message}</p>
                <p className="text-xs text-charcoal/50 mt-3">
                  {new Date(t.created_at).toLocaleDateString()}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-charcoal/10">
                  {t.status === 'pending' && (
                    <>
                      <button
                        onClick={() => handleAction(Number(t.id), 'approve')}
                        className="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleAction(Number(t.id), 'reject')}
                        className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600"
                      >
                        Reject
                      </button>
                    </>
                  )}
                  <button
                    onClick={() => handleDelete(Number(t.id))}
                    className="px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
