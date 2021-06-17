require("dotenv").config();
const express = require("express");

// --------------------------------------- CONSTANTS ---------------------------------------
const app = express();
const PORT = process.env.PORT || 8000;

// --------------------------------------- MIDDLEWARE ---------------------------------------
app.use(express.json());

const accountsController = require("./controllers/accountsController");
app.use("/api", accountsController);

// --------------------------------------- CONNECTIONS ---------------------------------------

app.listen(PORT, () => {
  console.log(`server is now listening at port ${PORT}`);
});
