const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/crictrack")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  height: Number,
  position: String,
  comments: String
});

const User = mongoose.model("User", userSchema);


module.exports = User;
