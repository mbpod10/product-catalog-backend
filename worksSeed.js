// Product.deleteMany({});
// Review.deleteMany({});
// for (let i = 0; i < 10; i++) {
//   const product = new Product({
//     name: faker.lorem.word(),
//     imageUrl: faker.image.imageUrl(),
//     price: faker.random.float(),
//     manufacturer: faker.company.companyName(),
//   });
//   product.save().then((product) => {
//     const review = new Review({
//       author: faker.name.findName(),
//       title: faker.name.findName(),
//       reviewBody: faker.name.findName(),
//       date: faker.name.findName(),
//     });
//     review.save().then((review) => {
//       console.log("Created Some Items");
//       product.reviews = review._id;
//       product.save().then();
//     });
//   });
// }

// const main = async () => {
//   const product1 = new Product({
//     name: "baseball",
//     imageUrl: "google.com",
//     price: 2,
//     manufacturer: "Rawlings",
//   });
//   await product1.save();
//   const reviews = [
//       {
//           author: "Brock Podgurski",
//           title: "Great Ball",
//           reviewBody: "I really like this baseball",
//           date: "12/15/12",

//       }
//   ]
// };

const main = async () => {
  await Product.deleteMany({});
  await Review.deleteMany({});
  const review1 = new Review({
    author: "Brock Podgurski",
    title: "Great Ball",
    reviewBody: "I really like this baseball",
    date: "12/15/12",
  });
  await review1.save();
  const products = [
    {
      name: "baseball",
      imageUrl: "google.com",
      price: 2,
      manufacturer: "Rawlings",
      reviews: review1._id,
    },
  ];
  await Product.insertMany(products);
  console.log("Created Products");
};

const run = async () => {
  await main();
  db.close();
};

run();

const main = async () => {
  await Product.deleteMany({});
  await Review.deleteMany({});
  const review1 = new Review({
    author: faker.name.findName(),
    title: faker.lorem.words(4),
    reviewBody: faker.lorem.words(15),
    date: faker.date.past(),
  });
  await review1.save();
  const products = [
    {
      name: faker.lorem.word(),
      imageUrl: faker.image.imageUrl(),
      price: faker.random.float(),
      manufacturer: faker.company.companyName(),
      reviews: review1._id,
    },
  ];
  await Product.insertMany(products);
  console.log("Created Products");
};

const run = async () => {
  await main();
  db.close();
};

run();

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

// const main = async () => {
//   await Product.deleteMany({});
//   await Review.deleteMany({});
//   // db.close();

//   for (let i = 0; i < 10; i++) {
//     const product = new Product({
//       name: faker.lorem.word(),
//       imageUrl: faker.image.imageUrl(),
//       price: faker.random.float(),
//       manufacturer: faker.company.companyName(),
//     });
//     product.save().then((product) => {
//       const review = new Review({
//         author: faker.name.findName(),
//         title: faker.lorem.words(4),
//         reviewBody: faker.lorem.words(15),
//         date: faker.date.past(),
//       });
//       await;
//       review.save().then((review) => {
//         console.log("Created Some Items");
//         product.reviews = review._id;
//         product.save().then();
//       });
//     });
//   }
// };

// const run = async () => {
//   await main();
//   db.close();
// };

// run();

// // deleteThings();

/////////////////////////////////////////////////////////
// Product.deleteMany({});
// Review.deleteMany({});
// for (let i = 0; i < 10; i++) {
//   const product = new Product({
//     name: faker.lorem.word(),
//     imageUrl: faker.image.imageUrl(),
//     price: faker.random.float(),
//     manufacturer: faker.company.companyName(),
//   });
//   product.save().then((product) => {
//     const review = new Review({
//       author: faker.name.findName(),
//       title: faker.name.findName(),
//       reviewBody: faker.name.findName(),
//       date: faker.name.findName(),
//     });
//     review.save().then((review) => {
//       console.log("Created Some Items");
//       product.reviews = review._id;
//       product.save().then();
//     });
//   });
// }

// const main = async () => {
//   const product1 = new Product({
//     name: "baseball",
//     imageUrl: "google.com",
//     price: 2,
//     manufacturer: "Rawlings",
//   });
//   await product1.save();
//   const reviews = [
//       {
//           author: "Brock Podgurski",
//           title: "Great Ball",
//           reviewBody: "I really like this baseball",
//           date: "12/15/12",

//       }
//   ]
// };
