const app = require("./app");

// --------------------------------------- CONSTANTS ---------------------------------------
const PORT = process.env.PORT || 8000;

// --------------------------------------- CONNECTIONS ---------------------------------------

app.listen(PORT, () => {
  console.log(`server is now listening at port ${PORT}`);
});
