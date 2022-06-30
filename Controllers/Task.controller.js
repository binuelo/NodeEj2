const { Task } = require("../models/Task.model");
const { User } = require("../models/Users.model");
// Utils
const { catchAsync } = require("../utils/catchAsync.util");
const { AppError } = require("../utils/appError.util");

const getAllTask = catchAsync(async (req, res, next) => {
  const { status } = req.body;
  const task = await Task.findAll({
    include: User,
  });
  res.status(200).json({
    status: "success",
    task,
  });
});
const getAllTaskStatus = catchAsync(async (req, res, next) => {
  const { status } = req.params;

  const task = await Task.findAll({ include: User, where: { status } });

  res.status(200).json({
    status: "success",
    task,
  });
});

const createTask = catchAsync(async (req, res, next) => {
  const { userId, title, limitDate, startDate } = req.body;

  const task = await Task.create({
    userId,
    title,
    limitDate,
    startDate,
  });

  res.status(201).json({
    status: "success",
    task,
  });
});
const UpdateTask = async (req, res, next) => {
  const { task, limitDate } = req;

  const { finishDate, status } = req.body;

  if (finishDate < limitDate) {
    await task.update({ finishDate: req.body.finishDate, status: "completed" });
  } else {
    await task.update({ finishDate: req.body.finishDate, status: "late" });
  }
  res.status(204).json({ status: "completed" });
};
const DeleteUser = async (req, res, next) => {
  const { task } = req;
  const { status } = req.body;
  await task.update({ status: "cancelled" });

  res.status(204).json({ status: "cancelled" });
};
module.exports = {
  getAllTask,
  getAllTaskStatus,
  createTask,
  UpdateTask,
  DeleteUser,
};
