const { Router } = require("express");
const { MakeupModel } = require("../Models/makeup.model");
const MakeupController = Router();

MakeupController.get("/", async (req, res) => {
  console.log(req.query);
  if (req.query.brand) {
    const makeup_model = await MakeupModel.find({ brand: req.query.brand });
    res.send(makeup_model);
  } else if (req.query.sort) {
    if (req.query.sort == "desc") {
      const makeup_model = await MakeupModel.find({}).sort({ price: -1 });
      res.send(makeup_model);
    }
    if (req.query.sort == "asc") {
      const makeup_model = await MakeupModel.find({}).sort({ price: 1 });
      res.send(makeup_model);
    }
  } else if (req.query.category) {
    const makeup_model = await MakeupModel.find({
      category: req.query.category,
    });
    res.send(makeup_model);
  } else {
    const makeup_model = await MakeupModel.find();
    res.send(makeup_model);
  }
});

MakeupController.get("/:productId", async (req, res) => {
  const { productId } = req.params;
  const makeup_model = await MakeupModel.findOne({ _id: productId });
  res.send(makeup_model);
});

module.exports = {
  MakeupController,
};
