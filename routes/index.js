var express = require('express');
var router = express.Router();

app.use(express.static("./public"))
/* Home page */
router.get('/', function(req, res) {
  res.render('index');
});

/* /a → homepage.ejs */
router.get('/a', function(req, res) {
  res.render('homepage');
});

/* /b → input.ejs */
router.get('/b', function(req, res) {
  res.render('input');
});

/* /c → user_input.ejs */
router.get('/c', function(req, res) {
  res.render('user_input');
});

module.exports = router;

