import React from 'react';
import { LogOut } from 'lucide-react';
import { useAuth } from '../lib/AuthContext.jsx'; // Đã thêm .jsx vào cuối đường dẫn

const Header = ({ setCurrentPage }) => {
  const { user, logout } = useAuth();

  // Tên hiển thị cho vai trò
  const roleMap = {
    'admin': 'Quản trị viên',
    'staff': 'Nhân viên',
    'co-owner': 'Đồng sở hữu',
  };

  return (
    <header className="bg-indigo-700 shadow-lg sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo/Tên dự án */}
        <h1
          className="text-xl font-bold text-white tracking-wider cursor-pointer transition duration-200 hover:text-indigo-200"
          onClick={() => setCurrentPage('dashboard')}
        >
          EV-CO-OWNERSHIP
        </h1>

        {/* Thông tin người dùng & Nút Logout */}
        <div className="flex items-center space-x-4">
          <div className="text-white text-right">
            <p className="text-sm font-semibold">{user.name}</p>
            <p className="text-xs opacity-75">{roleMap[user.role] || user.role}</p>
          </div>
          <button
            onClick={logout}
            className="flex items-center space-x-2 px-3 py-2 bg-red-500 text-white text-sm font-medium rounded-lg hover:bg-red-600 transition duration-150 shadow-md"
          >
            <LogOut className="w-4 h-4" />
            <span>Đăng Xuất</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;