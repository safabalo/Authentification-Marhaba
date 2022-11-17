require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./routes/auth");
const client = require("./routes/client");
const livreur = require("./routes/livreur");
const manager = require("./routes/manager");
const globalError = require("./middleware/errorHandler");
const errorHandler = require("./utils/error");
const app = express();

const PORT = process.env.PORT || 3000;

connectDB();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: true, credentials: true }));

app.use("/api/auth/", router);
app.use("/api/user", client);
app.use("/api/user", livreur);
app.use("/api/user", manager);

app.all("*", (req, res, next) => {
  //create error and send it to error
  next(new errorHandler(`Can't find this route: ${req.originalUrl}`, 400));
});

app.use(globalError);

mongoose.connection.once("open", () => {
  console.log("connected to mongodb");
  app.listen(PORT);
});
