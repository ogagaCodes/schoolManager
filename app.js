/* eslint-disable no-undef */
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

/*if (`development`) {
  let debug = require("debug");
  let morgan = require("morgan");
  let chalk = require("chalk");
  debug = debug("app");
  app.use(morgan("tiny"));
  app.listen(3000, function() {
    debug(`app listening on port ${chalk.green("3000")} `);
  });
} */

//const port = 3000 || process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

const schoolRouter = require("./routes/schoolRoute");
const regRouter = require("./routes/regRoute");
const adminRouter = require("./routes/adminRoute");
const signUpRouter = require("./routes/signUpRoute");
const loginRouter = require("./routes/loginRoute");
const teacherRouter = require("./routes/teacherRoute");
const studentRouter = require("./routes/studentRoute");
const authRouter = require("./routes/authRoutes");

app.use("/school", schoolRouter);
app.use("/registration", regRouter);
app.use("/admin", adminRouter);
app.use("/signUp", signUpRouter);
app.use("/login", loginRouter);
app.use("/teachers", teacherRouter);
app.use("/students", studentRouter);
app.use("/auth", authRouter);

app.get("/", function(req, res) {
  res.render("home");
});

app.listen(process.env.PORT, process.env.IP);
