const express = require("express");
const {
  getAllUser,
  createUser,
  UpdateUser,
  DeleteUser,
} = require("../Controllers/User.controller");

//? Middlewares
const {
  createUserValidators,
} = require("../middlewares/validators.middleware");
const { userExists } = require("../middlewares/users.middleware");

const usersRouter = express.Router();
usersRouter.get("/", getAllUser);
usersRouter.post("/", createUserValidators, createUser);
usersRouter.patch("/:id", userExists, UpdateUser);
usersRouter.delete("/:id", userExists, DeleteUser);

module.exports = { usersRouter };
