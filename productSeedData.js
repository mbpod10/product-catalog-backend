const faker = require("faker");
const mongoose = require("./dbs/connection");
const db = mongoose.connection;
const Product = require("./models/catalogProducts");
const Review = require("./models/reviews");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

// const main = async () => {
//   await Product.deleteMany({});
//   const products = [];
//   for (let i = 0; i < 10; i++) {
//     const product = new Product({
//       name: faker.lorem.word(),
//       imageUrl: faker.image.imageUrl(),
//       price: faker.random.float(),
//       manufacturer: faker.company.companyName(),
//     });
//     products.push(product);
//   }
//   await Product.insertMany(products);
//   console.log("Created some products items!");
// };

// const run = async () => {
//   await main();
//   db.close();
// };

// run();

// for (let i = 0; i < 10; i++) {
//   const product = new Product({
//     name: faker.lorem.word(),
//     imageUrl: faker.image.imageUrl(),
//     price: faker.random.float(),
//     manufacturer: faker.company.companyName(),
//   });
//   product.save().then((productRef) => {
//     const review = new Review({
//       author: faker.name.findName(),
//       title: faker.name.findName(),
//       reviewBody: faker.name.findName(),
//       date: faker.name.findName(),
//     });
//     review.save().then((reviewRef) => {
//       console.log("Created Some Items");
//       productRef.review = reviewRef._id;
//       productRef.save().then();
//     });
//   });
// }
Product.deleteMany({});
Review.deleteMany({});
for (let i = 0; i < 10; i++) {
  const product = new Product({
    name: faker.lorem.word(),
    imageUrl: faker.image.imageUrl(),
    price: faker.random.float(),
    manufacturer: faker.company.companyName(),
  });
  product.save().then((product) => {
    const review = new Review({
      author: faker.name.findName(),
      title: faker.name.findName(),
      reviewBody: faker.name.findName(),
      date: faker.name.findName(),
    });
    review.save().then((review) => {
      console.log("Created Some Items");
      product.reviews = review._id;
      product.save().then();
    });
  });
}
