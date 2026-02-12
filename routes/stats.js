var express = require('express');
var router = express.Router();
const Stats = require('../info');


router.post("/show", async function(req,res){
  try {
   console.log("RAW BODY:", req.body);

     const runs = parseInt(req.body.runs, 10);

    if (isNaN(runs)) {
      return res.status(400).send("Runs must be a number");
    }
  const stats=await Stats.create({
    runs: Number(req.body.runs),
    wickets: Number(req.body.wickets),
    overs: Number(req.body.overs),
    notes: req.body.notes,

  })
  console.log("stats",stats);
      res.redirect("/add");
       }catch (err) {
        console.error(err);
        res.status(500).send("Error saving user");
      }
})
module.exports = router;
