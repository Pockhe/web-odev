import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-page center-content">
      <h1 className="main-title">Hoşgeldiniz</h1>
      <div className="main-buttons">
        <button className="main-btn" onClick={() => navigate('/takip')}>Telefon Takibi</button>
        <button className="main-btn" onClick={() => navigate('/servis')}>Teknik Yardım</button>
      </div>
    </div>
  );
};

export default Home; 