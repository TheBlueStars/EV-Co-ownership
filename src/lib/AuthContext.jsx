import React, { createContext, useReducer, useContext } from 'react';

// Định nghĩa Context
const AuthContext = createContext();

// State ban đầu
const initialAuthState = {
  isLoggedIn: false,
  user: null, // user object: { id, name, role }
  error: null,
  loading: false,
};

// Reducer để quản lý trạng thái phức tạp
const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_START':
      return { ...state, loading: true, error: null };
    case 'LOGIN_SUCCESS':
      // Giả sử server trả về user data
      return { ...state, isLoggedIn: true, user: action.payload, loading: false };
    case 'LOGIN_FAILURE':
      return { ...state, isLoggedIn: false, user: null, loading: false, error: action.payload };
    case 'LOGOUT':
      return { ...initialAuthState };
    default:
      return state;
  }
};

// Component Provider
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialAuthState);

  // Giả lập API call
  const login = async (username, password) => {
    dispatch({ type: 'LOGIN_START' });
    try {
      // Giả lập thời gian chờ 1 giây
      await new Promise(resolve => setTimeout(resolve, 1000));
      if (username === 'admin' && password === '123') {
        const user = { id: 1, name: 'Admin Tuyên', role: 'admin' };
        dispatch({ type: 'LOGIN_SUCCESS', payload: user });
      } else if (username === 'staff' && password === '123') {
        const user = { id: 2, name: 'Staff An', role: 'staff' };
        dispatch({ type: 'LOGIN_SUCCESS', payload: user });
      } else if (username === 'co-owner' && password === '123') {
        const user = { id: 3, name: 'Co-Owner Bình', role: 'co-owner' };
        dispatch({ type: 'LOGIN_SUCCESS', payload: user });
      } else {
        dispatch({ type: 'LOGIN_FAILURE', payload: 'Tên đăng nhập hoặc mật khẩu không đúng.' });
      }
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE', payload: 'Lỗi kết nối server.' });
    }
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook để sử dụng Context
export const useAuth = () => useContext(AuthContext);