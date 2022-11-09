const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();
const cors = require("cors");
app.use(cors());
const { connection } = require("./config/db");
const { UserController } = require("./routes/user.route");
app.use("/user", UserController);
const PORT = 8080 || process.env.PORT;

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("connection successfully established");
    console.log(`running on port ${PORT}`);
  } catch (err) {
    console.log("connection failed to db");
    console.log(err);
  }
});
