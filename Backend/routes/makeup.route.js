const { Router } = require("express");
const { TodoModel } = require("../Models/todo.model");
const TodosController = Router();

TodosController.get("/:todoId", async (req, res) => {
  if (req.params) {
    const todos = await TodoModel.findOne({
      userId: req.body.userId,
      id: req.params.id,
    });
    res.send(todos);
  } else {
    const todos = await TodoModel.find({ userId: req.body.userId });
    res.send(todos);
  }
});