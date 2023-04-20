const express = require("express");
const app = express();

app.use((req,res) => {
    console.log("We got a new request");
   res.send("Hello this is a response")
})

app.listen(3000, () => {
    console.log("Running");
});
