const express = require('express');
const router = express.Router();
const User = require('../models/User');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Kayıt
router.post('/register', async (req, res) => {
  const { name, surname, email, password } = req.body;
  try {
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ error: 'Bu e-posta ile zaten kayıt olunmuş!' });
    const user = await User.create({ name, surname, email, password });
    res.json({ name: user.name, surname: user.surname, email: user.email });
  } catch (err) {
    res.status(500).json({ error: 'Kayıt sırasında hata oluştu.' });
  }
});

// Giriş
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    if (!user) return res.status(400).json({ error: 'E-posta veya şifre hatalı!' });
    res.json({ name: user.name, surname: user.surname, email: user.email });
  } catch (err) {
    res.status(500).json({ error: 'Giriş sırasında hata oluştu.' });
  }
});

// İsim değiştir
router.post('/update-name', async (req, res) => {
  const { email, name } = req.body;
  try {
    const user = await User.findOneAndUpdate({ email }, { name }, { new: true });
    if (!user) return res.status(404).json({ error: 'Kullanıcı bulunamadı.' });
    res.json({ name: user.name });
  } catch (err) {
    res.status(500).json({ error: 'İsim değiştirme sırasında hata oluştu.' });
  }
});

module.exports = router;
