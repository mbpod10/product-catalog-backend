const faker = require("faker");
const mongoose = require("./dbs/connection");
const db = mongoose.connection;
const Product = require("./models/catalogProducts");
const Review = require("./models/reviews");
const IP = require("./models/IPModel");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  await Product.deleteMany({});
  await Review.deleteMany({});
  await IP.deleteMany({});
  const products = [];
  for (let i = 0; i < 10; i++) {
    const iP = new IP({
      server: faker.address.state(),
      IPaddress: `${faker.finance.amount(10, 99, 0)}.${faker.finance.amount(
        10,
        99,
        0
      )}.${faker.finance.amount(10, 99, 0)}.${faker.finance.amount(
        10,
        999,
        0
      )}.`,
    });
    await iP.save();
    const iP2 = new IP({
      server: faker.address.state(),
      IPaddress: `${faker.finance.amount(10, 99, 0)}.${faker.finance.amount(
        10,
        99,
        0
      )}.${faker.finance.amount(10, 99, 0)}.${faker.finance.amount(
        10,
        999,
        0
      )}.`,
    });
    await iP2.save();
    const review = new Review({
      author: faker.name.findName(),
      title: faker.lorem.words(4),
      reviewBody: faker.lorem.words(15),
      date: faker.date.past(),
      rating: faker.finance.amount(0, 5, 1),
      ipAddresses: iP._id,
    });
    await review.save();
    const review2 = new Review({
      author: faker.name.findName(),
      title: faker.lorem.words(4),
      reviewBody: faker.lorem.words(15),
      date: faker.date.past(),
      rating: faker.finance.amount(0, 5, 1),

      ipAddresses: iP2._id,
    });
    await review2.save();
    const product = new Product({
      name: faker.lorem.word(),
      imageUrl: faker.image.imageUrl(),
      price: faker.random.float(),
      manufacturer: faker.company.companyName(),
      aveScore: ((review.rating + review2.rating) / 2).toFixed(1),
      reviews: [review._id, review2._id],
      scores: [review.rating, review2.rating],
      //   reviewCount: 2,
      //   scores:
    });
    product.reviewCount = product.reviews.length;
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
