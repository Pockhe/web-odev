import React, { useState } from 'react';
import './ServiceRequest.css';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/servis-api';

const brands = {
  Apple: ['iPhone 13 Pro Max', 'iPhone 12', 'iPhone 11'],
  Samsung: ['Galaxy S22', 'Galaxy S21', 'Galaxy Note 20'],
  Xiaomi: ['13 Pro', '12', 'Redmi Note 11']
};

const ServiceRequest = () => {
  const [selectedBrand, setSelectedBrand] = useState('Apple');
  const [selectedModel, setSelectedModel] = useState(brands['Apple'][0]);
  const [form, setForm] = useState({ name: '', surname: '', phone: '', desc: '' });
  const [submitted, setSubmitted] = useState(false);
  const [trackCode, setTrackCode] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleBrand = brand => {
    setSelectedBrand(brand);
    setSelectedModel(brands[brand][0]);
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          brand: selectedBrand,
          model: selectedModel
        })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Talep oluşturulamadı');
      setTrackCode(data.trackCode);
      setSubmitted(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="service-request container">
      <h2>Teknik Yardım Talebi</h2>
      {submitted ? (
        <div className="success-msg">
          Yardım talebiniz başarıyla oluşturuldu!<br />
          <span style={{ display: 'block', marginTop: 12, fontWeight: 600, color: '#7ed957', fontSize: '1.1rem' }}>
            Takip Kodunuz: <span style={{ userSelect: 'all', background: '#232526', padding: '0.2em 0.5em', borderRadius: 6 }}>{trackCode}</span>
            <button style={{marginLeft: 8, fontSize: '1rem', cursor: 'pointer'}} onClick={() => navigator.clipboard.writeText(trackCode)}>Kopyala</button>
          </span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="request-form">
          <div className="form-row">
            <input name="name" type="text" placeholder="Adınız" required onChange={handleChange} />
            <input name="surname" type="text" placeholder="Soyadınız" required onChange={handleChange} />
          </div>
          <div className="form-row">
            <input name="phone" type="tel" placeholder="Telefon Numaranız" required onChange={handleChange} />
          </div>
          <div className="brand-row">
            {Object.keys(brands).map(brand => (
              <button type="button" key={brand} className={`brand-btn${selectedBrand === brand ? ' selected' : ''}`} onClick={() => handleBrand(brand)}>{brand}</button>
            ))}
          </div>
          <div className="model-row">
            {brands[selectedBrand].map(model => (
              <button type="button" key={model} className={`model-btn${selectedModel === model ? ' selected' : ''}`} onClick={() => setSelectedModel(model)}>{model}</button>
            ))}
          </div>
          <div className="form-row">
            <textarea name="desc" placeholder="Telefonunuzdaki sorun veya açıklama" rows={3} onChange={handleChange} />
          </div>
          {error && <div className="auth-error">{error}</div>}
          <button type="submit" disabled={loading}>{loading ? 'İşleniyor...' : 'Yardım Talebi Oluştur'}</button>
        </form>
      )}
    </div>
  );
};

export default ServiceRequest; 