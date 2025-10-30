export const AuthAPI = {
  async login(email, pass) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const found = users.find(u => u.email === email && u.pass === pass);
    if (!found) throw new Error('Sai tài khoản hoặc mật khẩu');
    const token = btoa(`${email}:${Date.now()}`);
    localStorage.setItem('token', token);
    localStorage.setItem('currentUser', JSON.stringify(found));
    return { token };
  },

  async register(name, email, pass, share) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.some(u => u.email === email)) throw new Error('Email đã tồn tại');
    const newUser = { name, email, pass, share, createdAt: new Date().toISOString() };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    return newUser;
  },

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
  }
};
