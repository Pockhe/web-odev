import React, { useState } from 'react';
import './AuthPage.css';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/users';

const AuthPage = ({ onClose, onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: '', surname: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      if (isLogin) {
        const res = await fetch(`${API_URL}/users/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: form.email, password: form.password })
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Giriş hatası');
        onLogin(data);
      } else {
        const res = await fetch(`${API_URL}/users/register`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form)
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Kayıt hatası');
        onLogin(data);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-modal-bg">
      <div className="auth-modal">
        <button className="auth-close" onClick={onClose}>×</button>
        <h2>{isLogin ? 'Giriş Yap' : 'Kayıt Ol'}</h2>
        <form onSubmit={handleSubmit} className="auth-form">
          {!isLogin && (
            <>
              <input name="name" type="text" placeholder="Adınız" onChange={handleChange} />
              <input name="surname" type="text" placeholder="Soyadınız" onChange={handleChange} />
            </>
          )}
          <input name="email" type="email" placeholder="E-posta" onChange={handleChange} />
          <input name="password" type="password" placeholder="Şifre" onChange={handleChange} />
          {error && <div className="auth-error">{error}</div>}
          <button type="submit" disabled={loading}>{loading ? 'İşleniyor...' : (isLogin ? 'Giriş Yap' : 'Kayıt Ol')}</button>
        </form>
        <div className="auth-switch">
          {isLogin ? (
            <span>Hesabınız yok mu? <button onClick={() => { setIsLogin(false); setError(''); }}>Kayıt Ol</button></span>
          ) : (
            <span>Zaten hesabınız var mı? <button onClick={() => { setIsLogin(true); setError(''); }}>Giriş Yap</button></span>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage; 