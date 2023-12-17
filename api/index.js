const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
// const { default: User } = import("./models/User");
// import User from "./models/User.cjs";

const User = require("./models/User");

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://blog-website:7CgZb3se0Pi2LHMY@blog-website-cluster.c9htwmv.mongodb.net/?retryWrites=true&w=majority"
);

app.post("/register", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const userDoc = await User.create({
    firstName,
    lastName,
    email,
    password,
  });
  console.log("Req recieved", email);
  res.json(userDoc);
});

app.listen(4000);

// 7CgZb3se0Pi2LHMY
//mongodb+srv://blog-website:7CgZb3se0Pi2LHMY@blog-website-cluster.c9htwmv.mongodb.net/?retryWrites=true&w=majority
