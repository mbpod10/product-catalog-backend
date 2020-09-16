const faker = require("faker");
const mongoose = require("./dbs/connection");
const db = mongoose.connection;
const Product = require("./models/catalogProducts");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  await Product.deleteMany({});
  const products = [];
  for (let i = 0; i < 10; i++) {
    const product = new Product({
      name: faker.lorem.word(),
      imageUrl: faker.image.imageUrl(),
      price: faker.random.float(),
      manufacturer: faker.company.companyName(),
    });
    products.push(product);
  }
  await Product.insertMany(products);
  console.log("Created some products items!");
};

const run = async () => {
  await main();
  db.close();
};

run();
