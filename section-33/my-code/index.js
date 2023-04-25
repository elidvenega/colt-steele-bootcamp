const express = require("express");
const app = express();

// app.use((req, res) => {
//   console.log("We got a new request");
//     res.send("Hello this is a response");
//   res.send("<h1>This is the back end</h1>");
// });

app.get("/cats", (req, res) => {
  res.send("Meow");
});

app.get("/dog", (req, res) => {
  res.send("Woof");
});

app.listen(3000, () => {
  console.log("Running");
});
