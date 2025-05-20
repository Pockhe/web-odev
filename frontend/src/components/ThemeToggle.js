import React from 'react';

const ThemeToggle = ({ theme, toggleTheme }) => (
  <button onClick={toggleTheme} className="theme-toggle" title="Tema Değiştir">
    {theme === 'dark' ? '🌙' : '☀️'}
  </button>
);

export default ThemeToggle; 