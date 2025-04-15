require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const productsRoute = require("./routes/products");

// database connection
require("./DB/connect");

//routes middlewares

app.use("/api/products", productsRoute);

app.listen(port, () => {
  console.log(`The server is running on ${port} number`);
});
