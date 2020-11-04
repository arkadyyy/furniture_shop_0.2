const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: { type: String },
    price: { type: Number },
    image: { type: String },
    category: { type: String },
    countInStock: { type: Number },
    description: { tupe: String },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
