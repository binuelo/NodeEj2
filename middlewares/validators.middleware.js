const { body, validationResult } = require("express-validator");

const { AppError } = require("../utils/appError.util");

const checkResult = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    // Array has errors
    const errorMsgs = errors.array().map((err) => err.msg);

    const message = errorMsgs.join(". ");

    return next(new AppError(message, 400));
  }

  next();
};

const createUserValidators = [
  body("name").notEmpty().withMessage("Name cannot be empty"),
  body("email").isEmail().withMessage("Must provide a valid email"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long")
    .isAlphanumeric()
    .withMessage("Password must contain letters and numbers"),
  checkResult,
];

const createTaskValidators = [
  body("userdId")
    .notEmpty()
    .withMessage("insert value numeric for continue ")
    .isNumeric(),
  body("title").notEmpty().withMessage("insert one a title"),
  body("limitDate")
    .notEmpty()
    .isDate()
    .withMessage("insert the limit Date “YYYY-MM-DD HH:mm:ss”"),
  body("startDate")
    .notEmpty()
    .isDate()
    .withMessage("insert the start Date “YYYY-MM-DD HH:mm:ss”"),
  body("finishDate")
    .isDate()
    .withMessage("insert the finish Date “YYYY-MM-DD HH:mm:ss”"),
];

module.exports = {
  createUserValidators,
  createTaskValidators,
};
