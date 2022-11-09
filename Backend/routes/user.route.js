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

  if (present) {
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

UserController.post("/login", logauth,async (req, res) => {
  const { email, password } = req.body;

  if (req.body.email) {
    const email = req.body.email;
    const user = await UserModel.findOne({ email });
    if (user) {
      // const hash = user.password;
      // bcrypt.compare(password, hash, async (err, result) => {
      //   if (err) {
      //     res.send({ msg: "Something went wrong please try later" });
      //   }

      //   if (result) {
      //     const token = jwt.sign(
      //       { userId: user.id, email: user.email },
      //       secret
      //     );
      //     res.send({ msg: "successfully login", token: token });
      //   } else {
      //     res.send({ msg: "something is not good" });
      //   }
      // });
      res.send({ find: true });
    } else {
      // res.send({ msg: "User not found please sign in first" });
      res.send({ find: false });
    }
  } else if (req.body.phone) {
    const phone = req.body.phone;
    const user = await UserModel.findOne({ phone });
    if (user) {
      // const hash = user.password;
      // bcrypt.compare(password, hash, async (err, result) => {
      //   if (err) {
      //     res.send({ msg: "Something went wrong please try later" });
      //   }

      //   if (result) {
      //     const token = jwt.sign(
      //       { userId: user.id, email: user.email },
      //       secret
      //     );
      //     res.send({ msg: "successfully login", token: token });
      //   } else {
      //     res.send({ msg: "something is not good" });
      //   }
      // });
      res.send({ find: true });
    } else {
      // res.send({ msg: "User not found please sign in first" });
      res.send({ find: false });
    }
  }
});

UserController.post("/login/pass", logauth, async (req, res) => {
  const { password } = req.body;

  if (req.body.password) {
    const email = req.body.email;
    const user = await UserModel.findOne({ email });
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
  } 
});

module.exports = {
  UserController,
};
