import { initializeApp } from 'firebase/app';
import { getFirestore, setLogLevel } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Tải cấu hình Firebase từ biến toàn cục của Canvas
const firebaseConfig = typeof __firebase_config !== 'undefined'
    ? JSON.parse(__firebase_config)
    : {};

// ID ứng dụng Canvas (Dùng cho cấu hình bảo mật Firestore)
export const appId = typeof __app_id !== 'undefined'
    ? __app_id
    : 'default-app-id';

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);

// Khởi tạo Firestore và Auth
const db = getFirestore(app);
const auth = getAuth(app);

// Ghi nhật ký Debug (Rất quan trọng để theo dõi lỗi Firestore)
setLogLevel('debug');

export { db, auth };

// Định nghĩa đường dẫn Firestore (Public)
// Dữ liệu người dùng sẽ được lưu trữ công khai trong đường dẫn này
// theo quy tắc bảo mật của Canvas: /artifacts/{appId}/public/data/users
export const getUserCollectionPath = () => {
    return `artifacts/${appId}/public/data/users`;
}

// Lưu ý: Chúng ta sẽ không sử dụng Auth để đăng ký người dùng mới
// vì việc quản lý người dùng (thêm, sửa, xóa) được thực hiện bởi Admin
// thông qua Firestore, còn việc đăng nhập được xử lý bằng token tùy chỉnh.