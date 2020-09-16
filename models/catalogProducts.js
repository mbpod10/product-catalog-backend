const mongoose = require("../dbs/connection");

const ProductSchema = new mongoose.Schema({
  name: String,
  imageUrl: String,
  price: Number,
  manufacturer: String,
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "reviews" }],
});

const Product = mongoose.model("products", ProductSchema);
module.exports = Product;
