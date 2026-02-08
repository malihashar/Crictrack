var express = require('express');
var router = express.Router();
const userModel=require("./users");
const User = require("../db");

/* Home page */
router.get('/', function(req, res) {
  res.render('index');
});

/* /a → homepage.ejs */
router.get('/a', function(req, res) {
  res.render('homepage');
});

/* /b → input.ejs */
router.get('/b', async function(req, res) {
  res.render('input');
  
});

/* /c → user_input.ejs */
router.get('/c', async function(req, res) {
  const users = await User.find().sort({ _id: -1 }); 
  res.render('user_input', { users });
});

router.get('/d', function(req, res) {
  res.render("user_info");
});

router.get('/delete/:id', async function(req, res) {
    let users= await User.findOneAndDelete({_id: req.params.id})
    res.redirect('/c');
});
module.exports = router;

