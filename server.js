const express = require("express");
const { Liquid } = require("liquidjs");
const engine = new Liquid();

const app = express();

//! Template engine
app.engine("liquid", engine.express());
app.set("views", "./views");
app.set("view engine", "liquid");

app.use(express.static("./static"));

const myData = [
  {
    id: 1,
    username: "aldodevv",
  },
  {
    id: 2,
    username: "polpol",
  },
  {
    id: 3,
    username: "dimas anjay",
  },
];

app.get("/", (req, res) => {
  res.render("index", {
    contex: {
      app_name: "liquid basic",
      version: "1.0.0",
    },
    data: myData,
  });
});

app.get("/typeData", (req, res) => {
  res.render("TypeData.liquid", {
    contex: {
      app_name: "liquid basic",
      version: "1.0.0",
    },
    data: myData,
  });
});
app.listen(3000, () => {
  console.log("listen port 3000");
});
