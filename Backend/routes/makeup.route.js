const { Router } = require("express");
const { MakeupModel } = require("../Models/makeup.model");
const MakeupController = Router();
//const { obj1 } = require("../filter");

// let obj = { obj1 };
// console.log(obj);

MakeupController.get("/", async (req, res) => {
  const makeup_model = await MakeupModel.find();
  res.send(makeup_model);
});

MakeupController.get("/:productId", async (req, res) => {
  const { productId } = req.params;
  const makeup_model = await MakeupModel.find({ _id: productId });
  res.send(makeup_model);
});

// MakeupController.post("/create", async (req, res) => {
//   console.log(req.body);
//   const new_makeup_model = await MakeupModel.insertMany(obj1);
//   //await new_makeup_model.save();
//   //let obj={arr}

//   res.send("obj1");
// });

module.exports = {
  MakeupController,
};
