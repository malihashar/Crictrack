const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/crictrack")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

  
const userStats= new mongoose.Schema({
  player: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  date: {type:String, required:true},
  runs: {type:Number, required:true},
  wickets: Number, 
  overs: Number,
  notes: String

})

const Stats= mongoose.model("Stats", userStats)



module.exports = Stats;