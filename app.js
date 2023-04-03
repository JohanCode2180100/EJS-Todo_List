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
// add express encoded for req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("todoList", { tasks: tasks });
});

app.get("/task/:id/done", (req, res) => {
  tasks[req.params.id].done = true;
  res.redirect("/");
});

app.post("/task", (req, res) => {
  tasks.push({
    title: req.body.task,
    done: false,
  });
  res.redirect("/");
});

app.listen(config.port, () => {
  console.log(`app started on ${config.port}`);
});
