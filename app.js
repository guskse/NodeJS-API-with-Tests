const express = require("express");
const app = express();

//routes
const userRouter = require("./routes/user.routes");

//middleware
app.use(express.json()); //will parse json data from the req.body of requests

app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome to my nodeJS api for testing</h1>");
});

module.exports = app;