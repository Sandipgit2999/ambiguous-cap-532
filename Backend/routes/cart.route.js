const { Router } = require("express");
const { CartModel } = require("../Models/cart.model");
const { MakeupModel } = require("../Models/makeup.model");
const CartController = Router();

CartController.get("/", async (req, res) => {
  const { userId } = req.body;
  const cart_model = await CartModel.find();
  res.send(cart_model);
});

CartController.post("/create/:productId", async (req, res) => {
  const { userId } = req.body;
  const { productId } = req.params;
  //console.log(".....", productId);
  const makeup_model = await MakeupModel.findOne({ _id: productId });
  //console.log("makeup_model", makeup_model);
  const {
    _id,
    brand,
    name,
    price,
    image_link,
    description,
    category,
    product_type,
    rating,
  } = makeup_model;
  //console.log("_id", _id);

  const cart_model = await CartModel.findOne({ oldId: productId });
  //console.log("cart_modle", cart_model);
  if (cart_model) {
    res.send({ msg: "product already in cart" });
  } else {
    const new_cart_model = new CartModel({
      oldId: _id,
      brand,
      name,
      price,
      image_link,
      description,
      category,
      product_type,
      rating,
    });
    await new_cart_model.save();
    //console.log("----new cart model", new_cart_model);

    res.send({ msg: "Item added successfully to cart" });
  }
});

CartController.delete("/delete/:prodId", async (req, res) => {
  const { prodId } = req.params;
  const { userId } = req.body;
  //console.log(prodId.length);
  //console.log(prodId);
  // if(cart.userId === userId){

  if (prodId.length === 24) {
    const cart_model = await CartModel.findOne({ _id: prodId });
    if (cart_model) {
      await CartModel.findOneAndDelete({ _id: prodId });
      res.send({ message: "successfully deleted" });
    }

    // }
    else {
      return res.send("Item is not found");
    }
  } else {
    res.send({ msg: "please pass valid prodId" });
  }
});
module.exports = {
  CartController,
};
