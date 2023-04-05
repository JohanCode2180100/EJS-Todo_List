const express = require("express");
const { config } = require("./config");
const app = express();
const session = require("express-session");

const tasks = [];
// add express encoded for req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  })
);

app.get("/", (req, res) => {
  if (!req.session.tasks) {
    req.session.tasks = [];
  }
  res.render("todoList", { tasks: req.session.tasks });
});

app.post("/task", (req, res) => {
  if (req.body.task) {
    req.session.tasks.push({
      title: req.body.task,
      done: false,
    });
  }
  res.redirect("/");
});

app.get("/task/:id/done", (req, res) => {
  if (req.params.id) {
    req.session.tasks[req.params.id].done = true;
    // Your code to mark the task with the specified ID as done
  }
  res.redirect("/");
});

app.get("/task/:id/delete", (req, res) => {
  req.session.tasks.splice(req.params.id, 1);
  res.redirect("/");
});

app.listen(config.port, () => {
  console.log(`app started on ${config.port}`);
});
