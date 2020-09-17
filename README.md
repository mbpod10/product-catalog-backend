### Create Seed Data Using Faker

- install faker: `npm i faker`
- import faker to seedData.js `const faker = require("faker");`
- based on model schema, create 10 items that have relationship between each other
- notice the following: IP => Review => Product (Product will get the populated route)
- `reviews: review._id,`

```
const faker = require("faker");
const mongoose = require("./dbs/connection");
const db = mongoose.connection;
const Product = require("./models/catalogProducts");
const Review = require("./models/reviews");
const IP = require("./models/IPModel");

const main = async () => {
  await Product.deleteMany({});
  await Review.deleteMany({});
  await IP.deleteMany({});
  const products = [];
  for (let i = 0; i < 10; i++) {
    const iP = new IP({
      address: faker.address.streetAddress(),
    });
    await iP.save();
    const review = new Review({
      author: faker.name.findName(),
      title: faker.lorem.words(4),
      reviewBody: faker.lorem.words(15),
      date: faker.date.past(),
      rating: faker.finance.amount(0, 5, 1),
      ipAddresses: iP._id,
    });
    await review.save();
    const product = new Product({
      name: faker.lorem.word(),
      imageUrl: faker.image.imageUrl(),
      price: faker.random.float(),
      manufacturer: faker.company.companyName(),
      reviews: review._id,
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
```

### Create Route That Will Allow For Multiple Layer Call

- Route For Populated Product

```
router.get("/name/:name", (req, res) => {
  Product.find({ name: req.params.name })
    .populate({
      path: "reviews ipAddresses",
      populate: {
        path: "ipAddresses",
      },
    })
    .then((product) => {
      res.json(product);
    });
});
```

- Therefore, the route `http://localhost:4000/api/products/name/ut` should yield:
- (Note that you will not have the same information as faker randomizes data)

```
[
  {
    reviews: [
      {
        ipAddresses: [
          {
            _id: "5f6363c28fa66114a43a5b20",
            address: "0024 Weimann Via",
            __v: 0,
          },
        ],
        _id: "5f6363c28fa66114a43a5b21",
        author: "Fernando Pfannerstill",
        title: "deserunt sequi beatae ratione",
        reviewBody:
          "repellendus rem similique architecto quae est quae autem nobis nemo odio facere fuga quis esse",
        date: "Fri Sep 27 2019 23:59:19 GMT-0400 (Eastern Daylight Time)",
        rating: 3,
        __v: 0,
      },
    ],
    _id: "5f6363c28fa66114a43a5b22",
    name: "ut",
    imageUrl: "http://placeimg.com/640/480",
    price: 71197.4,
    manufacturer: "Barton - Romaguera",
    __v: 0,
  },
];

```
