import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ServiceRequest from './pages/ServiceRequest';
import ServiceTrack from './pages/ServiceTrack';
import Footer from './components/Footer';
import Header from './components/Header';
import AuthPage from './pages/AuthPage';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');
  const [user, setUser] = useState(null);
  const [showAuth, setShowAuth] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [newName, setNewName] = useState('');
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const handleUserIconClick = () => setShowAuth(true);
  const handleAuthClose = () => setShowAuth(false);
  const handleLogin = (userData) => {
    setUser(userData);
    setShowAuth(false);
  };
  const handleLogout = () => setUser(null);
  const handleSettings = () => {
    setNewName(user?.name || '');
    setShowSettings(true);
  };
  const handleSettingsSave = () => {
    setUser({ ...user, name: newName });
    setShowSettings(false);
  };

  return (
    <div className={`App ${theme}-theme`}>
      <Router>
        <Header
          theme={theme}
          toggleTheme={toggleTheme}
          user={user}
          onUserIconClick={handleUserIconClick}
          onLogout={handleLogout}
          onSettings={handleSettings}
        />
        <main className="main-content container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/takip" element={<ServiceTrack />} />
            <Route path="/servis" element={<ServiceRequest />} />
          </Routes>
        </main>
        <Footer />
        {showAuth && <AuthPage onClose={handleAuthClose} onLogin={handleLogin} />}
        {showSettings && (
          <div className="auth-modal-bg">
            <div className="auth-modal">
              <button className="auth-close" onClick={() => setShowSettings(false)}>×</button>
              <h2>İsim Değiştir</h2>
              <input
                value={newName}
                onChange={e => setNewName(e.target.value)}
                placeholder="Yeni İsim"
                style={{ marginBottom: '1.2rem' }}
              />
              <button onClick={handleSettingsSave} style={{ width: '100%' }}>Kaydet</button>
            </div>
          </div>
        )}
      </Router>
    </div>
  );
}

export default App; 