const express = require("express");
const router = express.Router();
const Product = require("../models/catalogProducts");

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

module.exports = router;
