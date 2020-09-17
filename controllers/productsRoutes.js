const express = require("express");
const router = express.Router();
const Product = require("../models/catalogProducts");
const Review = require("../models/reviews");

router.get("/", (req, res) => {
  Product.find({}, (error, products) => {
    if (error) console.log(error);
    else res.json(products);
  });
});

router.get("/:id", (req, res) => {
  Product.findById(req.params.id, (error, product) => {
    if (error) console.log(error);
    else res.json(product);
  });
});

router.put("/:id", (req, res) => {
  Product.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    (error, product) => {
      if (error) console.log(error);
      else res.json(product);
    }
  );
});

router.post("/", (req, res) => {
  Product.create({}, req.body, (error, product) => {
    if (error) console.log(error);
    else res.json(product);
  });
});

router.delete("/", (req, res) => {
  Product.deleteMany({}, (error, products) => {
    if (error) console.log(error);
    else res.json("Deleted Products");
  });
});

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
module.exports = router;
