const jwt = require("jsonwebtoken");
require("dotenv").config();

const logauth = async (req, res, next) => {
  if (req.body.email) {
    const email = req.body.email;
    const user = await UserModel.findOne({ email });
    if (user) {
      //   res.send({ find: true });
      req.body.email = user.email;
      next();
    } else {
      res.send({ find: false });
    }
  } else if (req.body.phone) {
    const phone = req.body.phone;
    const user = await UserModel.findOne({ phone });
    if (user) {
      //   res.send({ find: true });
      req.body.email = user.email;
      next();
    } else {
      res.send({ find: false });
    }
  }
};

module.exports = {
  logauth,
};
