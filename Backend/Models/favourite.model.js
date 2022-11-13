const mongoose = require("mongoose");

const FavouriteSchema = mongoose.Schema({
  oldId: String,
  brand: { type: String, required: false },
  name: { type: String, required: false },
  price: { type: String, required: false },
  image_link: { type: String, required: false },
  description: { type: String, required: false },
  category: { type: String, required: false },
  product_type: { type: String, required: false },
  rating: { type: String, required: false },
  userId: String,
});

const FavouriteModel = mongoose.model("favourite", FavouriteSchema);

module.exports = {
  FavouriteModel,
};
