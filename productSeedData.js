const mongoose = require("./dbs/connection");
const db = mongoose.connection;
const Product = require("./models/catalogProducts");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  //   await Product.deleteMany({});
  const products = [
    {
      name: "Baseball Bat",
      imageUrl: "www.here.com",
      price: 35.75,
    },
  ];
  await Product.insertMany(products);
  console.log("Created some products items!");
};

const run = async () => {
  await main();
  db.close();
};

run();
