const { Schema } = require("../dbs/connection");
const mongoose = require("../dbs/connection");

const ReviewSchema = new mongoose.Schema({
  author: String,
  title: String,
  reviewBody: String,
  date: String,
  // rating: { type: Number, default: 0 },
  rating: Number,
  // ratingLength: Number,
  ipAddresses: [{ type: mongoose.Schema.Types.ObjectId, ref: "ipAddresses" }],
});

const Review = mongoose.model("reviews", ReviewSchema);
module.exports = Review;
