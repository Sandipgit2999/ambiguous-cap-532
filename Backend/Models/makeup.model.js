const mongoose = require("mongoose");

const MakeupSchema = mongoose.Schema({
  brand: { type: String, required: false },
  name: { type: String, required: false },
  price: { type: String, required: false },
  image_link: { type: String, required: false },
  description: { type: String, required: false },
  category: { type: String, required: false },
  product_type: { type: String, required: false },
  rating: { type: String, required: false }
});

const MakeupModel = mongoose.model("makeup", MakeupSchema);

module.exports = {
  MakeupModel,
};
