const { Router } = require("express");
const express = require("express");
const router = express.Router();
const Review = require("../models/reviews");
const Product = require("../models/catalogProducts");
const IP = require("../models/IPModel");

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

router.get("/title/:title", (req, res) => {
  Review.find({ title: req.params.title })
    .populate("ipAddresses")
    .then((review) => {
      res.json(review);
    });
});

// post new review based on product id
router.put("/add/review/:id", (req, res) => {
  const review = new Review(req.body);
  const rating = parseInt(req.body.rating, 10);
  review.save((error) => {
    if (error) console.log(error);
    else {
      Product.findOneAndUpdate(
        { _id: req.params.id },
        {
          $push: { reviews: review, scores: rating },
          // aveScore: { $avg: "scores" },
          // $set: { reviewCount: 15 },
          // $project: { reviewCount: { $size: reviews } },
        },
        { new: true },
        (error, review) => {
          if (error) console.log(error);
          else {
            const sum = review.scores.reduce((element, index) => {
              return element + index;
            });
            review.reviewCount = review.scores.length;
            review.aveScore = (sum / review.scores.length).toFixed(1);
            // console.log(this.scores.length);

            review.save((error) => {
              if (error) console.log(error);
              else res.json(review);
            });

            // res.json(review);
          }
        }
      );
    }
  });
});

// edit by review id
router.put("/edit/:id", (req, res) => {
  Review.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    (error, review) => {
      if (error) console.log(error);
      else res.json(review);
    }
  );
});

//sort by highest rated products
router.get("/highestrated", (req, res) => {
  Review.find({})
    .sort([["rating", -1]])
    .then((reviews) => {
      res.json(reviews);
    });
});

module.exports = router;
