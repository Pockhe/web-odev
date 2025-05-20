import React, { useState } from 'react';
import './ServiceTrack.css';

const API_URL = 'http://localhost:3001/servis-api';

const steps = [
  'Teslim Alındı',
  'Tamir Ediliyor',
  'Parça Bekleniyor',
  'Teslim Edilecek'
];

const ServiceTrack = () => {
  const [code, setCode] = useState('');
  const [activeStep, setActiveStep] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [talep, setTalep] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    setTalep(null);
    setActiveStep(null);
    try {
      const res = await fetch(`${API_URL}/track/${code}`);
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.error || 'Talep bulunamadı veya bir hata oluştu.');
      }
      
      setTalep(data);
      const stepIndex = steps.findIndex(s => s === data.status);
      setActiveStep(stepIndex === -1 ? 0 : stepIndex);
      
    } catch (err) {
      setError(err.message);
      setTalep(null);
      setActiveStep(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="service-track container">
      <h2>Telefon Takibi</h2>
      <form onSubmit={handleSubmit} className="track-form">
        <input value={code} onChange={e => setCode(e.target.value)} placeholder="Takip Kodu" required />
        <button type="submit" disabled={loading}>{loading ? 'Sorgulanıyor...' : 'Sorgula'}</button>
      </form>
      {error && <div className="auth-error">{error}</div>}
      
      {activeStep !== null && (
        <div className="stepper">
          {steps.map((step, i) => (
            <div key={i} className={`step ${i <= activeStep ? 'active' : ''}`}>
              <div className="circle">{i + 1}</div>
              <div className="label">{step}</div>
              {i < steps.length - 1 && <div className="bar" />}
            </div>
          ))}
        </div>
      )}
      
      {talep && (
        <div className="track-result">
          <p><strong>Ad Soyad:</strong> {talep.name} {talep.surname}</p>
          <p><strong>Marka/Model:</strong> {talep.brand} {talep.model}</p>
          <p><strong>Durum:</strong> {talep.status}</p>
          <p><strong>Talep Tarihi:</strong> {new Date(talep.createdAt).toLocaleString('tr-TR')}</p>
        </div>
      )}
    </div>
  );
};

export default ServiceTrack; 