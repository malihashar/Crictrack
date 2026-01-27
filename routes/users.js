var express = require('express');
var router = express.Router();
const User = require("../db");
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/create", async function(req, res){
  try {
    console.log("RAW BODY:", req.body);

    const age = parseInt(req.body.age, 10);
    const height = parseInt(req.body.height, 10);

    if (isNaN(age)) {
      return res.status(400).send("Age must be a number");
    }
    
        const user=await User.create({
        name:req.body.name,
        age:Number(req.body.age),
        height:req.body.height,
        position:req.body.position,
        comments: req.body.message
     });
      console.log("user",user);
      res.redirect("/c");
    }catch (err) {
        console.error(err);
        res.status(500).send("Error saving user");
      }
})

module.exports = router;