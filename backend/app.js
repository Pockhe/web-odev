const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const servisRouter = require('./routes/servis');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

// MongoDB bağlantısı
mongoose.connect('mongodb+srv://udry0816:MI8cCvvIpDeE82Wr@cluster0.nniym4y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB bağlantısı başarılı!'))
.catch((err) => console.error('MongoDB bağlantı hatası:', err));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/servis-api', servisRouter);

module.exports = app;

const port = 3001;
app.listen(port, () => {
  console.log(`Web sitesi http://localhost:${port} adresinde çalışıyor`);
});
