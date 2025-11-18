import React from 'react';
import { useAuth } from '../../lib/AuthContext.jsx'; // Đã sửa: thêm .jsx

const AdminDashboard = () => {
    const { user } = useAuth();
    
    return (
        <div className="p-8 bg-white shadow-xl rounded-xl m-8">
            <div className="flex items-center justify-between border-b pb-4 mb-4">
                <h2 className="text-4xl font-extrabold text-indigo-700">Bảng điều khiển Quản trị viên</h2>
                <span className="bg-indigo-100 text-indigo-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full">
                    {user?.role.toUpperCase()}
                </span>
            </div>

            <p className="mt-4 text-gray-600">
                Chào mừng trở lại, **{user?.name}**. Bạn có quyền truy cập và quản lý toàn bộ hệ thống.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <Card title="Quản lý Người dùng" description="Thêm, xóa, chỉnh sửa tài khoản người dùng." color="bg-red-500" icon="👥" />
                <Card title="Quản lý Xe" description="Thêm xe mới, cập nhật trạng thái và lịch bảo trì." color="bg-green-500" icon="🚗" />
                <Card title="Báo cáo & Thống kê" description="Xem báo cáo hiệu suất và dữ liệu sử dụng." color="bg-blue-500" icon="📈" />
            </div>

            <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 rounded-lg">
                <p className="font-semibold">Hướng dẫn tiếp theo:</p>
                <p className="text-sm">Tạo các component con (ví dụ: `UserTable`, `CarForm`) và tích hợp API thực tế.</p>
            </div>
        </div>
    );
};

// Component Card nhỏ để làm đẹp
const Card = ({ title, description, color, icon }) => (
    <div className="p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 bg-white border border-gray-100">
        <div className={`w-12 h-12 flex items-center justify-center text-2xl rounded-full mb-4 ${color} text-white`}>
            {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500 mt-2">{description}</p>
    </div>
);

export default AdminDashboard;