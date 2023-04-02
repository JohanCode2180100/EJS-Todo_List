const express = require("express");
const { config } = require("./config");
const app = express();

const tasks = [
  {
    title: "apprendre a programmer",
    done: false,
  },
  { title: "Faire les courses", done: true },
  { title: "bricoler", done: true },
];

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("todoList", { tasks: tasks });
});

app.listen(config.port, () => {
  console.log(`app started on ${config.port}`);
});
