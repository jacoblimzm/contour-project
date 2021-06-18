require("dotenv").config();
const express = require("express");

// --------------------------------------- CONSTANTS ---------------------------------------
const app = express();

// --------------------------------------- MIDDLEWARE ---------------------------------------
app.use(express.json());

// --------------------------------------- CONTROLLERS ---------------------------------------
const accountsController = require("./controllers/accountsController");
app.use("/api", accountsController);

module.exports = app