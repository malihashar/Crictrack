var express = require('express');
var router = express.Router();
const userModel=require("./users");
const User = require("../db");
const Stats = require('../info');

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

router.get('/d/:userid', async function(req, res) {
  const user = await User.findOne({ _id: req.params.userid });
  res.render("user_info",{user});
});

router.get('/delete/:id', async function(req, res) {
    let users= await User.findOneAndDelete({_id: req.params.id})
    res.redirect('/c');
});

router.get('/edit/:id', async function(req, res) {
    let user= await User.findOne({_id: req.params.id})
    res.render('edit_user',{user});
});

router.post('/update/:userid', async function(req, res) {
    let{comments,name,position,height,age}= req.body
    let user= await User.findOneAndUpdate({_id: req.params.userid}, {comments,name,position,height,age}, {new:true});
    res.redirect('/c');
});

router.get('/stats/:userid',async function(req,res){
  res.render("stats",{userid:req.params.userid});
})
router.get('/add/:userid', async function(req, res) {
  const playerId = req.params.userid;

  console.log("Player ID:", playerId);

  const player = await User.findById(playerId);
  console.log("Player found:", player);

  const stats = await Stats
    .find({ player: playerId })
    .sort({ _id: -1 });   

  res.render("add_stats", { player, stats });
});



router.get("/stats/delete/:id", async function(req, res) {
  try {
    const stat = await Stats.findById(req.params.id);

    if (!stat) {
      return res.redirect("/c");
    }

    const playerId = stat.player;

    await Stats.findByIdAndDelete(req.params.id);

    res.redirect("/add/" + playerId);

  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting stat");
  }
});

router.get("/stats/edit/:id", async function(req, res) {
  const stat = await Stats.findById(req.params.id);
    const playerId = stat.player;

    await Stats.findByIdAndUpdate(req.params.id);

    res.redirect("edit_user");

  
});

router.get("/stats/change/:id", async function(req, res) {
  const stat = await Stats.findById(req.params.id);

  if (!stat) {
    return res.send("Stat not found");
  }

  res.render("stats_edit", { stat });
});




module.exports = router;

