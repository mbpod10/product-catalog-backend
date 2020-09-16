const faker = require("faker");
const mongoose = require("./dbs/connection");
const db = mongoose.connection;
const Product = require("./models/catalogProducts");
const Review = require("./models/reviews");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  await Product.deleteMany({});
  await Review.deleteMany({});
  const products = [];
  for (let i = 0; i < 10; i++) {
    const review1 = new Review({
      author: faker.name.findName(),
      title: faker.lorem.words(4),
      reviewBody: faker.lorem.words(15),
      date: faker.date.past(),
    });
    await review1.save();
    const product = new Product({
      name: faker.lorem.word(),
      imageUrl: faker.image.imageUrl(),
      price: faker.random.float(),
      manufacturer: faker.company.companyName(),
      reviews: review1._id,
    });
    products.push(product);
  }
  await Product.insertMany(products);
  console.log("Created Products");
};

const run = async () => {
  await main();
  db.close();
};

run();
