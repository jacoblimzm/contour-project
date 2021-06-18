require("dotenv").config();
const express = require("express");

// --------------------------------------- CONSTANTS ---------------------------------------
const app = express();

// --------------------------------------- MIDDLEWARE ---------------------------------------
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("./client/build"));
  }

// --------------------------------------- CONTROLLERS ---------------------------------------
const accountsController = require("./controllers/accountsController");
app.use("/api", accountsController);

module.exports = app