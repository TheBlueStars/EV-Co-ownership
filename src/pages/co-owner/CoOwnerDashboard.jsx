import React from 'react';
import { useAuth } from '../lib/AuthContext.jsx'; // Đã sửa đường dẫn thành: '../lib/AuthContext.jsx'

const CoOwnerDashboard = () => {
    const { user } = useAuth();

    return (
        <div className="p-8 bg-white shadow-xl rounded-xl m-8">
            <div className="flex items-center justify-between border-b pb-4 mb-4">
                <h2 className="text-4xl font-extrabold text-blue-700">Bảng điều khiển Đồng sở hữu</h2>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full">
                    {user?.role.toUpperCase()}
                </span>
            </div>
            <p className="mt-4 text-gray-600">
                Chào mừng trở lại, **{user?.name}**. Bạn có thể xem lịch sử sử dụng xe và các chi phí liên quan.
            </p>
            <div className="mt-8 p-4 bg-gray-50 border-l-4 border-gray-400 text-gray-800 rounded-lg">
                <p className="font-semibold">Đang chờ phát triển...</p>
                <p className="text-sm">Tạo các component: Biểu đồ sử dụng xe, Bảng chi phí chia sẻ.</p>
            </div>
        </div>
    );
};

export default CoOwnerDashboard;