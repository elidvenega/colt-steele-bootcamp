const mongoose = require("mongoose");
mongoose.connect(
  "mongoose.connect('mongodb://127.0.0.1:27017/movieApp', { useNewUrlParser: true, useUnifiedTopology: true }")
   .then(() => {
    console.log("CONNECTION OPEN!!");
   })
   .catch(err => {
    console.log("OH NO ERROE");
    console.log(err);
   })
