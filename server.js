const express = require('express');
const app = express();
const port = 3001;

// Statik dosyaları sunmak için
app.use(express.static('public'));
app.use(express.json());

// Ana sayfa
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.js');
});

// Servis takip sayfası
app.get('/takip', (req, res) => {
    res.sendFile(__dirname + '/public/takip.js');
});

// Yeni servis talebi sayfası
app.get('/servis', (req, res) => {
    res.sendFile(__dirname + '/public/servis.js');
});

// Sunucuyu başlat
app.listen(port, () => {
    console.log(`Web sitesi http://localhost:${port} adresinde çalışıyor`);
}); 