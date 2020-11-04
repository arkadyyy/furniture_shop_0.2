const mongoose = require("mongoose");
const productSchema = require("./ProductModel");

const cartSchema = mongoose.Schema(
  {
    userID: { type: String },
    cartItems: [
      {
        quantity: { type: Number },
        product: {
          name: { type: String },
          price: { type: Number },
          image: { type: String },
          category: { type: String },
          countInStock: { type: Number },
          description: { tupe: String },
        },
      },
    ],
  },
  { timestamps: true }
);

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
