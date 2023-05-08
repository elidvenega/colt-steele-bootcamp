const Product = require("./models/product");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/farmStand", { useNewUrlParser: true })
  .then(() => {
    console.log("MONGO CONNECTION OPEN!!");
  })
  .catch((err) => {
    console.log("OH NO ERROR");
    console.log(err);
  });

// const p = new Product({
//   name: "Ruby Grapefruit",
//   price: 1.99,
//   category: "fruit",
// });

// p.save()
//   .then((p) => {
//     console.log(p);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const seedProducts = [
  {
    name: "Ruby Grapefruit",
    price: 1.99,
    category: "fruit",
  },
  {
    name: "Apples",
    price: 3.99,
    category: "fruit",
  },
  {
    name: "Socks",
    price: 5.99,
    category: "fruit",
  },
  {
    name: "Juice",
    price: 1.99,
    category: "fruit",
  },
];

Product.insertMany(seedProducts)
.then(res => {
    console.log(res);
})
.catch(e => {
    console.log(e);
    console.log("SOMETHING IS NOT WORKING");
})



