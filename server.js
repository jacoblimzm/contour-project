const app = require("./app");

// --------------------------------------- CONSTANTS ---------------------------------------
const PORT = process.env.PORT || 8000;

// --------------------------------------- CONNECTIONS ---------------------------------------

if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/build"));
}

app.listen(PORT, () => {
  console.log(`server is now listening at port ${PORT}`);
});
