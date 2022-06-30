const { Sequelize } = require(`sequelize`);
const dotenv = require("dotenv");
dotenv.config({ path: "../config.env" });
const db = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "Cruz4azu1",
  database: process.env.DB,
  logging: false,
});

module.exports = { db };
