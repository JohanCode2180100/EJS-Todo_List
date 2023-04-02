const express = require("express");
const { config } = require("./config");

const app = express();
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("todoList");
});

app.listen(config.port, () => {
  console.log(`app started on ${config.port}`);
});
