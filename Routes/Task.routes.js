const express = require("express");
const {
  getAllTask,
  getAllTaskStatus,
  createTask,
  UpdateTask,
  DeleteUser,
} = require("../Controllers/Task.controller");

//?middlewares
const {
  createTaskValidators,
} = require("../middlewares/validators.middleware");
const { taskExists } = require("../middlewares/task.middleware");

const TaskRouter = express.Router();
TaskRouter.get("/", getAllTask);
TaskRouter.get("/:status", getAllTaskStatus);
TaskRouter.post("/", createTaskValidators, createTask);
TaskRouter.patch("/:id", taskExists, UpdateTask);
TaskRouter.delete("/:id", taskExists, DeleteUser);

module.exports = { TaskRouter };
