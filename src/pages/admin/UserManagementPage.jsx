import React, { useState } from 'react';
import { User, PlusCircle, Edit, Trash2 } from 'lucide-react';

// Dữ liệu người dùng giả lập
const mockUsers = [
    { id: '1001', name: 'Admin Tuyên', email: 'tuyen@example.com', role: 'admin', status: 'Active' },
    { id: '1002', name: 'Staff An', email: 'an@example.com', role: 'staff', status: 'Active' },
    { id: '1003', name: 'Co-Owner Bình', email: 'binh@example.com', role: 'co-owner', status: 'Active' },
    { id: '1004', name: 'Staff Chí', email: 'chi@example.com', role: 'staff', status: 'Inactive' },
];

const UserManagementPage = () => {
    const [users, setUsers] = useState(mockUsers);

    // Hàm giả lập: Xóa người dùng
    const handleDelete = (userId) => {
        // Thay thế bằng API call thực tế
        setUsers(users.filter(user => user.id !== userId));
        console.log(`Deleting user: ${userId}`);
    };

    return (
        <div className="p-8 max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800 flex items-center">
                    <User className="w-8 h-8 mr-3 text-indigo-600" /> Quản Lý Người Dùng
                </h1>
                <button
                    className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition duration-150 shadow-md"
                >
                    <PlusCircle className="w-5 h-5" />
                    <span>Thêm Người Dùng Mới</span>
                </button>
            </div>

            <div className="bg-white shadow-xl rounded-xl overflow-hidden mt-6">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            {['ID', 'Tên', 'Email', 'Vai Trò', 'Trạng Thái', 'Hành Động'].map(header => (
                                <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {users.map((user) => (
                            <tr key={user.id} className="hover:bg-indigo-50 transition duration-100">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{user.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{user.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                                        ${user.role === 'admin' ? 'bg-red-100 text-red-800' :
                                          user.role === 'staff' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                                        {user.role}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                                        ${user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                        {user.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                                    <button className="text-indigo-600 hover:text-indigo-900 transition duration-150 p-1 rounded-full hover:bg-indigo-100">
                                        <Edit className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(user.id)}
                                        className="text-red-600 hover:text-red-900 transition duration-150 p-1 rounded-full hover:bg-red-100"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {users.length === 0 && (
                <div className="mt-6 p-6 text-center text-gray-500 border border-dashed rounded-lg">
                    Chưa có người dùng nào được thêm vào hệ thống.
                </div>
            )}
        </div>
    );
};

export default UserManagementPage;