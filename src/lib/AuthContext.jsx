import React, { createContext, useReducer, useContext, useEffect, useState } from 'react';
import { signInAnonymously, signInWithCustomToken, onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase.js'; // Import auth từ file firebase.js

// ====================================================================
// Auth Context - Thiết lập Context và Reducer
// ====================================================================

// Định nghĩa Context
const AuthContext = createContext();

// State ban đầu
const initialAuthState = {
  isLoggedIn: false,
  user: null, // user object: { id, name, role }
  error: null,
  loading: true, // Thêm loading state cho quá trình khởi tạo Auth
};

// Reducer để quản lý trạng thái phức tạp
const authReducer = (state, action) => {
  switch (action.type) {
    case 'AUTH_READY':
      return { ...state, loading: false };
    case 'LOGIN_START':
      return { ...state, loading: true, error: null };
    case 'LOGIN_SUCCESS':
      // Giả sử server trả về user data
      return { ...state, isLoggedIn: true, user: action.payload, loading: false };
    case 'LOGIN_FAILURE':
      return { ...state, isLoggedIn: false, user: null, loading: false, error: action.payload };
    case 'LOGOUT':
      return { ...initialAuthState, loading: false };
    default:
      return state;
  }
};

// Component Provider
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialAuthState);
  const [userId, setUserId] = useState(null); // Firebase User ID

  // Khởi tạo Firebase Auth và Lắng nghe trạng thái
  useEffect(() => {
    const initializeAuth = async () => {
      const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;

      try {
        if (initialAuthToken) {
          // Sử dụng token tùy chỉnh nếu có
          await signInWithCustomToken(auth, initialAuthToken);
        } else {
          // Đăng nhập ẩn danh nếu không có token
          await signInAnonymously(auth);
        }
      } catch (e) {
        console.error("Firebase auth initialization error:", e);
      }
    };

    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUserId(firebaseUser.uid);
      } else {
        setUserId(null);
      }
      dispatch({ type: 'AUTH_READY' });
    });

    initializeAuth();

    // Dọn dẹp listener
    return () => unsubscribe();
  }, []); // Chỉ chạy một lần khi component mount

  // Giả lập API call cho login (sử dụng userId để tạo user object giả)
  const login = async (username, password) => {
    dispatch({ type: 'LOGIN_START' });
    try {
      await new Promise(resolve => setTimeout(resolve, 500));

      let userData = null;
      if (username === 'admin' && password === '123') {
        // Tạm thời dùng ID của Firebase Auth làm ID cho user object
        userData = { id: userId, name: 'Admin Tuyên', role: 'admin' };
      } else if (username === 'staff' && password === '123') {
        userData = { id: userId, name: 'Staff An', role: 'staff' };
      } else if (username === 'co-owner' && password === '123') {
        userData = { id: userId, name: 'Co-Owner Bình', role: 'co-owner' };
      }

      if (userData) {
        // Cần đảm bảo userId đã có khi đăng nhập thành công
        if (userId) {
          dispatch({ type: 'LOGIN_SUCCESS', payload: userData });
        } else {
          // Trường hợp hiếm: Auth chưa kịp hoàn thành, đăng nhập lại
          dispatch({ type: 'LOGIN_FAILURE', payload: 'Đang tải thông tin người dùng. Vui lòng thử lại.' });
        }
      } else {
        dispatch({ type: 'LOGIN_FAILURE', payload: 'Tên đăng nhập hoặc mật khẩu không đúng.' });
      }

    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE', payload: 'Lỗi kết nối server.' });
    }
  };

  const logout = () => {
    auth.signOut(); // Đăng xuất Firebase
    dispatch({ type: 'LOGOUT' });
  };

  return (
    // Cung cấp userId và loading state mới
    <AuthContext.Provider value={{ ...state, login, logout, userId, isAuthLoading: state.loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook để sử dụng Context
export const useAuth = () => useContext(AuthContext);