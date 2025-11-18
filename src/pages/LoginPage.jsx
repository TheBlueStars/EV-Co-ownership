import React, { useState } from 'react';
import { Shield } from 'lucide-react';
import { useAuth } from '../lib/AuthContext.jsx'; // Đã sửa: thêm .jsx vào cuối đường dẫn

const LoginPage = ({ setCurrentPage }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, loading } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8 space-y-6 border border-indigo-200">
        <div className="flex flex-col items-center">
          <Shield className="w-10 h-10 text-indigo-600 mb-2"/>
          <h2 className="text-3xl font-extrabold text-gray-900">Đăng nhập hệ thống</h2>
          <p className="mt-2 text-sm text-gray-500">EV-Co-ownership</p>
        </div>

        {error && (
          <div className="p-3 text-sm text-red-700 bg-red-100 rounded-lg" role="alert">
            {error}
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Tên đăng nhập (Thử: admin, staff, co-owner)</label>
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
              placeholder="admin, staff hoặc co-owner"
              disabled={loading}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Mật khẩu</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
              placeholder="123"
              disabled={loading}
            />
          </div>
          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out disabled:opacity-50"
            >
              {loading ? 'Đang xử lý...' : 'Đăng Nhập'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;