const mongoose = require("../dbs/connection");

const ProductSchema = new mongoose.Schema({
  name: String,
  imageUrl: String,
  price: Number,
  manufacturer: String,
  aveScore: { type: Number, default: 0 },
  reviews: [
    { type: mongoose.Schema.Types.ObjectId, ref: "reviews", default: [] },
  ],
  scores: { type: Array, default: [] },
  reviewCount: { type: Number, default: 0 },
});

const Product = mongoose.model("products", ProductSchema);
module.exports = Product;
