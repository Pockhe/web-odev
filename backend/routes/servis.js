const express = require('express');
const router = express.Router();
const ServiceRequest = require('../models/ServiceRequest');

// Servis talebi oluştur
router.post('/create', async (req, res) => {
  const { name, surname, phone, brand, model, desc } = req.body;
  // Takip kodu üret
  const trackCode = Math.random().toString(36).substr(2, 8).toUpperCase();
  try {
    const talep = await ServiceRequest.create({ name, surname, phone, brand, model, desc, trackCode });
    res.json({ trackCode });
  } catch (err) {
    res.status(500).json({ error: 'Talep oluşturulamadı.' });
  }
});

// Takip kodu ile sorgulama
router.get('/track/:code', async (req, res) => {
  try {
    const talep = await ServiceRequest.findOne({ trackCode: req.params.code });
    if (!talep) return res.status(404).json({ error: 'Talep bulunamadı.' });
    res.json({
      name: talep.name,
      surname: talep.surname,
      brand: talep.brand,
      model: talep.model,
      status: talep.status,
      createdAt: talep.createdAt
    });
  } catch (err) {
    res.status(500).json({ error: 'Takip sorgusu sırasında hata oluştu.' });
  }
});

module.exports = router; 