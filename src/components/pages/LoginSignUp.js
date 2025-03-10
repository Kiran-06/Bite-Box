
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';

const LoginSignUp = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    id: '',
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    sex: '',
    age: '',
    password: '',
    confirmPassword: '',
    isAdmin: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const from = location.state?.from?.pathname || '/';

    if (isLogin) {
      // Login logic
      const user = users.find(u =>
        (u.username === formData.username) &&
        u.password === formData.password
      );
      if (user) {
        login(user);
        console.log(user);
        navigate(from, { replace: true });
      }
    } else {
      // Signup logic
      if (formData.password !== formData.confirmPassword) return alert('Passwords dont match');
      if (users.some(u => u.username === formData.username)) return alert('Username exists');

      const newUser = { ...formData, id: Date.now() };
      delete newUser.confirmPassword;
      localStorage.setItem('users', JSON.stringify([...users, newUser]));
      login(newUser);
      navigate(from, { replace: true });
    }
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <>
            <input required placeholder="First Name"
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
            <input required placeholder="Last Name"
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
            <input required placeholder="Gender"
              onChange={(e) => setFormData({ ...formData, sex: e.target.value })} />
            <input required type="number" placeholder="Age"
              onChange={(e) => setFormData({ ...formData, age: e.target.value })} />
          </>
        )}
        <input required placeholder="Username or Email"
          onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
        <input required type="password" placeholder="Password"
          onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
        {!isLogin && (
          <input required type="password" placeholder="Confirm Password"
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })} />
        )}
        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Create new account' : 'Already have an account?'}
      </button>
    </div>
  );
};

export default LoginSignUp;