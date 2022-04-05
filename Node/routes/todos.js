const express = require("express");
const router = express.Router();
const todosModel = require("../mysqlmodels/todos");
router.get("/", (req, res) => {
  todosModel.findAll().then((todos) => {
    res.json(todos);
  }),
    (err) => {
      res.send(err);
    };
});
router.post("/create", (req, res) => {
  todosModel
    .create({
      title: req.body.title,
      status: req.body.status,
      description: req.body.description,
    })
    .then((todo) => {
      res.json(todo);
    });
});
module.exports = router;
