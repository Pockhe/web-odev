var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // Bu route artık frontend tarafından kullanılmayacak, bu yüzden kaldırabiliriz.
  // res.render('index', { title: 'Express' });
  res.send('Backend is running'); // Basit bir mesaj dönsün
});

module.exports = router;
