import React, { useState, useRef, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import './Header.css';

const Header = ({ theme, toggleTheme, user, onUserIconClick, onLogout, onSettings }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo-title">
          <img src="/logo192.png" alt="Logo" className="header-logo" />
          <span className="site-title">Telefon Teknik Servisi</span>
        </div>
        <div className="header-actions">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button className="user-icon" onClick={onUserIconClick} title={user ? user.name : 'Giriş/Kayıt'}>
            <span role="img" aria-label="user">👤</span>
          </button>
          {user && (
            <div className="user-menu-wrapper" ref={menuRef}>
              <button
                className="user-name-btn green"
                onClick={() => setMenuOpen((v) => !v)}
                style={{ color: '#7ed957', borderColor: '#7ed957' }}
              >
                {user.name} ▼
              </button>
              {menuOpen && (
                <div className="user-menu">
                  <button onClick={() => { setMenuOpen(false); onSettings(); }}>Ayarlar</button>
                  <button onClick={() => { setMenuOpen(false); onLogout(); }}>Çıkış Yap</button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header; 