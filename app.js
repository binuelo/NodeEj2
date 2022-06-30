const express = require("express"); //Creamos una instancia exprres
//innit express app
const app = express(); //almacenamos en App

//? Utils
const { db } = require("./utils/DB");
const { usersRouter } = require("./Routes/Users.routes");
const { TaskRouter } = require("./Routes/Task.routes");
const { User } = require("./models/Users.model");
const { Task } = require("./models/Task.model");

//receive //?JSON
app.use(express.json());
//? Define endpoints
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/tasks", TaskRouter);
//connection //? DB
db.authenticate()
  .then(() => console.log("databese authentica"))
  .catch((err) => console.log(err));

User.hasMany(Task, { foreignKey: "userId" });
Task.belongsTo(User);

db.sync() //! {force: true } force to DB
  .then(() => console.log("Database symced"))
  .catch((err) => console.log(err));

const PORT = 4000; //assign access port
app.listen(PORT, () => {
  //Pido a mi app exprees que este a la escucha de peticion
  console.log(`Express app Runnig on port: ${PORT}`);
});
