const { Router } = require("express");
const express = require("express");
const router = express.Router();
const Review = require("../models/reviews");
const Product = require("../models/catalogProducts");

// get all reviews
router.get("/", (req, res) => {
  Review.find({}, (error, reviews) => {
    if (error) console.log(error);
    else res.json(reviews);
  });
});

// delete all reviews
router.delete("/", (req, res) => {
  Review.deleteMany({}, (error, reviews) => {
    if (error) console.log(error);
    else res.json("Deleted Reviews");
  });
});

// post new review based on product id
router.put("/add/review/:id", (req, res) => {
  const review = new Review(req.body);
  review.save((error) => {
    if (error) console.log(error);
    else {
      Product.findByIdAndUpdate(
        req.params.id,
        { $push: { reviews: review } },
        { new: true },
        (error, review) => {
          if (error) console.log(error);
          else {
            res.json(review);
          }
        }
      );
    }
  });
});

module.exports = router;
