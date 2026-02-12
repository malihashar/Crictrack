var express = require('express');
var router = express.Router();
const Stats = require('../info');


router.post("/show", async function(req,res){
  try {
    console.log("DATE RECEIVED:", req.body.date);

    const stats = await Stats.create({
      player: req.body.playerId,
      date: req.body.date,
      runs: Number(req.body.runs),
      wickets: Number(req.body.wickets),
      overs: Number(req.body.overs),
      notes: req.body.notes,
    });
  console.log("stats",stats);
      res.redirect('/add/' + req.body.playerId);

       }catch (err) {
        console.error(err);
        res.status(500).send("Error saving user");
      }
})
module.exports = router;
