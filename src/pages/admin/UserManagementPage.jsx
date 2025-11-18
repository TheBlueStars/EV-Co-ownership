import React, { useState, useEffect } from 'react';
import { User, PlusCircle, Edit, Trash2, X, Loader2 } from 'lucide-react';
import { db, getUserCollectionPath } from '../../lib/firebase.js'; // Import db và path
import {
    collection,
    query,
    onSnapshot,
    addDoc,
    doc,
    updateDoc,
    deleteDoc,
    getDoc
} from 'firebase/firestore';
import { useAuth } from '../../lib/AuthContext.jsx';

// Danh sách Vai trò có sẵn
const USER_ROLES = ['admin', 'staff', 'co-owner'];

// ====================================================================
// Component UserFormModal
// ====================================================================

const UserFormModal = ({ isOpen, onClose, userToEdit, onSave }) => {
    // State form: Dùng useEffect để đồng bộ khi userToEdit thay đổi
    const [formData, setFormData] = useState({
        id: null,
        name: '',
        email: '',
        role: USER_ROLES[0],
        status: 'Active',
    });
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        if (userToEdit) {
            // Edit Mode
            setFormData({
                id: userToEdit.id,
                name: userToEdit.name || '',
                email: userToEdit.email || '',
                role: userToEdit.role || USER_ROLES[0],
                status: userToEdit.status || 'Active',
            });
        } else {
            // Add Mode
            setFormData({
                id: null,
                name: '',
                email: '',
                role: USER_ROLES[0],
                status: 'Active',
            });
        }
    }, [userToEdit]);

    const isEditMode = !!userToEdit;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSaving(true);
        try {
            await onSave(formData);
            onClose();
        } catch (error) {
            console.error("Lỗi khi lưu người dùng:", error);
            // Có thể thêm thông báo lỗi trên UI tại đây
        } finally {
            setIsSaving(false);
        }
    };

    if (!isOpen) return null;

    // Ngăn chặn sự kiện click bên ngoài modal đóng modal khi đang ở trạng thái saving
    const handleOutsideClick = (e) => {
        if (e.target.className.includes('fixed inset-0')) {
            if (!isSaving) {
                onClose();
            }
        }
    };

    return (
        <div
            className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50 p-4 transition-opacity duration-300"
            onClick={handleOutsideClick}
        >
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg p-6 transform transition-transform duration-300 scale-100">

                {/* Header Modal */}
                <div className="flex justify-between items-center border-b pb-3 mb-4">
                    <h3 className="text-2xl font-semibold text-gray-800">
                        {isEditMode ? 'Chỉnh sửa Người dùng' : 'Thêm Người dùng Mới'}
                    </h3>
                    <button onClick={onClose} disabled={isSaving} className="text-gray-400 hover:text-gray-600 transition disabled:opacity-50">
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Form Body */}
                <form onSubmit={handleSubmit} className="space-y-4">

                    {isEditMode && (
                        <div>
                            <label className="block text-sm font-medium text-gray-700">ID (Doc ID)</label>
                            <input
                                type="text"
                                value={formData.id || ''}
                                disabled
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-gray-100 rounded-lg"
                            />
                        </div>
                    )}

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Tên</label>
                        <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                            disabled={isSaving}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                            disabled={isSaving}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Vai trò</label>
                            <select
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                                disabled={isSaving}
                            >
                                {USER_ROLES.map(role => (
                                    <option key={role} value={role}>{role.toUpperCase()}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Trạng thái</label>
                            <select
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                                disabled={isSaving}
                            >
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                            </select>
                        </div>
                    </div>

                    {/* Footer Modal */}
                    <div className="pt-4 flex justify-end space-x-3 border-t">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition disabled:opacity-50"
                            disabled={isSaving}
                        >
                            Hủy
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition shadow-md flex items-center justify-center disabled:opacity-50"
                            disabled={isSaving}
                        >
                            {isSaving ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
                            {isEditMode ? 'Cập nhật' : 'Thêm mới'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};


// ====================================================================
// Component UserManagementPage (Chính)
// ====================================================================

const UserManagementPage = () => {
    const { isAuthLoading } = useAuth();
    const [users, setUsers] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingUser, setEditingUser] = useState(null);
    const [isLoadingData, setIsLoadingData] = useState(true);

    // READ: Lắng nghe thay đổi dữ liệu từ Firestore (Realtime)
    useEffect(() => {
        // Chỉ lắng nghe sau khi Auth đã sẵn sàng
        if (!isAuthLoading) {
            const usersColRef = collection(db, getUserCollectionPath());
            const q = query(usersColRef); // Lấy tất cả documents trong collection

            const unsubscribe = onSnapshot(q, (snapshot) => {
                const fetchedUsers = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setUsers(fetchedUsers);
                setIsLoadingData(false);
                console.log('Dữ liệu người dùng đã cập nhật:', fetchedUsers);
            }, (error) => {
                console.error("Lỗi khi fetch users:", error);
                setIsLoadingData(false);
            });

            // Dọn dẹp listener khi component unmount
            return () => unsubscribe();
        }
    }, [isAuthLoading]);

    const openAddModal = () => {
        setEditingUser(null);
        setIsModalOpen(true);
    };

    const openEditModal = (user) => {
        setEditingUser(user);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditingUser(null);
    };

    // CREATE / UPDATE: Xử lý lưu form (Thêm mới hoặc Cập nhật)
    const handleSaveUser = async (formData) => {
        const { id, ...dataToSave } = formData;
        const usersColRef = collection(db, getUserCollectionPath());

        if (id) {
            // Cập nhật người dùng (UPDATE)
            const userDocRef = doc(db, getUserCollectionPath(), id);
            await updateDoc(userDocRef, dataToSave);
            console.log('User Updated:', id);
        } else {
            // Thêm người dùng mới (CREATE)
            await addDoc(usersColRef, dataToSave);
            console.log('New User Added:', dataToSave.name);
        }
    };

    // DELETE: Xử lý Xóa người dùng
    const handleDelete = async (userId) => {
        if (!window.confirm('Bạn có chắc chắn muốn xóa người dùng này?')) {
            return;
        }

        try {
            const userDocRef = doc(db, getUserCollectionPath(), userId);
            await deleteDoc(userDocRef);
            console.log(`User Deleted: ${userId}`);
        } catch (error) {
            console.error("Lỗi khi xóa người dùng:", error);
        }
    };

    return (
        <div className="p-8 max-w-7xl mx-auto">

            {/* Header và Nút Thêm mới */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800 flex items-center">
                    <User className="w-8 h-8 mr-3 text-indigo-600" /> Quản Lý Người Dùng
                </h1>
                <button
                    onClick={openAddModal}
                    className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition duration-150 shadow-md disabled:opacity-50"
                    disabled={isAuthLoading}
                >
                    <PlusCircle className="w-5 h-5" />
                    <span>Thêm Người Dùng Mới</span>
                </button>
            </div>

            {/* Bảng Dữ liệu */}
            <div className="bg-white shadow-xl rounded-xl overflow-hidden mt-6">

                {/* Hiển thị Loading */}
                {(isLoadingData || isAuthLoading) ? (
                    <div className="p-10 text-center text-gray-500 flex flex-col items-center">
                        <Loader2 className="w-8 h-8 animate-spin text-indigo-500 mb-3" />
                        Đang tải dữ liệu...
                    </div>
                ) : (
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                {['ID (Firestore)', 'Tên', 'Email', 'Vai Trò', 'Trạng Thái', 'Hành Động'].map(header => (
                                    <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {users.map((user) => (
                                <tr key={user.id} className="hover:bg-indigo-50 transition duration-100">
                                    <td className="px-6 py-4 whitespace-nowrap text-xs font-mono text-gray-500 max-w-xs overflow-hidden truncate" title={user.id}>{user.id}</td>
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
                                        <button
                                            onClick={() => openEditModal(user)}
                                            className="text-indigo-600 hover:text-indigo-900 transition duration-150 p-1 rounded-full hover:bg-indigo-100"
                                        >
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
                )}

                {users.length === 0 && !isLoadingData && (
                    <div className="mt-6 p-6 text-center text-gray-500 border border-dashed rounded-lg">
                        Chưa có người dùng nào được thêm vào hệ thống.
                    </div>
                )}
            </div>

            {/* Modal cho Thêm/Sửa */}
            <UserFormModal
                isOpen={isModalOpen}
                onClose={closeModal}
                userToEdit={editingUser}
                onSave={handleSaveUser}
            />
        </div>
    );
};

export default UserManagementPage;