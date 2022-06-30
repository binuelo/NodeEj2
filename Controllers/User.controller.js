const { User } = require("../models/Users.model");
const { Task } = require("../models/Task.model");
// Utils
const { catchAsync } = require("../utils/catchAsync.util");
const { AppError } = require("../utils/appError.util");

const getAllUser = catchAsync(async (req, res, next) => {
  const users = await User.findAll({
    // include: [{ model: User }, { model: Task }],
    where: {
      status: "active",
    },
  });
  res.status(200).json({
    status: "success",
    users,
  });
});

const createUser = catchAsync(async (req, res, next) => {
  const { name, email, password, status } = req.body;

  const newUser = await User.create({
    name,
    email,
    password,
    status,
  });

  res.status(201).json({
    status: "success",
    newUser,
  });
});

const UpdateUser = catchAsync(async (req, res, next) => {
  const { user } = req;
  const { name, email } = req.body;

  await user.update({ name: req.body.name, email: req.body.email });

  res.status(204).json({ status: "success" });
});
const DeleteUser = catchAsync(async (req, res, next) => {
  const { user } = req;

  // await user.destroy();
  await user.update({ status: "Disable" });

  res.status(204).json({ status: "success" });
});

module.exports = {
  getAllUser,
  createUser,
  UpdateUser,
  DeleteUser,
};
