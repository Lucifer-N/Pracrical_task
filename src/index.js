const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const config = require("../config/default.json");
const app = express();
const http = require("http");
const cors = require("cors");

const corsOption = {
  origin: true,
  credentials: true,
  exposedHeaders: "x-access-token",
};
app.use(cors(corsOption));

app.disable("x-powered-by");

app.use(express.json());

mongoose.connect(
  config.DBURL,
  {
    useFindAndModify: false,
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log("Error Connecting Database");
      console.log(err);
      process.exit(1);
    }
    console.log("DB Connected");
  }
);
app.get("/", (req, res) => {
  res.send({ message: config.get("DBURL") });
});
app.use("/user", routes.user);
app.use("/product", routes.product);

let port2 = process.env.PORT || 4001;

app.listen(port2, () => console.log(`Listening on port ${port2}`));
