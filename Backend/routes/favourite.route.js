const { Router } = require("express");
const { FavouriteModel } = require("../Models/favourite.model");
const { MakeupModel } = require("../Models/makeup.model");
const FavouriteController = Router();

FavouriteController.get("/", async (req, res) => {
  const { userId } = req.body;
  const favourite_model = await FavouriteModel.find({ userId });
  res.send(favourite_model);
});

FavouriteController.post("/create/:productId", async (req, res) => {
  const { userId } = req.body;
  const { productId } = req.params;

  const makeup_model = await MakeupModel.findOne({ _id: productId });
  //console.log(userId);
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
  //console.log(brand);

  const favourite_model = await FavouriteModel.findOne({ oldId: productId });

  if (favourite_model) {
    res.send({ msg: "product already in favourites" });
  } else {
    const new_favourite_model = new FavouriteModel({
      oldId: _id,
      brand,
      name,
      price,
      image_link,
      description,
      category,
      product_type,
      rating,
      userId,
    });
    await new_favourite_model.save();
    //console.log("----new cart model", new_favourite_model);

    res.send("Item added successfully to favourites");
  }
});

FavouriteController.delete("/delete/:prodId", async (req, res) => {
  const { prodId } = req.params;
  //const prodId=Number(productId)
  console.log(prodId);
  const { userId } = req.body;

  if (prodId.length === 24) {
    const favourite_model = await FavouriteModel.findOne({
      _id: prodId,
      userId,
    });
    if (favourite_model) {
      await FavouriteModel.findOneAndDelete({ _id: prodId, userId });
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
  FavouriteController,
};
