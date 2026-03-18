import React, { useState, useEffect } from 'react';
import { RefreshCw, Plus, Edit2, Trash2, Save, X } from 'lucide-react';
import type { Blog } from '../lib/blogs';

export const AdminBlogs: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [loading, setLoading] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const ADMIN_PASSWORD = 'Cosmiq@consultancy.pass';

  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    content: '',
    imageUrl: ''
  });

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
      fetchBlogs();
    }
  }, [isAuthenticated]);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/blogs');
      const data = await response.json();
      setBlogs(data.blogs || []);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
    setLoading(false);
  };

  const handleCreate = async () => {
    try {
      const response = await fetch('/api/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsCreating(false);
        setFormData({ title: '', subtitle: '', content: '', imageUrl: '' });
        await fetchBlogs();
      }
    } catch (error) {
      console.error('Error creating blog:', error);
    }
  };

  const handleUpdate = async (id: string) => {
    try {
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${password}`
        },
        body: JSON.stringify({
          title: editingBlog?.title,
          subtitle: editingBlog?.subtitle,
          content: editingBlog?.content,
          imageUrl: editingBlog?.imageUrl
        })
      });

      if (response.ok) {
        setEditingBlog(null);
        await fetchBlogs();
      }
    } catch (error) {
      console.error('Error updating blog:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this blog?')) return;
    try {
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${password}` }
      });
      if (response.ok) {
        await fetchBlogs();
      }
    } catch (error) {
      console.error('Error deleting blog:', error);
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
          {loginError && <p className="text-red-500 text-sm mb-4">{loginError}</p>}
          <button
            onClick={handleLogin}
            className="w-full px-4 py-2 bg-bronze text-white rounded-lg hover:bg-bronze/90"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-display font-medium">Blog Management</h1>
          <div className="flex items-center gap-4">
            <button
              onClick={fetchBlogs}
              className="flex items-center gap-2 px-4 py-2 bg-bronze/10 text-bronze rounded-lg hover:bg-bronze/20"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </button>
            <button
              onClick={() => setIsCreating(true)}
              className="flex items-center gap-2 px-4 py-2 bg-bronze text-white rounded-lg hover:bg-bronze/90"
            >
              <Plus className="w-4 h-4" />
              New Blog
            </button>
          </div>
        </div>

        {/* Create/Edit Form */}
        {(isCreating || editingBlog) && (
          <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
            <h2 className="text-xl font-display mb-4">
              {isCreating ? 'Create New Blog' : 'Edit Blog'}
            </h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Blog Title"
                value={isCreating ? formData.title : editingBlog?.title}
                onChange={e => isCreating 
                  ? setFormData({...formData, title: e.target.value})
                  : setEditingBlog({...editingBlog!, title: e.target.value})
                }
                className="w-full px-4 py-2 border border-charcoal/20 rounded-lg"
              />
              <input
                type="text"
                placeholder="Subtitle"
                value={isCreating ? formData.subtitle : editingBlog?.subtitle}
                onChange={e => isCreating
                  ? setFormData({...formData, subtitle: e.target.value})
                  : setEditingBlog({...editingBlog!, subtitle: e.target.value})
                }
                className="w-full px-4 py-2 border border-charcoal/20 rounded-lg"
              />
              <input
                type="text"
                placeholder="Image URL (or leave empty)"
                value={isCreating ? formData.imageUrl : editingBlog?.imageUrl}
                onChange={e => isCreating
                  ? setFormData({...formData, imageUrl: e.target.value})
                  : setEditingBlog({...editingBlog!, imageUrl: e.target.value})
                }
                className="w-full px-4 py-2 border border-charcoal/20 rounded-lg"
              />
              <textarea
                placeholder="Blog Content"
                rows={6}
                value={isCreating ? formData.content : editingBlog?.content}
                onChange={e => isCreating
                  ? setFormData({...formData, content: e.target.value})
                  : setEditingBlog({...editingBlog!, content: e.target.value})
                }
                className="w-full px-4 py-2 border border-charcoal/20 rounded-lg"
              />
              <div className="flex gap-4">
                <button
                  onClick={isCreating ? handleCreate : () => editingBlog && handleUpdate(editingBlog.id)}
                  className="flex items-center gap-2 px-6 py-2 bg-bronze text-white rounded-lg hover:bg-bronze/90"
                >
                  <Save className="w-4 h-4" />
                  Save
                </button>
                <button
                  onClick={() => {
                    setIsCreating(false);
                    setEditingBlog(null);
                    setFormData({ title: '', subtitle: '', content: '', imageUrl: '' });
                  }}
                  className="flex items-center gap-2 px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                >
                  <X className="w-4 h-4" />
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map(blog => (
            <div key={blog.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              {blog.imageUrl && (
                <img src={blog.imageUrl} alt={blog.title} className="w-full h-48 object-cover" />
              )}
              <div className="p-6">
                <h3 className="text-lg font-display font-medium mb-2">{blog.title}</h3>
                <p className="text-sm text-charcoal/60 mb-4">{blog.subtitle}</p>
                <p className="text-sm text-charcoal/70 line-clamp-3">{blog.content}</p>
                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => setEditingBlog(blog)}
                    className="flex items-center gap-1 px-3 py-1 bg-bronze/10 text-bronze rounded text-sm hover:bg-bronze/20"
                  >
                    <Edit2 className="w-3 h-3" />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(blog.id)}
                    className="flex items-center gap-1 px-3 py-1 bg-red-100 text-red-600 rounded text-sm hover:bg-red-200"
                  >
                    <Trash2 className="w-3 h-3" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {blogs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-charcoal/60">No blogs yet. Create your first blog!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminBlogs;
