```
for (let i = 0; i < 10; i++) {
    const product = new Product({
      name: faker.lorem.word(),
      imageUrl: faker.image.imageUrl(),
      price: faker.random.float(),
    });
    product.save();
  }

  const run = async () => {
    await db.close();
  };

  run();
```
