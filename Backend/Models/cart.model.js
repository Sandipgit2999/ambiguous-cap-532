const mongoose = require("mongoose");

const CartSchema = mongoose.Schema({
  brand: String ,
  name: { type: String, required: false },
  price: { type: String, required: false },
  image_link: { type: String, required: false },
  description: { type: String, required: false },
  category: { type: String, required: false },
  product_type: { type: String, required: false },
  rating: { type: String, required: false },
  userId: String,
});

const CartModel = mongoose.model("cart", CartSchema);

module.exports = {
  CartModel,
};
