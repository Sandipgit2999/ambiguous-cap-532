require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { logauth } = require("../middlewares/logAuth");
const secret = process.env.SECRET_KEY;
const { Router } = require("express");
const { UserModel } = require("../Models/user.model");
const UserController = Router();

UserController.post("/signup", async (req, res) => {
  const { name, email, password, phone } = req.body;
  const present = await UserModel.findOne({ email });
  const phone_present = await UserModel.findOne({ phone });
  if (present || phone_present) {
    res.send({ msg: "User already created please login" });
  } else {
    bcrypt.hash(password, 10, async (err, hash) => {
      if (err) {
        res.send({ msg: "Something went wrong please try later" });
      } else {
        const new_user = new UserModel({
          email,
          password: hash,
          name,
          phone,
        });
        await new_user.save();
        res.send({ msg: "User created successfully" });
      }
    });
  }
});

UserController.post("/login", async (req, res) => {
  //const { email, password } = req.body;

  if (req.body.email) {
    const email = req.body.email;
    const user = await UserModel.findOne({ email });
    console.log(user, "---user-----");

    if (user) {
      //res.send({ msg: "User created successfully" });
      res.send({ find: true, email });
    } else {
      res.send({ msg: "User not found please sign in first" });
    }
  } else if (req.body.phone) {
    const phone = req.body.phone;
    const user = await UserModel.findOne({ phone: req.body.phone });
    console.log(user, "---user-----");
    const email = user.email;
    if (user) {
      //res.send({ msg: "User created successfully" });
      res.send({ find: true, email });
    } else {
      res.send({ msg: "User not found please sign in first" });
      //res.send({ find: false });
    }
  }
});

UserController.post("/login/pass", async (req, res) => {
  const { password } = req.body;
  const finduser = req.headers.find;
  console.log(finduser);
  if (password) {
    const user = await UserModel.findOne({ email: finduser });
    console.log(user);
    if (user) {
      const hash = user.password;
      bcrypt.compare(password, hash, async (err, result) => {
        if (err) {
          res.send({ msg: "Something went wrong please try later" });
        }
        if (result) {
          const token = jwt.sign(
            { userId: user.id, email: user.email },
            secret
          );
          res.send({ msg: "successfully login", token: token });
        } else {
          res.send({ msg: "something is not good" });
        }
      });
    } else {
      res.send({ msg: "User not found please sign in first" });
    }
  } else {
    res.send({ msg: "please enter the password" });
  }
});

module.exports = {
  UserController,
};
